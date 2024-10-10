import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { servicios } from '../constants';
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

const CartaServicio = ({ servicio }) => {
  return (
    <div className='relative h-full rounded-lg overflow-hidden shadow-lg'>
      {/* Imagen ajustada con mayor altura */}
      <div
        className='relative bg-center bg-cover w-full h-72 transition-transform duration-500 hover:scale-105'
        style={{ backgroundImage: `url(${servicio.img})` }}
      />
      {/* Fondo con gradiente blanco sutil */}
      <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t  from-white to-transparent'></div>
      {/* Texto del servicio, separado del gradiente */}
      <div className='absolute bottom-0 w-full flex justify-center items-center py-1'>
        <h1 className='text-center text-verdeoscuro text-lg font-semibold drop-shadow-md'>
          {servicio.title}
        </h1>
      </div>
    </div>
  );
};



const ServiciosSlider = () => {
  const customLeftArrow = (
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-serv-gr2 text-verdeclaro border-2 border-verdeclaro rounded-full h-10 w-10 cursor-pointer">
      &#10094;
    </div>
  );

  const customRightArrow = (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-serv-gr2 text-verdeclaro border-2 border-verdeclaro rounded-full h-10 w-10 cursor-pointer">
      &#10095;
    </div>
  );

  return (
    <div className="relative">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="rounded-md"
      >
        {servicios.map((servicio, index) => (
          <CartaServicio key={index} servicio={servicio} />
        ))}
      </Carousel>
    </div>
  );
};

const ServiciosGrid = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {servicios.map((servicio, index) => (
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4' key={index}>
          <CartaServicio servicio={servicio} />
        </div>
      ))}
    </div>
  );
};

const Servicios = () => {
  return (
    <div className='flex flex-col gap-16 md:mt-16 md:pb-16 justify-center items-center pb-8 lg:max-w-[80%] lg:mx-auto'>
      <h1 className='text-white uppercase text-3xl tracking-widest mt-8'>Servicios</h1>
      
      {/* Mostrar grid en pantallas grandes y slider en pantallas pequeñas */}
      <div className='border-white w-[80%] rounded text-center'>
        {/* Para pantallas grandes */}
        <div className='hidden lg:block'>
          <ServiciosGrid />
        </div>
        {/* Para pantallas pequeñas */}
        <div className='lg:hidden'>
          <ServiciosSlider />
        </div>
      </div>

      <a href='#agenda' className='relative bottom-0 py-2 px-6 w-max rounded-full bg-secondary hover:bg-verdeclaro text-verdeoscuro hover:text-secondary'>
        Agendar cita
      </a>
    </div>
  );
};

export default SectionWrapper(Servicios, 'servicios');
