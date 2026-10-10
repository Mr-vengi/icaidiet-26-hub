import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  BrainCircuit,
  LineChart,
  Database,
  Cpu,
  Network,
  ShieldCheck,
  Bot,
  Sprout,
  BookOpenCheck,
  Users,
  FileText,
  BadgeCheck,
  Globe,
  GraduationCap,
  Menu,
  X,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import heroRobot from "@/assets/hero-robot.png";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { SubmissionPortalHero } from "@/components/SubmissionPortalHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ICAIDIET'26 | International Conference - CSE | Muthayammal Engineering College" },
      {
        name: "description",
        content:
          "ICAIDIET'26 — International Conference on AI-Driven Innovation in Engineering & Technology (CSE), hosted by Muthayammal Engineering College in association with Yorkville University, Canada. Tentative Date: 18th December 2026. Published Partner: Wiley.",
      },
      { property: "og:title", content: "ICAIDIET'26 — International Conference - CSE" },
      {
        property: "og:description",
        content:
          "International conference by Department of CSE, Muthayammal Engineering College & Yorkville University, Canada. Tentative date: 18th December 2026. Published Partner: Wiley.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Dates", href: "#dates" },
  { label: "Committee", href: "#committee" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
];

const RESOURCE_LINKS = [
  { label: "Brochure", href: "/brochure.png", external: false },
  { label: "MEC", href: "https://mec.edu.in/", external: true },
];
// Both open in a new tab (same behavior as the official site).

const TRACKS = [
  { icon: BrainCircuit, title: "Artificial Intelligence & Intelligent Systems" },
  { icon: LineChart, title: "Machine Learning & Advanced Analysis" },
  { icon: Database, title: "Data Science & Decision Intelligence" },
  { icon: Cpu, title: "IoT, Edge Computing & Embedded Systems" },
  { icon: Network, title: "Communication Systems & Network Technologies" },
  { icon: ShieldCheck, title: "Cybersecurity & Secure Computing" },
  { icon: Bot, title: "Robotics, Automation & Smart Industry" },
  { icon: Sprout, title: "Emerging Technologies, Sustainability & AI-Driven Management" },
];

const DATES = [
  { label: "Paper Submission Deadline", date: "21st September 2026" },
  { label: "Acceptance Notification", date: "20th October 2026" },
  { label: "Early Bird Registration", date: "22nd October 2026" },
  { label: "Late Registration", date: "23rd – 28th October 2026" },
  { label: "Final Manuscript Notification", date: "2nd November 2026" },
  { label: "Tentative Conference Date", date: "18th December 2026", highlight: true },
];

const COMMITTEE = [
  {
    role: "Chief Patrons",
    members: [
      {
        name: "Deiva Thiru R. Kandasamy",
        detail: "Founder Chairman, Muthayammal Educational Trust And Research Foundation",
      },
      {
        name: "Dr. K. Gunasekaran, M.E., Ph.D., FIE",
        detail: "Secretary & Managing Trustee, Muthayammal Educational Trust And Research Foundation",
      },
      {
        name: "Er. G. Raghul, M.E.",
        detail: "Joint Secretary, Muthayammal Educational Trust And Research Foundation",
      },
    ],
  },
  {
    role: "Patrons",
    members: [
      {
        name: "Dr. P. Senthilkumar, M.E., Ph.D.(IITM)",
        detail: "Principal, Muthayammal Engineering College",
      },
      {
        name: "Dr. P. Venugopal",
        detail: "Dean - Academics, Muthayammal Engineering College",
      },
      {
        name: "Dr. G. Sudarmozhi, M.Sc., Ph.D",
        detail: "Dean - Student Affairs, Muthayammal Engineering College",
      },
      {
        name: "Dr. P. Suresh, M.E., Ph.D",
        detail: "Dean - Research, Muthayammal Engineering College",
      },
      {
        name: "Dr. S. Saravanan, M.E., Ph.D., FIE",
        detail: "Dean - Product and Consultancy, Muthayammal Engineering College",
      },
    ],
  },
  {
    role: "Convenor",
    members: [
      {
        name: "Dr. G. Kavitha, M.S(By Research), Ph.D., FIE",
        detail: "Professor and Head, CSE, Muthayammal Engineering College",
      },
    ],
  },
];

const FEES = [
  { category: "Registration Fee — UG Students", fee: "₹ 1,000" },
  { category: "Registration Fee — PG Students", fee: "₹ 1,250" },
  { category: "Publication Cost — UG Students", fee: "₹ 10,450" },
  { category: "Publication Cost — PG Students", fee: "₹ 13,500" },
  { category: "Total Cost (UG) — Registration + Publication", fee: "₹ 11,450" },
  { category: "Total Cost (PG) — Registration + Publication", fee: "₹ 14,750" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BrainCircuit className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-800 tracking-tight text-navy" style={{ fontWeight: 800 }}>
            ICAIDIET<span className="text-primary">'26</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          {RESOURCE_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (l.label === "Brochure") {
                  event.preventDefault();
                  window.open("/brochure.png", "_blank", "noopener,noreferrer");
                }
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
              {l.external && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
            </a>
          ))}
          <a
            href="#fees"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
          >
            Register Now
          </a>
        </nav>
        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="animate-menu-drop border-t border-border bg-background px-4 pb-4 lg:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm font-medium text-foreground"
            >
              {l.label}
            </a>
          ))}
          {RESOURCE_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                setOpen(false);
                if (l.label === "Brochure") {
                  event.preventDefault();
                  window.open("/brochure.png", "_blank", "noopener,noreferrer");
                }
              }}
              className="flex items-center justify-between border-b border-border py-3 text-sm font-medium text-foreground"
            >
              {l.label}
              {l.external && <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
            </a>
          ))}
          <a
            href="#fees"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Register Now
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="reveal-section bg-gradient-to-b from-blue-50/50 via-white to-white relative overflow-hidden border-b border-blue-100/60">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-sky/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-900 uppercase">
              <Globe className="h-3.5 w-3.5 text-blue-600" />
              Department of Computer Science and Engineering (CSE)
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-100/70 px-3 py-1 text-xs font-bold text-blue-950">
              Published Partner: Wiley
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-black tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
            International Conference on <span className="text-blue-600">AI-Driven Innovation</span> in
            Engineering &amp; Technology
          </h1>
          <p className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-1.5 font-display text-xl font-bold tracking-widest text-white shadow-sm">
            ICAIDIET'26 — CSE
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A hybrid platform organized by the Department of Computer Science &amp; Engineering, Muthayammal Engineering College in association with Yorkville University, Canada.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Register Now →
            </a>
            <a
              href="https://www.acadera.co.in/conferences/icaidiet-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-700 shadow-xs transition-colors hover:bg-blue-50"
            >
              Submit Your Paper
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 font-semibold text-navy">
              <CalendarDays className="h-4 w-4 text-primary" /> Tentative Date: 18th December 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" /> Hybrid Mode (Online)
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Muthayammal Engineering College
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-sky/50 to-primary/30 blur-2xl" />
          <img
            src={heroRobot}
            alt="Silver humanoid AI robot representing artificial intelligence"
            width={1024}
            height={1024}
            className="animate-float-slow relative mx-auto w-4/5 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: BookOpenCheck, title: "Scopus-Indexed", text: "All accepted & presented papers published as Scopus-indexed conference proceedings" },
    { icon: BadgeCheck, title: "ISBN & DOI", text: "Assigned ISBN and DOI for all proceedings, as per publisher norms" },
    { icon: FileText, title: "Published Partner", text: "Wiley — official publishing partner of ICAIDIET'26" },
    { icon: GraduationCap, title: "Department of CSE", text: "Muthayammal Engineering College (Autonomous)" },
  ];
  return (
    <section className="reveal-section border-y border-blue-100 bg-blue-600">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="flex flex-col items-start gap-2 rounded-xl p-5 text-white">
            <i.icon className="h-7 w-7 text-sky-200" />
            <h3 className="font-display text-lg font-bold">{i.title}</h3>
            <p className="text-sm leading-relaxed text-blue-100">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">About the Conference</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
            Where AI Meets <span className="gradient-heading">Engineering Excellence</span>
          </h2>
          <div className="mt-6 rounded-2xl border border-border bg-ice p-6">
            <h3 className="font-display text-sm font-bold tracking-wide text-navy uppercase">Organized By</h3>
            <p className="mt-2 font-display text-xl font-bold text-primary">Department of Computer Science & Engineering</p>
            <p className="mt-1 text-sm font-semibold text-navy">Muthayammal Engineering College (Autonomous)</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Approved by AICTE, Affiliated to Anna University. Estd. 2000. Muthayammal Engineering College, Rasipuram, Tamil Nadu-637408.
            </p>
            <h3 className="mt-5 font-display text-sm font-bold tracking-wide text-navy uppercase">
              In Collaboration With
            </h3>
            <p className="mt-2 font-display text-xl font-bold text-primary">Yorkville University, Canada</p>
            <p className="mt-1 text-sm text-muted-foreground">
              A renowned university recognized for its global outlook and career-focused education.
            </p>
          </div>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:pt-14">
          <p>
            The International Conference on AI-Driven Innovations in Engineering and Technology (ICAIDIET'26),
            conducted in hybrid mode, serves as a dynamic platform that brings together researchers, academicians,
            and industry professionals from across the globe to explore the transformative potential of Artificial
            Intelligence.
          </p>
          <p>
            The conference aims to foster innovation, collaboration, and knowledge exchange across diverse domains
            of engineering and technology. It emphasizes cutting-edge research, emerging trends, and practical
            applications of AI, encouraging the development of intelligent solutions to address real-world
            challenges.
          </p>
          <p>
            ICAIDIET'26 aspires to inspire forward-thinking ideas and promote interdisciplinary approaches that
            will shape the future of smart and sustainable technologies. In collaboration with Yorkville
            University, Canada, the conference encourages international collaboration and knowledge sharing in
            emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section id="tracks" className="reveal-section bg-ice py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Conference Tracks</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
            Eight Tracks. One Vision for AI.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Submit your research across a broad spectrum of AI-driven engineering and technology domains.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map((t, i) => (
            <div
              key={t.title}
              style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
              className="reveal-item card-glow group rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <t.icon className="h-5.5 w-5.5" />
                </span>
                <span className="font-display text-sm font-bold text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy">{t.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dates() {
  return (
    <section id="dates" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Important Dates</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
            Mark Your <span className="gradient-heading">Calendar</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stay on track with every milestone — from submission to the conference days. Early bird registration
            closes 22nd October 2026.
          </p>
        </div>
        <ol className="relative space-y-0 border-l-2 border-primary/20 pl-0">
          {DATES.map((d, i) => (
            <li
              key={d.label}
              style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}
              className="reveal-item relative pb-8 pl-8 last:pb-0"
            >
              <span
                className={`absolute top-1 -left-[9px] h-4 w-4 rounded-full border-2 ${
                  d.highlight ? "border-blue-600 bg-blue-600" : "border-blue-400 bg-white"
                }`}
              />
              <p className="text-sm font-medium text-muted-foreground">{d.label}</p>
              <p
                className={`font-display text-lg font-bold ${d.highlight ? "text-blue-600" : "text-navy"}`}
              >
                {d.date}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Committee() {
  return (
    <section id="committee" className="reveal-section bg-navy py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-sky uppercase">Organizing Committee</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
            The People Behind ICAIDIET'26
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {COMMITTEE.map((group, gi) => (
            <div
              key={group.role}
              style={{ "--reveal-delay": `${gi * 120}ms` } as CSSProperties}
              className="reveal-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-sky-300">
                <Users className="h-5 w-5" /> {group.role}
              </h3>
              <ul className="mt-4 space-y-4">
                {group.members.map((m) => (
                  <li key={m.name}>
                    <p className="font-semibold text-white">{m.name}</p>
                    <p className="text-sm text-primary-foreground/70">{m.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fees() {
  return (
    <section id="fees" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">Registration & Publication Fees</p>
        <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
          Fee Structure & Categories
        </h2>
        <p className="mt-4 text-muted-foreground">
          Published Partner: <span className="font-bold text-navy">Wiley</span>
        </p>
      </div>
      <div className="card-glow mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-blue-100 bg-card">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-6 py-4 font-display font-bold">Category</th>
              <th className="px-6 py-4 font-display font-bold">Fee / Cost</th>
            </tr>
          </thead>
          <tbody>
            {FEES.map((f) => (
              <tr key={f.category} className="border-t border-blue-100 hover:bg-blue-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-navy">{f.category}</td>
                <td className="px-6 py-4 font-bold text-blue-600">{f.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto mt-6 grid max-w-4xl gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-blue-600 uppercase">Print ISBN</p>
          <p className="mt-2 font-display text-lg font-bold text-navy">9781836690467</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-blue-600 uppercase">Online ISBN</p>
          <p className="mt-2 font-display text-lg font-bold text-navy">9781394423415</p>
        </div>
      </div>

      {/* Author Resources Callouts */}
      <div className="mx-auto mt-6 max-w-4xl grid gap-4 sm:grid-cols-3">
        <a
          href="https://www.novelcheckr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50/80 p-4 transition-all hover:bg-red-100"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white font-bold">
            ₹99
          </span>
          <div>
            <p className="text-xs font-bold text-red-900">Plagiarism Checker</p>
            <p className="text-[11px] text-red-700">Check via NovelCheckr before submitting &rarr;</p>
          </div>
        </a>

        <a
          href="https://youtu.be/zy2JHdf3ahs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/80 p-4 transition-all hover:bg-blue-100"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            📺
          </span>
          <div>
            <p className="text-xs font-bold text-slate-900">Author Guidelines</p>
            <p className="text-[11px] text-slate-600">Watch video instructions on YouTube &rarr;</p>
          </div>
        </a>

        <a
          href="https://www.acadera.co.in/conferences/icaidiet-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-4 transition-all hover:bg-blue-50"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            🚀
          </span>
          <div>
            <p className="text-xs font-bold text-slate-900">Submission Portal</p>
            <p className="text-[11px] text-slate-600">Upload paper on Acadera &rarr;</p>
          </div>
        </a>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/register"
          className="inline-flex rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Proceed to Registration &rarr;
        </a>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        All accepted and presented papers will be published in Wiley Scopus-indexed conference proceedings with ISBN
        and DOI (as per publisher norms).
      </p>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your enquiry has been sent successfully!",
        });
        toast.success("Enquiry Sent!", {
          description: "Thank you for reaching out. We'll be in touch soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.statusMessage || "Please directly contact with icaidietmec@gmail.com",
        });
        toast.error("Failed to Send", {
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
    <section id="contact" className="reveal-section bg-ice py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Contact Us</p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Questions about submissions, registration, or the conference program? Our team is happy to help.
            </p>
            <div className="mt-8 space-y-4">
              <a href="tel:+919842073527" className="flex items-center gap-3 text-navy transition-colors hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <span className="font-semibold">+91 9842073527</span>
              </a>
              <a href="mailto:icaidietmec@gmail.com" className="flex items-center gap-3 text-navy transition-colors hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <span className="font-semibold">icaidietmec@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-navy">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <span className="font-semibold">
                  Muthayammal Engineering College, Rasipuram, Tamil Nadu-637408
                </span>
              </div>
            </div>
          </div>
          <div className="card-glow rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold text-navy">Quick Enquiry</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
                  Your Name *
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
                  Your Email *
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
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
                  Message *
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-ring"
                />
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
                className="w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                {isLoading && <Loader className="h-4 w-4 animate-spin" />}
                {isLoading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <p className="font-display text-2xl font-bold">
          ICAIDIET<span className="text-gold">'26</span>
        </p>
        <p className="max-w-xl text-sm text-primary-foreground/75 leading-relaxed">
          International Conference on AI-Driven Innovation in Engineering and Technology — Muthayammal
          Engineering College, in association with Yorkville University, Canada.
        </p>
        
        {/* Quick Portal Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs text-sky border-y border-white/10 py-3 w-full max-w-2xl">
          <a
            href="https://www.acadera.co.in/conferences/icaidiet-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors font-semibold"
          >
            1. Acadera Paper Submission Portal
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://youtu.be/zy2JHdf3ahs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors font-semibold"
          >
            2. Submission Guidelines (Video)
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.novelcheckr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors font-semibold text-red-300"
          >
            3. NovelCheckr Plagiarism Checker (₹99)
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link to="/" className="text-primary-foreground/70 transition-colors hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-primary-foreground/70 transition-colors hover:text-white">
            About
          </Link>
          <Link to="/call-for-papers" className="text-primary-foreground/70 transition-colors hover:text-white">
            Call For Papers
          </Link>
          <Link to="/guidelines" className="text-primary-foreground/70 transition-colors hover:text-white">
            Author Guidelines
          </Link>
          <Link to="/committees" className="text-primary-foreground/70 transition-colors hover:text-white">
            Committees
          </Link>
          <Link to="/register" className="text-primary-foreground/70 transition-colors hover:text-white">
            Registration &amp; Fees
          </Link>
          <a
            href="/brochure.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 transition-colors hover:text-white"
          >
            Brochure
          </a>
          <a
            href="/Conference_paper_Template.docx"
            download
            className="text-primary-foreground/70 transition-colors hover:text-white"
          >
            Download Template
          </a>
        </div>
        <p className="text-xs text-primary-foreground/50">
          © 2026 ICAIDIET'26, Muthayammal Engineering College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function ConferenceOverviewCards() {
  const sections = [
    {
      title: "About The Conference",
      desc: "Learn about the mission, organizers, Yorkville University partnership, and hybrid presentation format.",
      link: "/about",
      cta: "Explore About",
      icon: Globe,
    },
    {
      title: "Call For Papers & Tracks",
      desc: "Eight core conference tracks spanning Generative AI, Robotics, Data Science, Cyber Security, and IoT.",
      link: "/call-for-papers",
      cta: "View 8 Tracks",
      icon: BrainCircuit,
    },
    {
      title: "Organizing Committees",
      desc: "Meet the Chief Patrons, Principal, Deans, Convenors, and National & International Advisory Board.",
      link: "/committees",
      cta: "Meet Committees",
      icon: Users,
    },
    {
      title: "Registration & Fees",
      desc: "Check registration categories, publication fee structure, and complete your participant registration.",
      link: "/register",
      cta: "Register Now",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
          Conference Directory
        </p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-blue-950">
          Explore ICAIDIET'26
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Navigate directly to dedicated conference details, track specifications, and author resources.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map((sec) => (
          <Link
            key={sec.title}
            to={sec.link}
            className="group rounded-2xl border border-blue-100 bg-white p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-5">
                <sec.icon className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-lg font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                {sec.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sec.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
              <span>{sec.cta}</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Index() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".reveal-section, .reveal-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar activeSection="home" />
      <main>
        <Hero />
        <SubmissionPortalHero />
        <Highlights />
        <ConferenceOverviewCards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
