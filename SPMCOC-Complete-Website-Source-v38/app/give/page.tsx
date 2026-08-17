import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";
import { ZeffyDonation } from "../components/zeffy-donation";

const zeffyUrl = "https://www.zeffy.com/en-US/donation-form/93939448-7803-4f6e-aa82-1ef0b34f2e14";

export default function GivePage() {
  return <PageShell>
    <PageHero eyebrow="Acts 20:35 · NKJV" title="It is more blessed to give than to receive." description="Your stewardship sustains worship, care, formation, and the future of our spiritual home." image="/images/good-shepherd.jpg" />
    <section className="donation-section">
      <div className="container donation-layout">
        <Reveal><div className="donation-intro"><p className="eyebrow gold">Supporting our church</p><h2>Every gift becomes part of the mission.</h2><p>Your stewardship supports the church building, the preservation of our services and ministries, and ongoing community outreach.</p><div className="mission-mini-grid"><article><span>01</span><h3>New church building</h3><p>Preserving our Coptic architectural heritage.</p></article><article><span>02</span><h3>Mercy ministry</h3><p>Direct support for families in need.</p></article></div><p className="secure-giving-note"><span aria-hidden="true">✓</span> Secure giving is provided by Zeffy.</p></div></Reveal>
        <Reveal><div className="zeffy-card"><div className="zeffy-card-heading"><div><p className="eyebrow">Online giving</p><h3>Make a donation</h3></div><span aria-hidden="true">✣</span></div><ZeffyDonation /><p>If the donation form does not appear, <a href={zeffyUrl} target="_blank" rel="noreferrer">open the secure Zeffy form ↗</a></p></div></Reveal>
      </div>
    </section>
    <Reveal><section className="scripture-band"><blockquote>“So let each one give as he purposes in his heart, not grudgingly or of necessity; for God loves a cheerful giver.”<cite>2 Corinthians 9:7 · NKJV</cite></blockquote></section></Reveal>
  </PageShell>;
}
