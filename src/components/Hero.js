import React from 'react';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className='text-olive'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-teal font-bold p-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloribus deleniti quasi eum sint ea possimus amet.
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Bienvenido a SEN:
        </h1>
        <div className='flex justify-center items-center'>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Salud', 'Estética', 'Nutrición']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='p-4 md:text-2xl text-xl font-bold text-teal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase'>Reservar cita</button>
      </div>
    </div>
  );
}
