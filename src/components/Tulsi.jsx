import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { tulsi } from "../assets";

import { slideIn } from "../utils/motion";

const Tulsi = () => {
  return (
    <div className="h-auto lg:max-w-[100%] items-center mx-auto md:mx-0 md:px-0">
      {/* Versión de escritorio */}
      <div className="hidden md:block">
        <div className="md:flex md:flex-row-reverse mx-auto md:items-center md:self-center">
          <div className="min-h-[45vh] md:translate-x-32 md:translate-y-12 md:z-20 md:min-h-0 md:w-auto md:max-w-[65%] lg:max-w-[60%] md:-ml-16">
            <motion.div
              variants={slideIn("right", "tween", 0.3, 1)}
              className="relative z-20 top-16 md:static w-[90vw] md:w-[65%] text-verdeoscuro bg-pink-gr md:bg-secondary/30 md:top-36 drop-shadow-md p-4 md:p-6 md:rounded-md rounded"
            >
              <h2 className="text-lg md:text-2xl 2xl:text-3xl font-semibold pb-2 md:pb-4 text-verdeoscuro">
                Disfruto cuestionar mis creencias de hoy.
              </h2>
              <h3 className="text-lg md:text-2xl 2xl:text-3xl font-semibold pb-2 md:pb-4 text-verdeoscuro">
                Pero cuando debatir me lleva a sentir que no estoy segura de nada….
              </h3>
              <p className="text-sm md:text-lg 2xl:text-xl leading-7 pb-2 md:pb-4 text-verdeoscuro">
                Recuerdo que estoy segura del amor, somos amor, merecemos amor y
                vivimos desde el amor. Por eso deseo servirte con amor en la
                búsqueda de tu verdad, abrazarte y acompañarte en medio de los
                momentos de oscuridad.{" "}
                <strong className="text-verdeoscuro">
                  En un mundo que nos enseña a reprimir, el dejarnos sentirlo
                  todo es nuestra revolución.
                </strong>
              </p>
              <h2 className="text-2xl 2xl:text-3xl font-semibold pb-2 md:pb-4 text-verdeoscuro">
                -Tulsi
              </h2>
            </motion.div>
          </div>
          <motion.div
            variants={slideIn("left", "tween", 0.3, 1)}
            className="min-h-[50vh] md:min-h-[120vh] w-full flex justify-start"
          >
            <img
              src={tulsi}
              alt="Tulsi Bailando"
              className="relative md:left-[30%] rounded-none md:rounded-r-lg -top-4 md:top-10 w-full h-3/4"
            />
          </motion.div>
        </div>
      </div>

      {/* Versión móvil */}
      <div className="md:hidden">
        <div className="flex flex-col items-center justify-start">
          {/* Imagen */}
          <div className="w-full">
            <img
              src={tulsi}
              alt="Tulsi Bailando"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "70vh", objectPosition: "center top" }}
            />
          </div>
          {/* Card de texto */}
          <motion.div
            variants={slideIn("up", "tween", 0.3, 1)}
            className="w-[90%] bg-white/80 p-6 rounded-md -mt-64 text-verdeoscuro"
          >
            {/* Aplicamos '-mt-64' para subir el card 16 rem */}
            <h2 className="text-lg font-semibold pb-2">
              Disfruto cuestionar mis creencias de hoy.
            </h2>
            <h3 className="text-lg font-semibold pb-2">
              Pero cuando debatir me lleva a sentir que no estoy segura de nada….
            </h3>
            <p className="text-sm leading-7 pb-2">
              Recuerdo que estoy segura del amor, somos amor, merecemos amor y
              vivimos desde el amor. Por eso deseo servirte con amor en la
              búsqueda de tu verdad, abrazarte y acompañarte en medio de los
              momentos de oscuridad.{" "}
              <strong>
                En un mundo que nos enseña a reprimir, el dejarnos sentirlo
                todo es nuestra revolución.
              </strong>
            </p>
            <h2 className="text-2xl font-semibold pb-2">-Tulsi</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tulsi, "tulsi");
