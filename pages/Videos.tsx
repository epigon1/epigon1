
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface VideoItem {
  id: string;
  title: string;
  date: string;
  thumbnailUrl: string;
}

interface PlaylistSection {
  title: string;
  description: string;
  videos: VideoItem[];
}

const PLAYLISTS: PlaylistSection[] = [
  {
    title: "LIVE SETS",
    description: "Full performances recorded live in underground venues and warehouses.",
    videos: [
      { id: "L1", title: "Live at Warehouse 01", date: "2024", thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" },
      { id: "L2", title: "Modular Jam - Stream Session", date: "2023", thumbnailUrl: "https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=800" },
      { id: "L3", title: "Industrial Underground Set", date: "2023", thumbnailUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    title: "STUDIO SESSIONS",
    description: "Deep dives into the creative process and hardware jam sessions.",
    videos: [
      { id: "S1", title: "MPC Live + TD-3 Acid Jam", date: "2024", thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" },
      { id: "S2", title: "Creating Dark Texture", date: "2024", thumbnailUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800" },
      { id: "S3", title: "TR-6S Drum Breakdown", date: "2023", thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    title: "SOUND DESIGN",
    description: "Exploring synthesis, modulation, and complex signal chains.",
    videos: [
      { id: "D1", title: "FM Synthesis Secrets", date: "2024", thumbnailUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" },
      { id: "D2", title: "Analog Heat Processing", date: "2023", thumbnailUrl: "https://images.unsplash.com/photo-1514320298324-a4a27858ad3d?auto=format&fit=crop&q=80&w=800" }
    ]
  }
];

const Videos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 space-y-24 py-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-900 pb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-red-600"></span>
            <span className="text-red-500 text-xs font-bold tracking-[0.4em] uppercase">Visual Archive</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tighter">VIDEOS</h2>
          <p className="text-zinc-500 text-lg font-light">Explore curated playlists of live sets, studio jams, and production insights.</p>
        </div>
        <a 
          href={SOCIAL_LINKS.youtube} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          SUBSCRIBE ON YOUTUBE
        </a>
      </header>

      {/* Playlists */}
      <div className="space-y-32">
        {PLAYLISTS.map((playlist, idx) => (
          <section key={idx} className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 border-l-4 border-emerald-500 pl-6">
              <h3 className="text-3xl font-heading font-bold tracking-widest">{playlist.title}</h3>
              <p className="text-zinc-500 text-sm font-light max-w-md">{playlist.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {playlist.videos.map(video => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 shadow-xl">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                    
                    {/* Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                       <div className="w-16 h-16 bg-emerald-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                       </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{video.date}</span>
                    </div>
                  </div>
                  <div className="mt-4 px-2">
                    <h4 className="font-bold text-lg text-zinc-200 group-hover:text-emerald-400 transition-colors tracking-tight">{video.title}</h4>
                  </div>
                </div>
              ))}
              
              {/* View More Card for each playlist */}
              <a 
                href={`${SOCIAL_LINKS.youtube}/playlists`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-zinc-900 flex flex-col items-center justify-center space-y-4 hover:border-zinc-700 hover:bg-zinc-950/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-60H6" /></svg>
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-600 group-hover:text-zinc-400">VIEW FULL PLAYLIST</span>
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="py-24 border-t border-zinc-900 text-center">
         <p className="text-zinc-500 text-sm uppercase tracking-[0.5em] mb-4 font-bold">Never Miss a Stream</p>
         <h3 className="text-4xl md:text-5xl font-heading font-bold mb-12 max-w-2xl mx-auto">JOIN THE INNER CIRCLE ON YOUTUBE</h3>
         <a 
           href={SOCIAL_LINKS.youtube} 
           className="inline-block px-12 py-5 border border-zinc-800 rounded-full text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all font-bold tracking-widest text-xs"
         >
           GO TO CHANNEL
         </a>
      </section>
    </div>
  );
};

export default Videos;
