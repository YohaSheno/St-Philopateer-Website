"use client";

import { FormEvent, useState } from "react";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function PrayerForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [requestType, setRequestType] = useState<"Prayer Request" | "Question" | "Suggestion">("Prayer Request");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("request") ?? "").trim();
    const subject = encodeURIComponent(`${requestType} from ${firstName}`);
    const body = encodeURIComponent(`Request type: ${requestType}\nName: ${firstName}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:requests@spmcoc.org?subject=${subject}&body=${body}`;
    setStatus({ type: "success", message: "Your email app is opening with your message addressed to requests@spmcoc.org. Please press Send there to complete your request." });
  }
  return (
    <form className="prayer-form" onSubmit={submit}>
      <fieldset className="request-type-fieldset">
        <legend>What would you like to send?</legend>
        <div className="request-type-grid">
          {(["Prayer Request", "Question", "Suggestion"] as const).map((type) => <label className={requestType === type ? "selected" : ""} key={type}>
            <input type="radio" name="requestType" value={type} checked={requestType === type} onChange={() => setRequestType(type)} />
            <span aria-hidden="true">{type === "Prayer Request" ? "✣" : type === "Question" ? "?" : "✦"}</span>
            <strong>{type}</strong>
          </label>)}
        </div>
      </fieldset>
      <div className="form-grid"><label>First name<input name="firstName" required autoComplete="given-name" /></label><label>Email address<input type="email" name="email" required autoComplete="email" /></label></div>
      <label>{requestType === "Prayer Request" ? "How can we pray for you?" : requestType === "Question" ? "What question can we help answer?" : "What would you like to suggest?"}<textarea name="request" required minLength={10} rows={5} placeholder={requestType === "Prayer Request" ? "Share your prayer request…" : requestType === "Question" ? "Write your question…" : "Share your suggestion…"} /></label>
      <div className="prayer-submit-row"><button className="button">Send {requestType.toLowerCase()}</button><small>Sent through your email app to <strong>requests@spmcoc.org</strong></small></div>
      {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
    </form>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus({ type: "loading" });
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/newsletter", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
    const data = await response.json() as { message?: string; error?: string };
    if (response.ok) { event.currentTarget.reset(); setStatus({ type: "success", message: data.message }); }
    else setStatus({ type: "error", message: data.error || "Please try again." });
  }
  return <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" name="email" placeholder="Your email address" required /><button disabled={status.type === "loading"}>{status.type === "loading" ? "Joining…" : "Subscribe"}</button>{status.message && <span role="status">{status.message}</span>}</form>;
}

export function GivingPanel() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState(85);
  return (
    <div className="giving-panel" data-tilt>
      <p className="eyebrow">Choose your gift</p><h2>Give with a grateful heart</h2>
      <div className="segmented"><button className={frequency === "one-time" ? "selected" : ""} onClick={() => setFrequency("one-time")}>One-time</button><button className={frequency === "monthly" ? "selected" : ""} onClick={() => setFrequency("monthly")}>Monthly</button></div>
      <div className="amount-grid">{[25,55,85,165].map(value => <button key={value} className={amount === value ? "selected" : ""} onClick={() => setAmount(value)}>${value}</button>)}</div>
      <label>Custom amount<div className="currency-input"><span>$</span><input type="number" min="1" value={amount} onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))} /></div></label>
      <button className="button wide" onClick={() => alert("Connect the church’s verified Zeffy or Stripe giving link here before accepting payments.")}>Continue securely · ${amount}</button>
      <small>No payment is collected in this demonstration. The church’s verified giving provider will be connected before launch.</small>
    </div>
  );
}
