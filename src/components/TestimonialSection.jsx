import React from 'react';
import FeedbackCard from './FeedbackCard';


const Testimonial = ({items}) => {
  return (
    <div className="bg-white mt-7 px-24">
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />
  <div className="max-w-5xl mx-auto px-4 lg:px-8 flex justify-end items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] mt-15">
    <h1 className="text-6xl font-bold text-center md:text-left  text-[#fc8318]">
      What people are <br className="sm-block hidden" /> saying about us
    </h1>
    <div className="w-full md:mt-0 mt-6 text-center md:text-left">
      <p className="max-w-[450px] mx-auto md:mx-0 text-md font-medium text-[#13333b]">
        Everything you need to accept technology and grow your business anywhere in the planet.
      </p>
    </div>
  </div>



      <div className='flex flex-wrap sm:justify-start justify-center items-center w-full relative z-[1]'>
        {items.map((item) => (
          <FeedbackCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
