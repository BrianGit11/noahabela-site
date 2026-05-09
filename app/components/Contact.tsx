"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqenyrnd";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-charcoal py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Get in Touch
        </h2>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
          <a
            href="mailto:noah@noahabela.com"
            className="text-muted hover:text-white transition-colors text-sm font-medium"
          >
            noah@noahabela.com
          </a>
          <a
            href="https://twitter.com/Noah_Abela"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors text-sm font-medium"
          >
            @Noah_Abela
          </a>
          <a
            href="https://instagram.com/noahabela07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors text-sm font-medium"
          >
            @noahabela07
          </a>
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div className="text-center py-12">
            <div className="text-gold text-2xl font-bold mb-3">
              Message received.
            </div>
            <p className="text-muted text-sm">Noah will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-muted font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-charcoal-mid border border-charcoal-light text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="school"
                  className="block text-xs uppercase tracking-widest text-muted font-medium mb-2"
                >
                  School / Program
                </label>
                <input
                  id="school"
                  name="school"
                  type="text"
                  className="w-full bg-charcoal-mid border border-charcoal-light text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
                  placeholder="University or program"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-muted font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-charcoal-mid border border-charcoal-light text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-widest text-muted font-medium mb-2"
                >
                  Phone <span className="text-muted/50 normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full bg-charcoal-mid border border-charcoal-light text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-widest text-muted font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-charcoal-mid border border-charcoal-light text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40 resize-none"
                placeholder="Your message..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-xs">
                Something went wrong. Please email noah@noahabela.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto bg-gold text-white font-bold text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
