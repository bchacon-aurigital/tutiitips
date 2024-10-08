import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../style';
import { navLinks} from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [rotate, setRotate] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-30 bg-transparent lg:bg-hero-gr`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='lg:flex hidden items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt='tutiitips logo' className='w-16 h-16 object-contain'/>
        </Link>
        {/* Navbar links for larger screens */}
        <ul className='hidden lg:flex flex-row gap-6 xl:gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${active === link.title
                            ? 'text-selected'
                            : 'text-verdeoscuro'
              } self-center hover:text-selected xl:text-[18px] font-medium cursor-pointer`}
              onClick={()=>setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a href='#agenda' onClick={()=>{setActive('')}} className='bg-secondary py-2 px-4 rounded-full hover:bg-verdeclaro text-tertiary hover:text-tertiary'>Agendar cita</a>
        </ul>
        
        {/* Hamburger menu for smaller screens */}
        <div className={`lg:hidden flex flex-1 justify-end items-center`}>
            <img src={toggle ? close : menu} alt='boton menu' className={`w-9 h-9 mt-20 fixed z-50 object-contain ${rotate ? 'transform rotate-180': ''} ease-in-out duration-700`} 
                onClick={()=>{
                  setToggle(!toggle);
                  setRotate(!rotate);
                }}
            />
            <div className={`fixed pt-24 pl-16 h-full w-full bg-verdeclaro top-0 z-40 text-tertiary 
                              ${toggle? 'right-0 translate-x-0' : 'right-[-100%] translate-x-full'} 
                              overflow-hidden transition-transform ease-in-out duration-700`
                           }>
              <ul className='flex lg:hidden  flex-col gap-12'>
                {navLinks.map((link) => (
                  <li 
                    key={link.id}
                    className={`${active === link.title
                                  ? 'text-selected'
                                  : 'text-tertiary'
                    } self-left hover:text-selected text-xl font-medium cursor-pointer`}
                    onClick={()=>{
                      setActive(link.title),
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <a href='#agenda' onClick={()=>{setActive(''), setToggle(!toggle) }} className='bg-secondary py-2 px-6 w-max rounded-full hover:bg-primary text-primary hover:text-secondary'>Agendar cita</a>
              </ul>
            </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
