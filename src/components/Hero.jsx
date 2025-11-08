import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.5),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.6),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.6),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 ring-1 ring-black/10 dark:ring-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Safe AI for kids 8–14
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            Create with AI.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-amber-500">Learn for life.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-700/90 dark:text-neutral-200/90 max-w-xl">
            A playful studio where kids build comics, songs, games, and stories—guided step‑by‑step with voice, with parents in the loop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl active:scale-[0.98] transition">
              Start free
            </a>
            <a href="#product" className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-6 py-3 text-sm font-semibold ring-1 ring-black/10 dark:ring-white/10 text-neutral-900 dark:text-white">
              See how it works
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            <span className="inline-flex -space-x-2 overflow-hidden">
              <img alt="" src="https://i.pravatar.cc/40?img=1" className="inline-block h-7 w-7 rounded-full ring-2 ring-white/80 dark:ring-neutral-900/80" />
              <img alt="" src="https://i.pravatar.cc/40?img=2" className="inline-block h-7 w-7 rounded-full ring-2 ring-white/80 dark:ring-neutral-900/80" />
              <img alt="" src="https://i.pravatar.cc/40?img=3" className="inline-block h-7 w-7 rounded-full ring-2 ring-white/80 dark:ring-neutral-900/80" />
            </span>
            <span>Trusted by parents in 40+ schools</span>
          </div>
        </div>
      </div>
    </section>
  );
}
