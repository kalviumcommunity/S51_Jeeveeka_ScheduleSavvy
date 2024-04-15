import React from 'react';
import '../Styles/Tailwind.css';
import AboutImg1 from '../assets/About_img1.png';
import AboutImg2 from '../assets/About_img2.png';

export default function TitleAbout() {
    return (
        <div className='md:px-10 p-1 max-w-s mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mr-5 p-5'>
                <div className='md:w-1/2'>
                    <img src={AboutImg1} alt='AboutImg1'  />
                </div>
                <div className='md:w-2/5'>
                    <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>
                        Comprometidos con la efectividad de los <span className='text-secondary'>procesos nuestra mision.</span>
                    </h2>
                    <p className='text-tertiary text-lg mb-7'>
                        Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta,a logística de distribución.
                    </p>
                    <button className='btnPrimary'>Let's Go</button>
                </div>
            </div>
            <div className='h-10'></div>
            <div className=' md:px-10 flex flex-col md:flex-row-reverse items-center justify-between gap-8 ml-5'>
                <div className='md:w-1/2'>
                    <img  src={AboutImg2} alt='AboutImg2'  />
                </div>
                <div className='md:w-2/5 '>
                    <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>
                    Ser un aliado <span className='text-secondary'> estrategico nuestra vision</span>
                    </h2>
                    <p className='text-tertiary text-lg mb-7'>
                        Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta,a logística de distribución.
                    </p>
                    <button className='btnPrimary'>Let's Go</button>
                </div>
            </div>
        </div>
    );
}
