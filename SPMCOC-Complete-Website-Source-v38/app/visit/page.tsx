import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";

export default function VisitPage() {
  const experiences = [
    { icon: "eyes", image: "/images/sights-coptic-iconography.png", alt: "A visitor looking reverently at Coptic iconography", title: "Sights", description: "A display of Coptic iconography that tells the life stories of our Church and its saints." },
    { icon: "sounds", image: "/images/coptic-cymbal-triangle.png", alt: "Coptic cymbal and triangle", title: "Sounds", description: "Coptic chants from our Church heritage, preserved by being passed down from generation to generation." },
    { icon: "smells", image: "/images/coptic-censer-incense.png", alt: "A Coptic censer surrounded by incense", title: "Smells", description: "The sweet aroma of frankincense that carries your prayers up to heaven through the intercessions of the saints and martyrs." },
  ];

  const guidelines = [
    { title: "Liturgy duration", description: "The Divine Liturgy lasts two to three hours. Enter quietly, as the Church is in prayer. In addition, please silence your phone." },
    { title: "Dress code", description: "Dress modestly. Typical attire includes pants and clothing that is not see-through." },
    { title: "The Eucharist", description: "Communion is reserved for baptized Oriental Orthodox Christians. In addition, the holy bread is available to everyone after the Liturgy has concluded." },
    { title: "Fellowship", description: "Join us after the service for a social snack and a warm welcome to our rich family." },
  ];

  return <PageShell>
    <PageHero eyebrow="Your first visit" title="We’re glad you’re here." description="Whether you are seeking a spiritual home or simply curious about the Coptic Orthodox faith, our doors and hearts are open to you." image="/images/visit-sanctuary.jpg" />
    <section className="section container priest-grid"><div><p className="eyebrow">A message from our parish priest</p><h2>Welcome.</h2><p>We are honored to pray with you, answer your questions, and introduce you to the beauty of the Coptic Orthodox Church.</p><div className="contact-card"><img src="/images/fr-fam.jpg" alt="Fr. Fam Nicoula" /><div><small>Parish Priest</small><strong>Fr. Fam Nicoula</strong><a href="mailto:FF@spmcoc.org">FF@spmcoc.org</a></div></div></div><div className="priest-visual" data-tilt><img src="/images/visit-sanctuary.jpg" alt="Interior of the church sanctuary" /><span>Message from Fr. Fam</span></div></section>
    <Reveal><section className="experience-section"><div className="container"><div className="section-heading centered light"><p className="eyebrow gold">The experience</p><h2>What to expect</h2></div><div className="experience-grid">{experiences.map((experience) => <article data-tilt key={experience.title}>{experience.image ? <img className="experience-symbol-image" src={experience.image} alt={experience.alt} /> : <span className={`experience-icon ${experience.icon}`} aria-hidden="true" />}<h3>{experience.title}</h3><p>{experience.description}</p></article>)}</div></div></section></Reveal>
    <section className="section container quote-and-guidelines"><blockquote>“One thing I have desired of the Lord, that will I seek: that I may dwell in the house of the Lord all the days of my life.”<cite>Psalm 27:4 · NKJV</cite></blockquote><div><div className="section-heading"><p className="eyebrow">Helpful guidelines</p><h2>Come as you are. Know what to expect.</h2></div><div className="guideline-grid">{guidelines.map((guideline, index) => <article key={guideline.title}><span>0{index + 1}</span><h3>{guideline.title}</h3><p>{guideline.description}</p></article>)}</div></div></section>
  </PageShell>;
}
