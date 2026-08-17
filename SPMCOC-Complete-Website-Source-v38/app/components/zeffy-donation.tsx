"use client";

const formUrl = "https://www.zeffy.com/embed/donation-form/93939448-7803-4f6e-aa82-1ef0b34f2e14";

export function ZeffyDonation() {
  return <div className="zeffy-embed-shell">
    <iframe
      src={formUrl}
      title="Donation form powered by Zeffy"
      allow="payment *"
      loading="lazy"
      scrolling="yes"
    />
  </div>;
}
