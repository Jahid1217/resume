"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
      }}
    >
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Your message" required />
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
      {sent && <p className="form-note">Thanks. Your message has been prepared successfully.</p>}
    </form>
  );
}
