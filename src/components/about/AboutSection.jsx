import React from "react";

import aboutUsImage from "./../../assets/images/about-us.jpg";
import { useTranslation } from "react-i18next";
export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#13131a] py-20 px-8 xl:px-0" id="about">
      <div className="lg:w-[1200px] mx-auto">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:items-center lg:space-x-8">
          <div className="w-full h-[444px] lg:w-1/2 md:h-[600px] overflow-hidden">
            <img
              className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
              src={aboutUsImage}
              loading="lazy"
              alt="about_us_image"
            />
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-4xl text-[#616164] font-bold mb-2">
              {t("about_sub_title")}
            </h4>
            <h2 className="text-6xl font-bold">{t("about_title")}</h2>
            <div className="mt-12 text-[#b9b9bb] lg:w-[570px]">
              <p className="mb-8">
                <span className="text-[#6bf]">
                  L'Agence de Détective Privé "LOGO"
                </span>{" "}
                est une équipe dynamique de professionnels avec plus de 30 ans
                d'expérience dans l'investigation dédiée à répondre aux besoins
                de sécurité et d'investigation des entreprises et des
                particuliers.
              </p>
              <p className="mb-8">
                Nous fournissons à nos clients des services allant des enquêtes
                de défense criminelle à la surveillance secrète.
              </p>
              <p className="mb-8">
                Notre agence fournit des services pour les cabinets d'avocats,
                les citoyens privés, les compagnies d'assurance, l'industrie du
                cannabis, les entreprises et les sociétés, fournissant des
                résultats de qualité dans les délais impartis. Notre entreprise
                est engagée envers vous, nos clients, et nous sommes fiers
                d'être axés sur les résultats.
              </p>
              <p className="mb-8">
                Notre réputation de fiabilité et d'intégrité auprès des
                compagnies d'assurance, des cabinets d'avocats, des
                corporations, des entités commerciales et des particuliers fait
                de{" "}
                <span className="text-[#6bf]">
                  l'Agence de Détective Privé "LOGO"
                </span>{" "}
                une agence compétitive !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
