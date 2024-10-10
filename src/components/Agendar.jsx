import React from 'react';
import { SectionWrapper } from '../hoc';

const Agendar = () => {
  return (
    <section className='bg-agendar bg-cover bg-center'>
      <div className='max-w-[430px] md:max-w-[768px] mx-auto'>
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
