import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { styles } from '../style';
import { logo, hero } from '../assets';

const Hero = () => {
  return ( 
    <section className="h-[95vh] lg:h-[90vh]">
      <div className="relative h-full bg-hero-mobile lg:bg-none bg-bottom bg-no-repeat bg-cover lg:flex lg:pt-32 lg:max-w-[80%] lg:mx-auto">
        <div className="px-8 lg:px-16 flex flex-col gap-4 lg:gap-8 text-center lg:text-left items-center justify-center lg:items-start lg:w-[50%]">
          <img src={logo} alt='tutiitips logo' className='w-24 h-24 object-contain mt-20 lg:hidden'/>
          <h1 className="text-verdeoscuro font-medium text-lg lg:text-2xl leading-10 tracking-wide">
            Te regalo mi escucha y herramientas para descubrir la magia que hay detrás de tus heridas emocionales.
          </h1> 
          <a href='#agenda' className='bg-primary lg:bg-secondary py-2 px-6 w-max rounded-full hover:bg-primary text-tertiary hover:text-tertiary'>Agendar una cita</a>
        </div>
        <div className="hidden lg:w-[50%] lg:flex justify-end">
          <div className="w-[90%] h-full bg-primary py-8 flex items-center">
      
          </div>
        </div>
      </div>
      <div className="z-50 relative bottom-8 w-full flex justify-center items-center z-index-999">
        <a href="#tulsi">
          <div className="w-[34px] h-[64px] rounded-3xl bg-white border-4 border-primary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 28, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-5 h-5 rounded-full bg-secondary mb-0"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
