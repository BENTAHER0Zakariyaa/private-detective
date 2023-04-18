import React from "react";

export const MobileHeaderSocialMediaItem = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition"
    >
      <li>{icon}</li>
    </a>
  );
};
