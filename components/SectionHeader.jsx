const SectionHeader = ({ subHeading, heading, pera }) => {
  return (
    <div className='flex flex-col items-center text-center gap-1'>
      <span className='uppercase text-sm font-bold tracking-widest'>
        {subHeading}
      </span>
      <h2 className='text-3xl'>{heading}</h2>
      <p className='w-3/5 text-gray-500'>{pera}</p>
    </div>
  );
};

export default SectionHeader;
