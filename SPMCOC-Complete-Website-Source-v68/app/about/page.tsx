import type { Metadata } from "next";
import { Reveal } from "../components/reveal";
import { SaintSections } from "../components/saint-sections";
import { PageHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our Coptic Orthodox faith, our patron St. Philopateer Mercurius, and our church leadership.",
};

const clergy = [
  { name: "His Holiness Pope Tawadros II", role: "118th Pope of Alexandria", image: "/images/pope-tawadros.jpg" },
  { name: "His Eminence Metropolitan Youssef", role: "Diocese of the Southern United States", image: "/images/metropolitan-youssef.jpg" },
  { name: "His Grace Bishop Basil", role: "General Bishop for Florida", image: "/images/bishop-basil.jpg" },
  { name: "Fr. Fam Nicoula", role: "Parish Priest, Palm Harbor", image: "/images/fr-fam.jpg" },
] as const;

export default function AboutPage() {
  return <PageShell>
    <PageHero eyebrow="Faith · patron saint · leadership" title="About Us" description="Discover our ancient apostolic faith, the witness of our beloved patron saint, and the shepherds who serve our Church." image="/images/about-us-sanctuary.webp" />
    <section className="section container roots-grid"><div className="saint-card"><img src="/images/st-anthony.jpg" alt="Icon of St. Anthony the Great" /><span>Desert father · living witness</span></div><div><p className="eyebrow">Our ancient apostolic roots</p><h2>Two thousand years of living faith.</h2><p>Founded in the first century by Saint Mark the Apostle, the Coptic Orthodox Church of Alexandria is one of the oldest Christian institutions in the world. St. Mark arrived in Egypt around AD 42, planting an apostolic faith that has remained unbroken.</p><p>From the monastic witness of St. Anthony the Great to the theological defense of St. Athanasius, our sacred inheritance is not merely an archive—it is a living continuity of the Holy Mysteries.</p><blockquote>“In that day there will be an altar to the Lord in the midst of the land of Egypt.”<cite>Isaiah 19:19 · NKJV</cite></blockquote></div></section>

    <SaintSections />

    <Reveal><section id="leadership" className="leadership-section about-leadership-section"><div className="container"><div className="section-heading split"><div><p className="eyebrow gold">Ecclesiastical leadership</p><h2>Our Holy Synod &amp; clergy</h2></div><p>Serving through apostolic continuity, pastoral care, and faithful teaching.</p></div><div className="clergy-grid compact-clergy-grid">{clergy.map((person, index) => <article className="clergy-profile clergy-profile-simple" key={person.name}><div className="clergy-portrait"><img src={person.image} alt={person.name} /><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div><div className="clergy-copy"><p className="profile-role">{person.role}</p><h3>{person.name}</h3><div className="profile-divider" aria-hidden="true" /></div></article>)}</div></div></section></Reveal>
    <section id="mission" className="section container mission-statement"><div className="mission-mark">✣</div><p className="eyebrow">Our mission</p><h2>Preserving the sacred. Sharing the life of Christ.</h2><p>We are a Christ-centered, Spirit-led community rooted in the ancient apostolic faith. We glorify God through faithful worship, sound doctrine, loving fellowship, and a life of holiness while transmitting our spiritual and liturgical heritage to the next generation.</p></section>
  </PageShell>;
}
