import type { Metadata } from "next";
import { SaintSections } from "../components/saint-sections";
import { PageHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "St. Philopateer Mercurius",
  description: "The life and martyrdom of St. Philopateer Mercurius, Father of the Two Swords—Abu-Sefain.",
};

export default function OurSaintPage() {
  return <PageShell>
    <PageHero contentClassName="saint-page-hero" title={<span className="saint-centered-title saint-centered-title-simple"><span>Our Beloved</span><span>Saint Philopateer Mercurius</span></span>} />
    <SaintSections />
  </PageShell>;
}
