import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { ImHeartBroken } from "react-icons/im";
import { SlMagnifier } from "react-icons/sl";
import {
  FaBalanceScaleLeft,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import heroImage from "./assets/images/hero.jpg";
import contectImage from "./assets/images/contect.jpg";
import contect2Image from "./assets/images/contect-2.jpg";
import { DesktopHeader } from "./components/header/desktop/DesktopHeader";
import { MobileHeader } from "./components/header/mobile/MobileHeader";
import { HeroSection } from "./components/hero/HeroSection";
import { ServicesSection } from "./components/services/ServicesSection";
import { AboutSection } from "./components/about/AboutSection";

function App() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <main className="z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <section>
          <div
            className="bg-center bg-cover bg-no-repeat w-full "
            style={{ backgroundImage: `url(${contect2Image})` }}
          >
            <div className="bg-[#131519]/90 h-full w-full px-8 py-20 xl:px-0">
              <div className="lg:w-[1200px] mx-auto">
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0  lg:space-x-8">
                  <div className="w-full lg:w-1/2 h-[444px]">
                    <from className="">
                      <div className="bg-[#131519]/90 p-16">
                        <div className="mb-8">
                          <input
                            className="w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none mb-4"
                            type="text"
                            placeholder="Entrez votre nom complet*"
                            required
                          />
                          <input
                            className="w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none mb-4"
                            type="tel"
                            placeholder="Entrez votre numéro de téléphone*"
                            required
                          />
                          <input
                            className="w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none mb-4"
                            type="email"
                            placeholder="Entrez votre adresse e-mail*"
                            required
                          />
                          <textarea
                            className="w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none"
                            type="text"
                            placeholder="Votre message"
                            rows={4}
                            required
                          />
                        </div>
                        <button className="px-8 py-3 bg-[#2b71e2] hover:bg-[#6bf] text-white font-bold w-full transition ">
                          Envoyer
                        </button>
                      </div>
                    </from>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="mx-auto">
                      <h4 className="text-4xl text-[#616164] font-bold mb-2">
                        Demande
                      </h4>
                      <h2 className="text-6xl font-bold">Contacts</h2>
                      <p className="my-8 font-bold">
                        Si vous avez des questions ou souhaitez planifier une
                        rencontre avec notre enquêteur privé, veuillez remplir
                        le formulaire.
                      </p>
                      <p className="mb-8 text-[#b9b9bb]">
                        Nous garantissons la confidentialité de tout ce que vous
                        nous direz lors d'une conversation personnelle. La
                        consultation{" "}
                        <span className="text-[#6bf]"> ne vous oblige pas</span>{" "}
                        à commander nos services, nous détruirons tous les
                        matériaux après la consultation.
                      </p>
                      <div className="grid grid-cols-1 grid-rows-3 gap-4">
                        <div className="flex items-center">
                          <div className="text-2xl font-bold w-[126px]">
                            Adresse
                          </div>
                          <div className="px-8"></div>
                          <div className="text-[#b9b9bb] font-bold text-start">
                            NOUADIBOU 122 NSR 87
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold w-[126px]">
                            Horaires
                          </div>
                          <div className="px-8"></div>
                          <div className="text-[#b9b9bb] text-start">
                            <div className="font-bold">
                              <h5>
                                Du lundi au samedi :{" "}
                                <span className="text-[#66bbff]">
                                  11h - 21h
                                </span>{" "}
                              </h5>
                              <h5>
                                Dimanche :{" "}
                                <span className="text-[#66bbff]">
                                  11h - 19h
                                </span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-xl font-bold w-[126px]">
                            Contact
                          </div>
                          <div className="px-8"></div>
                          <div className="text-[#b9b9bb] text-start">
                            <div className="font-bold">
                              <h5>+212 (645) 12 546</h5>
                              <h5>example@mail.com</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#13131a] px-8 py-10">
        <div className="flex flex-col mx-auto xl:w-[1200px]">
          <div className="flex flex-col items-center xl:flex-row xl:justify-between">
            <h1 className="text-5xl font-bold">LOGO</h1>
            <div>
              <ul className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6 items-center my-10">
                <li className="hover:text-[#66bbff] transition font-bold">
                  <button onClick={() => {}}>Accueil</button>
                </li>
                <li className="hover:text-[#66bbff] transition font-bold">
                  <button onClick={() => {}}>À propos de nous</button>
                </li>
                <li className="hover:text-[#66bbff] transition font-bold">
                  <button onClick={() => {}}>Services</button>
                </li>
                <li className="hover:text-[#66bbff] transition font-bold">
                  <button onClick={() => {}}>Contactez-nous</button>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-4">
                <a
                  href=""
                  className="p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition"
                >
                  <li className=" ">
                    <FaFacebookF className="h-5 w-5" />
                  </li>
                </a>
                <a
                  href=""
                  className="p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition"
                >
                  <li className=" ">
                    <FaInstagram className="h-5 w-5" />
                  </li>
                </a>
                <a
                  href=""
                  className="p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition"
                >
                  <li className=" ">
                    <FaTwitter className="h-5 w-5" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div>
            <hr className="my-6 xl:mt-0" />
            <p>© Created by "logo"</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
