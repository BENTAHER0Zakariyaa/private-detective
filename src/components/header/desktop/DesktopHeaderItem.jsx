import React from "react";

export const DesktopHeaderItem = ({ label, href }) => {
  return (
    <li className="hover:text-[#66bbff] transition">
      <a href={href}>{label}</a>
    </li>
  );
};
