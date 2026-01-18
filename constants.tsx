
import React from 'react';
import { Page, StudioCategory } from './types';

export const SOCIAL_LINKS = {
  spotify: "https://open.spotify.com/artist/1au5rk7pcWVYyeVgtOpBdy",
  twitter: "https://twitter.com/epigon14",
  instagram: "https://instagram.com/epigon_1",
  soundcloud: "https://soundcloud.com/epigon1",
  youtube: "https://www.youtube.com/@epigon1",
  bandcamp: "https://epigon1.bandcamp.com",
  email: "booking@epigon1.com"
};

export const STUDIO_DATA: StudioCategory[] = [
  {
    id: 'brain',
    title: 'Il Cervello',
    icon: '🎛️',
    color: '#00ff88',
    devices: [
      {
        name: 'MPC Live',
        description: "Il sequencer principale che orchestra l'intero setup. Con i suoi 16 pad sensibili alla velocity e il workflow intuitivo, l'MPC Live è il cuore pulsante di ogni sessione. Perfetto per creare pattern complessi, gestire sample e controllare tutto l'hardware esterno via MIDI."
      }
    ]
  },
  {
    id: 'sequencers',
    title: 'Sequencers & Samplers',
    icon: '⚡',
    color: '#00ccff',
    devices: [
      {
        name: 'Elektron Model:Samples',
        description: "Sampler compatto ma potentissimo, ideale per drum patterns techno sporchi e industriali. I 6 track permettono layering complessi di kick, snare e percussioni."
      },
      {
        name: 'Elektron Model:Cycles',
        description: "Il fratello FM del Model:Samples. Sei engine di sintesi FM-based perfetti per creare bassline acide, hi-hats metallici e texture atmosferiche."
      },
      {
        name: 'Polyend Tracker',
        description: "Approccio old-school al sequencing con interfaccia tracker moderna. Perfetto per arrangimenti complessi e manipolazione granulare dei sample."
      }
    ]
  },
  {
    id: 'roland',
    title: 'Roland Zone',
    icon: '🔴',
    color: '#ff4444',
    devices: [
      {
        name: 'Roland TR-6S',
        description: "La drum machine moderna con il DNA delle leggendarie TR. 6 tracce con suoni classici 808, 909, 707 e samples custom."
      },
      {
        name: 'Roland MC-101',
        description: "Groovebox tascabile con il motore sonoro della Serie ZEN-Core. 4 tracce per synth, drum e bassline."
      },
      {
        name: 'Roland MX-1 Mix Performer',
        description: "Il centro di comando del setup. 18 canali, effetti per ogni traccia, e integrazione perfetta con l'ecosistema AIRA."
      }
    ]
  },
  {
    id: 'synths',
    title: 'Synths & Basslines',
    icon: '🎹',
    color: '#cc44ff',
    devices: [
      {
        name: 'Yamaha RM1X',
        description: "La leggenda delle groovebox degli anni 2000. Sequencer hardware incredibilmente profondo con arpeggiatori complessi."
      },
      {
        name: 'Arturia MicroFreak',
        description: "Synth ibrido digitale-analogico con tastiera capacitiva. 12 engine di sintesi diversi."
      },
      {
        name: 'Behringer TD-3',
        description: "Clone della leggendaria TB-303. Bassline acide che definiscono il sound techno."
      }
    ]
  }
];
