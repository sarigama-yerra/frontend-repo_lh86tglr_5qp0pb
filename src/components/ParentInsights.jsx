import React from 'react';
import { BarChart3, Activity, ShieldCheck } from 'lucide-react';

export default function ParentInsights() {
  return (
    <section className="py-14">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Parent Insights</h2>
            <p className="text-white/70 mt-2">
              A simple space for guardians to review progress, top creations, and activity trends. SMS notifications are sent when your child publishes or completes a project.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/60">
                <div className="flex items-center gap-2 text-white/80"><BarChart3 size={16}/> Weekly Progress</div>
                <p className="text-white/60 mt-1">Completed steps, streaks, and time spent.</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/60">
                <div className="flex items-center gap-2 text-white/80"><Activity size={16}/> Activity Feed</div>
                <p className="text-white/60 mt-1">New creations, likes, and community shares.</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-neutral-900/60">
                <div className="flex items-center gap-2 text-white/80"><ShieldCheck size={16}/> Safety</div>
                <p className="text-white/60 mt-1">Content filters and parent‑approved sharing.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-80">
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-5">
              <p className="text-sm font-semibold">Snapshot</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-neutral-900 p-3">
                  <p className="text-2xl font-extrabold">7</p>
                  <p className="text-xs text-white/60">Creations</p>
                </div>
                <div className="rounded-lg bg-neutral-900 p-3">
                  <p className="text-2xl font-extrabold">4</p>
                  <p className="text-xs text-white/60">Shares</p>
                </div>
                <div className="rounded-lg bg-neutral-900 p-3">
                  <p className="text-2xl font-extrabold">12</p>
                  <p className="text-xs text-white/60">Likes</p>
                </div>
              </div>
              <button className="mt-4 w-full rounded-xl bg-orange-500 hover:bg-orange-600 transition text-black font-semibold py-2">Open Dashboard</button>
              <p className="text-xs text-white/50 mt-2">Mixpanel is used to measure key events responsibly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
