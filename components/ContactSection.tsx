"use client";

import React, { useState } from "react";
import useSpotlight from "../hooks/useSpotlight";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { ref: formRef, spotlightProps: formSpotlight } = useSpotlight<HTMLDivElement>();

  const RATE_LIMIT_MINUTES = 5;
  const RATE_LIMIT_KEY = "lastSubmission";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
    const now = new Date().getTime();

    if (lastSubmission) {
      const timeElapsed = now - parseInt(lastSubmission);
      const minutesElapsed = timeElapsed / (1000 * 60);

      if (minutesElapsed < RATE_LIMIT_MINUTES) {
        setSubmitError(
          `Please wait ${Math.ceil(
            RATE_LIMIT_MINUTES - minutesElapsed
          )} minutes before sending another message.`
        );
        setIsSubmitting(false);
        return;
      }
    }

    const formData = new FormData(e.currentTarget);

    const message = {
      embeds: [
        {
          title: "New Contact Form Submission",
          description: "From https://hadi.cherkaoui.ch",
          color: 3447003,
          fields: [
            {
              name: "Name",
              value: formData.get("name") as string,
              inline: true,
            },
            {
              name: "Email",
              value: formData.get("email") as string,
              inline: true,
            },
            {
              name: "Message",
              value: formData.get("message") as string,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Portfolio Contact Form",
          },
        },
      ],
    };

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new Error("Discord webhook URL not configured");
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        localStorage.setItem(RATE_LIMIT_KEY, now.toString());
        setSubmitSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitError("Error sending message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-tech text-[var(--accent-emerald)] mb-4 block">
            Contact Me
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
            Get in{" "}
            <span className="emerald-accent">Touch</span>
          </h2>
          <div className="w-20 h-0.5 bg-[var(--accent-emerald)] mx-auto mb-6" />
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            If you want to work together, talk about Rust, or ask about the
            homelab — reach out.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Contact form */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div
              ref={formRef}
              onMouseMove={formSpotlight.onMouseMove}
              className="glass-card spotlight-card p-8 hover-lift"
            >
              <h3 className="font-headline text-xl mb-6 text-[var(--accent-emerald)]">
                Send a Message
              </h3>

              <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-[var(--text-secondary)]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[var(--darker-bg)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--accent-emerald)] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-[var(--text-secondary)]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[var(--darker-bg)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--accent-emerald)] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-[var(--text-secondary)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--darker-bg)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:border-[var(--accent-emerald)] transition-colors resize-none"
                  ></textarea>
                </div>

                {submitError && (
                  <div className="text-red-400 text-sm p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    {submitError}
                  </div>
                )}

                {submitSuccess && (
                  <div className="text-emerald-400 text-sm p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    Message sent successfully!
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="glass-card p-6">
              <h3 className="font-headline text-xl mb-6 text-[var(--text-primary)]">
                Find me here
              </h3>
              <div>
                {[
                  {
                    label: "GitHub",
                    value: "HadiCherkaoui",
                    href: "https://github.com/HadiCherkaoui",
                  },
                  {
                    label: "GitLab",
                    value: "gitlab.cherkaoui.ch",
                    href: "https://gitlab.cherkaoui.ch/HadiCherkaoui",
                  },
                  {
                    label: "Documentation",
                    value: "docs.cherkaoui.ch",
                    href: "https://docs.cherkaoui.ch",
                  },
                  {
                    label: "Homelab Docs",
                    value: "docs.cherkaoui.ch/homelab",
                    href: "https://docs.cherkaoui.ch/homelab",
                  },
                  {
                    label: "TryHackMe",
                    value: "HadiCherkaoui",
                    href: "https://tryhackme.com/p/HadiCherkaoui",
                  },
                  {
                    label: "Email",
                    value: "contact@hadi.cherkaoui.ch",
                    href: "mailto:contact@hadi.cherkaoui.ch",
                  },
                  {
                    label: "Services",
                    value: "PC & Server Services",
                    href: "https://cherkaoui.ch",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-between py-3 border-b border-[var(--border-subtle)] last:border-0 group"
                  >
                    <span className="text-sm text-[var(--text-muted)] font-tech uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent-amber)] transition-colors">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Location</p>
                <p className="text-sm text-[var(--text-secondary)]">Zurich, Switzerland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
