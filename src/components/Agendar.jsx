import React from 'react';
import { SectionWrapper } from '../hoc';


const Agendar = () => {
  return (
    <section className='relative w-full pb-20'>
      {/* Full width background image */}
      <div className='relative w-full bg-agendar bg-cover bg-center h-[580px] lg:h-[700px]'>
        <div className='absolute inset-0 bg-gradient-to-b from-black/40 to-transparent' />
        <div className='relative h-full flex justify-center'>
          <h2 className='text-5xl md:text-6xl py-3 lg:text-7xl font-rebellion text-center text-white mt-14' data-aos="fade-down">
            Agenda una sesión <br /> con Tulsi
          </h2>
        </div>
      </div>

      {/* Device overlay: phone portrait on mobile, tablet landscape on desktop */}
      <div className='relative z-10 -mt-24 mx-auto w-full lg:w-[92%] lg:max-w-7xl'>
        <div className='rounded-[2rem] shadow-2xl overflow-hidden border-[10px] border-gray-800 bg-white aspect-[9/16] lg:aspect-[4/3]'>
          <iframe
            src="https://app.simplymeet.me/tuti?is_widget=1&view=compact"
            title="Agenda una cita con Tulsi"
            className='w-full h-full'
            style={{ overflow: 'auto' }}
            loading="lazy"
            allow="clipboard-write"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Agendar, 'agenda');