
import React from 'react';
import { STUDIO_DATA } from '../constants';

const Studio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 space-y-16">
      <header className="max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">Studio Setup</h2>
        <p className="text-zinc-500 text-lg">Una panoramica dettagliata dell'hardware e della filosofia che anima le mie produzioni.</p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {STUDIO_DATA.map((category) => (
          <section key={category.id} className="space-y-8">
            <div className="flex items-center gap-4">
               <span className="text-3xl">{category.icon}</span>
               <h3 className="text-3xl font-heading font-bold" style={{ color: category.color }}>{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.devices.map((device, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                  <h4 className="text-xl font-bold mb-3">{device.name}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{device.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Production Philosophy */}
      <section className="bg-zinc-950 p-12 rounded-3xl border border-emerald-900/30 space-y-6">
        <h3 className="text-3xl font-heading font-bold text-emerald-400">Production Philosophy</h3>
        <div className="space-y-4 text-zinc-400 leading-relaxed max-w-4xl">
          <p>Il mio approccio è 100% hardware-based. Niente DAW durante la fase creativa - solo macchine, cavi, e pura ispirazione elettrica. Ogni sessione inizia con una jam improvvisata dove lascio che le macchine "parlino tra loro". Gli errori diventano feature, i glitch diventano groove.</p>
          <p>La techno nasce dall'interazione fisica con le macchine, dalla sensazione tattile dei knob, dalla risposta immediata dei pad. Questo setup rappresenta quel rapporto viscerale con il suono che rende ogni traccia unica e impossibile da replicare esattamente.</p>
        </div>
      </section>
    </div>
  );
};

export default Studio;
