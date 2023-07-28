import React from 'react';
import Consultorio from '../assets/consultorio.jpeg';

export default function Services() {
  return (
    <div className='w-full py-[10rem] px-4 bg-olive'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-20 mx-auto mt-[-3rem]' src={Consultorio} alt="/" />
              <h2 className='text-4xl font-bold text-center py-8'>Nutrición</h2>
              <p className='text-center text-xl font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt fuga aperiam quibusdam numquam modi maxime facere accusamus consectetur. Voluptates corrupti aperiam quaerat qui facilis, quos voluptatibus incidunt, libero sapiente illum cupiditate tempore temporibus, aliquam reprehenderit consectetur vero amet mollitia!</p>
              <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Mas Información</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-20 mx-auto mt-[-3rem]' src={Consultorio} alt="/" />
              <h2 className='text-4xl font-bold text-center py-8'>Estética</h2>
              <p className='text-center text-xl font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt fuga aperiam quibusdam numquam modi maxime facere accusamus consectetur. Voluptates corrupti aperiam quaerat qui facilis, quos voluptatibus incidunt, libero sapiente illum cupiditate tempore temporibus, aliquam reprehenderit consectetur vero amet mollitia!</p>
              <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Mas Información</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-20 mx-auto mt-[-3rem]' src={Consultorio} alt="/" />
              <h2 className='text-4xl font-bold text-center py-8'>Depilación</h2>
              <p className='text-center text-xl font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt fuga aperiam quibusdam numquam modi maxime facere accusamus consectetur. Voluptates corrupti aperiam quaerat qui facilis, quos voluptatibus incidunt, libero sapiente illum cupiditate tempore temporibus, aliquam reprehenderit consectetur vero amet mollitia!</p>
              <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Mas Información</button>
          </div>
      </div>
    </div>
  )
}
