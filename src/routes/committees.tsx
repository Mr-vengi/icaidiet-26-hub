import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import {
  Users,
  Award,
  Shield,
  UserCheck,
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
      { title: "Committees & Leadership — ICAIDIET'26 | Muthayammal Engineering College" },
      {
        name: "description",
        content:
          "Organizing committee, chief patrons, patrons, convener, and coordinators of ICAIDIET'26, Muthayammal Engineering College.",
      },
    ],
  }),
  component: CommitteesPage,
});

interface CommitteeMember {
  name: string;
  detail: string;
  institution?: string;
}

interface CommitteeSection {
  id: string;
  role: string;
  short: string;
  description: string;
  icon: typeof Users;
  members: CommitteeMember[];
}

const COMMITTEE_SECTIONS: CommitteeSection[] = [
  {
    id: "chief-patrons",
    role: "Chief Patrons",
    short: "Chief Patrons",
    description: "Visionary leadership guiding Muthayammal Educational Trust and Research Foundation.",
    icon: Award,
    members: [
      {
        name: "Dr. K. Gunasekaran, M.E., Ph.D., FIE",
        detail: "Secretary & Managing Trustee",
        institution: "Muthayammal Educational Trust And Research Foundation",
      },
      {
        name: "Er. G. Raghul, M.E.",
        detail: "Joint Secretary",
        institution: "Muthayammal Educational Trust And Research Foundation",
      },
      {
        name: "Deiva Thiru R. Kandasamy",
        detail: "Founder Chairman",
        institution: "Muthayammal Educational Trust And Research Foundation",
      },
    ],
  },
  {
    id: "patrons",
    role: "Patrons",
    short: "Patrons",
    description: "Executive academic administration of Muthayammal Engineering College.",
    icon: Shield,
    members: [
      {
        name: "Dr. P. Senthilkumar, M.E., Ph.D.(IITM)",
        detail: "Principal",
        institution: "Muthayammal Engineering College",
      },
      {
        name: "Dr. P. Venugopal",
        detail: "Dean - Academics",
        institution: "Muthayammal Engineering College",
      },
      {
        name: "Dr. G. Sudarmozhi, M.Sc., Ph.D.",
        detail: "Dean - Student Affairs",
        institution: "Muthayammal Engineering College",
      },
      {
        name: "Dr. P. Suresh, M.E., Ph.D.",
        detail: "Dean - Research",
        institution: "Muthayammal Engineering College",
      },
      {
        name: "Dr. S. Saravanan, M.E., Ph.D., FIE",
        detail: "Dean - IQAC",
        institution: "Muthayammal Engineering College",
      },
    ],
  },
  {
    id: "convener",
    role: "Convener & Organizing Chair",
    short: "Convener",
    description: "Conference executive head and academic convener for ICAIDIET'26.",
    icon: UserCheck,
    members: [
      {
        name: "Dr. G. Kavitha, M.S(By Research), Ph.D., FIE",
        detail: "Professor and Head",
        institution: "Department of Computer Science & Engineering, Muthayammal Engineering College",
      },
    ],
  },
  {
    id: "coordinators",
    role: "Coordinators",
    short: "Coordinators",
    description: "Departmental leadership and technical coordinators across engineering streams.",
    icon: Users,
    members: [
      {
        name: "Dr. D Anitha, Ph.D.",
        detail: "HoD, Information Technology (IT)",
        institution: "Muthayammal Engineering College",
      },
      {
        name: "Dr. S. Vijayaragavan, Ph.D.",
        detail: "HoD, Artificial Intelligence & Data Science (AI & DS)",
        institution: "Muthayammal Engineering College",
      },
      {
        name: "Dr. S. Muthusamy, Ph.D.",
        detail: "HoD, Computer Science & Engineering - Cyber Security [CSE (CS)]",
        institution: "Muthayammal Engineering College",
      },
      {
        name: "Dr. S. Lavanya, Ph.D.",
        detail: "HoD, Computer Science & Engineering - AI & ML [CSE (AI&ML)]",
        institution: "Muthayammal Engineering College",
      },
    ],
  },
];

function CommitteesPage() {
  // Read initial category from URL ?tab= or fallback to "all"
  const getInitialTab = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && COMMITTEE_SECTIONS.some((s) => s.id === tab)) {
        return tab;
      }
    }
    return "all";
  };

  const [activeTab, setActiveTab] = useState<string>(getInitialTab);

  // Sync on mount and URL popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && COMMITTEE_SECTIONS.some((s) => s.id === tab)) {
        setActiveTab(tab);
      } else {
        setActiveTab("all");
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (tabId === "all") {
        url.searchParams.delete("tab");
      } else {
        url.searchParams.set("tab", tabId);
      }
      window.history.pushState({}, "", url.toString());
    }
  };

  // Filter sections based on activeTab
  const visibleSections =
    activeTab === "all"
      ? COMMITTEE_SECTIONS
      : COMMITTEE_SECTIONS.filter((s) => s.id === activeTab);

  const activeSectionInfo = COMMITTEE_SECTIONS.find((s) => s.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50/50 font-body text-slate-900">
      <Navbar activeSection="committees" />

      {/* Header Banner */}
      <section className="relative w-full py-16 sm:py-20 border-b border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            <GraduationCap className="h-3.5 w-3.5 text-blue-600" />
            Muthayammal Engineering College (Autonomous)
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-950">
            Organizing Committees
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The visionary leaders, patrons, convenors, and coordinators guiding ICAIDIET'26.
          </p>
        </div>
      </section>

      {/* Category Tabs Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs py-3 px-4">
        <div className="mx-auto max-w-6xl flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {/* Option: All */}
          <button
            type="button"
            onClick={() => handleSelectTab("all")}
            className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                : "bg-slate-100/80 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>All Committees</span>
          </button>

          {/* Section Options */}
          {COMMITTEE_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleSelectTab(sec.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === sec.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-slate-100/80 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              <sec.icon className="h-3.5 w-3.5" />
              <span>{sec.short}</span>
              <span
                className={`ml-0.5 rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                  activeTab === sec.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {sec.members.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Committee Lists */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        {/* Active Filter Notice if specific category selected */}
        {activeTab !== "all" && activeSectionInfo && (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-blue-200 bg-blue-50/70 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <activeSectionInfo.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                  Showing Specific Division
                </p>
                <h3 className="font-serif text-lg font-bold text-blue-950">
                  {activeSectionInfo.role} ({activeSectionInfo.members.length} Members)
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleSelectTab("all")}
              className="rounded-lg bg-white border border-blue-200 px-3.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              &larr; View All Committees
            </button>
          </div>
        )}

        {/* Committee Divisions */}
        <div className="space-y-10">
          {visibleSections.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="rounded-2xl border border-blue-100 bg-white p-7 sm:p-9 shadow-xs hover:shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-7">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs">
                    <group.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Organizing Committee
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-blue-950">
                      {group.role}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
                    {group.members.length} {group.members.length === 1 ? "Member" : "Members"}
                  </span>
                  {activeTab === "all" && (
                    <button
                      type="button"
                      onClick={() => handleSelectTab(group.id)}
                      className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      Focus view &rarr;
                    </button>
                  )}
                </div>
              </div>

              {/* Members Cards Grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-5 hover:bg-blue-50/40 hover:border-blue-200 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
                        {m.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-700 mt-1">
                        {m.detail}
                      </p>
                      {m.institution && (
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {m.institution}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back and Navigation CTA */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-slate-200">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            &larr; Back to Home
          </Link>
          <div className="flex gap-3">
            <Link
              to="/call-for-papers"
              className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
            >
              Call For Papers
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
            >
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400 text-center text-xs">
        <p className="text-white font-serif font-bold text-base mb-2">
          ICAIDIET'26 — Muthayammal Engineering College
        </p>
        <p className="text-slate-400 mb-2">
          Department of Computer Science &amp; Engineering in association with Yorkville University, Canada.
        </p>
        <p>© 2026 ICAIDIET'26. All rights reserved.</p>
      </footer>
    </div>
  );
}
