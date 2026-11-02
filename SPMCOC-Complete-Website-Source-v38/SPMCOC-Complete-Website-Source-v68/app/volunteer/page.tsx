import type { Metadata } from "next";
import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Discover ways to volunteer and serve at St. Philopateer Mercurius Coptic Orthodox Church.",
};

const volunteerFormUrl = "https://forms.gle/RbGxU3cNc8cSym816";

const serviceAreas = [
  { number: "01", title: "Welcome", description: "Help create a warm and welcoming experience for every person who enters our church." },
  { number: "02", title: "Serve", description: "Offer your time and talents wherever support is needed throughout our church community." },
  { number: "03", title: "Fellowship", description: "Help strengthen the relationships that make our congregation feel like one family." },
  { number: "04", title: "Grow", description: "Serve alongside fellow church members while growing in faith, love, and responsibility." },
] as const;

export default function VolunteerPage() {
  return <PageShell>
    <PageHero eyebrow="A willing heart" title="Volunteer" description="Use your time and talents to serve the Lord and strengthen our church family." image="/images/visit-sanctuary.jpg" />
    <section className="volunteer-welcome-section"><div className="container volunteer-welcome-grid">
      <Reveal><div className="volunteer-welcome-copy"><p className="eyebrow gold">Welcome to our community</p><h2>There is a place for you to serve.</h2><a className="volunteer-hours-hook" href="#volunteer-form"><h3>Do you need volunteer hours?</h3><small>View the volunteer form →</small></a><p>Welcome to Saint Philopateer Coptic Orthodox Church! We are blessed to have you join our community, and we invite you to become part of our ministry through volunteering.</p><p>Volunteering is a wonderful way to serve the Lord. It also allows you to meet fellow church members, serve others, and use your time and talents to strengthen our church community through love and fellowship. Whether you are new to the church or have been attending for years, there is a place for you to serve.</p><p>No special experience is required—just a willing heart and a desire to serve. Let us serve the Lord together and build a stronger church family.</p></div></Reveal>
      <Reveal><div className="volunteer-visual"><div className="volunteer-halo" aria-hidden="true" /><img src="/images/church-hero.jpg" alt="The St. Philopateer Mercurius church community" /><blockquote>“Through love serve one another.”<cite>Galatians 5:13 · NKJV</cite></blockquote></div></Reveal>
    </div></section>
    <Reveal><section className="section volunteer-areas-section"><div className="container"><div className="section-heading centered"><p className="eyebrow">Many ways to help</p><h2>Bring your gifts into the life of the Church.</h2><p>Every act of service, whether seen or unseen, helps strengthen our shared ministry.</p></div><div className="volunteer-area-grid">{serviceAreas.map((area) => <article key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.description}</p></article>)}</div></div></section></Reveal>
    <section id="volunteer-form" className="volunteer-cta-section"><div className="volunteer-cta-orbit" aria-hidden="true" /><div className="container volunteer-cta"><p className="eyebrow gold">Ready to get involved?</p><h2>Fill out the volunteer form below.</h2><p>Tell us a little about yourself and how you would like to help. We look forward to serving together.</p><a className="button light-button" href={volunteerFormUrl} target="_blank" rel="noreferrer">Open volunteer form ↗</a><small>The registration form opens securely in Google Forms.</small></div></section>
  </PageShell>;
}
