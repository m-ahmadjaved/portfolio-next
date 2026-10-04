export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12">
        <div className="flex flex-wrap justify-between items-center gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#3a4436]">
          <p>© 2026 — Ahmad Javed</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/m-ahmadjaved"
              target="_blank"
              rel="noopener"
              className="hover:text-[#b8ff7a] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/m-ahmadjaved"
              target="_blank"
              rel="noopener"
              className="hover:text-[#b8ff7a] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://medium.com/@m-ahmadjaved"
              target="_blank"
              rel="noopener"
              className="hover:text-[#b8ff7a] transition-colors"
            >
              Medium ↗
            </a>
            <a
              href="mailto:muhammadahmad922003@gmail.com"
              className="hover:text-[#b8ff7a] transition-colors"
            >
              Email ↗
            </a>
          </div>
          <p>Backend · Full-stack · DevOps in progress</p>
        </div>
      </div>
    </footer>
  );
}