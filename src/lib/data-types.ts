export type AnimeType = {
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
