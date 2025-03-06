import React from "react";
import ArteTerapia from "./ArteTerapia";
import { SectionWrapper } from "../hoc";
import { quote, Testimonio1 } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // <-- Quitamos Navigation
import "swiper/css";
import "swiper/css/pagination";

const testimoniosData = [
  {
    texto:
      "Mi experiencia con Tul ha sido maravillosa, ni un solo minuto me he sentido juzgada aún cuando yo misma me juzgaba, me ha acompañado con amor, con ejemplos y sobre todo con mi mismo lenguaje, no hay un solo tema donde no hayamos sacado un aprendizaje juntas que traiga crecimiento y resiliencia",
    nombre: "Denise Rodriguez Piedra",
    puesto: "Coordinadora en Contabilidad",
  },
  {
    texto:
      "No tengo palabras para expresar lo profundamente agradecida que estoy con Tulsi por acompañarme en mi proceso terapéutico. Gracias a su guía, he aprendido a sobrellevar mejor mi vida, mis relaciones interpersonales y, lo más importante, mi relación conmigo misma. Me ha ayudado a conectar con mi voz interna, a confiar en mí y a darme cuenta de que soy capaz de mucho más de lo que imaginaba. Sus herramientas y enseñanzas han sido clave en mi crecimiento, y no puedo recomendarla lo suficiente.",
    nombre: "Monserrat Alfaro Alvarado",
    puesto: "Bailarina y estudiante de fisioterapia",
  },
  {
    texto:
      "Descubrir la guía terapéutica de Tulsi ha sido una experiencia transformadora en mi vida. Con su apoyo y sabiduría, he logrado sanar heridas profundas y encontrar las herramientas necesarias para crecer como persona. En un momento en el que me sentía perdido, Tulsi me ayudó a redescubrir mi esencia, fomentando una reconexión integral entre mente, cuerpo y alma, algo que venia buscando hace mucho. Cada sesión es un viaje enriquecedor y revitalizante que me impulsa a ser la mejor versión de mí mismo.",
    nombre: "Lawrence Chacón",
  },
];

import { arteterapia } from "../constants";

const Testimonios = () => {
  return (
    <div>
      <section className="py-24 text-white font-sen">
        <div className="w-full mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-rebellion text-center mb-12 text-[#024143]" data-aos="fade-down">
            Testimonios y herramientas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-aos="fade-right">
          <div className="relative w-full hidden xl:block">
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
              {arteterapia.map((arteterapia, index) => (
                <SwiperSlide key={index} className="relative">
                  <div
                    className="bg-center bg-cover w-full h-[80vh] rounded-lg shadow-lg"
                    style={{ backgroundImage: `url(${arteterapia.img})` }}
                  />
                  <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-5xl tracking-wide font-bold drop-shadow-md font-rebellion">
                    {arteterapia.title}
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
              {arteterapia.map((arteterapia, index) => (
                <SwiperSlide key={index} className="relative">
                  <div
                    className="bg-center bg-cover w-full h-[80vh] rounded-lg shadow-lg"
                    style={{ backgroundImage: `url(${arteterapia.img})` }}
                  />
                  <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-3 w-full mb-2 text-white text-3xl tracking-wide font-bold drop-shadow-md font-rebellion">
                    {arteterapia.title}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

            <div className="space-y-8 text-2xl leading-relaxed flex flex-col mx-auto xl:mx-0 px-4 xl:mr-auto max-w-xs md:max-w-xl text-[#024143]" data-aos="fade-left">
              <div className="flex w-full bg-white h-[45%]">
                <div className="w-[28%] h-full bg-[#024143] flex flex-row">
                  <div className="h-full w-full" />
                  <div className="h-full w-full bg-[#B7B325] p-2 text-4xl">
                    <img
                      src={quote}
                      alt="testimonio cita"
                      width={82}
                      height={82}
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-full">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  centeredSlides={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className="w-full"
                >
                  {testimoniosData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="space-y-8 text-2xl leading-relaxed max-w-xl text-[#024143]">
                        <p className="font-sen font-semibold text-xl md:text-2xl">
                          {item.titulo}
                        </p>
                        <p className="font-sen text-2xl">{item.texto}</p>
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex flex-col">
                            <h3 className="font-sen font-semibold text-3xl">
                              {item.nombre}
                            </h3>
                            <p className="font-sen text-xl">{item.puesto}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(Testimonios, "testimonios");
