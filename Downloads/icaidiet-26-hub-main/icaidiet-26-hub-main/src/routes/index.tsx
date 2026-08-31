import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ICAIDIET'26 | International Conference on AI-Driven Innovation in Engineering & Technology" },
      {
        name: "description",
        content:
          "ICAIDIET'26 — hybrid international conference on AI-driven innovation, hosted by Muthayammal Engineering College in association with Yorkville University, Canada. Scopus-indexed proceedings with ISBN & DOI.",
      },
      { property: "og:title", content: "ICAIDIET'26 — AI-Driven Innovation in Engineering & Technology" },
      {
        property: "og:description",
        content:
          "International conference by Muthayammal Engineering College & Yorkville University, Canada. Conference dates: 20th & 21st November 2026. Scopus-indexed proceedings.",
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
  { label: "Conference Dates", date: "20th & 21st November 2026", highlight: true },
];

const COMMITTEE = [
  {
    role: "Chief Patrons",
    members: [
      { name: "Dr. Deyva Thiru Dr. S.N. Subramanian", detail: "Founder Chairman, SNS Group" },
      { name: "Dr. S. Rajalakshmi", detail: "Correspondent, SNS Group" },
      { name: "Dr. Nalin, SNS", detail: "Secretary / Trustee, SNS Group" },
    ],
  },
  {
    role: "Patrons",
    members: [
      { name: "Dr. V.P. Arunachalam", detail: "Director, SNS Technical Institutions" },
      { name: "Dr. S. Chenthur Pandian", detail: "Executive Director, SNS Technical Campus" },
      { name: "Dr. S. Charles", detail: "Principal, SNS College of Technology" },
      { name: "Dr. P. Tamilselvam", detail: "VP – Admin, SNS College of Technology" },
      { name: "Dr. P. Vivekanandan", detail: "VR – Academics, SNS College of Technology" },
    ],
  },
  {
    role: "Convenors",
    members: [
      { name: "Dr. R. Sudhakaran", detail: "Vice Principal, SNS College of Technology – AI Campus" },
      { name: "Dr. M. Sudha", detail: "HoD, IV CSE – CT" },
    ],
  },
];

const FEES = [
  { category: "Author — Conference Only (Indian)", early: "₹ 2,000", late: "₹ 2,500" },
  { category: "Author — With Scopus-Indexed Proceedings (Indian)", early: "₹ 10,000", late: "₹ 11,000" },
  { category: "Author — Conference with Proceedings (Foreign)", early: "$ 400", late: "$ 500" },
  { category: "Industry Delegates — Conference with Proceedings", early: "₹ 12,000", late: "₹ 13,000" },
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
              onClick={() => setOpen(false)}
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
    <section id="top" className="reveal-section hero-grid-bg relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-sky/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
            <Globe className="h-3.5 w-3.5" />
            In association with Yorkville University, Canada
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-black tracking-tight text-navy sm:text-5xl lg:text-6xl">
            International Conference on <span className="gradient-heading">AI-Driven Innovation</span> in
            Engineering &amp; Technology
          </h1>
          <p className="mt-4 inline-block rounded-lg bg-primary px-4 py-1.5 font-display text-xl font-bold tracking-widest text-primary-foreground">
            ICAIDIET'26
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A hybrid platform uniting researchers, academicians, and industry professionals to explore the
            transformative potential of Artificial Intelligence across engineering and technology.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#fees"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Register Now
            </a>
            <a
              href="#dates"
              className="rounded-full border border-primary/30 bg-card px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              Submit Your Paper
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" /> 20th &amp; 21st November 2026
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
    { icon: FileText, title: "Publish Partner", text: "Wiley — official publishing partner of ICAIDIET'26" },
    { icon: GraduationCap, title: "Anna University Affiliated", text: "AICTE-approved autonomous institution, Estd. 2000" },
  ];
  return (
    <section className="reveal-section border-y border-border bg-primary">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="flex flex-col items-start gap-2 rounded-xl p-5 text-primary-foreground">
            <i.icon className="h-7 w-7 text-gold" />
            <h3 className="font-display text-lg font-bold">{i.title}</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/80">{i.text}</p>
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
            <h3 className="font-display text-sm font-bold tracking-wide text-navy uppercase">Hosted By</h3>
            <p className="mt-2 font-display text-xl font-bold text-primary">Muthayammal Engineering College</p>
            <p className="mt-1 text-sm text-muted-foreground">
              An Autonomous Institution — Approved by AICTE, Affiliated to Anna University. A leading institution
              known for quality engineering education, innovation, and research.
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
                  d.highlight ? "border-gold bg-gold" : "border-primary bg-background"
                }`}
              />
              <p className="text-sm font-medium text-muted-foreground">{d.label}</p>
              <p
                className={`font-display text-lg font-bold ${d.highlight ? "text-primary" : "text-navy"}`}
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
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-gold">
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
        <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Registration Fees</p>
        <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
          Registration Categories
        </h2>
        <p className="mt-4 text-muted-foreground">
          Register early to benefit from early bird pricing — early bird registration closes 22nd October 2026.
        </p>
      </div>
      <div className="card-glow mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="px-6 py-4 font-display font-bold">Category</th>
              <th className="px-6 py-4 font-display font-bold">Early Bird (till 22nd Oct 2026)</th>
              <th className="px-6 py-4 font-display font-bold">Late Fee (23rd – 28th Oct 2026)</th>
            </tr>
          </thead>
          <tbody>
            {FEES.map((f) => (
              <tr key={f.category} className="border-t border-border">
                <td className="px-6 py-4 font-semibold text-navy">{f.category}</td>
                <td className="px-6 py-4 text-muted-foreground">{f.early}</td>
                <td className="px-6 py-4 text-muted-foreground">{f.late}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <a
          href="#fees"
          className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
        >
          View Registration Fees
        </a>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        All accepted and presented papers will be published in Scopus-indexed conference proceedings with ISBN
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
          message: data.statusMessage || "Please directly contact with icaidiet26@gmail.com ",
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
              <a href="tel:+918903444955" className="flex items-center gap-3 text-navy transition-colors hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <span className="font-semibold">+91 89034 44955 / +91 76039 23049</span>
              </a>
              <a href="mailto:icaidiet26@gmail.com" className="flex items-center gap-3 text-navy transition-colors hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <span className="font-semibold">icaidiet26@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-navy">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <span className="font-semibold">
                  Muthayammal Engineering College, Kakkaveri, Singlandhapuram, Tamil Nadu 637408
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
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
    <footer className="bg-navy py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <p className="font-display text-xl font-bold">
          ICAIDIET<span className="text-gold">'26</span>
        </p>
        <p className="max-w-xl text-sm text-primary-foreground/70">
          International Conference on AI-Driven Innovation in Engineering and Technology — Muthayammal
          Engineering College, in association with Yorkville University, Canada.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/70 transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-primary-foreground/50">
          © 2026 ICAIDIET'26, Muthayammal Engineering College. All rights reserved.
        </p>
      </div>
    </footer>
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
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Tracks />
        <Dates />
        <Committee />
        <Fees />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
