import { RandomQuoteProps } from '../types';

interface QuoteInfo {
  details: RandomQuoteProps;
}

const RandomQuote = ({ details }: QuoteInfo) => {
  return (
    <div className='max-w-4xl p-2'>
      <blockquote className='text-center text-lg italic text-[#482307]'>
        {details.quote}
      </blockquote>
      <cite className='mt-4 block text-center text-[#482307]'>
        — {details.character}
      </cite>
    </div>
  );
};

export default RandomQuote;
