import React from 'react';
import { Sparkles, Image as ImageIcon, BookOpen, Music, Gamepad2, Hammer } from 'lucide-react';

const tracks = [
  { id: 'comics', icon: BookOpen, title: 'AI Comics', desc: 'Create a 4‑panel comic from your idea with characters and speech bubbles.' },
  { id: 'images', icon: ImageIcon, title: 'AI Images', desc: 'Describe and paint with AI to make posters, stickers, and cards.' },
  { id: 'stories', icon: Sparkles, title: 'AI Stories', desc: 'Spin short stories with voice‑guided prompts and illustrations.' },
  { id: 'songs', icon: Music, title: 'AI Songs', desc: 'Write fun lyrics and generate simple melodies to sing along.' },
  { id: 'games', icon: Gamepad2, title: 'Mini Games', desc: 'Build tiny web games with blocks and friendly guidance.' },
  { id: 'utilities', icon: Hammer, title: 'Utility Apps', desc: 'Make timers, flashcards, and calculators from natural language.' },
];

export default function ProjectTracks() {
  return (
    <section className="py-14">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Guided Projects</h2>
          <p className="text-white/70">Duolingo‑style steps: complete one task to unlock the next.</p>
        </div>
        <button className="text-sm rounded-lg border border-white/15 px-3 py-2 hover:border-white/30">View My Projects</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map(({ id, icon: Icon, title, desc }) => (
          <div key={id} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-5 hover:bg-neutral-900/70 transition">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-500/10 text-orange-400 p-2">
                <Icon size={18} />
              </div>
              <p className="font-semibold">{title}</p>
            </div>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-white/60">Voice‑guided</span>
              <span className="text-xs text-white/40">•</span>
              <span className="text-xs text-white/60">Safe prompts</span>
            </div>
            <button className="mt-4 w-full rounded-xl bg-white text-black font-semibold py-2 hover:bg-white/90">Start</button>
          </div>
        ))}
      </div>
    </section>
  );
}
