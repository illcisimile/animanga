import { useRandom } from '../hooks';
import { InfoProps } from '../types';
import { FaShuffle } from 'react-icons/fa6';

import Info from './Info';
import Loading from './Loading';

const Home = () => {
  const {
    data: randomAnimeManga,
    isLoading,
    isError,
    error,
    refetch,
  } = useRandom();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  return (
    <div className='m-4 p-2 md:m-8'>
      <div className='mx-auto mb-8 flex max-w-2xl flex-col items-center'>
        <h2 className='mb-4 font-semibold'>search for anime</h2>
        <input
          className='w-full rounded border-2 border-[#482307] px-4 py-2 text-center text-xl text-[#482307] placeholder-[#482307] shadow-lg ring-[#482307] focus:outline-none focus:ring-2'
          type='text'
          placeholder='fate/stay night'
        />
        <div className='max-w-4xl p-2'>
          <blockquote className='text-center text-lg italic text-[#482307]'>
            "In their heart, everyone has faith that their victory exists.
            However, in the face of time and destiny, the act of faith is
            fruitless and fleeting at best."
          </blockquote>
          <cite className='mt-4 block text-center text-[#482307]'>— C.C.</cite>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <h3 className='font-semibold'>you might like</h3>
        <button
          className='rounded bg-[#482307] px-4 py-2 font-bold text-white hover:bg-[#a1724e]'
          onClick={() => refetch()}
        >
          random <FaShuffle className='inline' />
        </button>
      </div>
      <Info details={randomAnimeManga as InfoProps} />
    </div>
  );
};

export default Home;
