import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {servicios} from '../constants';

import { SectionWrapper } from '../hoc';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CartaServicio = ({servicio}) =>{
  return(
    <div className='relative h-full rounded md:flex'>
      <div className='relative bg-center rounded bog-no-repeat bg-cover h-96 w-full' 
            style={{backgroundImage: `url('${servicio.img}')`}}/>
      <div className='absolute rounded md:relative bottom-0 h-40 bg-serv-gr flex justify-center w-full items-end z-10 md:w-[50%] md:h-full md:bg-serv-gr2 md:backdrop-blur md:items-center'>
        <h1 className='p-4 pb-6 text-center md:text-left text-primary md:text-2xl md:text-left md:p-8'>{servicio.title}</h1>
      </div>
    </div>
  )
}


const ServiciosSlider = () =>{

  const customLeftArrow = (
    <div className="absolute arrow-btn text-center px-3 py-1 cursor-pointer bg-serv-gr2 text-verdeclaro border-2 border-verdeclaro rounded-full text-xl"
         style={{ 
          bottom: `0.5rem`,
          left: `0.5rem`,
          }}
      >&#10094;
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg> */}
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn text-center px-3 py-1 cursor-pointer bg-serv-gr2 text-verdeclaro border-2 border-verdeclaro rounded-full text-xl"
         style={{ 
         bottom: `0.5rem`,
         right: `0.5rem`,
         }}
      >&#10095;
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg> */}
    </div>
  );
  return (
    <div className="">
        <Carousel 
          infinite 
          customLeftArrow={customLeftArrow} 
          customRightArrow={customRightArrow} 
          responsive={responsive} 
          itemClass="rounded-md"
        >
          {servicios.map((servicio, index) => (
            <CartaServicio key={index} servicio={servicio}/>
          ))}
          {/* <div>1</div> */}
        </Carousel>
      </div>
  )
}

const Servicios = () => {
  return (
    <div className='flex flex-col gap-16 md:mt-16 md:pb-16 justify-center items-center pb-8 lg:max-w-[80%] lg:mx-auto'>
      <h1 className='text-white uppercase text-3xl tracking-widest mt-8'>Servicios</h1>
      <div className='border-white w-[80%] rounded h-96 text-center'>
        <ServiciosSlider/>
      </div>
        <a href='#agenda' className='relative bottom-0 py-2 px-6 w-max rounded-full bg-secondary hover:bg-verdeclaro text-verdeoscuro hover:text-secondary'>Agendar cita</a>
    </div>
  )
}

export default SectionWrapper(Servicios, 'servicios');