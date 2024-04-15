import React from 'react'
import '../Styles/Tailwind.css'
import bannerImg1 from '../assets/banner_img.png'

export default function Banner() {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
            <div>
                <img className='lg:h-[288px]' src={bannerImg1} alt="bannerImg1" />
            </div>
            <div className='md:w-3/5'>
              <h2 className='md:text-3xl text-2xl font-bold text-white mb-6 leading-relaxed'>Empresa dedicada altransporte de carga pesada</h2>
              <p className='text-[#EBEBEB] text-1xl mb-8'>Somos una empresa familiar dedicada al rubro de transporte de carga pesa, carga concentrada y minerales</p>
              <div className='space-x-5 space-y-4'>
                <button className='btnPrimary'>More</button>
                <button className='btnPrimary'>More</button>
              </div> 
            </div>
        </div>
    </div>
  )
}
