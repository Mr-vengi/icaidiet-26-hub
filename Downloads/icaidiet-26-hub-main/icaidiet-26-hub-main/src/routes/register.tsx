import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — ICAIDIET'26" },
      {
        name: "description",
        content: "Register for ICAIDIET'26 — International Conference on AI-Driven Innovation in Engineering & Technology",
      },
    ],
  }),
  component: Register,
});

const FEES = [
  { category: "Author — Conference Only (Indian)", early: "₹ 2,000", late: "₹ 2,500" },
  { category: "Author — With Scopus-Indexed Proceedings (Indian)", early: "₹ 10,000", late: "₹ 11,000" },
  { category: "Author — Conference with Proceedings (Foreign)", early: "$ 400", late: "$ 500" },
  { category: "Industry Delegates — Conference with Proceedings", early: "₹ 12,000", late: "₹ 13,000" },
];

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    institution: "",
    category: "Author — With Scopus-Indexed Proceedings (Indian)",
    country: "India",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Registration successful! Check your email for confirmation.",
        });
        toast.success("Registration Submitted!", {
          description: "We'll send you a confirmation email shortly.",
        });
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          institution: "",
          category: "Author — With Scopus-Indexed Proceedings (Indian)",
          country: "India",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.statusMessage || "Registration failed. Please try again.",
        });
        toast.error("Registration Failed", {
          description: data.statusMessage || "Something went wrong.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
      toast.error("Network Error", {
        description: "Please check your connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-navy">
            Full Name *
          </label>
          <input
            required
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            Email Address *
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-navy">
            Phone Number *
          </label>
          <input
            required
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-medium text-navy">
            Country *
          </label>
          <input
            required
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Your country"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div>
        <label htmlFor="institution" className="mb-2 block text-sm font-medium text-navy">
          Institution / Organization *
        </label>
        <input
          required
          type="text"
          id="institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          placeholder="Your institution or organization"
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-ring"
        />
      </div>

      <div>
        <label htmlFor="category" className="mb-2 block text-sm font-medium text-navy">
          Registration Category *
        </label>
        <select
          required
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-ring"
        >
          <option value="Author — Conference Only (Indian)">Author — Conference Only (Indian)</option>
          <option value="Author — With Scopus-Indexed Proceedings (Indian)">
            Author — With Scopus-Indexed Proceedings (Indian)
          </option>
          <option value="Author — Conference with Proceedings (Foreign)">
            Author — Conference with Proceedings (Foreign)
          </option>
          <option value="Industry Delegates — Conference with Proceedings">
            Industry Delegates — Conference with Proceedings
          </option>
        </select>
      </div>

      {submitStatus.type && (
        <div
          className={`flex items-start gap-3 rounded-lg p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-900"
              : "bg-red-50 text-red-900"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          )}
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading && <Loader className="h-4 w-4 animate-spin" />}
        {isLoading ? "Registering..." : "Register Now"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Early bird registration closes 22nd October 2026. Accepted papers will be published in Scopus-indexed
        proceedings with ISBN and DOI.
      </p>
    </form>
  );
}

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Mail className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-800 tracking-tight text-navy">
              ICAIDIET<span className="text-primary">'26</span>
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Registration</p>
          <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-navy sm:text-5xl">
            Join ICAIDIET<span className="text-primary">'26</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Register now to participate in the International Conference on AI-Driven Innovation in Engineering &
            Technology
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Fee Structure */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-ice p-6 sticky top-24">
              <h2 className="font-display text-lg font-bold text-navy">Registration Fees</h2>
              <p className="mt-2 text-sm text-muted-foreground">Early bird closes 22nd Oct 2026</p>

              <div className="mt-6 space-y-3">
                {FEES.map((f) => (
                  <div
                    key={f.category}
                    className="rounded-lg border border-border bg-white p-3 text-sm"
                  >
                    <p className="font-semibold text-navy text-xs">{f.category}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Early</span>
                      <span className="font-bold text-primary">{f.early}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Late</span>
                      <span className="font-bold text-gold">{f.late}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
                <p className="font-semibold">📋 Scopus Indexed</p>
                <p className="mt-1 text-xs">All accepted papers published with ISBN & DOI</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="card-glow rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-bold text-navy">Complete Your Registration</h3>
              <p className="mt-2 text-muted-foreground">Fill in the form below to register for the conference</p>
              <RegistrationForm />
            </div>
          </div>
        </div>

        {/* Conference Info */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-ice p-6">
            <h4 className="font-display font-bold text-navy">📅 Dates</h4>
            <p className="mt-2 text-sm text-muted-foreground">20th & 21st November 2026</p>
          </div>
          <div className="rounded-xl border border-border bg-ice p-6">
            <h4 className="font-display font-bold text-navy">🌐 Mode</h4>
            <p className="mt-2 text-sm text-muted-foreground">Hybrid (Online & Offline)</p>
          </div>
          <div className="rounded-xl border border-border bg-ice p-6">
            <h4 className="font-display font-bold text-navy">📍 Location</h4>
            <p className="mt-2 text-sm text-muted-foreground">Muthayammal Engineering College, TN</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <p className="font-display text-xl font-bold">
            ICAIDIET<span className="text-gold">'26</span>
          </p>
          <p className="max-w-xl text-sm text-primary-foreground/70">
            International Conference on AI-Driven Innovation in Engineering and Technology — Muthayammal
            Engineering College.
          </p>
        </div>
      </footer>
    </div>
  );
}
