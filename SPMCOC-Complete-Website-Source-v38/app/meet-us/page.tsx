import { PageHero, PageShell } from "../components/site-shell";

const FATHER_FAM_SCHEDULE_URL = "https://calendar.app.google/Lz29fPZDZcPxRF4x5";

export default function MeetUsPage() {
  return <PageShell>
    <PageHero eyebrow="Pastoral care" title="Meet with us" description="Schedule time for pastoral guidance, spiritual care, or a conversation with our parish priest." image="/images/church-hero.jpg" />
    <section className="section container meet-us-layout">
      <div className="meet-us-intro">
        <p className="eyebrow">Here for our congregation</p><h2>Pastoral care begins with a conversation.</h2>
        <p>Choose the service you need and select an available appointment time. Your request will be handled thoughtfully and with pastoral care.</p>
        <blockquote>“Bear one another’s burdens, and so fulfill the law of Christ.”<cite>Galatians 6:2 · NKJV</cite></blockquote>
      </div>
      <article className="appointment-card" data-tilt>
        <div className="appointment-portrait"><img src="/images/fr-fam.jpg" alt="Fr. Fam Nicoula" /><span>Parish Priest</span></div>
        <div className="appointment-copy"><p className="eyebrow">Pastoral appointment</p><h2>Schedule with Fr. Fam Nicoula</h2><p>Open the appointment calendar to view the available pastoral services and choose a date and time that works for you.</p><a className="button" href={FATHER_FAM_SCHEDULE_URL} target="_blank" rel="noreferrer">Click here to schedule ↗</a><small>You will continue to Google Calendar to complete your appointment.</small></div>
      </article>
    </section>
  </PageShell>;
}
