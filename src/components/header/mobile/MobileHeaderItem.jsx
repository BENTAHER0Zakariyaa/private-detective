import React from "react";

export const MobileHeaderItem = ({ label, handleOnClick }) => {
  return (
    <li className="hover:text-[#66bbff] transition">
      <button onClick={() => handleOnClick()}>{label}</button>
    </li>
  );
};
