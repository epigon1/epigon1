
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import TwitterFeed from '../components/TwitterFeed';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6 pt-12">
        <h1 className="text-7xl md:text-9xl font-heading font-bold tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">epigon1</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
          Techno Producer & Sound Designer based in the underground circuit. Hardware-centric audio sculptures.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="#music"
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-emerald-400 hover:scale-105 transition-all"
          >
            Latest Releases
          </a>
          <a 
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 hover:border-zinc-700 transition-all"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Social & Feed Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Latest Release (Spotify Embed) */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="w-12 h-[1px] bg-emerald-500"></span>
            <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-500 uppercase">Latest on Spotify</h2>
          </div>
          <div className="bg-zinc-950 rounded-3xl border border-zinc-900 overflow-hidden shadow-2xl">
             <iframe 
                src="https://open.spotify.com/embed/artist/1au5rk7pcWVYyeVgtOpBdy?utm_source=generator&theme=0" 
                width="100%" 
                height="450" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Spotify Feed"
              ></iframe>
          </div>
        </section>

        {/* Twitter Feed */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="w-12 h-[1px] bg-cyan-500"></span>
            <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase">Twitter Updates</h2>
          </div>
          <div className="h-[450px] overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950 p-6">
            <TwitterFeed />
          </div>
        </section>
      </div>

      {/* Mission Section */}
      <section className="py-24 border-t border-zinc-900">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading">Hardware Purest</h3>
            <p className="text-zinc-500 leading-relaxed">No DAWs during creation. Pure signal flow through legendary machines and boutique hardware.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading">Industrial Soul</h3>
            <p className="text-zinc-500 leading-relaxed">Dark, atmospheric, and relentless. Soundscapes designed for the deepest dancefloors.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading">Global Sound</h3>
            <p className="text-zinc-500 leading-relaxed">Taking the Italian underground roots to the biggest European clubs and festivals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
