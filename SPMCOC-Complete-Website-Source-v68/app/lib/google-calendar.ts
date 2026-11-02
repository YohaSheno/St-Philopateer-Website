const CALENDAR_ID =
  "c_efbf0b6f6d02f77242be30f0d1f2a74c6a6ea414e61c2acb962b3d8232676bdb@group.calendar.google.com";

export const GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/u/0?cid=${btoa(CALENDAR_ID)}`;

export const GOOGLE_CALENDAR_ICAL_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`;
const CHURCH_TIME_ZONE = "America/New_York";

type CalendarDate = {
  date: string;
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  allDay: boolean;
};

export type ChurchCalendarEvent = {
  id: string;
  day: string;
  date: string;
  kind: string;
  title: string;
  time: string;
  location?: string;
  sortKey: string;
};

export type ChurchCalendarWeek = {
  events: ChurchCalendarEvent[];
  label: string;
  startDate: string;
  endDate: string;
};

function formatInChurchTime(date: Date): CalendarDate {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CHURCH_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
    hour: value("hour"),
    minute: value("minute"),
    date: `${value("year")}-${value("month")}-${value("day")}`,
    allDay: false,
  };
}

export function getChurchNowSortKey(now = new Date()) {
  const current = formatInChurchTime(now);
  return `${current.date}T${current.hour}${current.minute}`;
}

function parseCalendarDate(line?: string): CalendarDate | null {
  if (!line) return null;
  const separator = line.indexOf(":");
  if (separator < 0) return null;

  const metadata = line.slice(0, separator);
  const raw = line.slice(separator + 1).trim();
  const match = raw.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?)?(Z)?$/);
  if (!match) return null;

  const [, year, month, day, hour = "00", minute = "00", second = "00", utc] = match;
  const allDay = metadata.includes("VALUE=DATE") || !raw.includes("T");

  if (utc) {
    return {
      ...formatInChurchTime(new Date(Date.UTC(+year, +month - 1, +day, +hour, +minute, +second))),
      allDay,
    };
  }

  return {
    year,
    month,
    day,
    hour,
    minute,
    date: `${year}-${month}-${day}`,
    allDay,
  };
}

function property(block: string, name: string) {
  const line = block.split(/\r?\n/).find((item) => item.startsWith(`${name}:`) || item.startsWith(`${name};`));
  if (!line) return undefined;
  return line.slice(line.indexOf(":") + 1);
}

function propertyLine(block: string, name: string) {
  return block.split(/\r?\n/).find((item) => item.startsWith(`${name}:`) || item.startsWith(`${name};`));
}

function decodeIcsText(value = "") {
  return value
    .replace(/\\[nN]/g, " ")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\")
    .trim();
}

function timeLabel(hour: string, minute: string) {
  const date = new Date(Date.UTC(2020, 0, 1, +hour, +minute));
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: minute === "00" ? undefined : "2-digit",
    timeZone: "UTC",
  }).format(date);
}

function eventTime(start: CalendarDate, end: CalendarDate | null) {
  if (start.allDay) return "All day";
  const beginning = timeLabel(start.hour, start.minute);
  if (!end) return beginning;
  const ending = timeLabel(end.hour, end.minute);
  return start.date === end.date ? `${beginning} — ${ending}` : `${beginning} — ${end.date} ${ending}`;
}

function eventKind(title: string) {
  if (/liturgy|mass/i.test(title)) return "Divine Liturgy";
  if (/vesper|tasbeha|praise/i.test(title)) return "Worship";
  if (/bible|study/i.test(title)) return "Bible Study";
  if (/prayer/i.test(title)) return "Prayer";
  if (/meeting|youth|sunday school/i.test(title)) return "Ministry";
  return "Church Event";
}

function dateOnlyInChurchTime(now: Date) {
  const parts = formatInChurchTime(now);
  return new Date(Date.UTC(+parts.year, +parts.month - 1, +parts.day));
}

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatWeekLabel(start: Date, end: Date) {
  const month = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" });
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: "UTC" });
  const startMonth = month.format(start);
  const endMonth = month.format(end);
  const startDay = start.getUTCDate();
  const endDay = end.getUTCDate();

  return startMonth === endMonth
    ? `${startMonth} ${startDay} — ${endDay}, ${year.format(end)}`
    : `${startMonth} ${startDay} — ${endMonth} ${endDay}, ${year.format(end)}`;
}

export async function getChurchCalendarWeek(now = new Date()): Promise<ChurchCalendarWeek> {
  const today = dateOnlyInChurchTime(now);
  const start = new Date(today);
  start.setUTCDate(today.getUTCDate() - today.getUTCDay());
  const end = new Date(start);
  end.setUTCDate(start.getUTCDate() + 6);
  const startDate = dateKey(start);
  const endDate = dateKey(end);

  const response = await fetch(GOOGLE_CALENDAR_ICAL_URL, {
    headers: { Accept: "text/calendar" },
    next: { revalidate: 900 },
  });

  if (!response.ok) throw new Error(`Google Calendar returned ${response.status}`);

  const unfolded = (await response.text()).replace(/\r?\n[ \t]/g, "");
  const blocks = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) ?? [];
  const events = blocks.flatMap((block): ChurchCalendarEvent[] => {
    if (property(block, "STATUS") === "CANCELLED") return [];

    const startEvent = parseCalendarDate(propertyLine(block, "DTSTART"));
    const endEvent = parseCalendarDate(propertyLine(block, "DTEND"));
    if (!startEvent || startEvent.date < startDate || startEvent.date > endDate) return [];

    const title = decodeIcsText(property(block, "SUMMARY")) || "Church event";
    const location = decodeIcsText(property(block, "LOCATION"));
    const uid = property(block, "UID") ?? `${title}-${startEvent.date}`;
    const dayDate = new Date(`${startEvent.date}T12:00:00Z`);

    return [{
      id: `${uid}-${startEvent.date}-${startEvent.hour}${startEvent.minute}`,
      day: new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "UTC" }).format(dayDate),
      date: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" }).format(dayDate),
      kind: eventKind(title),
      title,
      time: eventTime(startEvent, endEvent),
      location: location || undefined,
      sortKey: `${startEvent.date}T${startEvent.hour}${startEvent.minute}`,
    }];
  });

  const uniqueEvents = [...new Map(events.map((event) => [event.id, event])).values()]
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey));

  return {
    events: uniqueEvents,
    label: formatWeekLabel(start, end),
    startDate,
    endDate,
  };
}
