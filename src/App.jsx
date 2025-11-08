import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
          <span className="text-sm font-semibold text-neutral-900 dark:text-white">AIBI</span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} AIBI. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-xs">
          <a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Privacy</a>
          <a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Terms</a>
          <a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/30 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
