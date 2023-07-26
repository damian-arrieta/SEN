import React from 'react';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className='text-olive'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-teal font-bold p-2'>
            TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO 
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Bienvenido a SEN:
        </h1>
        <div className='flex justify-center items-center'>
          <Typed
          className='text-teal md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Salud', 'Estética', 'Nutrición']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='p-10 md:text-2xl text-xl font-bold text-teal'>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO.</p>
      </div>
    </div>
  );
}
