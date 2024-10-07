import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { tulsi } from "../assets";

import { slideIn } from "../utils/motion";

const Tulsi = () => {
  return (
    <div className="h-auto  lg:max-w-[100%] items-center md:top-0 mx-auto md:mx-0 md:px-0">
      <div className="md:flex md:flex-row-reverse mx-auto md:items-center md:self-center">
        <div className="min-h-[45vh] md:translate-x-32 md:translate-y-12 md:z-20 md:min-h-0 md:w-auto md:m-width-[65%] lg:m-width-[60%] md:-ml-16">
          <motion.div
            variants={slideIn("right", "tween", 0.3, 1)}
            className="relative z-20 top-16 md:static w-[90vw] md:w-[65%] text-verdeoscuro bg-pink-gr md:bg-secondary/30 md:top-36 drop-shadow-md p-4 md:p-6 md:rounded-md rounded"
          >
            <h3 className="text-lg md:text-2xl 2xl:text-3xl font-semibold pb-2 md:pb-4 text-tertiary md:text-verdeoscuro">
              Disfruto cuestionar mis creencias de hoy.
            </h3>
            <h3 className="text-lg md:text-2xl 2xl:text-3xl font-semibold pb-2 md:pb-4 text-tertiary md:text-primary">
              {" "}
              Pero cuando debatir me lleva a sentir que no estoy segura de
              nada….
            </h3>
            <p className="text-sm md:text-lg 2xl:text-xl leading-7 pb-2 md:pb-4">
              Recuerdo que estoy segura del amor, somos amor, merecemos amor y
              vivimos desde el amor. Por eso deseo servirte con amor en la
              búsqueda de tu verdad, abrazarte y acompañarte en medio de los
              momentos oscuridad.{" "}
              <strong>
                En un mundo que nos enseña a reprimir, el dejarnos sentirlo todo
                es nuestra revolución.
              </strong>
            </p>
            <h2 className="text-2xl 2xl:text-3xl font-semibold pb-2 md:pb-4">
              -Tulsi
            </h2>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("left", "tween", 0.3, 1)}
          className="min-h-[50vh] md:min-h-120 w-full flex justify-start"
        >
          <img
            src={tulsi}
            alt="Tulsi Bailando"
            className="relative md:left-[30%] rounded-none md:rounded-r-lg -top-4 md:top-10 w-[100%] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tulsi, "tulsi");
