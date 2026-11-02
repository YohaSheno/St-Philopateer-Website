import { getDb } from "../../../db";
import { prayerRequests } from "../../../db/schema";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const payload = await request.json() as Record<string, string>;
    const firstName = payload.firstName?.trim().slice(0, 80);
    const email = payload.email?.trim().toLowerCase().slice(0, 200);
    const prayer = payload.request?.trim().slice(0, 4000);
    if (payload.website) return Response.json({ message: "Thank you. Your request was received." }, { status: 201 });
    if (!firstName || !emailPattern.test(email) || !prayer || prayer.length < 10) return Response.json({ error: "Please complete every field with a valid email and prayer request." }, { status: 400 });
    const db = await getDb();
    await db.insert(prayerRequests).values({ firstName, email, request: prayer });
    return Response.json({ message: "Your request was received with care. We will be praying with you." }, { status: 201 });
  } catch {
    return Response.json({ error: "We could not save your request right now. Please email contact@stphilopateer.org." }, { status: 503 });
  }
}
