const Error = ({ error }: { error: string }) => {
  return (
    <div className='max-w-4xl p-2'>
      <blockquote className='text-center text-lg italic text-[#482307]'>
        something went wrong. {error.toLowerCase()}
      </blockquote>
      <cite className='mt-4 block text-center text-[#482307]'>— unknown</cite>
    </div>
  );
};

export default Error;
