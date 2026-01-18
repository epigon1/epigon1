
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: Page.Home, label: 'Home' },
    { id: Page.Music, label: 'Music' },
    { id: Page.Videos, label: 'Videos' },
    { id: Page.Studio, label: 'Studio' },
    { id: Page.Bio, label: 'Bio' },
    { id: Page.Contact, label: 'Contact' },
  ];

  const handleLinkClick = (pageId: Page) => {
    window.location.hash = pageId;
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => handleLinkClick(Page.Home)}
          className="text-2xl font-bold font-heading bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          epigon1
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-emerald-400 ${
                currentPage === link.id ? 'text-emerald-400' : 'text-zinc-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-20 left-0 right-0 bg-black border-b border-zinc-800 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-lg font-medium text-left ${
                currentPage === link.id ? 'text-emerald-400' : 'text-zinc-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
