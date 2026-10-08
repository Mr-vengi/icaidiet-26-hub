import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, type CSSProperties } from "react";
import { Navbar } from "@/components/Navbar";
import { SubmissionGuidelinesSection } from "@/components/SubmissionGuidelinesSection";
import {
  BrainCircuit,
  LineChart,
  Database,
  Cpu,
  Network,
  ShieldCheck,
  Bot,
  Sprout,
  CalendarDays,
  ExternalLink,
  Download,
  Video,
  FileText,
  FileCode,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/call-for-papers")({
  head: () => ({
    meta: [
      { title: "Call For Papers & Tracks — ICAIDIET'26" },
      {
        name: "description",
        content:
          "Call For Papers for ICAIDIET'26 — Eight conference tracks covering AI, Machine Learning, Data Science, IoT, Robotics, and Emerging Technologies.",
      },
    ],
  }),
  component: CallForPapersPage,
});

const TRACKS = [
  {
    icon: BrainCircuit,
    title: "Track 1: Artificial Intelligence & Intelligent Systems",
    topics: [
      "Generative AI & Large Language Models (LLMs)",
      "Multimodal Architectures & Neural Networks",
      "Reinforcement Learning & Adaptive Systems",
      "Explainable AI (XAI) & Trustworthy AI",
      "Knowledge Representation and Reasoning",
    ],
  },
  {
    icon: LineChart,
    title: "Track 2: Machine Learning & Advanced Analytics",
    topics: [
      "Supervised, Unsupervised & Self-Supervised Learning",
      "Transfer Learning & Domain Adaptation",
      "Automated Machine Learning (AutoML)",
      "Time-Series Analysis & Predictive Modeling",
      "High-Dimensional Feature Engineering",
    ],
  },
  {
    icon: Database,
    title: "Track 3: Data Science & Decision Intelligence",
    topics: [
      "Real-Time Streaming Big Data Analytics",
      "Decision Support & Intelligent Business Systems",
      "Data Visualization & Cognitive Analytics",
      "Data Privacy, Ethics & Governance Frameworks",
      "Scalable Cloud Data Pipelines",
    ],
  },
  {
    icon: Cpu,
    title: "Track 4: IoT, Edge Computing & Embedded Systems",
    topics: [
      "TinyML & Ultra-Low Power Edge AI",
      "Smart Sensor Networks & Wearables",
      "Embedded Hardware Acceleration for AI",
      "Fog-to-Cloud Distributed Computing",
      "Smart City & Industrial IoT Architectures",
    ],
  },
  {
    icon: Network,
    title: "Track 5: Communication Systems & Network Technologies",
    topics: [
      "5G / 6G Wireless Cellular Architectures",
      "AI-Optimized Software-Defined Networking (SDN)",
      "Optical Communications & Photonics",
      "RF, Microwave & Satellite Communications",
      "Cognitive Radio & Spectrum Management",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Track 6: Cybersecurity & Secure Computing",
    topics: [
      "AI-Driven Threat Intelligence & Intrusion Detection",
      "Zero-Trust Architecture & Identity Management",
      "Cloud Security & Secure Multiparty Computation",
      "Digital Forensics & Incident Response",
      "Post-Quantum Cryptography & Blockchain Security",
    ],
  },
  {
    icon: Bot,
    title: "Track 7: Robotics, Automation & Smart Industry",
    topics: [
      "Autonomous Navigation & Robot Vision",
      "Collaborative Robotics (Cobots) in Smart Factories",
      "Digital Twins & Industry 4.0 Systems",
      "Motion Planning & Reinforcement Control",
      "Additive Manufacturing & AI Diagnostics",
    ],
  },
  {
    icon: Sprout,
    title: "Track 8: Emerging Technologies & Sustainable AI",
    topics: [
      "AI for Renewable Energy & Climate Modeling",
      "Quantum Computing & Quantum Algorithms",
      "Smart Healthcare & Precision Medicine",
      "Metaverse, Spatial Computing, AR/VR",
      "Circular Economy & Green Tech Innovations",
    ],
  },
];

const DATES = [
  { label: "Paper Submission Deadline", date: "21st September 2026" },
  { label: "Acceptance Notification", date: "20th October 2026" },
  { label: "Early Bird Registration", date: "22nd October 2026" },
  { label: "Late Registration Period", date: "23rd – 28th October 2026" },
  { label: "Final Manuscript Notification", date: "2nd November 2026" },
  { label: "Conference Date", date: "18th December 2026", highlight: true },
];

function CallForPapersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-body text-slate-900">
      <Navbar activeSection="tracks" />

      {/* Header Banner */}
      <section className="relative w-full py-16 sm:py-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            Technical Research Areas
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-950">
            Call For Papers — Eight Core Tracks
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Submit original, unpublished research papers across foundational AI, intelligent cybernetics, and engineering breakthroughs.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.acadera.co.in/conferences/icaidiet-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700"
            >
              1. Submit via Acadera Portal
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://youtu.be/zy2JHdf3ahs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-xs transition-all hover:bg-blue-50"
            >
              2. Watch Guidelines Video
              <Video className="h-4 w-4 text-red-600" />
            </a>
            <a
              href="https://www.novelcheckr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-red-700"
            >
              3. Check Plagiarism (₹99)
              <ShieldCheck className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Tracks Grid */}
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-blue-950">
              Select Your Presentation Track
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Peer-reviewed and published in Wiley Scopus-indexed conference proceedings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {TRACKS.map((t, idx) => (
              <div
                key={t.title}
                className="rounded-2xl border border-blue-100 bg-white p-7 shadow-xs hover:shadow-md transition-all hover:border-blue-300"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <t.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Track 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-blue-950 leading-snug">
                      {t.title.replace(/Track \d+: /, "")}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 pl-4 list-disc marker:text-blue-500">
                  {t.topics.map((tp) => (
                    <li key={tp} className="leading-relaxed">
                      {tp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates Timeline */}
        <div className="rounded-2xl border border-blue-100 bg-white p-8 sm:p-10 shadow-sm">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Important Milestones
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-blue-950">
              Submission &amp; Registration Schedule
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATES.map((d) => (
              <div
                key={d.label}
                className={`rounded-xl p-5 border ${
                  d.highlight
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-slate-50 border-slate-200/80 text-slate-900"
                }`}
              >
                <p className={`text-xs font-semibold ${d.highlight ? "text-blue-100" : "text-slate-500"}`}>
                  {d.label}
                </p>
                <p className={`mt-1 font-serif text-lg font-bold ${d.highlight ? "text-white" : "text-blue-950"}`}>
                  {d.date}
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Author Submission Guidelines, Prep Rules, Strict AI Policy, and Templates */}
      <SubmissionGuidelinesSection />

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400 text-center text-xs">
        <p className="text-white font-serif font-bold text-base mb-2">
          ICAIDIET'26 — Muthayammal Engineering College
        </p>
        <p>© 2026 ICAIDIET'26. All rights reserved.</p>
      </footer>
    </div>
  );
}
