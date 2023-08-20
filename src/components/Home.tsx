import { useRandomQuote, useRandom } from '../hooks';
import { InfoProps, RandomQuoteProps } from '../types';
import { FaShuffle } from 'react-icons/fa6';

import Info from './Info';
import Loading from './Loading';
import RandomQuote from './RandomQuote';

const Home = () => {
  const {
    data: randomQuote,
    isLoading: isLoadingQuote,
    isError: isErrorQuote,
    error: errorQuote,
    refetch: refetchQuote,
  } = useRandomQuote();

  const {
    data: randomAnimeManga,
    isLoading: isLoadingAnimeManga,
    isError: isErrorAnimeManga,
    error: errorAnimeManga,
    refetch: refetchAnime,
  } = useRandom();

  const handleRandom = () => {
    refetchQuote();
    refetchAnime();
  };

  return (
    <div className='m-4 p-2 md:m-8'>
      <div className='mx-auto mb-8 flex max-w-2xl flex-col items-center'>
        <h2 className='mb-4 font-semibold'>search for anime</h2>
        <input
          className='w-full rounded border-2 border-[#482307] px-4 py-2 text-center text-xl text-[#482307] placeholder-[#482307] shadow-lg ring-[#482307] focus:outline-none focus:ring-2'
          type='text'
          placeholder='fate/stay night'
        />
        {isLoadingQuote ? (
          <Loading />
        ) : isErrorQuote ? (
          <div>Error: {(errorQuote as Error)?.message}</div>
        ) : (
          <RandomQuote details={randomQuote as RandomQuoteProps} />
        )}
      </div>
      <div className='flex flex-col items-center gap-2'>
        <button
          className='rounded bg-[#482307] px-4 py-2 font-bold text-white hover:scale-105 hover:bg-[#a1724e]'
          onClick={handleRandom}
        >
          random <FaShuffle className='inline' />
        </button>
        <h3 className='font-semibold'>you might like</h3>
      </div>
      {isLoadingAnimeManga ? (
        <Loading />
      ) : isErrorAnimeManga ? (
        <div>Error: {(errorAnimeManga as Error)?.message}</div>
      ) : (
        <Info details={randomAnimeManga as InfoProps} />
      )}
    </div>
  );
};

export default Home;
