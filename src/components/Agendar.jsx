import React from 'react';
import { SectionWrapper } from '../hoc';


const Agendar = () => {
  return (
    <section className='flex flex-col md:flex-row'>
      <div className='w-full md:w-2/3 bg-agendar bg-cover bg-center min-h-[500px]'>
        <div className='h-full flex justify-center'>
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-rebellion text-center text-white mt-14' data-aos="fade-down">
            Agenda una sesión <br /> con Tulsi
          </h2>
        </div>
      </div>

      <div className='w-full md:w-1/3'>
        <iframe
          src="https://app.simplymeet.me/tuti?is_widget=1&view=compact"
          style={{
            width: '100%',
            height: 'calc(100vh - 100px)'
          }}
          className='md:h-[80vh]'
          frameBorder="1"
          scrolling="no">
        </iframe>
      </div>
    </section>
  );
}

export default SectionWrapper(Agendar, 'agenda');