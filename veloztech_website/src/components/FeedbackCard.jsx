
import React from 'react';

const FeedbackCard = ({ feedback, name, role, image, company}) => {
  return (
    <div className="bg-[#13333b] rounded-xl shadow-md px-6 py-7 m-4 max-w-sm flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 justify-center">
      <img
        src={image}
        alt={name}
        className="w-30 h-30 object-cover rounded-full mb-4"
      />
      <p className="text-white text-md italic">"{feedback}"</p>
      <h3 className="text-lg font-semibold text-[#fc8310] mt-3">{name}</h3>
      <p className="text-sm text-[#fc8310] mb-2">{role}</p>
      <p className="text-sm text-[#fc8310] mb-2">{company}</p>
    </div>
  );
};

export default FeedbackCard;
