import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mic } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] w-full">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                AIBI — Create, Play, and Learn with AI
              </h1>
              <p className="mt-3 text-white/70 max-w-2xl">
                A friendly studio where kids build comics, images, songs, stories, games, and mini apps by simply talking or typing. Parents get smart insights and instant SMS updates.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="px-2 py-1 rounded-full border border-white/10">English (US)</span>
                <span className="px-2 py-1 rounded-full border border-white/10">English (India)</span>
                <span className="px-2 py-1 rounded-full border border-white/10">Hindi (soon)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-black font-semibold px-5 py-3 w-full md:w-auto justify-center">
                <Rocket size={18} /> Start a Guided Project
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 hover:border-white/30 transition px-5 py-3 w-full md:w-auto justify-center">
                <Mic size={18} /> Play Welcome Voice
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/50">
              <p className="font-semibold">Kid‑safe by design</p>
              <p className="text-white/70">Built‑in safeguards, parental mode, and private sharing options.</p>
            </div>
            <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/50">
              <p className="font-semibold">Phone + OTP login</p>
              <p className="text-white/70">Quick registration with SMS verification and Twilio for updates.</p>
            </div>
            <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/50">
              <p className="font-semibold">Multi‑language</p>
              <p className="text-white/70">English (US), English (India), and Hindi coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
