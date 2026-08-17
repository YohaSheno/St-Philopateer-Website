import type { Metadata } from "next";
import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "St. Philopateer Mercurius",
  description: "The life and martyrdom of St. Philopateer Mercurius, Father of the Two Swords—Abu-Sefain.",
};

const facts = [
  ["Born", "225 A.D. · Rome"],
  ["Birth name", "Philopateer"],
  ["Title", "Father of the Two Swords"],
  ["Feast", "25th of Hatour"],
] as const;

const chapters = [
  {
    number: "01",
    eyebrow: "Early life",
    title: "A soldier raised in the faith",
    paragraphs: [
      "St. Mercurius was born to pagan parents in Rome in 225 A.D. and was named Philopateer, a Greek name meaning “lover of the Father.” After his father, Gordianus, was miraculously saved from death by an angel of the Lord, both of his parents embraced Christianity. They preached, gave alms, and raised their son according to Christian teachings.",
      "By the age of seventeen, Philopateer had joined the Roman army and gained a reputation as a gifted swordsman and tactician. He was promoted to commander and given the name Mercurius, a name then associated with good fortune and glory.",
    ],
  },
  {
    number: "02",
    eyebrow: "The heavenly sword",
    title: "Why he is called Abu-Sefain",
    paragraphs: [
      "During a fierce battle, Mercurius saw a radiant man who encouraged him not to fear. The heavenly messenger placed a sword in his hand, promised him victory, and reminded him to remember the Lord after the battle. Strengthened by the Holy Spirit, Mercurius fought bravely and his army prevailed.",
      "He became known as the saint of the two swords—Abu-Sefain. One sword represents his military service; the other represents the sword of divine power entrusted to him by the angel.",
    ],
    quote: "Fear not, nor be downcast, for I have been sent to help you and lead you to victory.",
  },
  {
    number: "03",
    eyebrow: "A faithful confession",
    title: "“I am a Christian.”",
    paragraphs: [
      "Emperor Decius decreed that everyone must offer incense and sacrifice to pagan gods. After Mercurius refused to worship at the temple of Artemis, he was accused before the emperor. Decius reminded him of the honors and military rank he had received, but Mercurius answered that victory came from God through Christ—not from idols.",
      "He removed his military cloak and golden belt, laid them at the emperor’s feet, and openly declared his Christian faith. Neither promises of greater authority nor threats of suffering persuaded him to abandon Christ.",
    ],
    quote: "I will never stop worshiping my Master Jesus Christ for temporary honors, but by His grace, I will remain faithful to Him until death.",
  },
  {
    number: "04",
    eyebrow: "Witness & endurance",
    title: "Strengthened through every trial",
    paragraphs: [
      "Decius ordered Mercurius imprisoned and subjected to severe tortures. Yet angels repeatedly appeared to console him, heal his wounds, and remind him of the eternal crown prepared for those who remain faithful. The fragrance of incense was said to rise from his body during his suffering, and many who witnessed his steadfastness confessed faith in Christ.",
      "When it became clear that he would not deny the Lord, Mercurius was taken to Caesarea in Cappadocia. Before his execution, he asked for time to pray. In a vision filled with light, Christ welcomed His faithful servant and promised that his witness and intercessions would be remembered throughout the world.",
      "St. Philopateer Mercurius offered his head to the executioners and received the crown of martyrdom on the twenty-fifth day of the blessed month of Hatour. After his martyrdom, his body became white as snow and gave forth a sweet fragrance, and many people became Christians.",
    ],
  },
] as const;

export default function OurSaintPage() {
  return <PageShell>
    <PageHero contentClassName="saint-page-hero" title={<span className="saint-centered-title saint-centered-title-simple"><span>Our Beloved</span><span>Saint Philopateer Mercurius</span></span>} />

    <section className="saint-icon-section">
      <div className="container saint-icon-layout">
        <div className="saint-icon-stage" data-tilt>
          <div className="saint-icon-halo" aria-hidden="true" />
          <img src="/images/st-philopateer-mercurius-icon.webp" alt="Coptic icon of St. Philopateer Mercurius, Father of the Two Swords" />
          <span>Abu-Sefain · Father of the Two Swords</span>
        </div>
        <Reveal><div className="saint-introduction">
          <p className="eyebrow">Martyred on the 25th of Hatour</p>
          <h2>A crown of victory in Heaven.</h2>
          <p>St. Philopateer Mercurius is remembered for his courage in battle, his unwavering confession of Christ, and his faithful endurance through martyrdom. His name, Philopateer, means <em>lover of the Father</em>.</p>
          <blockquote>“I am a Christian. Hear, all of you, that I am a Christian.”<cite>St. Philopateer Mercurius</cite></blockquote>
        </div></Reveal>
      </div>
    </section>

    <Reveal><section className="saint-facts-band"><div className="container saint-facts">{facts.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}</div></section></Reveal>

    <section className="section container saint-story">
      <div className="section-heading"><p className="eyebrow">His life & witness</p><h2>The story of the victorious martyr.</h2><p>From the Roman army to the crown of martyrdom, his life became a testimony to courage, humility, and complete faith in Christ.</p></div>
      <div className="saint-timeline">{chapters.map((chapter) => <Reveal key={chapter.number}><article className="saint-chapter"><div className="saint-chapter-number">{chapter.number}</div><div><p className="eyebrow">{chapter.eyebrow}</p><h3>{chapter.title}</h3>{chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{"quote" in chapter && chapter.quote && <blockquote>{chapter.quote}</blockquote>}</div></article></Reveal>)}</div>
    </section>

    <Reveal><section className="saint-julian-section"><div className="container saint-julian-grid"><div><p className="eyebrow gold">A tradition remembered by the Church</p><h2>Julian the Apostate</h2><p>Church tradition connects St. Mercurius with the death of Emperor Julian the Apostate, who had renounced Christianity and persecuted the faithful. While St. Basil the Great and other saints prayed, an icon of St. Mercurius was said to disappear and later return bearing the sign that Julian had fallen in battle.</p><p>The account became an important historical tradition that carried the name of St. Mercurius throughout the Church and strengthened the faithful during persecution.</p></div><blockquote>“You have won, O Galilean.”<cite>Words traditionally attributed to Julian</cite></blockquote></div></section></Reveal>

    <section className="saint-prayer-band"><img className="saint-prayer-cross" src="/images/coptic-cross-prayer.png" alt="Ornate Coptic cross" /><p className="eyebrow gold">Through his prayers</p><h2>May the prayers of St. Philopateer Mercurius be with us all.</h2><p className="saint-coptic-prayer" lang="cop">Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ  ̀ⲛⲧⲉ ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ<br />̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ<br />̀ⲡϭⲟⲓⲥ ⲁⲣⲓ̀ϩⲙⲟⲧ ⲛⲁⲛ  ̀ⲙⲡⲓⲭⲱ ̀ⲉⲩⲟⲗ  ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ</p><p>And glory be to God forever. Amen.</p></section>
  </PageShell>;
}
