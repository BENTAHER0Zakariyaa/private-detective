import React from "react";

export const ServicesCard = ({ image, title, paragraph }) => {
  return (
    <div className="bg-[#1e1e28] group">
      <div className="h-[250px] overflow-hidden">
        <img
          className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt="concurrenceDeloyale"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <h3 className="font-bold text-2xl text-[#6bf]">{title}</h3>
        <p className="font-light mt-2 text-[#b9b9bb]">{paragraph}</p>
      </div>
    </div>
  );
};
