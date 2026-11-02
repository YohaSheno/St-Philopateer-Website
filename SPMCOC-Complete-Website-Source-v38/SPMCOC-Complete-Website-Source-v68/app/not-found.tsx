import Link from "next/link";
import { PageShell } from "./components/site-shell";

export default function NotFound() { return <PageShell><section className="not-found"><p className="eyebrow gold">404</p><h1>This path is quiet.</h1><p>The page you are looking for could not be found.</p><Link className="button" href="/">Return home</Link></section></PageShell>; }
