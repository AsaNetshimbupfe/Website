import React from "react";

const ServiceCard = ({ item, Icon }) => {
  return (
    <div
      className={`${item.className ?? ""} max-w-sm cursor-pointer transition hover:scale-105 w-full min-h-[300px] bg-white rounded-xl border-2 border-[#fc8318] p-6`}
    >
      <div className="mb-4">
        {Icon && <Icon className="text-2xl text-[#fc8318]" />}
      </div>
      <div className="text-xl mb-4 font-bold text-[#fc8318]">
        {item.title}
      </div>
      <div className="text-sm font-medium text-gray-500 mb-6">
        {item.description}
      </div>
      <button className="bg-[#10323c] w-full text-white text-sm font-medium py-2 rounded-md">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
