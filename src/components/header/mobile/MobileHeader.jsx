import React from "react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import logo from "./../../../assets/images/logo.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MobileHeaderItem } from "./MobileHeaderItem";
import { MobileHeaderContactItem } from "./MobileHeaderContactItem";
import { MobileHeaderSocialMediaItem } from "./MobileHeaderSocialMediaItem";
export const MobileHeader = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    function handleResize() {
      if (window.innerWidth >= 1023) {
        document.body.style.overflow = "";
      } else if (window.innerWidth < 1023 && isMenuOpen) {
        document.body.style.overflow = "hidden";
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="flex flex-col lg:hidden hidden-lg">
      <div className="flex justify-between items-center p-8 z-30 bg-[#131519]">
        <img src={logo} className="h-16" alt="logo" />
        <button
          className="transition hover:text-[#b9b9bb]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoIosClose className="h-8 w-8" />
          ) : (
            <IoIosMenu className="h-8 w-8" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className={`absolute bg-[#131519] h-screen w-full z-20 `}>
          <div className="flex flex-col justify-center items-center">
            <nav className="font-semibold text-center">
              <ul className="flex flex-col space-y-6 mt-40 ">
                <MobileHeaderItem
                  label={t("menu_item_home")}
                  handleOnClick={() => scrollToSection("Hero")}
                />
                <MobileHeaderItem
                  label={t("menu_item_about_us")}
                  handleOnClick={() => scrollToSection("About")}
                />
                <MobileHeaderItem
                  label={t("menu_item_services")}
                  handleOnClick={() => scrollToSection("Services")}
                />
                <MobileHeaderItem
                  label={t("menu_item_contact_us")}
                  handleOnClick={() => scrollToSection("ContactUs")}
                />
                <li></li>
                <li></li>
                <li></li>
                <MobileHeaderContactItem label={`+212 (645) 12 546`} />
                <MobileHeaderContactItem label={`NOUADIBOU 122 NSR 87`} />
                <MobileHeaderContactItem label={`example@mail.com`} />
              </ul>
            </nav>
            <div className="mt-20">
              <ul className="flex space-x-4">
                <MobileHeaderSocialMediaItem
                  href={"http://www.facebook.com/"}
                  icon={<FaFacebookF className="h-5 w-5" />}
                />
                <MobileHeaderSocialMediaItem
                  href={"http://www.instagram.com/"}
                  icon={<FaInstagram className="h-5 w-5" />}
                />
                <MobileHeaderSocialMediaItem
                  href={"http://www.twitter.com/"}
                  icon={<FaTwitter className="h-5 w-5" />}
                />
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
