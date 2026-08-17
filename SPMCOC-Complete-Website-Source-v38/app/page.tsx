import Link from "next/link";
import { PrayerForm } from "./components/forms";
import { Reveal } from "./components/reveal";
import { PageShell } from "./components/site-shell";
import { getChurchCalendarWeek, getChurchNowSortKey } from "./lib/google-calendar";

export const revalidate = 900;

const churchAddress = "2261 Tampa Rd, Palm Harbor, FL 34683";
const appleMapsUrl = "https://maps.apple/p/ein52jZ1a1DXia";
const googleMapsUrl = "https://www.google.com/maps?rlz=1C5CHFA_enUS1211US1211&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIVCAEQLhgNGK8BGMcBGMkDGIAEGI4FMgsIAhAAGBYYHhiSAzIJCAMQABgNGIAEMgkIBBAAGA0YgAQyDwgFEC4YDRivARjHARiABDIICAYQABgNGB4yCAgHEAAYFhgeMggICBAAGBYYHtIBCDY2NDFqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KbM4tS4J88KIMYdZqiGLHtI7&daddr=2261+Tampa+Rd,+Palm+Harbor,+FL+34683";

export default async function Home() {
  let upcomingServices: Awaited<ReturnType<typeof getChurchCalendarWeek>>["events"] = [];
  try {
    const now = new Date();
    const currentWeek = await getChurchCalendarWeek(now);
    upcomingServices = currentWeek.events.filter((event) => event.sortKey >= getChurchNowSortKey(now));
    if (upcomingServices.length < 2) {
      const nextWeek = await getChurchCalendarWeek(new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000));
      upcomingServices = [...upcomingServices, ...nextWeek.events];
    }
    upcomingServices = upcomingServices.slice(0, 2);
  } catch (error) {
    console.error("Unable to load the home page schedule", error);
  }

  return (
    <PageShell>
      <section className="home-hero">
        <div className="hero-depth" aria-hidden="true"><span /><span /><span /></div>
        <div className="hero-cross" aria-hidden="true"><i /><i /><b>✣</b></div>
        <div className="hero-glass hero-glass-left" data-tilt aria-hidden="true"><span>Ancient faith</span><strong>AD 42</strong><small>From Alexandria to Palm Harbor</small></div>
        <div className="hero-glass hero-glass-right" data-tilt aria-hidden="true"><img src="/images/church-logo.jpg" alt="" /><span>One faith<br />One family</span></div>
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow gold">Genesis 28:17 · NKJV</p>
          <h1>“How awesome is this place! This is none other than the house of God, and this is the gate of heaven!”</h1>
          <p>Welcome to St. Philopateer Mercurius Coptic Orthodox Church in Palm Harbor, Florida.</p>
          <div className="button-row"><Link className="button" href="/visit">Plan a visit</Link><Link className="button secondary" href="/watch">Watch live</Link></div>
        </div>
        <a className="scroll-cue" href="#weekend" aria-label="Scroll to service times">Explore <span>↓</span></a>
      </section>

      <div className="motion-ribbon" aria-hidden="true"><div><span>Ancient Faith</span><i>✣</i><span>Living Community</span><i>✣</i><span>Timeless Worship</span><i>✣</i><span>Palm Harbor, Florida</span><i>✣</i><span>Ancient Faith</span><i>✣</i><span>Living Community</span><i>✣</i></div></div>

      <section id="weekend" className="weekend-card container floating-panel">
        <div><p className="eyebrow">Live church calendar</p><h2>Coming up at church</h2></div>
        {upcomingServices.length ? upcomingServices.map((event) => <div className="service-time" key={event.id}><span>{event.day} · {event.date}</span><strong>{event.title}</strong><small>{event.time}</small></div>) : <><div className="service-time"><span>Weekly schedule</span><strong>Calendar updating</strong></div><div className="service-time"><span>St. Philopateer</span><strong>See all services</strong></div></>}
        <div className="direction"><span>Palm Harbor, FL</span><Link href="/schedule">Full schedule ↗</Link></div>
      </section>

      <Reveal><section className="section container">
        <div className="section-heading centered"><p className="eyebrow">Grow in faith</p><h2>Services spotlight</h2><p>Faith is lived together—from our youngest children to a congregation united in worship.</p></div>
        <div className="spotlight-grid">
          <article className="image-card tilt-card sunday-school-card" data-tilt style={{ backgroundImage: "linear-gradient(0deg, rgba(39,8,8,.92), transparent 72%), url(/images/sunday-school-card.webp)" }}><div><p className="eyebrow gold">Sunday School</p><h3>Rooted from the beginning</h3><p>Nurturing the next generation in the wisdom and love of Christ.</p><Link href="/registration">Register →</Link></div></article>
          <article className="image-card tilt-card hymns-school-card" data-tilt style={{ backgroundImage: "linear-gradient(0deg, rgba(39,8,8,.92), transparent 72%), url(/images/home-hymns-school-card.jpeg)" }}><div><p className="eyebrow gold">Hymns School (HKM)</p><h3>Ancient melodies, living faith</h3><p>Preserving our Coptic heritage through dedicated liturgical training.</p><Link href="/registration">Register →</Link></div></article>
          <article className="image-card tilt-card pre-servants-card" data-tilt style={{ backgroundImage: "linear-gradient(0deg, rgba(39,8,8,.94), transparent 72%), url(/images/pre-servants-card.png)" }}><div><p className="eyebrow gold">Pre-Servants</p><h3>Prepared to serve</h3><p>Growing in faith, knowledge, and responsibility before beginning a life of service.</p><Link href="/registration">Register →</Link></div></article>
        </div>
      </section></Reveal>

      <Reveal><section className="tradition-section">
        <div className="container tradition-grid">
          <div className="tradition-scene" data-tilt>
            <div className="scene-halo" aria-hidden="true" />
            <img className="scene-back" src="/images/visit-sanctuary.jpg" alt="Coptic Orthodox sanctuary" />
            <img className="scene-front" src="/images/st-anthony.jpg" alt="Icon of St. Anthony the Great" />
            <div className="scene-seal"><img src="/images/church-logo.jpg" alt="" /><span>Faith handed down</span></div>
            <span className="scene-number">20<br />centuries</span>
          </div>
          <div className="tradition-copy"><p className="eyebrow gold">A living tradition</p><h2>Ancient roots.<br /><em>Present grace.</em></h2><p>Our worship carries the prayers, melodies, and wisdom of the early Church into the life of Palm Harbor today.</p><div className="tradition-points"><article><span>01</span><div><h3>Apostolic</h3><p>Rooted in the faith received from St. Mark.</p></div></article><article><span>02</span><div><h3>Sacramental</h3><p>Formed by prayer, Scripture, and the Holy Mysteries.</p></div></article><article><span>03</span><div><h3>Generational</h3><p>Shared faithfully with children and families.</p></div></article></div><Link className="button light-button" href="/about">Discover our story</Link></div>
        </div>
      </section></Reveal>

      <section className="ministry-orbit-section">
        <div className="container ministry-orbit-grid"><div className="ministry-copy"><p className="eyebrow">A place for every season</p><h2>Find your place in the life of the Church.</h2><p>Worship, learn, serve, and grow with a community centered on Christ.</p><Link className="text-link" href="/schedule">Explore the weekly rhythm →</Link></div><div className="orbit-cards">{[
          { label: "Worship", detail: "Liturgy & Vespers", image: "/images/live-sanctuary.jpg" },
          { label: "Learn", detail: "Bible Study", image: "/images/sermon-bible.jpg" },
          { label: "Belong", detail: "Family & Fellowship", image: "/images/sunday-school-card.webp" },
        ].map((item, index) => <Link href="/watch#helpful-information" className={`orbit-card orbit-card-${index + 1}`} data-tilt key={item.label}><img src={item.image} alt="" /><span>0{index + 1}</span><div><h3>{item.label}</h3><p>{item.detail}</p></div></Link>)}</div></div>
      </section>

      <Reveal><section id="prayer-care" className="help-section">
        <div className="container help-grid"><div><p className="eyebrow">Prayer & care</p><h2>How can we help you today?</h2><p>Share a question or prayer request. It will be treated with care, and our community will stand with you in faith.</p><blockquote>“The effective, fervent prayer of a righteous man avails much.”<cite>James 5:16 · NKJV</cite></blockquote></div><PrayerForm /></div>
      </section></Reveal>

      <section className="location-band"><div className="container location-band-grid"><div className="location-address"><p className="eyebrow gold">Find us</p><h2>{churchAddress}</h2><a href={googleMapsUrl} target="_blank" rel="noreferrer">View our location ↗</a></div><div className="location-directions"><p className="eyebrow gold">Directions</p><div><a className="button light-button" href={googleMapsUrl} target="_blank" rel="noreferrer">Google Maps ↗</a><a className="button secondary" href={appleMapsUrl} target="_blank" rel="noreferrer">Apple Maps ↗</a></div></div></div></section>
    </PageShell>
  );
}
