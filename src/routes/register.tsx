import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  AlertCircle,
  Loader,
  ExternalLink,
  ShieldCheck,
  Video,
  Send,
  FileText,
  FileCode,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { SubmissionPortalHero } from "@/components/SubmissionPortalHero";
import { SubmissionGuidelinesSection } from "@/components/SubmissionGuidelinesSection";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register & Paper Submission Portal — ICAIDIET'26" },
      {
        name: "description",
        content:
          "Submit your paper and register for ICAIDIET'26 — International Conference on AI-Driven Innovation in Engineering & Technology. Hosted by Muthayammal Engineering College. Published Partner: Wiley, Indexed in Scopus.",
      },
    ],
  }),
  component: Register,
});

const FEES = [
  { category: "Registration Fee — UG Students", cost: "₹ 1,000" },
  { category: "Registration Fee — PG Students", cost: "₹ 1,250" },
  { category: "Publication Cost — UG Students", cost: "₹ 10,450" },
  { category: "Publication Cost — PG Students", cost: "₹ 13,500" },
  { category: "UG Total (Registration + Publication)", cost: "₹ 11,450" },
  { category: "PG Total (Registration + Publication)", cost: "₹ 14,750" },
];

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    institution: "",
    category: "UG Students — Registration Fee (₹ 1,000)",
    country: "India",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-900">
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
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900">
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
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phoneNumber" className="mb-2 block text-sm font-semibold text-slate-900">
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
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-semibold text-slate-900">
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
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="institution" className="mb-2 block text-sm font-semibold text-slate-900">
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
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      <div>
        <label htmlFor="category" className="mb-2 block text-sm font-semibold text-slate-900">
          Registration Category *
        </label>
        <select
          required
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="UG Students — Registration Fee (₹ 1,000)">
            UG Students — Registration Fee (₹ 1,000)
          </option>
          <option value="PG Students — Registration Fee (₹ 1,250)">
            PG Students — Registration Fee (₹ 1,250)
          </option>
          <option value="UG Students — Publication Cost (₹ 10,450)">
            UG Students — Publication Cost (₹ 10,450)
          </option>
          <option value="PG Students — Publication Cost (₹ 13,500)">
            PG Students — Publication Cost (₹ 13,500)
          </option>
          <option value="UG Students — Total (Registration + Publication ₹ 11,450)">
            UG Students — Total (Registration + Publication ₹ 11,450)
          </option>
          <option value="PG Students — Total (Registration + Publication ₹ 14,750)">
            PG Students — Total (Registration + Publication ₹ 14,750)
          </option>
        </select>
      </div>

      {submitStatus.type && (
        <div
          className={`flex items-start gap-3 rounded-lg p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-900 border border-green-200"
              : "bg-red-50 text-red-900 border border-red-200"
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
        className="w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
      >
        {isLoading && <Loader className="h-4 w-4 animate-spin" />}
        {isLoading ? "Submitting Registration..." : "Complete Registration"}
      </button>

      <p className="text-center text-xs text-slate-500">
        Early bird registration closes 22nd October 2026. Accepted papers will be published in Wiley
        Scopus-indexed proceedings with ISBN and DOI.
      </p>
    </form>
  );
}

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-body text-slate-900">
      {/* 1. Header with Muthayammal Logo & Blue-White Theme */}
      <Navbar activeSection="register" />

      {/* 2. Welcome Banner & 4 Action Buttons in Blue-White Theme */}
      <SubmissionPortalHero />

      {/* 3. Detailed Author Portal & Resources Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            Official Submission Channels &amp; Guidelines
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
            Author Resource Center
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Everything you need to format, check originality, and submit your research manuscript for ICAIDIET'26.
          </p>
        </div>

        {/* 3 Prominent Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {/* Item 1: Acadera Paper Submission */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Send className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-200">
                  Primary Portal
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-950">1. Submit Your Paper</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Submit your original research through our official Acadera submission portal. Fast-track peer-review process and status tracking.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://www.acadera.co.in/conferences/icaidiet-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
              >
                Go to Acadera Portal
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Item 2: Submission Guidelines (YouTube) */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Video className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700 border border-red-200">
                  Video Guide
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-950">2. Submission Guidelines</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Watch the complete step-by-step video guide explaining manuscript formatting, citation style, and how to upload via the portal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://youtu.be/zy2JHdf3ahs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-900 transition-all hover:bg-blue-50"
              >
                Watch on YouTube
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Item 3: NovelCheckr Plagiarism Checker */}
          <div className="rounded-2xl border-2 border-red-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-red-500/10 pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-extrabold text-white animate-pulse">
                  Only ₹99
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">3. Plagiarism Checker</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Verify similarity score prior to submission via NovelCheckr. Conference guidelines strictly require similarity under 15% with a valid report.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://www.novelcheckr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#B91C1C]"
              >
                Check at NovelCheckr (₹99)
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded YouTube Guidelines Player in Blue & Dark Frame */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-blue-900/30 bg-slate-900 text-white shadow-xl">
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/30 px-3 py-1 text-xs font-bold text-red-400">
                <Video className="h-3.5 w-3.5" /> Video Tutorial
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight text-white">
                How to Format and Submit Your Manuscript
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ensure your manuscript meets Wiley publishing requirements and passes editorial screening on first submission. Watch our walkthrough on YouTube.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/Conference_paper_Template.docx"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-200" /> Download Word Template
                </a>
                <a
                  href="/Wiley_LaTeX_Template.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors"
                >
                  <FileCode className="h-4 w-4 text-blue-300" /> Download LaTeX Template
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black border border-slate-800 shadow-2xl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/zy2JHdf3ahs"
                  title="ICAIDIET'26 Submission Guidelines Video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Author Submission Guidelines, Manuscript Prep & Strict AI Policy */}
        <div className="mb-16">
          <SubmissionGuidelinesSection />
        </div>

        {/* 4. Registration Fees & Complete Form */}
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          {/* Fee Structure */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 sticky top-28 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-blue-950">Registration Fees</h2>
              <p className="mt-1 text-xs text-slate-500">Early bird closes 22nd Oct 2026</p>

              <div className="mt-5 space-y-2.5">
                {FEES.map((f) => (
                  <div
                    key={f.category}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-sm shadow-xs"
                  >
                    <p className="font-semibold text-slate-800 text-xs">{f.category}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Amount</span>
                      <span className="font-bold text-blue-700">{f.cost}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs text-blue-950">
                <p className="font-bold flex items-center gap-1.5 text-blue-900">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" /> Scopus Indexed Proceedings
                </p>
                <p className="mt-1 leading-relaxed text-blue-900/80">
                  All accepted &amp; presented papers published with ISBN and DOI as per publisher norms.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-red-200 bg-red-50/70 p-4 text-xs text-red-950">
                <p className="font-bold flex items-center gap-1.5 text-red-900">
                  <ShieldCheck className="h-3.5 w-3.5 text-red-600" /> Plagiarism Requirement
                </p>
                <p className="mt-1 leading-relaxed text-red-900/80">
                  Similarity must be under 15%. Use{" "}
                  <a
                    href="https://www.novelcheckr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-red-700"
                  >
                    NovelCheckr (₹99)
                  </a>{" "}
                  to generate a valid Turnitin plagiarism report.
                </p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-blue-950">Complete Your Registration</h3>
              <p className="mt-1 text-sm text-slate-600 mb-6">
                Fill in the details below to complete participant or author registration.
              </p>
              <RegistrationForm />
            </div>
          </div>
        </div>

        {/* 5. Key Highlights / Dates */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 text-blue-950 font-serif font-bold text-lg">
              <Calendar className="h-5 w-5 text-blue-600" /> Tentative Date
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-800">18th December 2026</p>
            <p className="text-xs text-slate-500 mt-1">Presentation tracks &amp; keynotes</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 text-blue-950 font-serif font-bold text-lg">
              <Clock className="h-5 w-5 text-blue-600" /> Mode of Conduct
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-800">Hybrid Mode (Online &amp; On-Campus)</p>
            <p className="text-xs text-slate-500 mt-1">Global digital streams &amp; live sessions</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 text-blue-950 font-serif font-bold text-lg">
              <MapPin className="h-5 w-5 text-blue-600" /> Venue
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-800">Muthayammal Engineering College</p>
            <p className="text-xs text-slate-500 mt-1">Rasipuram, Namakkal, Tamil Nadu, India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <p className="font-serif text-xl font-bold text-white">
            ICAIDIET<span className="text-blue-400">'26</span>
          </p>
          <p className="max-w-xl text-xs sm:text-sm text-slate-400">
            International Conference on AI-Driven Innovation in Engineering and Technology. Hosted by Muthayammal Engineering College. Published Partner: Wiley. Indexed in Scopus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 pt-2">
            <a href="https://www.acadera.co.in/conferences/icaidiet-2026" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Acadera Submission
            </a>
            <span>•</span>
            <a href="https://youtu.be/zy2JHdf3ahs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Submission Guidelines
            </a>
            <span>•</span>
            <a href="https://www.novelcheckr.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              NovelCheckr (₹99)
            </a>
            <span>•</span>
            <a href="/brochure.png" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Brochure
            </a>
            <span>•</span>
            <a href="https://mec.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              MEC Website
            </a>
          </div>
          <p className="text-xs text-slate-600 mt-2">
            © 2026 ICAIDIET'26, Muthayammal Engineering College. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
