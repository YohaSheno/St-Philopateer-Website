import type { Metadata } from "next";
import { CalendarSync } from "../components/calendar-sync";
import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";
import { getChurchCalendarWeek, GOOGLE_CALENDAR_ICAL_URL, GOOGLE_CALENDAR_URL } from "../lib/google-calendar";

export const metadata: Metadata = {
  title: "Visit & Connect",
  description: "View the church schedule, plan your visit, and connect with the parish priest at St. Philopateer Mercurius.",
};

export const revalidate = 900;

const FATHER_FAM_SCHEDULE_URL = "https://calendar.app.google/Lz29fPZDZcPxRF4x5";

const experiences = [
  { image: "/images/sights-coptic-iconography.png", alt: "A visitor looking reverently at Coptic iconography", title: "Sights", description: "A display of Coptic iconography that tells the life stories of our Church and its saints." },
  { image: "/images/coptic-cymbal-triangle.png", alt: "Coptic cymbal and triangle", title: "Sounds", description: "Coptic chants from our Church heritage, preserved by being passed down from generation to generation." },
  { image: "/images/coptic-censer-incense.png", alt: "A Coptic censer surrounded by incense", title: "Smells", description: "The sweet aroma of frankincense that carries your prayers up to heaven through the intercessions of the saints and martyrs." },
] as const;

const guidelines = [
  { title: "Liturgy duration", description: "The Divine Liturgy lasts two to three hours. Enter quietly, as the Church is in prayer. In addition, please silence your phone." },
  { title: "Dress code", description: "Dress modestly. Typical attire includes pants and clothing that is not see-through." },
  { title: "The Eucharist", description: "Communion is reserved for baptized Oriental Orthodox Christians. In addition, the holy bread is available to everyone after the Liturgy has concluded." },
  { title: "Fellowship", description: "Join us after the service for a social snack and a warm welcome to our rich family." },
] as const;

export default async function VisitPage() {
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
    if (currentGroup && currentGroup.day === event.day && currentGroup.date === event.date) currentGroup.events.push(event);
    else groups.push({ day: event.day, date: event.date, events: [event] });
    return groups;
  }, []);

  return <PageShell>
    <PageHero eyebrow="Schedule · visit · pastoral care" title="Visit & Connect" description="Plan your visit, see what is happening this week, and connect with our church family." image="/images/visit-connect-sanctuary.webp" />

    <section id="schedule" className="section container combined-schedule-section">
      <div className="schedule-toolbar"><div><p className="eyebrow">{calendar.label} · Live calendar</p><h2>This week at St. Philopateer</h2></div><CalendarSync googleUrl={GOOGLE_CALENDAR_URL} iCalUrl={GOOGLE_CALENDAR_ICAL_URL} /></div>
      {eventGroups.length > 0 ? <div className="schedule-days">{eventGroups.map((group, groupIndex) => <section className="schedule-day" key={`${group.day}-${group.date}`}><header className="schedule-day-heading"><span>{group.day}</span><strong>{group.date}</strong><small>{group.events.length} {group.events.length === 1 ? "event" : "events"}</small></header><div className="schedule-day-events">{group.events.map((event, eventIndex) => <article className="event-card" key={event.id}><div className="event-time"><span>Time</span><strong>{event.time}</strong></div><div className="event-details"><span className="event-kind">{event.kind}</span><h3>{event.title}</h3>{event.location && <p className="event-location">⌖ {event.location}</p>}</div><span className="event-number">{String(groupIndex + 1).padStart(2, "0")}.{eventIndex + 1}</span></article>)}</div></section>)}</div> : <div className="calendar-empty"><span aria-hidden="true">✦</span><h3>{calendarUnavailable ? "The live calendar is temporarily unavailable" : "No events are scheduled this week"}</h3><p>{calendarUnavailable ? "You can still view the complete schedule in Google Calendar." : "Check the full calendar for upcoming services and gatherings."}</p><a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noreferrer">View the complete calendar ↗</a></div>}
    </section>

    <section id="plan-your-visit" className="section visit-overview-section"><div className="container priest-grid"><div><p className="eyebrow">Plan your visit</p><h2>We’re glad you’re here.</h2><p>Whether you are seeking a spiritual home or simply curious about the Coptic Orthodox faith, our doors and hearts are open to you. We are honored to pray with you, answer your questions, and introduce you to the beauty of the Church.</p><div className="contact-card"><img src="/images/fr-fam.jpg" alt="Fr. Fam Nicoula" /><div><small>Parish Priest</small><strong>Fr. Fam Nicoula</strong><a href="mailto:FF@spmcoc.org">FF@spmcoc.org</a></div></div></div><div className="priest-visual"><img src="/images/visit-connect-sanctuary.webp" alt="Interior of a Coptic Orthodox church sanctuary" /><span>Welcome to St. Philopateer</span></div></div></section>

    <Reveal><section id="what-to-expect" className="experience-section"><div className="container"><div className="section-heading centered light"><p className="eyebrow gold">The experience</p><h2>What to expect</h2></div><div className="experience-grid">{experiences.map((experience) => <article key={experience.title}><img className="experience-symbol-image" src={experience.image} alt={experience.alt} /><h3>{experience.title}</h3><p>{experience.description}</p></article>)}</div></div></section></Reveal>
    <section id="visit-guidelines" className="section container quote-and-guidelines"><blockquote>“One thing I have desired of the Lord, that will I seek: that I may dwell in the house of the Lord all the days of my life.”<cite>Psalm 27:4 · NKJV</cite></blockquote><div><div className="section-heading"><p className="eyebrow">Helpful guidelines</p><h2>Come as you are. Know what to expect.</h2></div><div className="guideline-grid">{guidelines.map((guideline, index) => <article key={guideline.title}><span>0{index + 1}</span><h3>{guideline.title}</h3><p>{guideline.description}</p></article>)}</div></div></section>

    <section id="pastoral-care" className="section pastoral-care-section"><div className="container meet-us-layout"><div className="meet-us-intro"><p className="eyebrow">Pastoral care</p><h2>Pastoral care begins with a conversation.</h2><p>Choose the service you need and select an available appointment time. Your request will be handled thoughtfully and with pastoral care.</p><blockquote>“Bear one another’s burdens, and so fulfill the law of Christ.”<cite>Galatians 6:2 · NKJV</cite></blockquote></div><article id="appointment-card" className="appointment-card"><div className="appointment-portrait"><img src="/images/fr-fam.jpg" alt="Fr. Fam Nicoula" /><span>Parish Priest</span></div><div className="appointment-copy"><p className="eyebrow">Pastoral appointment</p><h2>Schedule with Fr. Fam Nicoula</h2><p>Open the appointment calendar to view the available pastoral services and choose a date and time that works for you.</p><a className="button" href={FATHER_FAM_SCHEDULE_URL} target="_blank" rel="noreferrer">Click here to schedule ↗</a><small>You will continue to Google Calendar to complete your appointment.</small></div></article></div></section>
  </PageShell>;
}
