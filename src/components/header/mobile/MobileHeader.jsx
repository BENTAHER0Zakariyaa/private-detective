import React from 'react'
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import logo from './../../../assets/images/logo.png'
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
export const MobileHeader = () => {
    const { t } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        function handleResize() {
            if (window.innerWidth >= 1023) {
                document.body.style.overflow = '';
            } else if (window.innerWidth < 1023 && isMenuOpen) {
                document.body.style.overflow = 'hidden';
            }
          }
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
      }, [isMenuOpen]);

      const scrollToDiv = (id) => {
        const element = document.getElementById(id); // replace "myDiv" with the ID of the div you want to scroll to
        element.scrollIntoView({ behavior: "smooth" }); // smooth scroll to the element
        setIsMenuOpen(false);
      };
    
    return (
        <header className="flex flex-col lg:hidden hidden-lg">
            <div className="flex justify-between items-center p-8 z-30 bg-[#131519]">
                <img src={logo} className='h-16' />
                <button className='transition hover:text-[#b9b9bb]' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {
                        isMenuOpen ?
                            <IoIosClose className='h-8 w-8' />
                            :
                            <IoIosMenu className='h-8 w-8' />
                    }
                </button>
            </div>
            {isMenuOpen &&
                <div className={`absolute bg-[#131519] h-screen w-full z-20 `}>
                    <div className='flex flex-col justify-center items-center'>
                        <nav className='font-semibold text-center'>
                            <ul className='flex flex-col space-y-6 mt-40 '>
                                <li className='hover:text-[#66bbff] transition'><button onClick={()=> scrollToDiv('home')}>{t("menu_item_home")}</button></li>
                                <li className='hover:text-[#66bbff] transition'><button onClick={()=> scrollToDiv('about')}>{t("menu_item_about_us")}</button></li>
                                <li className='hover:text-[#66bbff] transition'><button onClick={() => { setIsMenuOpen(false) }}>{t("menu_item_services")}</button></li>
                                <li className='hover:text-[#66bbff] transition'><button onClick={() => { setIsMenuOpen(false) }}>{t("menu_item_contect_us")}</button></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li className='text-[#b9b9bb]'>+212 (645) 12 546</li>
                                <li className='text-[#b9b9bb]'>NOUADIBOU 122 NSR 87</li>
                                <li className='text-[#b9b9bb]'>example@mail.com</li>
                            </ul>
                        </nav>
                        <div className='mt-20'>
                            <ul className='flex space-x-4'>
                                <a href='' className='p-2 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                                    <li className=' '>
                                        <FaFacebookF className='h-5 w-5' />
                                    </li>
                                </a>
                                <a href='' className='p-2 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                                    <li className=' '>
                                        <FaInstagram className='h-5 w-5' />
                                    </li>
                                </a>
                                <a href='' className='p-2 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                                    <li className=' '>
                                        <FaTwitter className='h-5 w-5' />
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}
