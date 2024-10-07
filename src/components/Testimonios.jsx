import React from "react";
import ArteTerapia from "./ArteTerapia";
import { SectionWrapper } from "../hoc";
import { libroBanner, quote } from "../assets";
import { abril } from "../assets";

const Testimonios = () => {
  return (
    <div>
      <div className="max-h-30 overflow-hidden h-full flex bg-book-cover-mb md:bg-book-cover bg-cover h-[600px] md:h-[300px] gap-4 content-center">
        <div className="w-full h-full backdrop-blur-sm bg-black/30 flex">
          <div className="flex p-4 gap-4 items-center justify-center mx-auto">
            <div className="w-full md:w-[200px]">
              <img src={abril} alt="libro" className="md:h-[220px] mx-auto" />
            </div>
            <div className="text-white w-full flex flex-col gap-4 md:hidden">
              <div>
                <p>
                  'Si logras entretejer las primaveras, junto a mis otoños
                  tendremos cubierto el invierno y destilaremos olor, a un
                  eterno verano.'
                </p>
                <h4>Tulsi Díaz</h4>
              </div>
              <a
                href="https://forms.gle/2fZrD566M51RYFNv8"
                target="_blank"
                onClick={() => {
                  setActive(""), setToggle(!toggle);
                }}
                className="bg-verdeclaro py-2 px-6 w-max rounded-full hover:bg-primary text-white hover:text-secondary mx-auto"
              >
                Comprar libro
              </a>
            </div>
            <div className="text-white text-center w-full md:flex flex-col gap-4 hidden">
              <div className="font-medium md:text-lg max-w-[794px] mx-auto">
                <p>
                  Cuando las emociones inundan mi razón, acudo a la poesía para
                  plasmar mi fantasía.
                  <br />
                  Abril es desnudar mis sentimientos y entregárselos al mundo,
                  Abril es morir y resucitar entre mis letras, Abril es florecer
                  y marchitarme…
                  <br />
                  Una y otra vez… <br />
                  Con amor, Tul.
                  <br />
                </p>
              </div>
              <a
                href="https://forms.gle/2fZrD566M51RYFNv8"
                target="_blank"
                onClick={() => {
                  setActive(""), setToggle(!toggle);
                }}
                className="bg-verdeclaro py-2 px-6 w-max rounded-full hover:bg-primary text-white hover:text-secondary mx-auto"
              >
                Comprar libro
              </a>
            </div>
            <div className="w-full text-white md:w-[300px] hidden xl:block text-right">
              <p>
                'Si logras entretejer las primaveras, junto a mis otoños
                tendremos cubierto el invierno y destilaremos olor, a un eterno
                verano.'
              </p>
              <h4>Tulsi Díaz</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-testimonios-gr w-full">
        <div className="mx-auto flex flex-col md:flex-row justify-center items-center md:max-w-[780px]">
          <div className="w-full h-96 md:w-[50%] bg-white flex flex-col ">
            <div className="flex w-full bg-white h-[35%]">
              <div className="w-[80%] text-primary font-semibold text-right p-2 text-lg self-end">
                Encontré en Tulsi la guía que estaba buscando.
              </div>
              <div className="w-[20%] bg-primary flex flex-col">
                <div className="h-[50%]"></div>
                <div className="h-[50%] bg-secondary p-2 text-4xl text-white">
                  <img
                    src={quote}
                    alt="testimonio cita"
                    width={42}
                    height={42}
                  />
                </div>
              </div>
            </div>
            <div className="w-full ">
              <p className="text-primary text-right p-8 text-sm">
                Cuando la cantidad de pensamientos que llegan a mi cabeza se
                llevan lo mejor de mi, Tulsi me ha ayudado a ordenarlos y me ha
                enseñado las herramientas para trabajar en mi por mi cuenta.
                Siento que puedo comunicarme mejor y de forma más asertiva
                gracias al acompañamiento de una gran psicóloga.
              </p>
              <h2 className="text-primary text-right font-semibold px-8">
                Marcela Cascante
              </h2>
              <p className="text-primary text-right px-8 text-sm">
                Co-fundadora Aurigital{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-96 md:w-[50%] bg-verdeclaro">
            <ArteTerapia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonios, "testimonios");
