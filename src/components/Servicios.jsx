import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { servicios } from "../constants";

const ServiciosSection = () => {
  return (
    <section id="servicios" className="py-24 text-white font-sen">
      <div className="w-full mx-auto">

        <h2 className="text-5xl md:text-6xl py-3 lg:text-7xl font-rebellion text-center mb-12" data-aos="fade-down">
          Encuentra el tipo de terapia ideal
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-xl font-sen px-6 lg:px-0 lg:text-2xl leading-relaxed flex flex-col justify-end mx-auto xl:mx-0 xl:ml-auto max-w-xl" data-aos="fade-right">
            <p className="font-sen">
              Como psicóloga integrativa en Costa Rica, acompaño tu viaje interior hacia el equilibrio.
              A través de la meditación, arteterapia y herramientas holísticas, creamos un espacio donde
              cada historia encuentra su camino.
            </p>
            <p className="font-sen">
              Mi enfoque conecta mente, cuerpo y espíritu, ayudándote a descubrir recursos internos para
              superar tus desafíos emocionales. Te ofrezco acompañamiento genuino en San José o en sesiones
              online, porque creo que mereces florecer en tu versión más auténtica.
            </p>
            <div className="w-full flex justify-center xl:justify-start">
              <a
                href="#agenda"
                className="mt-5 w-72 relative inline-block py-2 px-4 rounded-full uppercase font-sen text-tertiary overflow-hidden bg-[#B7B325] group"
              >
                <div className="absolute inset-0 bg-verdeoscuro opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative z-10 font-medium xl:text-[20px] flex flex-row text-center justify-center items-center">Agenda una sesión </span>
              </a>
            </div>
          </div>

          <div className="relative w-full hidden xl:block" data-aos="fade-left">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1.3}
              centeredSlides={false}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              {servicios.map((servicio, index) => (
                <SwiperSlide key={index} className="relative">
                  <div
                    className="bg-center bg-cover w-full h-[80vh] rounded-lg shadow-lg"
                    style={{ backgroundImage: `url(${servicio.img})` }}
                  />
                  <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-5xl tracking-wide font-bold drop-shadow-md font-rebellion">
                    {servicio.title}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="relative w-full block xl:hidden px-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={false}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full rounded-lg shadow-lg"
            >
              {servicios.map((servicio, index) => (
                <SwiperSlide key={index} className="relative">
                  <div
                    className="bg-center bg-cover w-full h-[80vh] rounded-lg shadow-lg"
                    style={{ backgroundImage: `url(${servicio.img})` }}
                  />
                  <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-3 w-full mb-2 text-white text-3xl tracking-wide font-bold drop-shadow-md font-rebellion">
                    {servicio.title}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
