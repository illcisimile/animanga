import { useQuery } from 'react-query';
import { fetchData, fetchRandomQuote } from '../services';
import { InfoProps, CardProps, RandomQuoteProps } from '../types';

const randomUrls = [
  'https://api.jikan.moe/v4/random/anime?sfw=true',
  'https://api.jikan.moe/v4/random/manga?sfw=true',
];

const selectedRandomUrl =
  randomUrls[Math.floor(Math.random() * randomUrls.length)];

export const useRandomQuote = () => {
  return useQuery<RandomQuoteProps>('randomQuote', () =>
    fetchRandomQuote('https://animechan.xyz/api/random'),
  );
};

export const useRandom = () => {
  return useQuery<InfoProps>('randomAnimeManga', () =>
    fetchData(selectedRandomUrl),
  );
};

export const useSeasonalAnime = () => {
  return useQuery<CardProps[]>('seasonalAnime', () =>
    fetchData('https://api.jikan.moe/v4/seasons/now?limit=10&sfw=true'),
  );
};

export const useTopAnime = () => {
  return useQuery<CardProps[]>('topAnime', () =>
    fetchData('https://api.jikan.moe/v4/top/anime?limit=10&sfw=true'),
  );
};

export const useTopManga = () => {
  return useQuery<CardProps[]>('topManga', () =>
    fetchData('https://api.jikan.moe/v4/top/manga?limit=10&sfw=true'),
  );
};
