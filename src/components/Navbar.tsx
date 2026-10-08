import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  FileText,
  FileCode,
  ShieldCheck,
  Video,
  Send,
  Users,
  BookOpen,
  Award,
  Shield,
  UserCheck,
  Globe,
} from "lucide-react";

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection = "home" }: NavbarProps) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const isHomePage = currentPath === "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [committeesOpen, setCommitteesOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [mobileCommitteesOpen, setMobileCommitteesOpen] = useState(false);
  const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCommitteesOpen(false);
    setAuthorsOpen(false);
  }, [currentPath]);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    setCommitteesOpen(false);
    setAuthorsOpen(false);

    if (isHomePage) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Branding: Muthayammal Engineering College Official Logo */}
        <div className="flex items-center shrink-0">
          <a
            href="/#top"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Muthayammal Engineering College"
          >
            <img
              src="/mec-logo.png"
              alt="Muthayammal Engineering College — An Autonomous Institution"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center / Right Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {/* Home */}
          <Link
            to="/"
            className={`relative py-1 text-sm font-medium transition-colors hover:text-blue-600 ${
              isHomePage && activeSection === "home"
                ? "font-bold text-blue-700"
                : "text-slate-700"
            }`}
          >
            Home
            {isHomePage && activeSection === "home" && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
            )}
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`relative py-1 text-sm font-medium transition-colors hover:text-blue-600 ${
              activeSection === "about"
                ? "font-bold text-blue-700"
                : "text-slate-700"
            }`}
          >
            About
            {activeSection === "about" && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
            )}
          </Link>

          {/* Call For Papers */}
          <Link
            to="/call-for-papers"
            className={`relative py-1 text-sm font-medium transition-colors hover:text-blue-600 ${
              activeSection === "tracks" || activeSection === "call-for-papers"
                ? "font-bold text-blue-700"
                : "text-slate-700"
            }`}
          >
            Call For Papers
            {(activeSection === "tracks" || activeSection === "call-for-papers") && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
            )}
          </Link>

          {/* Committees Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCommitteesOpen(true)}
            onMouseLeave={() => setCommitteesOpen(false)}
          >
            <Link
              to="/committees"
              className={`flex items-center gap-1 py-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                activeSection === "committees"
                  ? "font-bold text-blue-700"
                  : "text-slate-700"
              }`}
            >
              Committees
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  committeesOpen ? "rotate-180 text-blue-600" : ""
                }`}
              />
              {activeSection === "committees" && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
              )}
            </Link>

            {committeesOpen && (
              <div className="absolute left-0 top-full pt-1.5 w-64 z-50">
                <div className="rounded-xl border border-blue-100 bg-white p-2 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150 space-y-0.5">
                  <a
                    href="/committees"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
                  >
                    <span>All Committees</span>
                    <span className="text-xs text-blue-600 font-bold">&rarr;</span>
                  </a>
                  <div className="h-px bg-slate-100 my-1" />
                  <a
                    href="/committees?tab=chief-patrons"
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <Award className="h-4 w-4 text-blue-600" />
                    Chief Patrons
                  </a>
                  <a
                    href="/committees?tab=patrons"
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <Shield className="h-4 w-4 text-blue-600" />
                    Patrons
                  </a>
                  <a
                    href="/committees?tab=convener"
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <UserCheck className="h-4 w-4 text-blue-600" />
                    Convener
                  </a>
                  <a
                    href="/committees?tab=coordinators"
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <Users className="h-4 w-4 text-blue-600" />
                    Coordinators
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* For Authors Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAuthorsOpen(true)}
            onMouseLeave={() => setAuthorsOpen(false)}
          >
            <button
              onClick={() => setAuthorsOpen(!authorsOpen)}
              className="flex items-center gap-1 py-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              aria-expanded={authorsOpen}
            >
              For Authors
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  authorsOpen ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>

            {authorsOpen && (
              <div className="absolute left-0 top-full pt-1.5 w-72 z-50">
                <div className="rounded-xl border border-blue-100 bg-white p-2 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                  {/* Link 0: Author Submission Guidelines */}
                  <Link
                    to="/guidelines"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50/70 hover:bg-blue-100 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      Author Submission Guidelines
                    </span>
                    <span className="text-xs text-blue-600 font-bold">&rarr;</span>
                  </Link>

                  {/* Link 1: Paper Submission Portal */}
                  <a
                    href="https://www.acadera.co.in/conferences/icaidiet-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4 text-blue-600" />
                      Paper Submission Portal
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-blue-500" />
                  </a>

                  {/* Link 2: Submission Guidelines */}
                  <a
                    href="https://youtu.be/zy2JHdf3ahs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-red-600" />
                      Submission Guidelines Video
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                  </a>

                  {/* Link 3: Plagiarism Checker */}
                  <a
                    href="https://www.novelcheckr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-red-600" />
                      Plagiarism Checker at ₹99
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-red-400" />
                  </a>

                  {/* Download Templates */}
                  <div className="pt-1 border-t border-slate-100">
                    <a
                      href="/Conference_paper_Template.docx"
                      download
                      className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5 text-slate-400" />
                      Download Word Template (.docx)
                    </a>
                    <a
                      href="/Wiley_LaTeX_Template.pdf"
                      download
                      className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    >
                      <FileCode className="h-3.5 w-3.5 text-slate-400" />
                      Download LaTeX Template (.pdf)
                    </a>
                  </div>

                  {/* Registration Fees Link */}
                  <div className="pt-1 border-t border-slate-100">
                    <Link
                      to="/register"
                      className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Registration Fees &amp; Details
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Brochure */}
          <a
            href="/brochure.png"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Brochure
          </a>

          {/* MEC Link */}
          <a
            href="https://mec.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            MEC
          </a>

          {/* Vertical Separator */}
          <div className="h-5 w-px bg-slate-200 mx-1" aria-hidden="true" />

          {/* Register Now Button (Blue Theme) */}
          <Link
            to="/register"
            id="desktop-nav-cta"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-95"
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* Mobile Menu & Quick CTA */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/register"
            className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm"
          >
            Register
            <ArrowRight className="h-3 w-3" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-800 hover:bg-blue-50 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-4 py-4 backdrop-blur-md lg:hidden space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              to="/"
              className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                isHomePage && activeSection === "home"
                  ? "bg-blue-50 font-bold text-blue-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                activeSection === "about"
                  ? "bg-blue-50 font-bold text-blue-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            <Link
              to="/call-for-papers"
              className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                activeSection === "tracks" || activeSection === "call-for-papers"
                  ? "bg-blue-50 font-bold text-blue-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Call For Papers
            </Link>

            {/* Mobile Committees */}
            <div>
              <button
                onClick={() => setMobileCommitteesOpen(!mobileCommitteesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <span className={activeSection === "committees" ? "font-bold text-blue-700" : ""}>
                  Committees
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileCommitteesOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
              {mobileCommitteesOpen && (
                <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-3 py-1">
                  <a
                    href="/committees"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-bold text-blue-900"
                  >
                    All Committees &rarr;
                  </a>
                  <a
                    href="/committees?tab=chief-patrons"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-medium text-slate-700 hover:text-blue-700"
                  >
                    Chief Patrons
                  </a>
                  <a
                    href="/committees?tab=patrons"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-medium text-slate-700 hover:text-blue-700"
                  >
                    Patrons
                  </a>
                  <a
                    href="/committees?tab=convener"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-medium text-slate-700 hover:text-blue-700"
                  >
                    Convener
                  </a>
                  <a
                    href="/committees?tab=coordinators"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-medium text-slate-700 hover:text-blue-700"
                  >
                    Coordinators
                  </a>
                  <a
                    href="/committees?tab=advisory"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-medium text-slate-700 hover:text-blue-700"
                  >
                    Advisory Board
                  </a>
                </div>
              )}
            </div>


            {/* Mobile For Authors */}
            <div>
              <button
                onClick={() => setMobileAuthorsOpen(!mobileAuthorsOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <span>For Authors</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileAuthorsOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
              {mobileAuthorsOpen && (
                <div className="ml-4 space-y-1.5 border-l-2 border-blue-200 pl-3 py-1">
                  <Link
                    to="/guidelines"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1.5 text-xs font-bold text-blue-900"
                  >
                    <span>Author Guidelines</span>
                    <span>&rarr;</span>
                  </Link>
                  <a
                    href="https://www.acadera.co.in/conferences/icaidiet-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1.5 text-xs font-semibold text-blue-700"
                  >
                    <span>1. Submit Paper (Acadera)</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://youtu.be/zy2JHdf3ahs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1.5 text-xs font-medium text-slate-700"
                  >
                    <span>2. Guidelines Video (YouTube)</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://www.novelcheckr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-1.5 text-xs font-bold text-red-600"
                  >
                    <span>3. Plagiarism Checker at ₹99</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="/Conference_paper_Template.docx"
                    download
                    className="block py-1.5 text-xs text-slate-600"
                  >
                    Word Template (.docx)
                  </a>
                  <a
                    href="/Wiley_LaTeX_Template.pdf"
                    download
                    className="block py-1.5 text-xs text-slate-600"
                  >
                    LaTeX Template (.pdf)
                  </a>
                </div>
              )}
            </div>

            <a
              href="/brochure.png"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Brochure
            </a>

            <a
              href="https://mec.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              MEC
            </a>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <Link
              to="/register"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20"
            >
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
