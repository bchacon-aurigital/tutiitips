import React, { useState, useEffect, useRef } from 'react';
import { styles } from '../style';
import { navLinks } from '../constants';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaSpotify } from "react-icons/fa";
import { SectionWrapper } from '../hoc';
import { logo3 } from '../assets';


const Contacto = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMapLoaded(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
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
    <div className='bg-tul-serv bg-cover bg-center text-tertiary py-12'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-center items-center text-center lg:text-start lg:justify-between gap-4 font-sen'>
        <div className='col-span-1 flex lex-col'>
          <div className='flex items-center mb-4'>
            <img 
              src={logo3}
              alt="Tulsi Logo" 
              className='w-[20rem]'
            />
          </div>
        </div>

        <div className='col-span-1'>
          <ul className='space-y-5 font-sen'>
            {navLinks.map((link) => (
              <li className='font-sen text-xl font-semibold' key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='col-span-1'>
          <h2 className='text-xl font-semibold mb-4'>Contáctame</h2>
          <div className='space-y-2 mb-4 font-sen'>
            <p className='font-sen text-xl '>tulsi@tutitips.com</p>
            <p className='font-sen text-xl '>(506) 8784-5969</p>
          </div>
          <div className="w-56 flex justify-center space-x-3 bg-white/10 px-3 py-3 rounded-full border-2 border-white">
        <a href="https://www.facebook.com/tutiitips" className="text-white text-4xl hover:text-gray-300"><FaFacebookF /></a>
        <a href="https://api.whatsapp.com/send?phone=50687845969&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20sesi%C3%B3n%20de%20psicolog%C3%ADa%20%F0%9F%99%8F%F0%9F%8F%BB%E2%9C%A8" className="text-white text-4xl hover:text-gray-300"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/tulsi.psico/" className="text-white text-4xl hover:text-gray-300"><FaInstagram /></a>
        <a href="#" className="text-white text-4xl hover:text-gray-300"><FaSpotify /></a>
      </div>
        </div>

        {/* Map Column */}
        <div ref={mapRef} className='col-span-1'>
          {mapLoaded ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.8304158280343!2d-84.13686752496946!3d9.948063890154717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTYnNTMuMCJOIDg0wrAwOCcwMy41Ilc!5e0!3m2!1sen!2scr!4v1712084415997!5m2!1sen!2scr"
              width="100%"
              height="250"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='rounded-md'
            ></iframe>
          ) : (
            <div className='bg-gray-200 h-[250px] flex items-center justify-center rounded-md'>
              <p>Cargando mapa...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Contacto, 'contacto');