import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";
import { YOUTUBE_LIVE_EMBED_URL, YOUTUBE_LIVE_URL } from "../lib/youtube";

export const revalidate = 300;

export default function WatchPage() {
  return <PageShell>
    <PageHero eyebrow="Live worship" title="Watch from wherever you are" image="/images/live-sanctuary.jpg" />
    <section id="live" className="section container live-feature">
      <div className="video-frame">
        <iframe src={YOUTUBE_LIVE_EMBED_URL} title="St. Philopateer Mercurius Church live stream" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        <span className="live-badge"><i /> Live stream</span>
      </div>
      <div><p className="eyebrow">Live worship</p><h2>St. Philopateer Live Stream</h2><p>Experience the prayers, hymns, readings, and Holy Liturgy from anywhere in the world.</p><div className="button-row"><a className="button" href={YOUTUBE_LIVE_URL} target="_blank" rel="noreferrer">Open live stream on YouTube</a></div></div>
    </section>

    <Reveal><section id="helpful-information" className="sermon-section helpful-links-section"><div className="container">
      <div className="section-heading"><p className="eyebrow gold">Faith resources</p><h2>Links &amp; Helpful Information</h2><p>Explore trusted resources to deepen your understanding of the Coptic Orthodox faith.</p></div>
      <div className="sermon-grid helpful-card-grid">
        <article className="sermon-card helpful-card"><img src="/images/coptic-qa-card.webp" alt="Coptic faith questions and answers beside an open Bible" /><div><p className="eyebrow">Questions &amp; answers</p><h3>Q&amp;A</h3><p>Here you will find questions and answers about our Coptic faith, answered by His Eminence Metropolitan Youssef, along with more information about our church.</p><div className="helpful-card-links"><a href="https://qa.suscopts.org/" target="_blank" rel="noreferrer">Metropolitan Youssef Q&amp;A ↗</a><a href="https://copticorthodox.church/en/" target="_blank" rel="noreferrer">Coptic Orthodox Church ↗</a></div></div></article>
        <a className="sermon-card helpful-card helpful-card-link sunday-sermons-resource" data-tilt href="https://www.youtube.com/playlist?list=PLZrtr745effd9kUQvi27pBg6s3CjGBCc8" target="_blank" rel="noreferrer"><img src="/images/sunday-sermons-card.webp" alt="St. Philopateer Mercurius Coptic Orthodox Church Sunday Sermons" /><div><p className="eyebrow">Sermon archive</p><h3>Sunday Sermons</h3><p>Watch Sunday sermons from St. Philopateer Mercurius Coptic Orthodox Church.</p><span>Watch the playlist →</span></div></a>
        <a className="sermon-card helpful-card helpful-card-link" data-tilt href="https://copticorthodox.church/en/holysynod/ecumenical-relations/" target="_blank" rel="noreferrer"><img src="/images/ecumenical-relations-card.webp" alt="A Coptic cross connecting churches around the world" /><div><p className="eyebrow">The Church worldwide</p><h3>Ecumenical Relations</h3><p>Navigate here to find more about our Coptic Church and its relationships and involvements with other religions around the world.</p><span>Explore ecumenical relations →</span></div></a>
        <a className="sermon-card helpful-card helpful-card-link church-learning-resource" data-tilt href="https://copticevangelism.org/?page_id=246" target="_blank" rel="noreferrer"><img src="/images/learn-coptic-church-card.png" alt="Icon of our Lord Jesus Christ holding the Holy Gospel" /><div><p className="eyebrow">Orthodox faith</p><h3>Learn more about our Coptic Church</h3><p>Discover more about our church and its Sacraments below.</p><span>Discover our Church →</span></div></a>
      </div>
    </div></section></Reveal>

    <section className="scripture-band"><blockquote>“Oh, sing to the Lord a new song! For He has done marvelous things.”<cite>Psalm 98:1 · NKJV</cite></blockquote></section>
    <section className="newsletter-band"><div><p className="eyebrow gold">New to our Diocese?</p><h2>Register for the Coptic Orthodox Diocese of the Southern United States</h2></div><a className="button light-button" href="https://membership.suscopts.org/home" target="_blank" rel="noreferrer">Register now</a></section>
  </PageShell>;
}
