import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import ProjectTracks from './components/ProjectTracks.jsx';
import ParentInsights from './components/ParentInsights.jsx';
import CommunityFeedPreview from './components/CommunityFeedPreview.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroSection />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjectTracks />
        <ParentInsights />
        <CommunityFeedPreview />
      </main>
      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AIBI — Creative AI for Kids</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
