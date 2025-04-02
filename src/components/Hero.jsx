import { motion } from "framer-motion";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
/* import heroVideo from "../assets"; */
import { IconoTulsi, BgHero, Tulipan } from "../assets";

const Hero = () => {
  return (
    <section 
      className="relative h-screen lg:h-[86vh] lg:mt-[15vh] w-full overflow-visible flex items-center justify-center bg-black"
      aria-label="Sección principal"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
      >
        <source src={BgHero} type="video/webm" />
        Tu navegador no soporta videos.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/20" aria-hidden="true"></div>

      <div className="relative z-10 text-center text-white px-8 max-w-3xl" data-aos="fade-down">
        <h1 className="text-4xl lg:text-7xl font-bold leading-tight font-rebellion tracking-wide">
          Espacio libre de juicios <br /> y lleno de amor
        </h1>
        <p className="mt-6 text-lg lg:text-3xl font-sen font-medium max-w-2xl">
          Te regalo mi escucha y herramientas para descubrir la magia que hay detrás de tus heridas emocionales.
        </p>
        <a
          href="#agenda"
          className="mt-5 relative inline-block py-2 px-4 rounded-full uppercase font-sen text-tertiary overflow-hidden bg-[#B7B325] group transition-all duration-300 "
          aria-label="Agendar una sesión"
        >
          <div className="absolute inset-0 bg-verdeoscuro opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <span className="relative z-10 font-medium xl:text-[20px] flex flex-row items-center">
            Agenda una sesión 
            <img 
              src={Tulipan} 
              alt="Tulipán decorativo" 
              className="w-8 h-8 ml-2"
              loading="lazy"
            />
          </span>
        </a>
      </div>

      <img
        src={IconoTulsi}
        alt="Logo de Tulsi"
        className="absolute bottom-0 w-44 lg:w-52 lg:left-32 xl:w-72 opacity-60"
        loading="lazy"
      />

      <div 
        className="hidden md:flex absolute bottom-12 right-[5%] space-x-3 bg-white/10 px-3 py-3 rounded-full border-2 border-white" 
        data-aos="fade-left"
        role="navigation"
        aria-label="Enlaces a redes sociales"
      >
        <a 
          href="https://www.facebook.com/tutiitips" 
          className="text-white text-4xl hover:text-gray-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook de Tulsi"
        >
          <FaFacebookF />
        </a>
        <a 
          href="https://api.whatsapp.com/send?phone=50687845969&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20sesi%C3%B3n%20de%20psicolog%C3%ADa%20%F0%9F%99%8F%F0%9F%8F%BB%E2%9C%A8" 
          className="text-white text-4xl hover:text-gray-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a 
          href="https://www.instagram.com/tulsi.psico/" 
          className="text-white text-4xl hover:text-gray-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Tulsi"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="absolute bottom-0 mx-auto transform translate-y-1/2 w-full flex justify-center items-center z-10">
        <a href="#tulsi" aria-label="Ir a la siguiente sección">
          <div className="w-[50px] h-[94px] rounded-3xl bg-white border-4 border-[#00745B] flex justify-center items-start p-1 shadow-lg">
            <motion.div
              animate={{ y: [0, 28, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="w-8 h-12 rounded-full bg-[#B7B325] mb-0"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
