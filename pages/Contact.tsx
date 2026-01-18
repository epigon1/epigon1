
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const contacts = [
    { label: 'Spotify', value: 'Artist Profile', link: SOCIAL_LINKS.spotify, color: 'text-emerald-400' },
    { label: 'Twitter', value: '@epigon14', link: SOCIAL_LINKS.twitter, color: 'text-cyan-400' },
    { label: 'Instagram', value: '@epigon_1', link: SOCIAL_LINKS.instagram, color: 'text-pink-400' },
    { label: 'SoundCloud', value: 'epigon1', link: SOCIAL_LINKS.soundcloud, color: 'text-orange-400' },
    { label: 'YouTube', value: '@epigon1', link: SOCIAL_LINKS.youtube, color: 'text-red-500' },
    { label: 'Email', value: 'booking@epigon1.com', link: `mailto:${SOCIAL_LINKS.email}`, color: 'text-white' },
  ];

  return (
    <div className="container mx-auto px-6 space-y-16">
      <header className="max-w-2xl text-center mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">Connect</h2>
        <p className="text-zinc-500 text-lg">For bookings, remix requests, or tech inquiries.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, i) => (
          <a 
            key={i}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all flex flex-col items-center justify-center text-center space-y-2 hover:scale-[1.02]"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-600 group-hover:text-zinc-400 transition-colors">{contact.label}</span>
            <span className={`text-xl font-bold font-heading ${contact.color}`}>{contact.value}</span>
          </a>
        ))}
      </div>

      <div className="pt-12 text-center">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500">
           <div className="px-12 py-4 bg-black rounded-full text-zinc-300 font-bold uppercase tracking-widest text-sm">
             Available for Global Bookings 2025
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
