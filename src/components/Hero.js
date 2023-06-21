import React from 'react'

export default function Hero() {
  return (
    <div className='text-olive'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-teal font-bold p-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit!
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                BIENVENIDOS A SEN.
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio explicabo iusto eveniet.</p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-teal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
        </div>
    </div>
  )
}
