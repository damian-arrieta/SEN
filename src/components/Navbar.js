import React, { useState } from 'react'

export default function Navbar() {

  let links = [
    {name: "Categoria", link: '/'},
    {name: "Categoria", link: '/'},
    {name: "Categoria", link: '/'},
    {name: "Categoria", link: '/'},
  ];

  let [open, setOpen]=useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span>
            SEN
          </span>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
