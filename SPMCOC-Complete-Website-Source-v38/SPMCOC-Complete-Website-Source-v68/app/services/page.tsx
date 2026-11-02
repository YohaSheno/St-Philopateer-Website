import type { Metadata } from "next";
import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Services",
  description: "Register for Sunday School, Hymns School, and Pre-Servants at St. Philopateer Mercurius Coptic Orthodox Church.",
};

const programs = [
  {
    number: "01",
    id: "sunday-school",
    title: "Sunday School",
    subtitle: "Faith from the beginning",
    description: "Our Sunday School takes place on Saturdays, with students divided by grade level. In Sunday School, we teach about our Lord Jesus Christ and how to live as true Christians. We also teach the stories of the saints and how our lives can relate to theirs. Most importantly, we focus on how to reach the Kingdom of Heaven and remain attentive to our salvation.",
    image: "/images/sunday-school-card.webp",
    registrationUrl: "https://forms.gle/74ksByayysnWMcFe9",
    email: "ss@spmcoc.org",
  },
  {
    number: "02",
    id: "hymns-school",
    title: "Hymns School (HKM)",
    subtitle: "Preserving our Coptic heritage",
    description: "Our Hymns School takes place on Fridays at 8:00 PM. It is a place where children who are ordained chanters, or are preparing to be ordained, learn the heritage and music of our Coptic tradition. Our Hymns School is named after our dear father, Hegumen Kyrillos Makar, who departed to the Paradise of Joy. He was raised in a Coptic family who spoke Coptic as their native language. During his service, he taught many generations the Coptic language and the hymnology of our Church. He taught us not only this treasured heritage, but also how to love hymnology, pray, and offer our hearts to God.",
    image: "/images/hymns-school-card.webp",
    registrationUrl: "https://forms.gle/vfsRF2QYYf9wggWB8",
    email: "hymns@spmcoc.org",
  },
  {
    number: "03",
    id: "pre-servants",
    title: "Pre-Servants",
    subtitle: "Formed and prepared to serve",
    description: "Our Pre-Servants class takes place on Fridays at 6:00 PM. This class helps our youth become the future leaders of our Church. We teach our children how to serve the Church in many different ways. The program includes coursework that prepares them to help shape the future of our Church, faithfully continuing what has been passed down through generations.",
    image: "/images/pre-servants-card.png",
    registrationUrl: "https://forms.gle/8scfTiyRNgQQXrfcA",
    email: "preservants@spmcoc.org",
  },
] as const;

const serviceContacts = [
  { title: "Deacons Ministry", email: "deacons@spmcoc.org" },
  { title: "Korban Ministry", email: "orban@spmcoc.org" },
  { title: "Prayer & Care Requests", email: "requests@spmcoc.org" },
  { title: "Church Board", email: "board@spmcoc.org" },
  { title: "Events Ministry", email: "events@spmcoc.org" },
  { title: "General Help & Support", email: "help@spmcoc.org" },
  { title: "Youth Ministry", email: "youth@spmcoc.org" },
] as const;

export default function ServicesPage() {
  return <PageShell>
    <PageHero eyebrow="Learn · grow · serve" title="Services" description="Choose a ministry below to learn more and complete its registration form." image="/images/about-sanctuary.jpg" />
    <section className="section registration-section">
      <div className="container">
        <div className="section-heading centered"><p className="eyebrow">Church formation</p><h2>A place to grow in every season.</h2><p>Our programs help children, youth, and future servants deepen their faith and become active members of the life of the Church.</p></div>
        <div className="registration-grid">
          {programs.map((program) => <Reveal key={program.title}><article id={program.id} className="registration-card">
            <div className="registration-image"><img src={program.image} alt={`${program.title} at St. Philopateer Mercurius Church`} /><span>{program.number}</span></div>
            <div className="registration-copy"><p className="eyebrow">{program.subtitle}</p><h3>{program.title}</h3><p>{program.description}</p><div className="program-contact"><span>Contact this service</span><a href={`mailto:${program.email}`}>{program.email}</a></div><a className="button" href={program.registrationUrl} target="_blank" rel="noreferrer">Open registration form ↗</a></div>
          </article></Reveal>)}
        </div>
        <Reveal>
          <div className="service-directory">
            <div className="service-directory-heading"><p className="eyebrow">Get in touch</p><h2>Contact a Church Service</h2><p>If you would like to reach a specific church service, contact its ministry using the email listed below.</p></div>
            <div className="service-contact-grid">
              {serviceContacts.map((contact) => <a className="service-contact-item" href={`mailto:${contact.email}`} key={contact.email}>
                <span>{contact.title}</span><strong>{contact.email}</strong><small>Send an email →</small>
              </a>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </PageShell>;
}
