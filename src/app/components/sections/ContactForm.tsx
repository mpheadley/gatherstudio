// Contact form with Formspree integration, honeypot, and GA4 tracking.
// Only client component in the section library.

"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { trackFormSubmit } from "@/lib/ga4";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  formspreeId?: string;
  heading?: string;
  submitLabel?: string;
  successHeading?: string;
  successMessage?: string;
  serviceOptions?: string[];
}

export default function ContactForm({
  formspreeId,
  heading = "Send Us a Message",
  submitLabel = "Send Message",
  successHeading = "Thank You!",
  successMessage = "We\u2019ve received your message and will get back to you shortly.",
  serviceOptions,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const id = formspreeId ?? siteConfig.formspreeId;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        trackFormSubmit("contact");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(
          data?.errors?.[0]?.message || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="card bg-green-50 border border-green-200 text-center py-12"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-2xl font-bold text-green-800 mb-2">
          {successHeading}
        </h2>
        <p className="text-green-700">{successMessage}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-[var(--btn-radius)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition";

  return (
    <div>
      {heading && (
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input
          type="text"
          name="_gotcha"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--dark)] mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[var(--dark)] mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--dark)] mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
          />
        </div>

        {serviceOptions && serviceOptions.length > 0 && (
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-[var(--dark)] mb-1"
            >
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              className={inputClass}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--dark)] mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${inputClass} resize-y`}
          />
        </div>

        {status === "error" && (
          <div className="text-red-600 text-sm" role="alert" aria-live="polite">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
