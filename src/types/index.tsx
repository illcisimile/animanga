export interface CardProps {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
}

export interface InfoProps {
  title: string;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  synopsis: string;
  year: number;
  rank: number;
  popularity: number;
  members: number;
  type: string;
  status: string;
  url: string;
  genres: [
    {
      mal_id: number;
      name: string;
    },
  ];
  demographics: [
    {
      mal_id: number;
      name: string;
    },
  ];
  themes: [
    {
      mal_id: number;
      name: string;
    },
  ];
  score: number;
  episodes: number;
  season: string;
}

export interface RandomQuoteProps {
  anime: string;
  character: string;
  quote: string;
}
