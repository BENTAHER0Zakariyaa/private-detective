import { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { ImHeartBroken } from 'react-icons/im';
import { SlMagnifier } from 'react-icons/sl';
import { FaBalanceScaleLeft, FaFacebookF, FaInstagram, FaTwitter, FaUsers } from 'react-icons/fa';
import heroImage from './assets/images/hero.jpg';
import contectImage from './assets/images/contect.jpg';
import contect2Image from './assets/images/contect-2.jpg';
import aboutUsImage from './assets/images/about-us.jpg';
import { DesktopHeader } from './components/header/desktop/DesktopHeader';
import { MobileHeader } from './components/header/mobile/MobileHeader';

function App() {

  return (
    <>
      
      <DesktopHeader />
      <MobileHeader />
      <main className='z-10'>
        <section id='home'>
          <div className="bg-center bg-cover bg-no-repeat h-screen w-full" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='from-[#131519] via-[#131519]/90 to-[#131519] bg-gradient-to-b h-full w-full px-8 mt-10 xl:px-0'>
              <div className='lg:w-[1200px] mx-auto'>
                <div className='flex flex-col justify-around h-screen'>
                  <div className='-mt-20'>
                    <div className='space-y-1 mb-8'>
                      <h5 className='font-medium text-[#b9b9bb]'>La confidentialité et la fiabilité sont nos points forts.</h5>
                      <h1 className='font-bold text-7xl leading-tight '>Agence de détectives.</h1>
                    </div>
                    <div className=' space-x-4'>
                      <a href='' className='bg-[#2b71e2] py-3 px-4 font-bold hover:bg-[#66bbff] transition' >Nous contacter</a>
                      <a href='' className='py-3 px-4 font-bold ring-2 ring-white ring-inset hover:bg-white hover:text-[#131519] transition' >Domaines d'intervention</a>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-8 -mt-10'>
                    <div>
                      <h3 className='font-bold text-2xl text-white'><span className='text-[#2b71e2]'>1.</span> Fiabilité</h3>
                      <p className='font-light mt-4 text-[#b9b9bb]'>
                        D'anciens membres des forces de l'ordre et des services de renseignement travaillent ici.
                      </p>
                    </div>
                    <div>
                      <h3 className='font-bold text-2xl text-white'><span className='text-[#2b71e2]'>2.</span> Confidentialité</h3>
                      <p className='font-light mt-4 text-[#b9b9bb]'>
                        Nous ne gardons rien. Nous donnons toutes les copies de photos et de vidéos.
                      </p>
                    </div>
                    <div>
                      <h3 className='font-bold text-2xl text-white'><span className='text-[#2b71e2]'>3.</span> Transparence</h3>
                      <p className='font-light mt-4 text-[#b9b9bb]'>
                        Notre tarification est transparente et rentable pour toutes les tailles de cas.
                      </p>
                    </div>
                    <div>
                      <h3 className='font-bold text-2xl text-white'><span className='text-[#2b71e2]'>4.</span> Efficacité</h3>
                      <p className='font-light mt-4 text-[#b9b9bb]'>
                        Nous menons chaque affaire à sa conclusion logique et fournissons un rapport.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#17181d] py-20 px-8 xl:px-0">
          <div className='lg:w-[1200px] mx-auto'>
            <h4 className='font-bold text-[#616164] text-3xl'>Ce que nous faisons</h4>
            <h1 className='font-bold text-6xl mt-2'>Nos Services</h1>
            <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2 gap-4 mt-12'>
              <div className='bg-[#1e1e28] p-8'>
                <div >
                  <FaBalanceScaleLeft size={60} />
                </div>
                <h3 className='font-bold mt-7 text-2xl text-[#6bf]'>Concurrence déloyale</h3>
                <p className='font-light mt-2 text-[#b9b9bb]'>
                  Soupçons de concurrence déloyale ou d'activités illicites ? Nous menons des enquêtes pour protéger votre entreprise. Contactez-nous dès aujourd'hui.
                </p>
              </div>
              <div className='bg-[#1e1e28] p-8'>
                <div >
                  <ImHeartBroken size={60} />
                </div>
                <h3 className='font-bold mt-7 text-2xl text-[#6bf]'>Particulier</h3>
                <p className='font-light mt-2 text-[#b9b9bb]'>
                  Infidélité conjugale : obtenez les preuves nécessaires grâce à notre agence de détectives privés pour une procédure de divorce, une résolution de conflit ou pour prendre des décisions personnelles éclairées.
                </p>
              </div>
              <div className='bg-[#1e1e28] p-8'>
                <div >
                  <SlMagnifier size={60} />
                </div>
                <h3 className='font-bold mt-7 text-2xl text-[#6bf]'>Recherche Débiteur</h3>
                <p className='font-light mt-2 text-[#b9b9bb]'>
                  Besoin de recouvrer une dette? Investipole peut vous aider à localiser votre débiteur en Maroc ou à l'étranger, évaluer sa situation financière et vous accompagner dans les procédures de recouvrement.
                </p>
              </div>
              <div className='bg-[#1e1e28] p-8'>
                <div >
                  <FaUsers size={60} />
                </div>
                <h3 className='font-bold mt-7 text-2xl text-[#6bf]'>Contrôle de salariés</h3>
                <p className='font-light mt-2 text-[#b9b9bb]'>
                  Protégez votre entreprise contre la fraude et la concurrence déloyale grâce à nos enquêtes. Nos détectives privés collectent des preuves tangibles pour vous aider à prendre des décisions éclairées. Contactez-nous.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-center bg-cover bg-no-repeat w-full " style={{ backgroundImage: `url(${contectImage})` }}>
            <div className='from-[#131519] via-[#131519]/80 to-[#131519] bg-gradient-to-b h-full w-full px-8 py-20 xl:px-0'>
              <div className='lg:w-[1200px] mx-auto'>
                <from >
                  <div className='md:w-[570px]'>
                    <h4 className='text-4xl text-[#616164] font-bold mb-2'>Contactez-nous</h4>
                    <h2 className='text-5xl font-bold'>Besoin d'une consultation incognito ?</h2>
                    <p className='my-10'>
                      <span className='text-xl text-[#e1dfdf] font-medium'>Laissez votre adresse e-mail ou écrivez-nous à</span> <br />
                      <span className='text-xl text-[#6bf] font-medium'>example@gmail.com</span>
                    </p>
                    <div className='mb-8'>
                      <input className='w-full bg-[#27282c]/80 text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none mb-4' type="text" placeholder='Nom complet' />
                      <input className='w-full bg-[#27282c]/80 text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none' type="email" placeholder='E-mail' />
                    </div>
                    <button className='px-8 py-3 bg-[#2b71e2] hover:bg-[#6bf] text-white font-bold w-full transition '>
                      Envoyer
                    </button>
                  </div>
                </from>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#13131a] py-20 px-8 xl:px-0" id='about'>
          <div className='lg:w-[1200px] mx-auto'>
            <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:items-center lg:space-x-8'>
              <div className='w-full h-[444px] lg:w-1/2 md:h-[600px]'>
                <img className="h-full w-full object-cover" src={aboutUsImage} />
              </div>
              <div className='lg:w-1/2'>
                <h4 className='text-4xl text-[#616164] font-bold mb-2'>À propos de nous</h4>
                <h2 className='text-6xl font-bold'>Qui sommes-nous</h2>
                <div className='mt-12 text-[#b9b9bb] lg:w-[570px]'>
                  <p className='mb-8'><span className='text-[#6bf]'>L'Agence de Détective Privé "LOGO"</span>  est une équipe dynamique de professionnels avec plus de 30 ans d'expérience dans l'investigation dédiée à répondre aux besoins de sécurité et d'investigation des entreprises et des particuliers.</p>
                  <p className='mb-8'>Nous fournissons à nos clients des services allant des enquêtes de défense criminelle à la surveillance secrète.</p>
                  <p className='mb-8'>Notre agence fournit des services pour les cabinets d'avocats, les citoyens privés, les compagnies d'assurance, l'industrie du cannabis, les entreprises et les sociétés, fournissant des résultats de qualité dans les délais impartis. Notre entreprise est engagée envers vous, nos clients, et nous sommes fiers d'être axés sur les résultats.</p>
                  <p className='mb-8'>Notre réputation de fiabilité et d'intégrité auprès des compagnies d'assurance, des cabinets d'avocats, des corporations, des entités commerciales et des particuliers fait de <span className='text-[#6bf]'>l'Agence de Détective Privé "LOGO"</span> une agence compétitive !</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-center bg-cover bg-no-repeat w-full " style={{ backgroundImage: `url(${contect2Image})` }}>
            <div className='bg-[#131519]/90 h-full w-full px-8 py-20 xl:px-0'>
              <div className='lg:w-[1200px] mx-auto'>
                <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0  lg:space-x-8'>
                  <div className='w-full lg:w-1/2 h-[444px]'>
                    <from className=''>
                      <div className='bg-[#131519]/90 p-16'>
                        <div className='mb-8'>
                          <input className='w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none mb-4' type="text" placeholder='Entrez votre nom complet*' required />
                          <input className='w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none mb-4' type="tel" placeholder='Entrez votre numéro de téléphone*' required />
                          <input className='w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none mb-4' type="email" placeholder='Entrez votre adresse e-mail*' required />
                          <textarea className='w-full bg-transparent border-b border-[#616164] text-white placeholder:text-[#929294] border-0 px-8 py-3 outline-none' type="text" placeholder='Votre message' rows={4} required />
                        </div>
                        <button className='px-8 py-3 bg-[#2b71e2] hover:bg-[#6bf] text-white font-bold w-full transition '>
                          Envoyer
                        </button>
                      </div>
                    </from>
                  </div>
                  <div className='lg:w-1/2'>
                    <div className='mx-auto'>
                      <h4 className='text-4xl text-[#616164] font-bold mb-2'>Demande</h4>
                      <h2 className='text-6xl font-bold'>Contacts</h2>
                      <p className='my-8 font-bold'>Si vous avez des questions ou souhaitez planifier une rencontre avec notre enquêteur privé, veuillez remplir le formulaire.</p>
                      <p className='mb-8 text-[#b9b9bb]'>Nous garantissons la confidentialité de tout ce que vous nous direz lors d'une conversation personnelle. La consultation <span className='text-[#6bf]'> ne vous oblige pas</span> à commander nos services, nous détruirons tous les matériaux après la consultation.</p>
                      <div className='grid grid-cols-1 grid-rows-3 gap-4'>
                        <div className='flex items-center'>
                          <div className='text-2xl font-bold w-[126px]'>
                            Adresse
                          </div>
                          <div className='px-8'></div>
                          <div className='text-[#b9b9bb] font-bold text-start'>
                            NOUADIBOU 122 NSR 87
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <div className='text-2xl font-bold w-[126px]'>
                            Horaires
                          </div>
                          <div className='px-8'></div>
                          <div className='text-[#b9b9bb] text-start'>
                            <div className='font-bold'>
                              <h5>Du lundi au samedi : <span className='text-[#66bbff]'>11h - 21h</span> </h5>
                              <h5>Dimanche : <span className='text-[#66bbff]'>11h - 19h</span></h5>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <div className='text-xl font-bold w-[126px]'>Contact</div>
                          <div className='px-8'></div>
                          <div className='text-[#b9b9bb] text-start'>
                            <div className='font-bold'>
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
            <h1 className="text-5xl font-bold">
              LOGO
            </h1>
            <div>
              <ul className='flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6 items-center my-10'>
                <li className='hover:text-[#66bbff] transition font-bold'><button onClick={() => { }}>Accueil</button></li>
                <li className='hover:text-[#66bbff] transition font-bold'><button onClick={() => { }}>À propos de nous</button></li>
                <li className='hover:text-[#66bbff] transition font-bold'><button onClick={() => { }}>Services</button></li>
                <li className='hover:text-[#66bbff] transition font-bold'><button onClick={() => { }}>Contactez-nous</button></li>
              </ul>
            </div>
            <div>
              <ul className='flex space-x-4'>
                <a href='' className='p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                  <li className=' '>
                    <FaFacebookF className='h-5 w-5' />
                  </li>
                </a>
                <a href='' className='p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                  <li className=' '>
                    <FaInstagram className='h-5 w-5' />
                  </li>
                </a>
                <a href='' className='p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                  <li className=' '>
                    <FaTwitter className='h-5 w-5' />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div>
            <hr className='my-6 xl:mt-0' />
            <p >© Created by "logo"</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
