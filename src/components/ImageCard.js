import React from 'react'

export default function ImageCard({ children, imgsrc, ...props }) {
  return (
    <div {...props} className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group m-4'>
        <img src={imgsrc} alt='' className='transition-transform group-hover:scale-110 duration-200' />
        <div className='absolute inset-0 flex items-end bg-black/60 hover:bg-transparent hover:duration-1000'>
            <div className='p-4 text-white'>
                {children}
            </div>
        </div>
    </div>
  )
}
