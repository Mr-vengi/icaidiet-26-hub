import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { SubmissionGuidelinesSection } from "@/components/SubmissionGuidelinesSection";
import { SubmissionPortalHero } from "@/components/SubmissionPortalHero";
import { Send, FileText, Video, ExternalLink, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/guidelines")({
  head: () => ({
    meta: [
      { title: "Paper Submission Guidelines — ICAIDIET'26 | Muthayammal Engineering College" },
      {
        name: "description",
        content:
          "Official Author Paper Submission Guidelines, manuscript preparation instructions, Wiley template downloads, strict AI policy, and submission channels for ICAIDIET'26.",
      },
    ],
  }),
  component: GuidelinesPage,
});

function GuidelinesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-body text-slate-900">
      <Navbar activeSection="guidelines" />

      {/* Header Banner */}
      <section className="relative w-full py-16 sm:py-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            Author Instructions
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-950">
            Paper Submission Guidelines
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Essential formatting standards, ethics rules, Wiley manuscript preparation, and electronic submission instructions for ICAIDIET'26.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.acadera.co.in/conferences/icaidiet-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700"
            >
              Go to Submission Portal
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Conference_paper_Template.docx"
              download
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-2.5 text-sm font-semibold text-blue-900 transition-all hover:bg-blue-50"
            >
              <FileText className="h-4 w-4 text-blue-600" />
              Download Template (.docx)
            </a>
          </div>
        </div>
      </section>

      {/* Main Guidelines Section */}
      <main>
        <SubmissionGuidelinesSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400 text-center text-xs">
        <p className="text-white font-serif font-bold text-base mb-2">
          ICAIDIET'26 — Muthayammal Engineering College
        </p>
        <p className="text-slate-400 mb-3">
          Department of Computer Science &amp; Engineering in association with Yorkville University, Canada.
        </p>
        <p>© 2026 ICAIDIET'26. All rights reserved.</p>
      </footer>
    </div>
  );
}
