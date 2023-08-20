import { Link } from 'react-router-dom';

import { InfoProps } from '../types';

interface DetailsProps {
  details: InfoProps;
}

const Info = ({ details }: DetailsProps) => {
  return (
    <div className='py-4'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-center'>
        <img
          src={details.images.webp.large_image_url}
          alt={details.title}
          className='mb-2 w-full rounded object-contain shadow-lg sm:mb-0 sm:w-60'
        />
        <div>
          <div className='mb-2 border-b-2 border-dashed border-[#a1724e]'>
            <h1>
              <Link
                target='_blank'
                to={details.url}
                className='hover:rounded hover:bg-[#a1724e] hover:text-white'
              >
                {details.title}
              </Link>
            </h1>
            {details.season && details.year && (
              <p>
                {details.season.charAt(0).toUpperCase() +
                  details.season.slice(1)}{' '}
                {details.year}
              </p>
            )}
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-2 '>
            {details.score && (
              <p>
                <span className='font-semibold'>score: </span>
                {details.score}
              </p>
            )}
            {details.rank && (
              <p>
                <span className='font-semibold'>ranked: </span>#{details.rank}
              </p>
            )}
            {details.popularity && (
              <p>
                <span className='font-semibold'>popularity: </span>#
                {details.popularity}
              </p>
            )}
            {details.members && (
              <p>
                <span className='font-semibold'>members: </span>
                {details.members.toLocaleString('en-US')}
              </p>
            )}
          </div>
          {details.type && (
            <p>
              <span className='font-semibold'>type: </span>
              {details.type}
            </p>
          )}
          {details.episodes && (
            <p>
              <span className='font-semibold'>episodes: </span>
              {details.episodes}
            </p>
          )}
          {details.status && (
            <p>
              <span className='font-semibold'>status: </span>
              {details.status}
            </p>
          )}
          {details.genres.length > 0 && (
            <p>
              <span className='font-semibold'>genres: </span>
              {details.genres.map((genre) => genre.name).join(', ')}
            </p>
          )}
          {details.themes.length > 0 && (
            <p>
              <span className='font-semibold'>theme: </span>
              {details.themes.map((theme) => theme.name).join(', ')}
            </p>
          )}
          {details.demographics.length > 0 && (
            <p>
              <span className='font-semibold'>demographic: </span>
              {details.demographics
                .map((demographic) => demographic.name)
                .join(', ')}
            </p>
          )}
          {details.synopsis && (
            <p>
              <span className='font-semibold'>synopsis: </span>
              {details.synopsis}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
