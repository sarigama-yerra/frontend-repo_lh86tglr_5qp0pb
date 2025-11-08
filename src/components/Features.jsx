import { ShieldCheck, Sparkles, Mic, Globe2, HeartHandshake, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Create anything',
    desc: 'Comics, songs, stories, games—guided like levels in Duolingo.',
  },
  {
    icon: <Mic className="h-5 w-5" />,
    title: 'Voice guidance',
    desc: 'Friendly voice prompts help kids stay focused and learn by doing.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Safety first',
    desc: 'Age‑appropriate AI with content filters and parent controls.',
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: 'Parent peace of mind',
    desc: 'SMS updates and a private link to follow progress—no login required.',
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: 'Multilingual',
    desc: 'English (US), English (India), with Hindi coming soon.',
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Insights that matter',
    desc: 'Track creativity, time on task, and learning streaks.',
  },
];

export default function Features() {
  return (
    <section id="product" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Why kids love AIBI, and parents trust it</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">A creative studio built for curiosity, with safety and visibility baked in.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 ring-1 ring-black/10 dark:ring-white/10 hover:ring-indigo-300 dark:hover:ring-indigo-500/50 transition shadow-sm hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
