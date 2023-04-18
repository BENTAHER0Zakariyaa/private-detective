import React from "react";
import heroImage from "./../../assets/images/hero.jpg";
import { useTranslation } from "react-i18next";
import { HeroCard } from "./HeroCard";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="Hero">
      <div
        className="bg-center bg-cover bg-no-repeat h-screen w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="from-[#131519] via-[#131519]/80 to-[#131519] bg-gradient-to-b h-full w-full px-8 mt-10 xl:px-0">
          <div className="lg:w-[1200px] mx-auto">
            <div className="flex flex-col justify-around h-screen">
              <div className="-mt-20">
                <div className="space-y-1 mb-8">
                  <h5 className="font-medium text-[#b9b9bb]">
                    {t("hero_title")}
                  </h5>
                  <h1 className="font-bold text-7xl leading-tight ">
                    {t("hero_sub_title")}
                  </h1>
                </div>
                <div className=" space-x-4">
                  <a
                    href={`/#Content`}
                    className="bg-[#2b71e2] py-3 px-4 font-bold hover:bg-[#66bbff] transition"
                  >
                    {t("hero_main_button")}
                  </a>
                  <a
                    href={`/#Services`}
                    className="py-3 px-4 font-bold ring-2 ring-white ring-inset hover:bg-white hover:text-[#131519] transition"
                  >
                    {t("hero_second_button")}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-8 -mt-10">
                <HeroCard
                  number={1}
                  title={t("hero_first_paragraph_title")}
                  paragraph={t("hero_first_paragraph")}
                />
                <HeroCard
                  number={2}
                  title={t("hero_second_paragraph_title")}
                  paragraph={t("hero_second_paragraph")}
                />
                <HeroCard
                  number={3}
                  title={t("hero_third_paragraph_title")}
                  paragraph={t("hero_third_paragraph")}
                />
                <HeroCard
                  number={5}
                  title={t("hero_forth_paragraph_title")}
                  paragraph={t("hero_forth_paragraph")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
