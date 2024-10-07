import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

import { preguntas } from '../constants';
import { SectionWrapper } from '../hoc';

const { Panel } = Collapse;

const FAQ = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className=' container mx-auto my-20 text-primary'>
      <h1 className='text-center mb-14 text-3xl px-4 tracking-wider'>¿Tienes alguna pregunta?</h1>
      <div className='mx-auto max-w-[768px]'>
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          {preguntas.map((pregunta, index) => (
            <Panel header={pregunta.label} key={index} className='text-md'>
              <ul className='list-disc ml-5'>
                {pregunta.points.map((point, index) => (
                  <li key={index} className='text-primary'>
                    {point}
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </Collapse>
      </div>
      <div className='mt-10 text-center'>
        <a href='#agenda' className='bg-secondary border-2 border-primary text-primary hover:bg-verdeclaro hover:text-tertiary py-2 px-6 w-max rounded-full'>Agendar una cita</a>
      </div>
    </div>
  );
};

export default SectionWrapper(FAQ, 'preguntas');
