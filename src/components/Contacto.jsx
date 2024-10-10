import React, { useState, useEffect, useRef } from 'react';
import { styles } from '../style';
import { navLinks } from '../constants';
import { instagram, whatsapp, waze } from '../assets';
import { SectionWrapper } from '../hoc';

const Contacto = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMapLoaded(true);
            observer.unobserve(entry.target); // Dejar de observar una vez cargado
          }
        });
      },
      { threshold: 0.1 } // Carga cuando el 10% del mapa sea visible
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div className='bg-primary text-tertiary pt-20 md:pt-8'>
      <div className='md:max-w-[768px] mx-auto p-4 flex flex-col md:flex-row gap-6 md:justify-between'>  
        <div className='hidden md:block'>
          <h1 className='font-semibold text-lg pb-2'>Enlaces:</h1>
          <ul className='flex flex-col gap-2 pl-4'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-center md:items-start'>
          <div className='flex flex-col gap-2 w-[300px] md:w-auto'>
            <h1 className='font-semibold text-lg'>Contáctame</h1>
            <div>
              <p>tulssdiaza@gmail.com</p>
              <p>(+506) 8784-5969</p>
            </div>
            <div className='flex gap-4 mt-1'>
              <a href="https://www.instagram.com/tutiitips/">
                <img src={instagram} alt="instagram link" width={40} height={40} />
              </a>
              <a target='_blank' href="https://api.whatsapp.com/send?phone=50687845969&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20sesi%C3%B3n%20de%20psicolog%C3%ADa%20%F0%9F%99%8F%F0%9F%8F%BB%E2%9C%A8">
                <img src={whatsapp} alt="whatsapp link" width={40} height={40} />
              </a>
              <a href="https://ul.waze.com/ul?ll=9.94796984%2C-84.13433075&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
                <img src={waze} alt="waze link" width={55} height={55} className='transform -translate-y-1 -translate-x-1' />
              </a>
            </div>
          </div>
          <div ref={mapRef} className="w-[300px] h-[225px] bg-gray-300 rounded-md flex items-center justify-center">
            {mapLoaded ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.8304158280343!2d-84.13686752496946!3d9.948063890154717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTYnNTMuMCJOIDg0wrAwOCcwMy41Ilc!5e0!3m2!1sen!2scr!4v1712084415997!5m2!1sen!2scr"
                width="300"
                height="225"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-md'
              ></iframe>
            ) : (
              <p>Cargando mapa...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Contacto, 'contacto');
