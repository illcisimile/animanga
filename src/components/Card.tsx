import { CardProps } from '../types';

interface InfoProps {
  info: CardProps;
}

const Card = ({ info }: InfoProps) => {
  return (
    <div className='flex flex-col rounded bg-[#482307] shadow-lg hover:scale-105'>
      <img
        className='h-56 rounded-t sm:h-64'
        src={info.images.webp.large_image_url}
        alt={info.title}
      />
      <div className='p-2'>
        <h6 className='text-white'>{info.title}</h6>
      </div>
    </div>
  );
};

export default Card;
