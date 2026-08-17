"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../content";
import { MotionSystem } from "./motion-system";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">ST. PHILOPATEER MERCURIUS</div>
      <div className="footer-links">
        <a href="https://www.facebook.com/share/18MTaRYqvu/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="St. Philopateer Mercurius on Facebook">Facebook ↗</a>
        <a href="https://www.youtube.com/@Spmcoc" target="_blank" rel="noreferrer" aria-label="St. Philopateer Mercurius on YouTube">YouTube ↗</a>
        <a href="https://www.instagram.com/st.philopateermercuriusfl/" target="_blank" rel="noreferrer" aria-label="St. Philopateer Mercurius on Instagram">Instagram ↗</a>
      </div>
      <p>© 2026 St. Philopateer Mercurius Coptic Orthodox Church</p>
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
