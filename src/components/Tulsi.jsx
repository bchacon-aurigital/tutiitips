import { motion } from "framer-motion";
import { Tulipan2, tulsi } from "../assets";

const TulsiSection = () => {
  return (
    <section id="tulsi" className="bg-[#F8F5E9] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="h-[42rem] flex items-center order-2 md:order-1" data-aos="fade-right">
          <motion.img
            src={tulsi}
            alt="Tulsi Bailando"
            className="rounded-lg w-full h-full object-cover shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
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