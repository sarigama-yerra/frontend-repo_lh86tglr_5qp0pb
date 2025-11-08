export default function CTA() {
  return (
    <section id="get-started" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-amber-500 p-1 shadow-2xl">
          <div className="rounded-[22px] bg-white/90 dark:bg-neutral-900/90 px-6 py-10 sm:px-12 sm:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Ready to build something amazing?</h3>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">Start free. No credit card. Private by default. Parents get updates by SMS.</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl active:scale-[0.98] transition w-full sm:w-auto">Start creating</a>
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur px-6 py-3 text-sm font-semibold ring-1 ring-black/10 dark:ring-white/10 text-neutral-900 dark:text-white w-full sm:w-auto">Book a demo</a>
              </div>
              <p className="mt-4 text-xs text-neutral-500">By continuing you agree to our Terms and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
