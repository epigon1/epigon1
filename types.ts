
export enum Page {
  Home = 'home',
  Music = 'music',
  Videos = 'videos',
  Studio = 'studio',
  Bio = 'bio',
  Contact = 'contact'
}

export interface StudioDevice {
  name: string;
  description: string;
}

export interface StudioCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  devices: StudioDevice[];
}
