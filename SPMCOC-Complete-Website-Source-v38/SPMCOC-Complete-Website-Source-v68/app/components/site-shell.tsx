"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../content";
import { MotionSystem } from "./motion-system";

const footerGroups = [
  {
    title: "Discover",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/about#our-saint", label: "Our Saint" },
    ],
  },
  {
    title: "Visit & Connect",
    links: [
      { href: "/visit#plan-your-visit", label: "Plan Your Visit" },
      { href: "/visit#schedule", label: "Weekly Schedule" },
      { href: "/visit#pastoral-care", label: "Pastoral Care" },
    ],
  },
  {
    title: "Ministries",
    links: [
      { href: "/services", label: "Services" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/#prayer-care", label: "Prayer & Care" },
    ],
  },
  {
    title: "Watch & Support",
    links: [
      { href: "/watch", label: "Watch" },
      {
        href: "/watch#helpful-information",
        label: "Dogma",
        children: [
          { href: "https://qa.suscopts.org/", label: "Metropolitan Youssef Q&A" },
          { href: "https://copticorthodox.church/en/", label: "Coptic Orthodox Church" },
          { href: "https://www.youtube.com/playlist?list=PLZrtr745effd9kUQvi27pBg6s3CjGBCc8", label: "Sunday Sermons Playlist" },
          { href: "https://copticorthodox.church/en/holysynod/ecumenical-relations/", label: "Ecumenical Relations" },
          { href: "https://copticevangelism.org/?page_id=246", label: "Learn About Our Church" },
        ],
      },
      { href: "/our-future", label: "Build Our Future" },
      { href: "/our-future#give", label: "Give" },
    ],
  },
  {
    title: "Socials",
    links: [
      { href: "https://www.facebook.com/share/18MTaRYqvu/?mibextid=wwXIfr", label: "Facebook", external: true },
      { href: "https://www.youtube.com/@Spmcoc", label: "YouTube", external: true },
      { href: "https://www.instagram.com/st.philopateermercuriusfl/", label: "Instagram", external: true },
      { href: "https://open.spotify.com/show/4IPinsmWtS7wqmnkORmlKd?si=4c0757a7ba5e41a6", label: "Spotify", external: true },
      { href: "https://soundcloud.com/spmcoc", label: "SoundCloud", external: true },
      { href: "https://www.zeffy.com/en-US/donation-form/93939448-7803-4f6e-aa82-1ef0b34f2e14", label: "Zeffy", external: true },
    ],
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activePath = pathname === "/schedule" || pathname === "/meet-us"
    ? "/visit"
    : pathname === "/give"
      ? "/our-future"
      : pathname === "/our-saint"
        ? "/about"
        : pathname === "/registration"
          ? "/services"
        : pathname;
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="St. Philopateer Mercurius home">
        <img src="/images/church-logo.jpg" alt="" />
        <span><strong>St. Philopateer Mercurius</strong><small>Coptic Orthodox Church · Palm Harbor, FL</small></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <span /> <span /> <span />
      </button>
      <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={activePath === item.href ? "active" : ""}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <Link className="footer-logo-link" href="/" aria-label="St. Philopateer Mercurius home">
            <img src="/images/church-logo.jpg" alt="" />
            <span><strong>St. Philopateer Mercurius</strong><small>Coptic Orthodox Church</small></span>
          </Link>
          <p>An ancient apostolic faith and a living church family in Palm Harbor, Florida.</p>
          <a className="footer-address" href="https://www.google.com/maps/search/?api=1&query=2261+Tampa+Rd%2C+Palm+Harbor%2C+FL+34683" target="_blank" rel="noreferrer"><span>Our location</span>2261 Tampa Rd<br />Palm Harbor, FL 34683 ↗</a>
        </div>
        <nav className="footer-directory" aria-label="Footer navigation">
          {footerGroups.map((group) => <section className="footer-column" key={group.title}>
            <h2>{group.title}</h2>
            <ul>{group.links.map((item) => <li key={item.href}>{"external" in item && item.external
              ? <a href={item.href} target="_blank" rel="noreferrer">{item.label}<span aria-hidden="true">↗</span></a>
              : <Link href={item.href}>{item.label}<span aria-hidden="true">→</span></Link>}
              {"children" in item && item.children && <ul className="footer-nested-links">
                {item.children.map((child) => <li key={child.href}><a href={child.href} target="_blank" rel="noreferrer">{child.label}<span aria-hidden="true">↗</span></a></li>)}
              </ul>}
            </li>)}</ul>
          </section>)}
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="container"><p>© 2026 St. Philopateer Mercurius Coptic Orthodox Church</p><Link href="/">Palm Harbor, Florida</Link></div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><MotionSystem /><div className="ambient-glow" aria-hidden="true" /><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function PageHero({ eyebrow, title, description, image, contentClassName }: { eyebrow?: string; title: React.ReactNode; description?: string; image?: string; contentClassName?: string }) {
  return (
    <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(27,12,8,.82), rgba(65,14,11,.38)), url(${image})` } : undefined}>
      <div className="page-hero-orbit" aria-hidden="true" />
      <div className="page-hero-cross" aria-hidden="true"><i /><i /></div>
      <div className="page-hero-grain" aria-hidden="true" />
      <div className={`container page-hero-content ${contentClassName ?? ""}`}>
        {eyebrow && <p className="eyebrow gold">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
