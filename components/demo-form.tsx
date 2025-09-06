"use client";

import { useState } from "react";

interface DemoScheduleRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  serviceInterest: string;
  projectDetails: string;
  preferredDemoTime: string;
}

export function DemoForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(form);

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "jobTitle",
      "serviceInterest",
      "projectDetails",
      "preferredDemoTime",
    ] as const;

    try {
      for (const field of requiredFields) {
        if (!formData.get(field)) throw new Error(`${field} is required`);
      }

      const payload: DemoScheduleRequest = {
        firstName: String(formData.get("firstName")),
        lastName: String(formData.get("lastName")),
        email: String(formData.get("email")),
        phoneNumber: String(formData.get("phoneNumber")),
        jobTitle: String(formData.get("jobTitle")),
        serviceInterest: String(formData.get("serviceInterest")),
        projectDetails: String(formData.get("projectDetails")),
        preferredDemoTime: String(formData.get("preferredDemoTime")),
      };

      const res = await fetch("http://localhost:8080/api/v1/demo-schedule/create", {
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

  const handleInputChange = () => {
    if (success) setSuccess(null);
    if (error) setError(null);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Schedule a Demo</h2>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
        onFocus={handleInputChange}
      >
        <div className="grid gap-3 md:grid-cols-2">
          <input name="firstName" required placeholder="First Name" className="input" onChange={handleInputChange} />
          <input name="lastName" required placeholder="Last Name" className="input" onChange={handleInputChange} />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <input name="email" type="email" required placeholder="Email" className="input" onChange={handleInputChange} />
          <input name="phoneNumber" required placeholder="Phone Number" className="input" onChange={handleInputChange} />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <input name="jobTitle" required placeholder="Job Title" className="input" onChange={handleInputChange} />
          <input name="serviceInterest" required placeholder="Service Interest" className="input" onChange={handleInputChange} />
        </div>
        <textarea
          name="projectDetails"
          required
          placeholder="Project Details"
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleInputChange}
        />
        <input
          name="preferredDemoTime"
          type="datetime-local"
          min={new Date().toISOString().slice(0, 16)}
          required
          className="input"
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
