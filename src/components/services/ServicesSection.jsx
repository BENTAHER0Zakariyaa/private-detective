import React from "react";

import firstService from "./../../assets/images/services/concurrence-deloyale.jpg";
import secondService from "./../../assets/images/services/particulier.jpg";
import thirdService from "./../../assets/images/services/recherche-débiteur.jpg";
import forthService from "./../../assets/images/services/controle-de-salaries.jpg";

import { ServicesCard } from "./ServicesCard";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#17181d] py-20 px-8 xl:px-0">
      <div className="lg:w-[1200px] mx-auto">
        <h4 className="font-bold text-[#616164] text-3xl">
          Ce que nous faisons
        </h4>
        <h1 className="font-bold text-6xl mt-2">Nos Services</h1>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 mt-12">
          <ServicesCard
            image={firstService}
            title={t("services_first_paragraph_title")}
            paragraph={t("services_first_paragraph")}
          />
          <ServicesCard
            image={secondService}
            title={t("services_second_paragraph_title")}
            paragraph={t("services_second_paragraph")}
          />
          <ServicesCard
            image={thirdService}
            title={t("services_third_paragraph_title")}
            paragraph={t("services_third_paragraph")}
          />
          <ServicesCard
            image={forthService}
            title={t("services_forth_paragraph_title")}
            paragraph={t("services_forth_paragraph")}
          />
        </div>
      </div>
    </section>
  );
};
