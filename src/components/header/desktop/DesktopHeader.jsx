import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import logo from "./../../../assets/images/logo.png";
import { DesktopHeaderItem } from "./DesktopHeaderItem";
import { DesktopHeaderSocialMediaItem } from "./DesktopHeaderSocialMediaItem";

export const DesktopHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="lg:block hidden bg-[#131519] w-full">
      <div className="flex justify-between items-center p-8 mx-auto xl:px-0 xl:py-8 xl:w-[1200px]">
        <img src={logo} className="h-20" alt="logo" />
        <nav className="font-semibold text-center flex space-x-20">
          <ul className="flex items-center space-x-10">
            <DesktopHeaderItem href={"/#Hero"} label={t("menu_item_home")} />
            <DesktopHeaderItem
              href={"/#About"}
              label={t("menu_item_about_us")}
            />
            <DesktopHeaderItem
              href={"/#Services"}
              label={t("menu_item_services")}
            />
            <DesktopHeaderItem
              href={"/#ContactUs"}
              label={t("menu_item_contact_us")}
            />
          </ul>
          <ul className="flex items-center space-x-4">
            <DesktopHeaderSocialMediaItem
              href={`https://www.facebook.com/`}
              icon={<FaFacebookF className="h-4 w-4" />}
            />
            <DesktopHeaderSocialMediaItem
              href={`https://www.instagram.com/`}
              icon={<FaInstagram className="h-4 w-4" />}
            />
            <DesktopHeaderSocialMediaItem
              href={`https://www.twitter.com/`}
              icon={<FaTwitter className="h-4 w-4" />}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};
