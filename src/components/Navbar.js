import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { TiThMenu } from 'react-icons/ti';
import { MdOutlineClose } from 'react-icons/md';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img className='h-12 w-auto' src={Logo} alt="SEN"/>
      <h1 className='w-full text-3xl font-bold text-olive'>SEN</h1>

      <ul className='hidden md:flex'>
        <li className='p-4 text-olive'>Inicio</li>
        <li className='p-4 text-olive'>SEN</li>
        <li className='p-4 text-olive'>Servicios</li>
        <li className='p-4 text-olive'>Contacto</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <MdOutlineClose className='text-olive' size={20} /> : <TiThMenu className='text-olive' size={20} />}
      
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-olive ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='m-4 w-full text-3xl font-bold text-white'>SEN</h1>

          <ul className='p-4 uppercase'>
            <li className='p-4 text-white'>Inicio</li>
            <li className='p-4 text-white'>SEN</li>
            <li className='p-4 text-white'>Servicios</li>
            <li className='p-4 text-white'>Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
