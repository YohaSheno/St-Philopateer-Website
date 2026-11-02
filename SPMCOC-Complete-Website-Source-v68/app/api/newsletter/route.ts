import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { newsletterSubscribers } from "../../../db/schema";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const payload = await request.json() as { email?: string };
    const email = payload.email?.trim().toLowerCase().slice(0, 200) ?? "";
    if (!emailPattern.test(email)) return Response.json({ error: "Enter a valid email address." }, { status: 400 });
    const db = await getDb();
    const existing = await db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.email, email)).limit(1);
    if (!existing.length) await db.insert(newsletterSubscribers).values({ email });
    return Response.json({ message: "You’re on the list. Welcome!" }, { status: 201 });
  } catch {
    return Response.json({ error: "Subscription is temporarily unavailable." }, { status: 503 });
  }
}
