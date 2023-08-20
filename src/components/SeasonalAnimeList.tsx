import { Helmet } from 'react-helmet-async';
import { useSeasonalAnime } from '../hooks';

import Card from './Card';
import Loading from './Loading';

const SeasonalAnimeList = () => {
  const { data: seasonalAnime, isLoading, isError, error } = useSeasonalAnime();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  return (
    <>
      <Helmet>
        <title>seasonal anime | animanga</title>
      </Helmet>
      <div className='m-4 p-2 md:m-8'>
        <h1 className='mb-4 font-bold'>seasonal anime</h1>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {seasonalAnime?.map((seasonal) => (
            <Card key={seasonal.mal_id} info={seasonal} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SeasonalAnimeList;
