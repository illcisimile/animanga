import { useQuery } from 'react-query';

import Card from './Card';
import Loading from './Loading';

import { CardProps } from '../types';

import { fetchData } from '../api';

const TopMangaList = () => {
  const {
    data: topManga,
    isLoading,
    isError,
    error,
  } = useQuery<CardProps[]>('topManga', () =>
    fetchData('https://api.jikan.moe/v4/top/manga?limit=10&sfw=true'),
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  return (
    <div className='m-4 p-2 md:m-8'>
      <h1 className='mb-4 font-bold'>top manga</h1>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {topManga?.map((manga) => <Card key={manga.mal_id} info={manga} />)}
      </div>
    </div>
  );
};

export default TopMangaList;
