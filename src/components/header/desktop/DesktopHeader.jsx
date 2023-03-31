import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

import logo from './../../../assets/images/logo.png'

export const DesktopHeader = () => {
    const { t } = useTranslation();
    return (
        <header className="lg:block hidden bg-[#131519] w-full">
            <div className='flex justify-between items-center p-8 mx-auto xl:px-0 xl:py-8 xl:w-[1200px]'>
                <img src={logo} className='h-20' />
                <nav className='font-semibold text-center flex space-x-20'>
                    <ul className='flex items-center space-x-10'>
                        <li className='hover:text-[#66bbff] transition'><button onClick={() => { }}>{t("menu_item_home")}</button></li>
                        <li className='hover:text-[#66bbff] transition'><button onClick={() => { }}>{t("menu_item_about_us")}</button></li>
                        <li className='hover:text-[#66bbff] transition'><button onClick={() => { }}>{t("menu_item_services")}</button></li>
                        <li className='hover:text-[#66bbff] transition'><button onClick={() => { }}>{t("menu_item_contect_us")}</button></li>
                    </ul>
                    <ul className='flex items-center space-x-4'>
                        <a href='' className='p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                            <li>
                                <FaFacebookF className='h-4 w-4' />
                            </li>
                        </a>
                        <a href='' className='p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                            <li>
                                <FaInstagram className='h-4 w-4' />
                            </li>
                        </a>
                        <a href='' className='p-1 text-[#131519] bg-[#66bbff] hover:bg-[#2b71e2] transition' >
                            <li>
                                <FaTwitter className='h-4 w-4' />
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
