import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Tulipan2, tulsi1, tulsi2, tulsi3 } from "../assets";

const TulsiSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [tulsi1, tulsi2, tulsi3];
  const imageAlts = ["Tulsi Bailando", "Tulsi en sesión", "Tulsi expresando"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="tulsi" className="bg-[#F8F5E9] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="h-[43rem] flex items-center order-2 md:order-1 relative overflow-hidden" data-aos="fade-right">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={imageAlts[currentImageIndex]}
                className="rounded-lg w-full h-full lg:h-auto object-cover shadow-md absolute inset-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          {/* Indicadores del carrousel */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white shadow-lg scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 h-full order-1 md:order-2" data-aos="fade-left">
          <motion.div
            className="bg-gradient-to-br from-[#00745B] to-[#00513F] text-white p-6 md:p-8 rounded-lg shadow-md flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg md:text-xl lg:text-3xl leading-tight font-sen font-bold">
              Disfruto cuestionar mis creencias de hoy, pero cuando debatir me lleva a sentir que no estoy segura de nada….
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
            El amor es mi certeza. Somos amor, merecemos amor y estamos aquí para amar.
            Desde ese amor, quiero servirte, abrazarte y acompañarte en la luz y la oscuridad. ‎ 
              <strong className="font-semibold">
                En un mundo que nos enseña a reprimir, el dejarnos sentirlo todo es nuestra revolución.
              </strong>
            </p>
            <h3 className="mt-4 text-lg md:text-xl lg:text-3xl font-sen font-bold">-Tulsi Diaz</h3>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hidden md:flex items-center justify-center md:w-1/4">
              <img src={Tulipan2} />
            </div>

            <div className="flex-col gap-6 w-full md:w-3/4 h-full font-sen flex">
              <a
                href="#"
                className="bg-[#A1A738] text-white text-center py-3 px-6 rounded-full font-sen font-semibold hover:bg-[#8F9534] transition duration-300 w-full h-full flex justify-center items-center text-2xl"
              >
                Psicología Integrativa
              </a>
              <a
                href="#"
                className="bg-[#A1A738] text-white text-center py-3 px-6 rounded-full font-sen font-semibold hover:bg-[#8F9534] transition duration-300 w-full h-full flex justify-center items-center text-2xl"
              >
                Herramientas Holísticas
              </a>
              <a
                href="#"
                className="bg-[#A1A738] text-white text-center py-3 px-6 rounded-full font-sen font-semibold hover:bg-[#8F9534] transition duration-300 w-full h-full flex justify-center items-center text-2xl"
              >
                Meditación y Arteterapia
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex mt-10">
        <a
          href="#agenda"
          className="mt-5 w-72 mx-auto relative inline-block py-2 px-4 rounded-full uppercase font-sen text-tertiary overflow-hidden bg-[#B7B325] group" data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-verdeoscuro opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <span className="relative z-10 font-medium xl:text-[20px] flex flex-row text-center justify-center items-center">Agenda una sesión </span>
        </a>
      </div>
    </section>
  );
};

export default TulsiSection;