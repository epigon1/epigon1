
import React from 'react';

const Bio: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center animate-in fade-in duration-700">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-emerald-500"></span>
              <span className="text-emerald-500 text-xs font-bold tracking-[0.4em] uppercase">Artist Profile</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-heading font-bold tracking-tighter leading-none mb-8">
              BIOGRAPHY<span className="text-emerald-500">.</span>
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar info */}
            <div className="lg:col-span-4 space-y-12">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 group">
                <img 
                  src="https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=800" 
                  alt="epigon1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Based In</h4>
                  <p className="text-white font-medium tracking-wide">Italy / Underground</p>
                </div>
                <div>
                  <h4 className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Main Weapons</h4>
                  <p className="text-white font-medium tracking-wide">MPC Live, TD-3, TR-6S, Analog Heat</p>
                </div>
                <div>
                  <h4 className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Sonic Focus</h4>
                  <p className="text-white font-medium tracking-wide">Industrial Techno, Acid, Experimental</p>
                </div>
              </div>
            </div>

            {/* Main Bio Text */}
            <div className="lg:col-span-8 space-y-8">
              <p className="text-2xl md:text-3xl text-zinc-100 font-light leading-snug">
                <span className="text-emerald-400 font-bold">epigon1</span> is an Italian techno producer and sound designer whose work explores the intersection of industrial grit and hypnotic rhythm.
              </p>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  With a background rooted in analog experimentation, the epigon1 project was conceived as a reaction against the overly polished sounds of contemporary dance music. Choosing hardware over software, every release is the result of a physical dialogue between the artist and his machines.
                </p>
                <p>
                  The signature epigon1 sound is built upon distorted basslines, metallic textures, and relentless percussion sequences. His creative process is centered around the jam - capturing raw, unedited moments of inspiration that prioritize feeling over technical perfection.
                </p>
                <p>
                  Beyond the studio, epigon1's live performances are immersive experiences. Eschewing the traditional DJ setup, he brings his hardware onto the stage, deconstructing and reimagining his tracks in real-time to suit the energy of the crowd.
                </p>
              </div>

              {/* Quick stats/labels grid */}
              <div className="grid grid-cols-2 gap-4 pt-12">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                  <div className="text-emerald-500 font-bold text-3xl mb-1">2018</div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Project Founded</div>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                  <div className="text-emerald-500 font-bold text-3xl mb-1">100%</div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Hardware Logic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
