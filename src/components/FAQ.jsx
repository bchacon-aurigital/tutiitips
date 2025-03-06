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
    <div id='faq' className='container mx-auto my-20 text-primary font-sen'>
      <div className='mx-auto max-w-[768px]'>
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          {preguntas.map((pregunta, index) => (
            <Panel header={pregunta.label} key={index} className='text-xl font-semibold font-sen'>
              <ul className='list-disc ml-5'>
                {pregunta.points.map((point, index) => (
                  <li key={index} className='text-primary font-sen'>
                    {point}
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default SectionWrapper(FAQ, 'preguntas');
