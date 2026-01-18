
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import Studio from './pages/Studio';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      
      const pageMap: Record<string, Page> = {
        'home': Page.Home,
        'music': Page.Music,
        'videos': Page.Videos,
        'studio': Page.Studio,
        'bio': Page.Bio,
        'contact': Page.Contact
      };

      if (pageMap[hash]) {
        setCurrentPage(pageMap[hash]);
      } else if (!hash) {
        setCurrentPage(Page.Home);
      } else {
        setCurrentPage(Page.Home);
      }
      
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); 
    
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home: return <Home />;
      case Page.Music: return <Music />;
      case Page.Videos: return <Videos />;
      case Page.Studio: return <Studio />;
      case Page.Bio: return <Bio />;
      case Page.Contact: return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Permanent ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar currentPage={currentPage} />

      <main className="relative z-10 pt-20">
        {renderContent()}
      </main>

      <footer className="relative z-10 py-16 border-t border-zinc-900 bg-black mt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold tracking-widest text-emerald-500">EPIGON1</h2>
            <p className="text-zinc-600 text-sm mt-2 uppercase tracking-tighter font-medium">Analog Soul // Digital Pulse</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { id: 'bio', label: 'Biography' },
              { id: 'studio', label: 'Studio' },
              { id: 'contact', label: 'Contact' }
            ].map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="text-zinc-500 hover:text-emerald-400 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <p className="text-zinc-700 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} epigon1. Handcrafted Sound.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
