import { createContext, useState } from 'react';

type Anime = {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
  description: string;
  genres: string[];
  format: string;
  status: string;
  episodes: number;
  duration: number;
  season: string;
  averageScore: number;
  popularity: number;
  siteUrl: string;
};

type AnimeContextType = {
  anime: Anime[];
  setAnime: (anime: Anime[]) => void;
};

export const AnimeContext = createContext<AnimeContextType>({
  anime: [],
  setAnime: () => {},
});

export const AnimeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [anime, setAnime] = useState<Anime[]>([]);

  return <AnimeContext.Provider value={{ anime, setAnime }}>{children}</AnimeContext.Provider>;
};

export default AnimeContext;
