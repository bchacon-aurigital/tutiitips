import React from "react";
import { SectionWrapper } from "../hoc";
import { taller1, taller2, taller3 } from "../assets";

const Taller = () => {
  return (
    <div className="bg-white/25 backdrop-blur-md min-h-[500px] w-full mt-[15%] pb-10">
      <h1 className="uppercase text-white text-3xl my-5 tracking-widest text-center pt-10">
        ¡Nuevo Taller Diponible!
      </h1>
      <div className="items-center justify-center gap-5 p-10 flex flex-col md:flex-row">
        <img src={taller1} alt="Taller" className="h-[364px] w-[364px]" />
        <img src={taller2} alt="Taller" className="h-[364px] w-[364px]" />
        <img src={taller3} alt="Taller" className="h-[364px] w-[364px]" />
      </div>

      <a
        href="https://forms.gle/UxJDuPSPBp2JWh128"
        target="_blank"
        onClick={() => {
          setActive(""), setToggle(!toggle);
        }}
        className=" flex bg-secondary my-5 justify-center py-2 px-6 w-max rounded-full hover:bg-primary text-white hover:text-white mx-auto"
      >
        Inscribirme
      </a>
    </div>
  );
};

export default SectionWrapper(Taller, "taller");
