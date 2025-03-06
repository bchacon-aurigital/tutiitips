import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaSpotify } from "react-icons/fa";

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close, TulipanFondo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [rotate, setRotate] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-30 bg-transparent lg:h-[15vh] lg:bg-[#FBF8EE]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='lg:flex hidden items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='tutiitips logo' className='w-28 h-24 object-contain' />
        </Link>

        <ul className='hidden lg:flex flex-row gap-6 xl:gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-[#B7B325]' : 'text-verdeoscuro'
                } self-center hover:text-[#B7B325] xl:text-[20px] font-semibold cursor-pointer font-sen`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a
            href="#agenda"
            onClick={() => {
              setActive('');
            }}
            className="relative inline-block py-2 px-4 rounded-full uppercase font-sen text-tertiary overflow-hidden bg-[#B7B325] group"
          >
            <div className="absolute inset-0 bg-verdeoscuro opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span className="relative z-10 font-medium xl:text-[20px]">Agenda una sesión</span>
          </a>

        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='boton menu'
            className={`w-14 h-14 z-50 object-contain ${rotate ? 'transform rotate-180' : ''
              } ease-in-out duration-700`}
            onClick={() => {
              setToggle(!toggle);
              setRotate(!rotate);
            }}
          />
          <div
            className={`fixed top-0 left-0 pt-24 pl-16 h-full w-full bg-[#EDE8D6] z-40 text-tertiary
              ${toggle ? 'translate-x-0' : 'translate-x-full'}
              overflow-hidden transition-transform ease-in-out duration-700`}
          >
<img className='absolute top-0 right-10 w-44 h-full' src={TulipanFondo}/>
            <ul className='flex flex-col gap-12'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-[#B7B325]' : 'text-verdeoscuro'
                    } hover:text-[#B7B325] text-xl font-semibold cursor-pointer font-sen`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <a
                href="#agenda"
                className="w-56 mt-5 relative inline-block py-2 px-4 rounded-full uppercase font-sen text-tertiary overflow-hidden bg-[#B7B325] group"
              >
                <div className="absolute inset-0 bg-verdeoscuro opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative z-10 font-medium xl:text-[20px] flex flex-row w-full justify-center items-center">Agenda una sesión </span>
              </a>
              <div className="w-52 flex space-x-3 bg-[#B7B325]/20 px-3 py-3 rounded-full border-2 border-white">
                <a href="https://www.facebook.com/tutiitips" className="text-white text-4xl hover:text-gray-300"><FaFacebookF /></a>
                <a href="https://api.whatsapp.com/send?phone=50687845969&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20sesi%C3%B3n%20de%20psicolog%C3%ADa%20%F0%9F%99%8F%F0%9F%8F%BB%E2%9C%A8" className="text-white text-4xl hover:text-gray-300"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/tulsi.psico/" className="text-white text-4xl hover:text-gray-300"><FaInstagram /></a>
                <a href="" className="text-white text-4xl hover:text-gray-300"><FaSpotify /></a>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
