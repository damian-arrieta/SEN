import React from 'react';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className='text-olive relative'>
      <svg
        className='absolute top-0 left-0 h-screen w-full'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <defs>
          <linearGradient id='gradient' x1='0%' y1='25%' x2='50%' y2='100%'>
            <stop offset='0%' stopColor='#ffffff' stopOpacity='0.75' />
            <stop offset='100%' stopColor='#B8D3CC' stopOpacity='1' />
          </linearGradient>
        </defs>
        <path
          d='M0 70 C 25 90, 40 100, 70 70 C 90 50, 100 20, 100 100 L 0 100 Z'
          fill='url(#gradient)'
        />
      </svg>

      <div className='absolute top-0 left-0 h-screen w-screen'>
        <div className='absolute h-16 w-16 bg-teal rounded-full opacity-25' style={{ top: '30%', left: '15%' }}></div>
        <div className='absolute h-12 w-12 bg-teal rounded-full opacity-25' style={{ top: '65%', left: '10%' }}></div>
        <div className='absolute h-8 w-8 bg-teal rounded-full opacity-25' style={{ top: '50%', left: '25%' }}></div>
      </div>

      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center relative mt-[64px] md:mt-[-96px]'>
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
        <p className='p-10 md:text-2xl text-xl font-bold text-teal'>
          TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO.
        </p>
        <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase'>Reservar cita</button>
      </div>
    </div>
  );
}
