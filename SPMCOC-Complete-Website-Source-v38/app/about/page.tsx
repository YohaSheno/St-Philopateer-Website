import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";

const clergy = [
  {
    name: "His Holiness Pope Tawadros II",
    role: "118th Pope of Alexandria",
    image: "/images/pope-tawadros.jpg",
    bio: [
      "His Holiness Pope Tawadros II was born Wagih Sobhy Baky Soliman on November 4, 1952, in Mansoura. His father was an irrigation engineer, and his family moved during his childhood from Mansoura to Sohag and then to Damanhour.",
      "He received his bachelor’s degree in pharmacy in 1975 from Alexandria University and earned a fellowship for the World Health Organization from the British International Health Institute in England in 1985. He attended the Coptic Seminary and graduated in 1983. He then worked as a manager in a pharmaceutical company in Damanhour that was owned by the Ministry of Health.",
      "His Holiness’s life has always revolved around the Church, and since his youth he wished to live the life of monasticism. He entered the Monastery of St. Bishoy in Wadi El Natrun on August 20, 1986, and remained a brother for two years. He was ordained a monk on July 31, 1988, and a priest on December 23, 1989. On February 15, 1990, H.H. Pope Tawadros began serving with H.E. Metropolitan Pakhomious of Beheira. He was ordained a bishop on June 15, 1997, by the departed H.H. Pope Shenouda III as a General Bishop assisting H.E. Metropolitan Pakhomious. His Holiness focused on childhood ministry through the country-wide children’s festival and as head of the children’s committee in the Holy Synod. Before assuming the papacy, H.H. wrote twelve books.",
      "His Holiness was enthroned as the 118th Pope of Alexandria and Pope of the See of St. Mark on November 18, 2012, at the Cathedral of St. Rueiss in Abbassiya, Cairo. The enthronement was presided over by H.E. Metropolitan Pakhomious of Beheira, other metropolitans and bishops of the Coptic Church, and was attended by many delegates of Christian Churches.",
      "We pray that the Lord will bless our beloved shepherd, H.H. Pope Tawadros II, protect him, and preserve his life and services for his children all over the world.",
    ],
  },
  {
    name: "His Eminence Metropolitan Youssef",
    role: "Diocese of the Southern United States",
    image: "/images/metropolitan-youssef.jpg",
    bio: [
      "Listening to the call of the Lord Jesus Christ, His Grace Bishop Youssef entered the monastic life in 1986 at the El-Souryan Monastery. He was ordained into the priesthood in 1988. Then, in 1989, he came to the United States under the auspices of His Holiness Pope Shenouda III, the 117th Pope of the Holy See of St. Mark. He was appointed resident priest to serve the Coptic congregation of St. Mary Church in Dallas–Fort Worth.",
      "In 1992, His Grace was ordained as General Bishop, and in 1993 he was appointed to oversee the Southern Coptic Diocese. In 1995, His Grace was enthroned as the first Bishop of the Coptic Orthodox Diocese of the Southern United States. Then, in 2022, His Grace was elevated to Metropolitan by His Holiness Pope Tawadros II, the 118th Pope of the Holy See of St. Mark.",
    ],
    note: "The Holy Virgin and St. John Kame’ with St. Ephraem the Syrian to the right and St. Onuphrius the Anchorite to the left — 19th century, El-Souryan Monastery.",
  },
  {
    name: "His Grace Bishop Basil",
    role: "General Bishop for Florida",
    image: "/images/bishop-basil.jpg",
    bio: [
      "His Grace Bishop Basil was born and raised in New Jersey until our Lord Jesus Christ called him to enter the monastic life in 2008 at the St. Mary & St. Moses Abbey in Sandia, Texas. He was consecrated a monk in 2009 and ordained into the priesthood in 2011. Then, in 2016, His Grace Bishop Youssef appointed him Episcopal Vicar for the state of Florida. In 2018, His Grace was elevated to Hegumen, and later that same year he was ordained as a General Bishop serving under the auspices of His Grace Bishop Youssef in the Coptic Orthodox Diocese of the Southern United States.",
    ],
  },
  {
    name: "Fr. Fam Nicoula",
    role: "Parish Priest, Palm Harbor",
    image: "/images/fr-fam.jpg",
    bio: [
      "Fr. Fam Nicoula is the priest of St. Philopateer Mercurius Coptic Orthodox Church located in Palm Harbor, Florida. H.G. Bishop Youssef ordained him a priest, in the presence of H.G. Bishop Basil and H.G. Bishop Gregory, on February 27, 2022. Fr. Fam has been serving within the Diocese of the Southern United States since February 27, 2022. We pray that the Lord will continue blessing his service.",
    ],
  },
];

export default function AboutPage() {
  return <PageShell>
    <PageHero eyebrow="The Coptic faith" title="Our story & tradition" description="An ancient apostolic faith, alive in Palm Harbor and handed from generation to generation." image="/images/about-sanctuary.jpg" />
    <section className="section container roots-grid"><div className="saint-card" data-tilt><img src="/images/st-anthony.jpg" alt="Icon of St. Anthony the Great" /><span>Desert father · living witness</span></div><div><p className="eyebrow">Our ancient apostolic roots</p><h2>Two thousand years of living faith.</h2><p>Founded in the first century by Saint Mark the Apostle, the Coptic Orthodox Church of Alexandria is one of the oldest Christian institutions in the world. St. Mark arrived in Egypt around AD 42, planting an apostolic faith that has remained unbroken.</p><p>From the monastic witness of St. Anthony the Great to the theological defense of St. Athanasius, our sacred inheritance is not merely an archive—it is a living continuity of the Holy Mysteries.</p><blockquote>“In that day there will be an altar to the Lord in the midst of the land of Egypt.”<cite>Isaiah 19:19 · NKJV</cite></blockquote></div></section>
    <Reveal><section className="leadership-section"><div className="container"><div className="section-heading split"><div><p className="eyebrow gold">Ecclesiastical leadership</p><h2>Our Holy Synod & clergy</h2></div><p>Serving through apostolic continuity, pastoral care, and faithful teaching.</p></div><div className="clergy-grid">{clergy.map((person, index) => <article className="clergy-profile" data-tilt key={person.name}><div className="clergy-portrait"><img src={person.image} alt={person.name} /><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div><div className="clergy-copy"><p className="profile-role">{person.role}</p><h3>{person.name}</h3><div className="profile-divider" aria-hidden="true" />{person.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{person.note && <aside><span>Monastic heritage</span>{person.note}</aside>}</div></article>)}</div></div></section></Reveal>
    <section className="section container mission-statement"><div className="mission-mark">✣</div><p className="eyebrow">Our mission</p><h2>Preserving the sacred. Sharing the life of Christ.</h2><p>We are a Christ-centered, Spirit-led community rooted in the ancient apostolic faith. We glorify God through faithful worship, sound doctrine, loving fellowship, and a life of holiness while transmitting our spiritual and liturgical heritage to the next generation.</p></section>
  </PageShell>;
}
