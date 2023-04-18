import React from "react";

export const DesktopHeaderSocialMediaItem = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition"
    >
      <li>{icon}</li>
    </a>
  );
};
