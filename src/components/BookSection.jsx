import React from 'react';
import { Libro } from "../assets";

const BookSection = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto text-white xl:h-[40rem]">
      <div className="xl:absolute left-0 z-20" data-aos="fade-right">
        <img
          src={Libro}
          alt="Abril: Para mis adentros"
          className="mx-auto w-80 lg:w-[35rem]"
        />
      </div>

      <div className="h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl py-3 lg:text-7xl font-rebellion mb-6 md:mb-20 font text-center w-full" data-aos="fade-up">
          Abril: Para mis adentros
        </h1>

        <div className="w-full">
          <div className="mx-auto xl:mx-0 xl:ml-auto md:w-[770px] px-6 space-y-6 text-center" data-aos="fade-left">
            <p className="lg:text-3xl font-sen mb-6 tracking-wide pl-2">
              Cuando las emociones inundan mi razón, acudo a la poesía para plasmar mi fantasía. <br />
              Abril es desnudar mis sentimientos y entregárselos al mundo, Abril es morir y resucitar
              entre mis letras, Abril es florecer y marchitarme... Una y otra vez...
            </p>
            <p className="font-sen text-white text-2xl mb-6 text-right">
              - Con amor, Tul.
            </p>
            {/* Comprar: re-enable when back in stock
            <div className="flex justify-center">
              <a
                href="#agenda"
                className="mt-5 w-72 relative inline-block py-2 px-4 rounded-full uppercase font-sen text-tertiary overflow-hidden bg-gradient-to-r from-[#00745B] to-[#B7B325] group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B7B325] to-[#00745B] opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
                <span className="relative z-10 font-medium xl:text-[20px] flex flex-row text-center justify-center items-center">
                  Comprar Libro
                </span>
              </a>
            </div>
            */}
            <div className="flex flex-col items-center gap-4">
              <div className="mt-5 w-72 py-2 px-4 rounded-full uppercase font-sen text-tertiary bg-gradient-to-r from-[#00745B] to-[#B7B325] cursor-default">
                <span className="font-medium xl:text-[20px] flex justify-center items-center">
                  Sold Out
                </span>
              </div>
              <p className="max-w-sm text-sm font-sen text-white/70 text-center leading-relaxed">
                Con mucho agradecimiento en mi corazón te cuento que Abril está agotado, habilitaremos la compra una vez tengamos más en stock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
