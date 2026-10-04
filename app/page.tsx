import ContributionSkyline from "@/components/ui/contribution-skyline";

/**
 * Fetch GitHub contributions for a user from the public contributions API.
 * The API returns { date, count, level } — we only need date and count.
 */
async function getContributions(username: string) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );

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
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-4 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-[980px]">
        {/* Hero placeholder — replace later with your real hero section */}
        <header className="mb-16">
          <p className="text-sm text-neutral-500 mb-3">Muhammad Ahmad Javed</p>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-tight">
            I build the <em className="text-lime-400 italic">systems</em> behind
            <br />
            experiences people trust.
          </h1>
          <p className="mt-6 max-w-xl text-neutral-400 leading-relaxed">
            Full-stack developer in Lahore, moving from MERN applications into
            cloud infrastructure, observability, and intelligent software.
          </p>
        </header>

        {/* Contribution Skyline */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
            My GitHub activity
          </h2>

          {contributions ? (
            <ContributionSkyline data={contributions} defaultView="3d" />
          ) : (
            <div className="rounded-lg border border-neutral-800 p-8 text-center text-neutral-500">
              Could not load contributions. Check the console for details.
            </div>
          )}
        </section>

        {/* Footer placeholder */}
        <footer className="mt-24 pt-8 border-t border-neutral-900 flex flex-wrap gap-6 text-sm text-neutral-500">
          <a href="https://github.com/m-ahmadjaved" className="hover:text-lime-400">GitHub</a>
          <a href="https://linkedin.com/in/m-ahmadjaved" className="hover:text-lime-400">LinkedIn</a>
          <a href="https://medium.com/@m-ahmadjaved" className="hover:text-lime-400">Medium</a>
          <a href="mailto:muhammadahmad922003@gmail.com" className="hover:text-lime-400">Email</a>
        </footer>
      </div>
    </main>
  );
}