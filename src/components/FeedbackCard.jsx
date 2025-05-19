
import React from 'react';

const FeedbackCard = ({ item }) => {
  return (
    <div className="bg-[#13333b] rounded-xl shadow-md px-6 py-7 m-4 max-w-sm flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 justify-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-30 h-30 object-cover rounded-full mb-4"
      />
      <p className="text-white text-md italic">"{item.feedback}"</p>
      <h3 className="text-lg font-semibold text-amber-400 mt-3">{item.name}</h3>
      <p className="text-sm text-amber-400 mb-2">{item.role}</p>
      <p className="text-sm text-amber-400 mb-2">{item.company}</p>
    </div>
  );
};

export default FeedbackCard;
