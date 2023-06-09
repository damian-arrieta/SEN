import React from 'react'

export default function Navbar() {

  let links = [
    {name: "Categoria", link: '/'},
    {name: "Categoria", link: '/'},
    {name: "Categoria", link: '/'},
    {name: "Categoria", link: '/'},
  ];

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span>
            SEN
          </span>
        </div>
        <ul className='md:flex cd:items-center'>
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
