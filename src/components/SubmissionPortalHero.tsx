import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, ExternalLink, Video, ShieldCheck, CheckCircle2, X, FileCode } from "lucide-react";

interface SubmissionPortalHeroProps {
  showQuickDetails?: boolean;
}

export function SubmissionPortalHero({ showQuickDetails = true }: SubmissionPortalHeroProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full py-14 sm:py-18 md:py-20 border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Titles */}
          <div className="space-y-1.5 sm:space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-balance">
              Welcome To ICAIDIET'26
            </h2>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-blue-700">
              Paper Submission Portal
            </p>
          </div>

          {/* 4 Action Buttons Grid in Blue & White Theme */}
          <div className="mt-8 sm:mt-10 mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {/* 1. Go to Submission Portal -> */}
            <a
              href="https://www.acadera.co.in/conferences/icaidiet-2026"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-submission-portal"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-4 text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Go to Submission Portal</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

            {/* 2. Author Guidelines */}
            <Link
              to="/guidelines"
              id="btn-author-guidelines"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 hover:border-blue-400 hover:bg-slate-50/80 px-6 py-4 text-base font-semibold text-slate-800 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Author Guidelines</span>
              <ArrowRight className="h-4 w-4 text-blue-600 opacity-70" />
            </Link>

            {/* 3. Plagiarism Checker at ₹99 */}
            <a
              href="https://www.novelcheckr.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-plagiarism-checker"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] px-6 py-4 text-base font-bold text-white shadow-md shadow-red-600/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Plagiarism Checker at ₹99</span>
              <ExternalLink className="h-3.5 w-3.5 text-white/80" />
            </a>

            {/* 4. Download Template */}
            <a
              href="/Conference_paper_Template.docx"
              download="ICAIDIET26_Paper_Template.docx"
              id="btn-download-template"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-6 py-4 text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Download Template</span>
              <Download className="h-4 w-4 shrink-0 text-white/80" />
            </a>
          </div>

          {/* Quick Helper Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-600 transition-colors cursor-pointer"
            >
              <Video className="h-4 w-4 text-red-600 shrink-0" />
              <span>Watch Submission Video Tutorial</span>
            </button>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
            <a
              href="/Wiley_LaTeX_Template.pdf"
              download="Wiley_LaTeX_Template.pdf"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-700 hover:underline transition-colors"
            >
              <FileCode className="h-3.5 w-3.5 text-blue-600 shrink-0" />
              <span>LaTeX Template (.pdf)</span>
            </a>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Plagiarism &lt; 15% Required</span>
            </span>
          </div>
        </div>
      </section>

      {/* Video Modal if author clicks Watch Video Tutorial */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl border border-blue-900/40">
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 bg-slate-900 text-white">
              <span className="font-semibold text-sm flex items-center gap-2">
                <Video className="h-4 w-4 text-red-500" /> ICAIDIET'26 Paper Submission Guidelines
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/zy2JHdf3ahs?autoplay=1"
                title="ICAIDIET'26 Submission Guidelines"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-slate-900 text-xs text-slate-300 flex items-center justify-between">
              <span>Follow the instructions step by step to prepare and submit your manuscript.</span>
              <a
                href="https://youtu.be/zy2JHdf3ahs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Open in YouTube <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
