
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Music: React.FC = () => {
  return (
    <div className="container mx-auto px-6 space-y-16">
      <header className="max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">Discography</h2>
        <p className="text-zinc-500 text-lg">Stream and download the latest releases across all platforms.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Spotify Section */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-heading font-bold text-emerald-400">Spotify</h3>
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Artist Profile</a>
           </div>
           <div className="bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden">
             <iframe 
                src="https://open.spotify.com/embed/artist/1au5rk7pcWVYyeVgtOpBdy?utm_source=generator&theme=0" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Spotify Player"
              ></iframe>
           </div>
        </div>

        {/* SoundCloud Section */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-heading font-bold text-orange-400">SoundCloud</h3>
              <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Listen More</a>
           </div>
           <div className="bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden">
              <iframe 
                width="100%" 
                height="380" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/33133649&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="SoundCloud Player"
              ></iframe>
           </div>
        </div>
      </div>

      {/* Bandcamp CTA */}
      <section className="bg-zinc-950 p-12 rounded-3xl border border-zinc-900 flex flex-col items-center text-center space-y-6">
        <h3 className="text-3xl font-heading font-bold">Support the Underground</h3>
        <p className="text-zinc-500 max-w-xl">Purchase high-quality lossless tracks directly via Bandcamp to support future productions.</p>
        <a 
          href={SOCIAL_LINKS.bandcamp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-[#629aa9] text-white font-bold rounded-full hover:brightness-110 transition-all"
        >
          Browse on Bandcamp
        </a>
      </section>
    </div>
  );
};

export default Music;
