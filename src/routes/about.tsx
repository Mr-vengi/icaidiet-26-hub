import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import {
  GraduationCap,
  Globe,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Building,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Conference — ICAIDIET'26 | Muthayammal Engineering College" },
      {
        name: "description",
        content:
          "About ICAIDIET'26 — International Conference on AI-Driven Innovation in Engineering & Technology. Organized by Department of CSE, Muthayammal Engineering College in association with University Canada West, Canada.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-body text-slate-900">
      <Navbar activeSection="about" />

      {/* Hero Banner */}
      <section className="relative w-full py-16 sm:py-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            International Conference
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-950">
            About ICAIDIET<span className="text-blue-600">'26</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Where Artificial Intelligence meets engineering excellence. A global hybrid platform uniting researchers, academicians, and industry pioneers worldwide.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/call-for-papers"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700"
            >
              Explore Call For Papers
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50"
            >
              Registration &amp; Submissions
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        {/* About Section */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-base leading-relaxed text-slate-700">
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-blue-950">
                Bridging Global Research with Next-Gen Intelligence
              </h2>
            </div>
            <p>
              The <strong>International Conference on AI-Driven Innovations in Engineering and Technology (ICAIDIET'26)</strong> serves as a premier dynamic forum that brings together leading academicians, researchers, and industry professionals from across the globe to explore the transformative potential of Artificial Intelligence.
            </p>
            <p>
              Conducted in <strong>hybrid mode</strong>, the conference aims to foster high-impact interdisciplinary collaboration, technical knowledge exchange, and foundational innovation across emerging technological fields.
            </p>
            <p>
              ICAIDIET'26 emphasizes cutting-edge research, next-generation machine learning frameworks, data science breakthroughs, cyber-physical systems, and practical industrial applications.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                <Building className="h-4 w-4" /> Organized By
              </div>
              <h3 className="font-serif text-lg font-bold text-blue-950">
                Department of Computer Science &amp; Engineering
              </h3>
              <p className="text-sm font-semibold text-slate-800 mt-1">
                Muthayammal Engineering College (Autonomous)
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Approved by AICTE, Affiliated to Anna University. Estd. 2000. Muthayammal Engineering College, Rasipuram, Tamil Nadu-637408.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                <Globe className="h-4 w-4" /> In Association With
              </div>
              <h3 className="inline-flex max-w-full items-center rounded-sm bg-slate-950 px-3 py-2">
                <img
                  src="https://wpvip.guscancolleges.ca/ucanwest/wp-content/uploads/sites/3/2022/12/UCW-logo-outline-2x.webp?w=512&quality=85"
                  alt="University Canada West, Canada"
                  className="h-auto max-h-12 w-auto max-w-full object-contain"
                />
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                A globally recognized Canadian university recognized for career-focused education and academic excellence.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                <Award className="h-4 w-4" /> Publishing Partner
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 shadow-sm">
                <div className="text-center text-[2.3rem] font-black leading-none tracking-[-0.12em] text-slate-950 sm:text-[3rem]">
                  WILEY
                </div>
                <div className="mt-2 flex items-start justify-center">
                  <div className="text-[2.2rem] font-black leading-none tracking-[-0.08em] text-slate-950 sm:text-[2.7rem]">
                    Scopus
                    <span className="align-super text-[0.7rem] font-bold tracking-normal">®</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                All accepted &amp; presented papers published in Scopus-indexed conference book proceedings with ISBN &amp; DOI.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
              <CheckCircle className="h-6 w-6" />
            </span>
            <h4 className="font-serif text-lg font-bold text-blue-950 mb-2">Rigorous Peer Review</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              All submissions undergo objective, thorough double-blind peer review by international academic experts.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
              <BookOpen className="h-6 w-6" />
            </span>
            <h4 className="font-serif text-lg font-bold text-blue-950 mb-2">Wiley Proceedings</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Conference proceedings compiled and submitted for inclusion in Wiley and Scopus indexed publications.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
              <Globe className="h-6 w-6" />
            </span>
            <h4 className="font-serif text-lg font-bold text-blue-950 mb-2">Hybrid Format</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Participate on-site at Muthayammal Engineering College or present remotely via global digital streams.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg shadow-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold">Ready to submit your manuscript?</h3>
            <p className="text-sm text-blue-100 mt-1">
              Submit by 21st September 2026. Review our author guidelines and templates.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://www.acadera.co.in/conferences/icaidiet-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-blue-700 shadow-sm transition-all hover:bg-blue-50"
            >
              Submit Paper
            </a>
            <Link
              to="/"
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

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
