import { useQuery } from 'react-query';

import Card from './Card';
import Loading from './Loading';

import { CardProps } from '../types';

import { fetchData } from '../api';
import { Helmet } from 'react-helmet-async';

const TopAnimeList = () => {
  const {
    data: topAnime,
    isLoading,
    isError,
    error,
  } = useQuery<CardProps[]>('topAnime', () =>
    fetchData('https://api.jikan.moe/v4/top/anime?limit=10&sfw=true'),
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  return (
    <>
      <Helmet>
        <title>top anime | animanga</title>
      </Helmet>
      <div className='m-4 p-2 md:m-8'>
        <h1 className='mb-4 font-bold'>top anime</h1>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {topAnime?.map((anime) => <Card key={anime.mal_id} info={anime} />)}
        </div>
      </div>
    </>
  );
};

export default TopAnimeList;
