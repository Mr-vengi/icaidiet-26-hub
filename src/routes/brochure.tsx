import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import {
  Download,
  ExternalLink,
  Calendar,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  FileText,
  ArrowRight,
  Maximize2,
  ZoomIn,
} from "lucide-react";

export const Route = createFileRoute("/brochure")({
  head: () => ({
    meta: [
      { title: "Official Conference Brochure — ICAIDIET'26 | Muthayammal Engineering College" },
      {
        name: "description",
        content:
          "View and download the official conference brochure of ICAIDIET'26 — International Conference on AI-Driven Innovation in Engineering & Technology. Organized by Department of CSE, Muthayammal Engineering College in association with Yorkville University, Canada. Published Partner: Wiley.",
      },
      { property: "og:image", content: "/brochure.png" },
    ],
  }),
  component: BrochurePage,
});

function BrochurePage() {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    window.location.replace("/brochure.png");
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-body text-slate-900">
      <Navbar activeSection="brochure" />

      {/* Hero Banner */}
      <section className="relative w-full py-14 sm:py-16 border-b border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            <FileText className="h-3.5 w-3.5 text-blue-600" />
            IQAC No: MEC/IQAC/2026-27/CSE/024
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-blue-950">
            Official Conference Brochure
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            International Conference on AI-Driven Innovation in Engineering &amp; Technology (ICAIDIET'26).
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="/brochure.png"
              download="ICAIDIET26_Official_Brochure.png"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Brochure (HD)
            </a>
            <a
              href="/brochure.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 hover:border-blue-400 hover:bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-xs transition-all"
            >
              <ExternalLink className="h-4 w-4 text-blue-600" />
              Open Full Size in New Tab
            </a>
          </div>
        </div>
      </section>

      {/* Main Content: High-Resolution Viewer + Fast Facts */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
          {/* Left: High-Res Brochure Poster */}
          <div className="rounded-2xl border border-blue-100 bg-white p-3 sm:p-5 shadow-md flex flex-col items-center">
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 group border border-slate-200/80">
              <img
                src="/brochure.png"
                alt="ICAIDIET'26 Official Conference Brochure — Muthayammal Engineering College"
                className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.01]"
              />

              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setFullscreen(true)}
                  className="rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 text-white shadow-md transition-colors"
                  title="Expand to Fullscreen"
                  aria-label="View Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
              <span>Official Brochure • Department of CSE</span>
              <a
                href="/brochure.png"
                download="ICAIDIET26_Official_Brochure.png"
                className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                <Download className="h-3.5 w-3.5" /> Download Image (.png)
              </a>
            </div>
          </div>

          {/* Right: Key Facts directly from Brochure */}
          <div className="space-y-6">
            {/* Quick Summary Card */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Key Conference Details
                </span>
                <h2 className="font-serif text-xl font-bold text-blue-950 mt-1">
                  At a Glance
                </h2>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mt-0.5">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Conference Date</p>
                    <p className="text-xs text-slate-600 font-medium">18th December 2026 (Tentative)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mt-0.5">
                    <Globe className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Mode of Presentation</p>
                    <p className="text-xs text-slate-600 font-medium">Hybrid Mode (In-Person + Online)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mt-0.5">
                    <Award className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Publication &amp; Indexing</p>
                    <p className="text-xs text-slate-600 font-medium">Wiley Online Library • Scopus-Indexed Proceedings with ISBN &amp; DOI</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">Host Institution</p>
                    <p className="text-xs text-slate-600">Muthayammal Engineering College (Autonomous), Rasipuram, Tamil Nadu - 637408</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Structure from Brochure */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Official Brochure
                </span>
                <h3 className="font-serif text-lg font-bold text-blue-950 mt-1">
                  Fees Structure
                </h3>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Category</th>
                      <th className="py-2.5 px-3">Registration</th>
                      <th className="py-2.5 px-3">Publication</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-blue-900">UG Students</td>
                      <td className="py-2.5 px-3">₹ 1,000</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">₹ 10,450</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-blue-900">PG Students</td>
                      <td className="py-2.5 px-3">₹ 1,250</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">₹ 13,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Box from Brochure */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 shadow-xs space-y-3 text-xs sm:text-sm">
              <h4 className="font-serif text-base font-bold text-blue-950">
                Conference Enquiry Contacts
              </h4>
              <div className="space-y-2 text-slate-700">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                  <a href="tel:+919842073527" className="font-semibold hover:underline">+91 9842073527</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                  <a href="mailto:icaidietmec@gmail.com" className="font-semibold hover:underline">icaidietmec@gmail.com</a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Muthayammal Engineering College, Rasipuram, Namakkal, Tamil Nadu - 637408</span>
                </p>
              </div>

              <div className="pt-2 border-t border-blue-200/70 flex flex-wrap gap-2">
                <Link
                  to="/register"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors inline-flex items-center gap-1.5"
                >
                  Register Now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/guidelines"
                  className="rounded-xl bg-white border border-blue-200 px-4 py-2 text-xs font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  Author Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen Modal View */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-h-screen max-w-5xl overflow-auto p-2">
            <button
              onClick={() => setFullscreen(false)}
              className="fixed top-4 right-4 rounded-full bg-white/20 hover:bg-white/40 p-2 text-white font-bold text-lg"
              aria-label="Close Fullscreen"
            >
              ✕
            </button>
            <img
              src="/brochure.png"
              alt="ICAIDIET'26 Official Brochure"
              className="max-h-[92vh] w-auto mx-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

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
