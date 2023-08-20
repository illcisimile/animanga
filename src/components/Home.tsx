// import { useState } from 'react';
import { useQuery } from 'react-query';

import Info from './Info';
// import Card from './Card';
import Loading from './Loading';

import { InfoProps } from '../types';

import { fetchData } from '../api';

import { FaShuffle } from 'react-icons/fa6';

const Home = () => {
  const apiUrls = [
    'https://api.jikan.moe/v4/random/anime?sfw=true',
    'https://api.jikan.moe/v4/random/manga?sfw=true',
  ];

  const selectedUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)];

  const {
    data: randomAnimeManga,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<InfoProps>('randomAnimeManga', () => fetchData(selectedUrl));

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
