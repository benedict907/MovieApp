export const GENRE_TYPES = {
  ACTION: 'Action & Adventure',
  HOUSE: 'Kids & Family',
  COMEDY: 'Comedy',
  DRAMA: 'Drama',
  ROMANCE: 'Romance',
  SCI_FI: 'Sci-Fi & Fantasy',
  ROCK: 'Rock',
  POP: 'Pop',
  THRILLER: 'Thriller',
  FANTASY: 'Fantasy',
  ANIMATION: 'Animation',
  DOCUMENTARY: 'Documentary',
} as const;

export type GenreType = (typeof GENRE_TYPES)[keyof typeof GENRE_TYPES];
