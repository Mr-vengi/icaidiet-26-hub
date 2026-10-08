import React from "react";
import {
  FileText,
  FileCode,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Send,
  Video,
  BookOpen,
  Info,
  Download,
  Check,
} from "lucide-react";

export function SubmissionGuidelinesSection() {
  const guidelines = [
    {
      num: "01",
      title: "Official Template & Language",
      desc: "Manuscripts must be prepared using the official conference template and written in formal academic English.",
    },
    {
      num: "02",
      title: "Strict 12-Page Limit",
      desc: "Papers are strictly limited to 12 pages (including title, references, figures, and tables).",
    },
    {
      num: "03",
      title: "Typography & Line Spacing",
      desc: "Formatting should follow: Times New Roman, 12 pt font, single line spacing, with properly structured sections.",
    },
    {
      num: "04",
      title: "High-Resolution Graphics & Text Tables",
      desc: "All figures, tables, and illustrations must be of high resolution (minimum 300 dpi) and appropriately captioned. Tables must be text-based (not images).",
    },
    {
      num: "05",
      title: "Numeric Citation Style",
      desc: "References must follow a numeric citation style [1], [2], [3]… and strictly follow the template style (Author, Title, Journal, Volume, Issue, Year).",
    },
    {
      num: "06",
      title: "Similarity Index Below 15%",
      desc: "The overall similarity index must be below 15%, with no significant overlap from a single source.",
    },
    {
      num: "07",
      title: "Originality & Scholarly Ethics",
      desc: "Submissions must represent original scholarly work not under review elsewhere. Plagiarism, duplicate submission, or unethical practices will lead to immediate rejection.",
    },
    {
      num: "08",
      title: "Publisher Screening & Peer Review",
      desc: "Manuscripts must comply with Wiley publisher screening, peer-review standards, and editorial policies.",
    },
    {
      num: "09",
      title: "Desk Rejection Clause",
      desc: "Papers not conforming to formatting and ethical requirements will be desk rejected without review.",
    },
    {
      num: "10",
      title: "Acceptance & Registration",
      desc: "Upon acceptance, authors must complete registration and payment within the stipulated timeline for inclusion in the conference proceedings.",
    },
    {
      num: "11",
      title: "Supplementary Plagiarism Report",
      desc: "Authors are requested to submit the Plagiarism Report of their paper as a supplementary document during final manuscript submission.",
    },
    {
      num: "12",
      title: "Quality Checks & Scopus Indexing",
      desc: "Final acceptance and publication are subject to publisher quality checks and indexing criteria; inclusion in indexed databases (e.g., Scopus) depends on meeting all required standards.",
    },
  ];

  const manuscriptPrepRules = [
    "Manuscripts must be prepared using the specific Journal Template without page numbers or running heads.",
    "Content created through generative AI tools is strictly prohibited and will not be reviewed.",
    "Figures must be high resolution (300 dpi+) and tables must be text-based (not images).",
    "Do not use academic titles (e.g., Dr., Prof.) or positions in author affiliations.",
    "Include full address, affiliation, and email for all authors.",
    "Clearly specify one corresponding author for proofreading.",
    "References must strictly follow the template style (Author, Title, Journal, Volume, Issue, Year).",
  ];

  return (
    <section id="submission-guidelines" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            <BookOpen className="h-3.5 w-3.5 text-blue-600" />
            Official Submission Guidelines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Author Submission Guidelines
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Authors are invited to submit original, unpublished, and high-quality research papers that are not under consideration for publication elsewhere. All submissions must strictly adhere to the following guidelines in line with <strong>Wiley publication standards</strong> and indexing requirements.
          </p>
        </div>

        {/* 12 Core Author Guidelines Grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guidelines.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-700 border border-blue-100">
                    {item.num}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 opacity-80" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Strict AI Policy Alert Box */}
        <div className="rounded-2xl border-2 border-red-300 bg-red-50/70 p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-red-600 px-2 py-0.5 text-xs font-extrabold text-white uppercase tracking-wider">
                  Mandatory Policy
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-red-950">
                  Strict AI Policy
                </h3>
              </div>
              <p className="text-sm font-semibold text-red-900 leading-relaxed pt-1">
                Content created through generative AI tools is strictly prohibited and will not be reviewed.
              </p>
              <p className="text-xs text-red-800/80 leading-relaxed">
                All submitted manuscripts are subjected to rigorous originality and AI-detection screening. Non-compliant papers will be summarily rejected prior to peer-review.
              </p>
            </div>
          </div>
        </div>

        {/* Manuscript Prep & Download Cards */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
          {/* Left: Manuscript Prep Checklist */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Formatting Requirements
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Manuscript Preparation Checklist
              </h3>
            </div>
            <ul className="space-y-3">
              {manuscriptPrepRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Templates Download & Plagiarism Checker */}
          <div className="space-y-5">
            {/* Download Templates Card */}
            <div className="rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/60 to-white p-6 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Official Templates
                </span>
                <h4 className="font-serif text-lg font-bold text-slate-900 mt-1">
                  Download Conference Templates
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Ensure your paper complies precisely with Wiley formatting guidelines.
                </p>
              </div>

              <div className="space-y-2.5">
                <a
                  href="/Conference_paper_Template.docx"
                  download="ICAIDIET26_Paper_Template.docx"
                  className="flex items-center justify-between rounded-xl bg-slate-900 hover:bg-slate-800 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 text-blue-400" />
                    Download Word Template (.docx)
                  </span>
                  <Download className="h-4 w-4 text-white/80" />
                </a>

                <a
                  href="/Wiley_LaTeX_Template.pdf"
                  download="Wiley_LaTeX_Template.pdf"
                  className="flex items-center justify-between rounded-xl bg-white border border-slate-300 hover:border-blue-400 hover:bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-xs transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <FileCode className="h-4 w-4 text-blue-600" />
                    Download LaTeX Template (.pdf)
                  </span>
                  <Download className="h-4 w-4 text-slate-600" />
                </a>
              </div>
            </div>

            {/* Plagiarism Checker Card */}
            <div className="rounded-2xl border border-red-200 bg-red-50/40 p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Similarity &lt; 15% Required
                </span>
                <span className="rounded-full bg-red-600 text-white px-2 py-0.5 text-xs font-bold">
                  ₹99 Only
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-900">
                Originality &amp; Similarity Report
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authors are requested to submit the Plagiarism Report of their paper as a supplementary document. Check your similarity index before final submission:
              </p>
              <a
                href="https://www.novelcheckr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all"
              >
                <span>Check Plagiarism at NovelCheckr (₹99)</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Where to Submit Section */}
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-900 to-blue-950 p-7 sm:p-9 text-white shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200">
                <Send className="h-3.5 w-3.5 text-blue-300" /> Electronic Submission
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Where to Submit Your Manuscript
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                All submissions will be handled electronically via the <strong>ICAIDIET'26 portal</strong> once it is open. Papers may also be submitted directly through our official Acadera submission gateway.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://www.acadera.co.in/conferences/icaidiet-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-400 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Go to Submission Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="https://user.icaidiet26.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200"
              >
                <span>Registration Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-200/90">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-400 shrink-0" />
              <span>Authors are strongly advised to carefully review these guidelines and ensure full compliance to facilitate smooth review and publication processing.</span>
            </div>
            <a
              href="https://youtu.be/zy2JHdf3ahs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-blue-300 font-semibold underline underline-offset-2"
            >
              <Video className="h-3.5 w-3.5 text-red-400" /> Watch Step-by-Step Video Tutorial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
