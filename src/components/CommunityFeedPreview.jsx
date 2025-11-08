import React from 'react';
import { Heart, Share2, MessageSquare } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    title: 'Space Cat Adventure',
    type: 'Story',
    likes: 32,
    comments: 5,
    thumbnail: 'https://images.unsplash.com/photo-1543946602-a0fce8117692?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Robo‑Dance Beat',
    type: 'Song',
    likes: 21,
    comments: 2,
    thumbnail: 'https://images.unsplash.com/photo-1520975922284-62165736b24b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Jungle Quest',
    type: 'Game',
    likes: 18,
    comments: 4,
    thumbnail: 'https://images.unsplash.com/photo-1520975682071-ae6f14982fcb?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function CommunityFeedPreview() {
  return (
    <section className="py-14">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Community Feed</h2>
          <p className="text-white/70">Share creations with the AIBI community and send a private link to parents.</p>
        </div>
        <button className="text-sm rounded-lg border border-white/15 px-3 py-2 hover:border-white/30">Open Feed</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockPosts.map((post) => (
          <div key={post.id} className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 hover:bg-neutral-900/70 transition">
            <div className="aspect-video w-full bg-neutral-800">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{post.title}</p>
                  <p className="text-xs text-white/60">{post.type}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1"><Heart size={16}/> {post.likes}</span>
                  <span className="inline-flex items-center gap-1"><MessageSquare size={16}/> {post.comments}</span>
                </div>
              </div>
              <button className="mt-3 w-full rounded-xl border border-white/15 px-3 py-2 hover:border-white/30 inline-flex items-center justify-center gap-2">
                <Share2 size={16}/> Share to Parents
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
