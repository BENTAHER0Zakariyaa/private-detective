import React from "react";

export const HeroCard = ({ number, title, paragraph }) => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-white">
        <span className="text-[#2b71e2]">{number}.</span> {title}
      </h3>
      <p className="font-light mt-4 text-[#b9b9bb]">{paragraph}</p>
    </div>
  );
};
