import ContributionSkyline from "@/components/ui/contribution-skyline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

async function getContributions(username: string) {
  try {
    const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=last&t=${Date.now()}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.contributions as { date: string; count: number }[]).map(
      (d) => ({ date: d.date, count: d.count })
    );
  } catch {
    return null;
  }
}

export default async function Home() {
  const contributions = await getContributions("m-ahmadjaved");

  return (
    <>
      <Navbar />

      <main id="top" className="min-h-screen bg-[#04070a] text-[#eef2e6]">
        {/* ─────────────── HERO ─────────────── */}
        <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 20% 100%, rgba(184,255,122,0.06), transparent 60%), radial-gradient(60% 50% at 80% 0%, rgba(184,255,122,0.04), transparent 60%)",
            }}
          />
          <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 w-full">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-6">
                Portfolio · 2026 · Lahore, PK
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[clamp(48px,8.5vw,140px)] font-light leading-[0.94] tracking-[-0.035em] text-white max-w-[1100px]">
                I build the{" "}
                <em className="font-serif italic text-[#b8ff7a] font-normal">
                  systems
                </em>{" "}
                behind experiences people trust.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-[560px] text-[clamp(15px,1.05vw,17px)] leading-[1.65] text-[#a4b09c]">
                Backend developer and full-stack engineer, moving from MERN
                applications into cloud infrastructure, observability, and
                intelligent software.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-6 items-center">
                <a
                  href="#work"
                  className="inline-flex items-center gap-3 rounded-full border border-[#b8ff7a]/40 bg-[#0e1a0c] px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#e8ffd6] transition-all duration-500 hover:border-[#b8ff7a] hover:bg-[#152515]"
                >
                  Explore work
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 11L11 3M11 3H5M11 3V9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#5d6a58] hover:text-[#b8ff7a] transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─────────────── GITHUB SKYLINE ─────────────── */}
        <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-6 flex items-center gap-3">
              <span className="w-[34px] h-px bg-[#3a4436]" />
              GitHub activity · live
            </p>
          </Reveal>

          {contributions ? (
            <Reveal delay={100}>
              <ContributionSkyline data={contributions} defaultView="3d" />
            </Reveal>
          ) : (
            <div className="rounded-lg border border-white/5 p-8 text-center text-[#5d6a58]">
              Could not load GitHub activity right now.
            </div>
          )}
        </section>

        {/* ─────────────── ABOUT ─────────────── */}
        <section
          id="about"
          className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28 grid md:grid-cols-[minmax(260px,380px)_1fr] gap-16 md:gap-24 items-start"
        >
          <div className="md:sticky md:top-32">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-10 flex items-center gap-3">
                <span className="w-[34px] h-px bg-[#3a4436]" />
                01 — About
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-[clamp(34px,4.4vw,64px)] font-light leading-[1.02] tracking-[-0.03em] text-white">
                A career shaped by{" "}
                <em className="font-serif italic text-[#b8ff7a] font-normal">
                  curiosity
                </em>{" "}
                — and care.
              </h2>
            </Reveal>
          </div>

          <div className="max-w-[640px] space-y-6">
            <Reveal>
              <p className="text-[17px] leading-[1.75] text-[#a4b09c]">
                I began with the part of software most people never see: the
                APIs, data models, and quiet decisions that make a digital
                experience feel dependable.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[17px] leading-[1.75] text-[#a4b09c]">
                During my internship at{" "}
                <strong className="text-white font-medium">
                  Harw Solutions
                </strong>
                , I helped ship full-stack features for real clients — learning
                that good engineering is not just about making something work.
                It is about making it understandable, maintainable, and ready
                for the people who depend on it.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[17px] leading-[1.75] text-[#a4b09c]">
                My final-year project,{" "}
                <em className="text-[#b8ff7a] not-italic">ODONTO-SCAN</em>, was
                where this clicked. I built a dental biometric authentication
                system on the MERN stack, integrating OpenCV for feature
                extraction and JWT for secure access. It achieved 95%+ matching
                accuracy in testing — and taught me that backend work is never
                really just backend.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-[17px] leading-[1.75] text-[#a4b09c]">
                Now I'm moving deeper into{" "}
                <em className="text-[#b8ff7a] not-italic">DevOps</em>: learning
                how reliable systems are deployed, observed, and improved at
                scale. The longer road leads to automotive software — where
                cloud thinking, careful backend engineering, and the physical
                world meet.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex flex-wrap gap-2.5 pt-6">
                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "OpenCV",
                  "JWT",
                  "Docker · in progress",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-2 rounded-full border border-[#b8ff7a]/15 font-mono text-[11px] tracking-[0.12em] uppercase text-[#a4b09c] hover:border-[#b8ff7a] hover:text-[#b8ff7a] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─────────────── EXPERIENCE ─────────────── */}
        <section
          id="experience"
          className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28"
        >
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-8 flex items-center gap-3">
              <span className="w-[34px] h-px bg-[#3a4436]" />
              02 — Experience
            </p>
          </Reveal>

          <Reveal delay={100}>
            <article className="grid md:grid-cols-[minmax(220px,320px)_1fr] gap-12 md:gap-20 pt-10 border-t border-[#b8ff7a]/10 relative">
              <span className="absolute top-0 left-0 w-20 h-px bg-[#b8ff7a]" />
              <div>
                <h3 className="text-xl text-white mb-2">
                  Harw Solutions Pvt Limited
                </h3>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#b8ff7a] mb-4">
                  Software Development Intern
                </p>
                <p className="font-mono text-[11px] tracking-[0.14em] text-[#5d6a58] leading-[1.9]">
                  April 2025 — June 2025
                  <br />
                  Lahore, Pakistan
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-[16px] leading-[1.8] text-[#a4b09c]">
                  Joined the development team and contributed to ongoing client
                  projects, gaining hands-on exposure to full-stack development
                  using the MERN stack.
                </p>
                <p className="text-[16px] leading-[1.8] text-[#a4b09c]">
                  Worked with React.js, Node.js, Express.js, and MongoDB on live
                  client codebases. Learned production practices: reading
                  existing code before extending it, participating in code
                  review, and following established project conventions.
                </p>
                <div className="flex flex-wrap gap-2 pt-3">
                  {[
                    "Full-stack development",
                    "Client projects",
                    "Version control",
                    "Code review",
                    "Team collaboration",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-[#b8ff7a]/15 font-mono text-[10px] tracking-[0.14em] uppercase text-[#a4b09c]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        {/* ─────────────── WORK / PROJECTS ─────────────── */}
        <section
          id="work"
          className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28"
        >
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-6 flex items-center gap-3">
              <span className="w-[34px] h-px bg-[#3a4436]" />
              03 — Selected work
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-[clamp(34px,5vw,78px)] font-light leading-[1.02] tracking-[-0.03em] text-white max-w-[800px] mb-16">
              Useful ideas, built{" "}
              <em className="font-serif italic text-[#b8ff7a] font-normal">
                all the way
              </em>{" "}
              through.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                n: "01",
                tag: "Final Year Project",
                title: "ODONTO-SCAN",
                titleItalic: "dental biometric",
                desc: "A system that recognizes people by their teeth — much like a fingerprint — helping clinicians confirm identity quickly and confidentially. Built the complete experience: pattern matching, secure patient records, and a fast interface for front-desk use.",
                stack: ["React", "Node.js", "MongoDB", "OpenCV", "JWT"],
                link: "https://github.com/m-ahmadjaved/odontoscan",
                span: "md:col-span-7",
              },
              {
                n: "02",
                tag: "Personal",
                title: "Coin",
                titleItalic: "Dom",
                desc: "A clear window into fast-moving cryptocurrency markets — live prices, trends, and history without the noise.",
                stack: ["React", "APIs", "Charts"],
                link: "https://github.com/m-ahmadjaved/CoinDom",
                span: "md:col-span-5",
              },
              {
                n: "03",
                tag: "Personal",
                title: "Slug",
                titleItalic: "ify",
                desc: "A Discord bot that lets communities create clean, shareable links without interrupting the conversation.",
                stack: ["Node.js", "Discord.js"],
                link: "https://github.com/m-ahmadjaved/Discord-BOT-Made-ShortURL",
                span: "md:col-span-5",
              },
              {
                n: "04",
                tag: "In progress",
                title: "Career",
                titleItalic: "Flow",
                desc: "A multi-tenant platform for tracking applications, contacts, and reminders. Redis-backed background jobs, JWT refresh tokens, and a data-viz dashboard for the whole search.",
                stack: ["TypeScript", "React", "Redis", "BullMQ", "Docker"],
                link: "#contact",
                span: "md:col-span-7",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className={p.span}>
                <article className="group relative h-full rounded-3xl border border-white/5 bg-gradient-to-b from-[#0a1014] to-[#080d10] p-10 flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-[#b8ff7a]/30 hover:shadow-[0_30px_80px_-30px_rgba(184,255,122,0.15)]">
                  <span className="absolute top-10 right-10 font-mono text-[11px] tracking-[0.2em] text-[#3a4436]">
                    {p.n}
                  </span>

                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full border border-[#b8ff7a]/30 font-mono text-[10px] tracking-[0.2em] uppercase text-[#b8ff7a] mb-5">
                      {p.tag}
                    </span>
                    <h3 className="text-[clamp(26px,3.2vw,40px)] font-light leading-[1.06] tracking-[-0.02em] text-white mb-5">
                      {p.title}
                      <em className="font-serif italic text-[#b8ff7a] font-normal">
                        {p.titleItalic}
                      </em>
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#a4b09c] max-w-[520px]">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1.5 rounded border border-white/5 font-mono text-[10px] tracking-[0.14em] uppercase text-[#5d6a58]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={p.link}
                    target={p.link.startsWith("http") ? "_blank" : undefined}
                    rel={p.link.startsWith("http") ? "noopener" : undefined}
                    className="mt-8 inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[#a4b09c] group-hover:text-[#b8ff7a] transition-colors"
                  >
                    View on GitHub
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── CRAFT ─────────────── */}
        <section
          id="craft"
          className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28"
        >
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-6 flex items-center gap-3">
              <span className="w-[34px] h-px bg-[#3a4436]" />
              04 — Security & craftsmanship
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-[clamp(34px,5vw,78px)] font-light leading-[1.02] tracking-[-0.03em] text-white max-w-[820px] mb-6">
              Care is part of{" "}
              <em className="font-serif italic text-[#b8ff7a] font-normal">
                the architecture
              </em>
              .
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-[560px] text-[16px] leading-[1.75] text-[#a4b09c] mb-16">
              People entrust software with identities, records, and decisions. I
              treat that trust as a design requirement — not a feature added at
              the end.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-[#b8ff7a]/5 border border-[#b8ff7a]/5 rounded-3xl overflow-hidden">
            {[
              {
                n: "01",
                t: "Protect what matters",
                d: "Authentication, encrypted sensitive data, and thoughtful access boundaries from the first sketch.",
              },
              {
                n: "02",
                t: "Make the invisible legible",
                d: "Clear APIs, maintainable structures, and documentation that helps the next person understand why.",
              },
              {
                n: "03",
                t: "Prepare for real life",
                d: "Efficient queries, predictable behavior, and systems designed to keep working when the easy assumptions stop.",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="bg-[#060a0d] p-12 group relative h-full">
                  <span className="block font-mono text-[11px] tracking-[0.24em] text-[#b8ff7a] mb-6">
                    {p.n}
                  </span>
                  <h3 className="text-2xl font-normal leading-[1.2] text-white mb-5">
                    {p.t}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#a4b09c]">
                    {p.d}
                  </p>
                  <span className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#b8ff7a] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── CAPABILITIES ─────────────── */}
        <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-6 flex items-center gap-3">
              <span className="w-[34px] h-px bg-[#3a4436]" />
              05 — Capabilities
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-[clamp(34px,5vw,78px)] font-light leading-[1.02] tracking-[-0.03em] text-white mb-16">
              Tools in service of{" "}
              <em className="font-serif italic text-[#b8ff7a] font-normal">
                good work
              </em>
              .
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {[
              { h: "Interface", items: ["React.js", "JavaScript · ES6+", "HTML · CSS", "Responsive layouts"] },
              { h: "Engine", items: ["Node.js", "Express.js", "REST APIs", "JWT & sessions"] },
              { h: "Data", items: ["MongoDB", "Mongoose", "Schema design", "Indexing · aggregation"] },
              { h: "Workflow", items: ["Git & GitHub", "Postman", "OpenCV", "Docker · learning"] },
            ].map((c, i) => (
              <Reveal key={c.h} delay={i * 80}>
                <div className="bg-[#060a0d] p-9 h-full hover:bg-[#0a1216] transition-colors">
                  <h3 className="font-mono text-[10px] tracking-[0.24em] uppercase text-[#b8ff7a] mb-6">
                    {c.h}
                  </h3>
                  <ul className="space-y-0">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="text-[15px] text-[#a4b09c] py-2 border-b border-white/5 last:border-0 hover:text-white transition-colors"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── WRITING ─────────────── */}
        <section
          id="writing"
          className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28"
        >
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <div>
              <Reveal>
                <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-6 flex items-center gap-3">
                  <span className="w-[34px] h-px bg-[#3a4436]" />
                  06 — Writing
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-[clamp(34px,5vw,78px)] font-light leading-[1.02] tracking-[-0.03em] text-white">
                  Notes{" "}
                  <em className="font-serif italic text-[#b8ff7a] font-normal">
                    from the work
                  </em>
                  .
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <a
                href="https://medium.com/@m-ahmadjaved"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#5d6a58] hover:text-[#b8ff7a] transition-colors"
              >
                All on Medium
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Article 01",
                t: "8 min",
                h: "MongoDB Aggregation Pipeline",
                d: "MongoDB aggregation lets you process and transform data within the database — queries pass through a pipeline of stages, each refining the result.",
              },
              {
                n: "Article 02",
                t: "6 min",
                h: "Essential MongoDB Commands",
                d: "Basic MongoDB commands to get you started, with notes on updating and managing documents as you go.",
              },
              {
                n: "Article 03",
                t: "10 min",
                h: "Designing secure REST APIs",
                d: "Patterns for authentication, rate limiting, and role-based access that survive contact with production.",
              },
            ].map((a, i) => (
              <Reveal key={a.n} delay={i * 100}>
                <a
                  href="https://medium.com/@m-ahmadjaved"
                  target="_blank"
                  rel="noopener"
                  className="group block h-full rounded-2xl bg-[#0a1014] border border-white/5 p-9 hover:-translate-y-1.5 hover:border-[#b8ff7a]/30 hover:bg-[#0d161a] transition-all duration-500"
                >
                  <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-[#5d6a58] mb-6">
                    <span>{a.n}</span>
                    <span>{a.t}</span>
                  </div>
                  <h3 className="text-[22px] font-normal leading-[1.25] text-white mb-4">
                    {a.h}
                  </h3>
                  <p className="text-[14.5px] leading-[1.7] text-[#a4b09c] mb-6">
                    {a.d}
                  </p>
                  <span className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] uppercase text-[#b8ff7a]">
                    Read article
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─────────────── CONTACT ─────────────── */}
        <section
          id="contact"
          className="relative overflow-hidden pt-36 pb-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 40% at 50% 100%, rgba(184,255,122,0.08), transparent 70%)",
            }}
          />
          <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 text-center">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#5d6a58] mb-6">
                07 — Contact
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-[clamp(42px,7.5vw,120px)] font-light leading-[0.98] tracking-[-0.035em] text-white max-w-[1200px] mx-auto">
                Let's build something{" "}
                <em className="font-serif italic text-[#b8ff7a] font-normal">
                  worth trusting
                </em>
                .
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 mb-14 max-w-[520px] mx-auto text-[16px] leading-[1.7] text-[#a4b09c]">
                I'm open to backend and DevOps opportunities, thoughtful
                collaborations, and conversations about where software is
                heading next.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a
                href="mailto:muhammadahmad922003@gmail.com"
                className="group inline-flex items-center gap-4 rounded-full px-10 py-5 font-mono text-[12px] tracking-[0.22em] uppercase text-[#0a0d08] bg-gradient-to-br from-[#dcffa8] via-[#b8ff7a] to-[#8fd54f] shadow-[0_20px_60px_-20px_rgba(184,255,122,0.6)] hover:shadow-[0_30px_80px_-20px_rgba(184,255,122,0.9)] transition-shadow duration-500"
              >
                muhammadahmad922003@gmail.com
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}