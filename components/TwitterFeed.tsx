
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const TwitterFeed: React.FC = () => {
  const tweets = [
    { id: 1, text: "New hardware incoming for the studio. Preparing the next dark acid sequence. ⚡️ #techno #studio #epigon1", date: "2h ago" },
    { id: 2, text: "Thanks to everyone who came to the warehouse rave last night. The energy was insane! 🏴‍☠️", date: "1d ago" },
    { id: 3, text: "Just uploaded a new studio breakdown on YouTube. Link in bio! 🎛️", date: "3d ago" },
    { id: 4, text: "MPC Live + TD-3 = Endless patterns. Can't stop the flow.", date: "1w ago" },
  ];

  return (
    <div className="space-y-6">
      {tweets.map(tweet => (
        <div key={tweet.id} className="pb-6 border-b border-zinc-900 last:border-0">
          <p className="text-zinc-300 leading-relaxed mb-2">{tweet.text}</p>
          <div className="flex justify-between items-center text-[10px] text-zinc-600 font-bold uppercase tracking-wider">
            <span>{tweet.date}</span>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">View on X</a>
          </div>
        </div>
      ))}
      <div className="pt-4">
        <a 
          href={SOCIAL_LINKS.twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full text-center py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Follow @epigon14
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
