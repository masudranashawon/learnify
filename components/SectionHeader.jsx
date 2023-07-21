const SectionHeader = ({ subHeading, heading, pera }) => {
  return (
    <div className='flex flex-col items-center text-center gap-1'>
      <div className='overflow-hidden'>
        <p
          data-aos='slide-down'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          className='uppercase text-sm font-bold tracking-widest'
        >
          {subHeading}
        </p>
      </div>
      <div className='overflow-hidden'>
        <h2
          data-aos='slide-down'
          data-aos-delay='500'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          className='text-3xl'
        >
          {heading}
        </h2>
      </div>
      <div className='overflow-hidden w-3/5'>
        <p
          data-aos='slide-up'
          data-aos-delay='1000'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          className='text-center text-gray-500'
        >
          {pera}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
