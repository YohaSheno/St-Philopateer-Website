"use client";

import { useState } from "react";

type CalendarSyncProps = {
  googleUrl: string;
  iCalUrl: string;
};

export function CalendarSync({ googleUrl, iCalUrl }: CalendarSyncProps) {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy subscription link");
  const appleUrl = iCalUrl.replace(/^https:/, "webcal:");

  async function copySubscriptionLink() {
    try {
      await navigator.clipboard.writeText(iCalUrl);
      setCopyStatus("Copied!");
      window.setTimeout(() => setCopyStatus("Copy subscription link"), 2200);
    } catch {
      setCopyStatus("Select and copy the link below");
    }
  }

  return <div className="calendar-sync">
    <button
      type="button"
      className="button secondary dark calendar-sync-trigger"
      aria-expanded={open}
      aria-controls="calendar-sync-options"
      onClick={() => setOpen((value) => !value)}
    >
      Sync to calendar <span aria-hidden="true">＋</span>
    </button>

    {open && <div className="calendar-sync-panel" id="calendar-sync-options">
      <div className="calendar-sync-heading">
        <div>
          <span className="event-kind">Stay up to date</span>
          <h3>Add the church calendar</h3>
        </div>
        <button type="button" className="calendar-sync-close" aria-label="Close calendar options" onClick={() => setOpen(false)}>×</button>
      </div>

      <p>Subscribe once and future schedule changes will appear in your personal calendar automatically.</p>

      <div className="calendar-sync-options">
        <a href={googleUrl} target="_blank" rel="noreferrer">
          <span className="calendar-service-icon google" aria-hidden="true">G</span>
          <span><strong>Google Calendar</strong><small>Open Google and add the shared calendar</small></span>
          <b aria-hidden="true">↗</b>
        </a>
        <a href={appleUrl}>
          <span className="calendar-service-icon apple" aria-hidden="true">●</span>
          <span><strong>Apple Calendar</strong><small>Subscribe in the Calendar app</small></span>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <div className="calendar-copy-row">
        <label htmlFor="church-calendar-link">Outlook or another calendar app</label>
        <div>
          <input id="church-calendar-link" value={iCalUrl} readOnly onFocus={(event) => event.currentTarget.select()} />
          <button type="button" onClick={copySubscriptionLink}>{copyStatus}</button>
        </div>
        <small>Paste this URL into “Subscribe from web” or “Add calendar by URL.”</small>
      </div>
    </div>}
  </div>;
}
