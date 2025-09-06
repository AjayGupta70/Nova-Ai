"use client";

import { useState } from "react";
import type { DemoScheduleRequest } from "@/types";

export function DemoForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // store form reference immediately
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(form);
    const requiredFields = ["name", "email", "phone", "interest", "preferredDateTime"] as const;

    try {
      for (const field of requiredFields) {
        if (!formData.get(field)) throw new Error(`${field} is required`);
      }

      const payload: DemoScheduleRequest = {
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        phone: String(formData.get("phone")),
        interest: String(formData.get("interest")),
        preferredDateTime: String(formData.get("preferredDateTime")),
      };

      const frontendOnly = process.env.NEXT_PUBLIC_ENABLE_API !== "true";

      if (frontendOnly) {
        await new Promise((r) => setTimeout(r, 600));
        setSuccess("Demo booked! We'll contact you shortly.");
        form.reset(); // use stored reference
        return;
      }

      const res = await fetch("/api/demo-schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());
      setSuccess("Demo booked! We'll contact you shortly.");
      form.reset();
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  // Reset messages when user starts interacting with the form
  const handleInputChange = () => {
    if (success) setSuccess(null);
    if (error) setError(null);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Schedule a Demo</h2>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
        onFocus={handleInputChange} // clears messages on focus
      >
        <div className="grid gap-3 md:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Name"
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInputChange}
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            name="phone"
            required
            placeholder="Phone"
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInputChange}
          />
          <input
            name="interest"
            required
            placeholder="Service/Product Interested In"
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInputChange}
          />
        </div>
        <input
          name="preferredDateTime"
          required
          type="datetime-local"
          min={new Date().toISOString().slice(0, 16)} // prevents past dates
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={loading}
          className={`rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Booking..." : "Schedule Demo"}
        </button>
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
  