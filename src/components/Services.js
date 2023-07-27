import React from 'react';
import ImageCard from './ImageCard';
import Consultorio from '../assets/consultorio.jpeg';

export default function Services() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <ImageCard imgsrc={ Consultorio } >
        <h3 className='text-xl font-bold mb-2'>Nutrición</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt fuga aperiam quibusdam numquam modi maxime facere accusamus consectetur. Voluptates corrupti aperiam quaerat qui facilis, quos voluptatibus incidunt, libero sapiente illum cupiditate tempore temporibus, aliquam reprehenderit consectetur vero amet mollitia!</p>
        <div className='space-x-4 mt-4'>
        <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase'>Ver mas</button>
        </div>
      </ImageCard>
      <ImageCard imgsrc={ Consultorio } >
        <h3 className='text-xl font-bold mb-2'>Nutrición</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt fuga aperiam quibusdam numquam modi maxime facere accusamus consectetur. Voluptates corrupti aperiam quaerat qui facilis, quos voluptatibus incidunt, libero sapiente illum cupiditate tempore temporibus, aliquam reprehenderit consectetur vero amet mollitia!</p>
        <div className='space-x-4 mt-4'>
        <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase'>Ver mas</button>
        </div>
      </ImageCard>
      <ImageCard imgsrc={ Consultorio } >
        <h3 className='text-xl font-bold mb-2'>Nutrición</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nesciunt fuga aperiam quibusdam numquam modi maxime facere accusamus consectetur. Voluptates corrupti aperiam quaerat qui facilis, quos voluptatibus incidunt, libero sapiente illum cupiditate tempore temporibus, aliquam reprehenderit consectetur vero amet mollitia!</p>
        <div className='space-x-4 mt-4'>
        <button className='bg-olive w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase'>Ver mas</button>
        </div>
      </ImageCard>
    </div>
  )
}
