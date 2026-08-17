import { count, desc } from "drizzle-orm";
import { requireChatGPTUser } from "../chatgpt-auth";
import { PageShell } from "../components/site-shell";
import { getDb } from "../../db";
import { newsletterSubscribers, prayerRequests } from "../../db/schema";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");
  let prayers: typeof prayerRequests.$inferSelect[] = [];
  let subscriberCount = 0;
  let databaseReady = true;
  try {
    const db = await getDb();
    prayers = await db.select().from(prayerRequests).orderBy(desc(prayerRequests.createdAt)).limit(12);
    const result = await db.select({ value: count() }).from(newsletterSubscribers);
    subscriberCount = result[0]?.value ?? 0;
  } catch { databaseReady = false; }
  return <PageShell><section className="admin-hero"><div className="container"><p className="eyebrow gold">Private ministry workspace</p><h1>Welcome, {user.displayName}</h1><p>Review pastoral requests and the health of the church’s digital ministry.</p></div></section><section className="section container admin-dashboard"><div className="stat-grid"><article><span>Prayer requests</span><strong>{databaseReady ? prayers.length : "—"}</strong><small>Most recent submissions</small></article><article><span>Newsletter</span><strong>{databaseReady ? subscriberCount : "—"}</strong><small>Active subscribers</small></article><article><span>Site status</span><strong className="status-live">Live</strong><small>All public pages available</small></article></div>{!databaseReady ? <div className="notice">The ministry database will become available after the first deployment migration is applied.</div> : <div className="admin-list"><div className="section-heading"><p className="eyebrow">Pastoral care</p><h2>Recent prayer requests</h2></div>{prayers.length ? prayers.map(request => <article key={request.id}><div><strong>{request.firstName}</strong><a href={`mailto:${request.email}`}>{request.email}</a></div><p>{request.request}</p><time>{request.createdAt}</time></article>) : <p>No prayer requests have been submitted yet.</p>}</div>}</section></PageShell>;
}
