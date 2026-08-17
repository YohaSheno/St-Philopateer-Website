import { PageHero, PageShell } from "../components/site-shell";
import { CalendarSync } from "../components/calendar-sync";
import { getChurchCalendarWeek, GOOGLE_CALENDAR_ICAL_URL, GOOGLE_CALENDAR_URL } from "../lib/google-calendar";

export const revalidate = 900;

export default async function SchedulePage() {
  let calendar;
  let calendarUnavailable = false;

  try {
    calendar = await getChurchCalendarWeek();
  } catch (error) {
    console.error("Unable to load the church Google Calendar", error);
    calendarUnavailable = true;
    calendar = { events: [], label: "This week" };
  }

  const eventGroups = calendar.events.reduce<Array<{ day: string; date: string; events: typeof calendar.events }>>((groups, event) => {
    const currentGroup = groups.at(-1);
    if (currentGroup && currentGroup.day === event.day && currentGroup.date === event.date) {
      currentGroup.events.push(event);
    } else {
      groups.push({ day: event.day, date: event.date, events: [event] });
    }
    return groups;
  }, []);

  return <PageShell>
    <PageHero eyebrow="Worship · fellowship · formation" title="Weekly schedule" description="Make space for prayer and community throughout the week." image="/images/schedule-sanctuary.jpg" />
    <section className="section container">
      <div className="schedule-toolbar">
        <div>
          <p className="eyebrow">{calendar.label} · Live calendar</p>
          <h2>This week at St. Philopateer</h2>
        </div>
        <CalendarSync googleUrl={GOOGLE_CALENDAR_URL} iCalUrl={GOOGLE_CALENDAR_ICAL_URL} />
      </div>

      {eventGroups.length > 0 ? <div className="schedule-days">
        {eventGroups.map((group, groupIndex) => <section className="schedule-day" key={`${group.day}-${group.date}`}>
          <header className="schedule-day-heading">
            <span>{group.day}</span>
            <strong>{group.date}</strong>
            <small>{group.events.length} {group.events.length === 1 ? "event" : "events"}</small>
          </header>
          <div className="schedule-day-events">
            {group.events.map((event, eventIndex) => <article className="event-card" key={event.id}>
              <div className="event-time"><span>Time</span><strong>{event.time}</strong></div>
              <div className="event-details">
                <span className="event-kind">{event.kind}</span>
                <h3>{event.title}</h3>
                {event.location && <p className="event-location">⌖ {event.location}</p>}
              </div>
              <span className="event-number">{String(groupIndex + 1).padStart(2, "0")}.{eventIndex + 1}</span>
            </article>)}
          </div>
        </section>)}
      </div> : <div className="calendar-empty">
        <span aria-hidden="true">✦</span>
        <h3>{calendarUnavailable ? "The live calendar is temporarily unavailable" : "No events are scheduled this week"}</h3>
        <p>{calendarUnavailable ? "You can still view the complete schedule in Google Calendar." : "Check the full calendar for upcoming services and gatherings."}</p>
        <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noreferrer">View the complete calendar ↗</a>
      </div>}
    </section>
  </PageShell>;
}
