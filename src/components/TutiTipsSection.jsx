import React from 'react';
import { VideoBlogs, manada2, fontana, Tulipan } from "../assets";

const TutiTipsSection = () => {
  return (
    <section
      id='blog'
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/fondo-hojas.jpg')" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div className="flex flex-col">

            <h2 className="text-6xl xl:text-[6rem] font-bold font-rebellion my-16 flex flex-row gap-8 mx-auto items-center" data-aos="fade-down">
              <img src={Tulipan} className="h-full w-10 md:w-20" />
              Tuti Tips
            </h2>

            <div className="h-full" data-aos="fade-right"> 
              <div class="elfsight-app-8efcb6e2-9108-4dc8-8b5a-8ec3ebfee2e4" data-elfsight-app-lazy></div>
            </div>
          </div>

          <div className="hidden xl:block relative group overflow-hidden rounded-lg w-full h-[635px]" data-aos="fade-left">
            <video
              src={VideoBlogs}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TutiTipsSection;
