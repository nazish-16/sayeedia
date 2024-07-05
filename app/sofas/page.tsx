'use client'

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import s1 from './s1.jpg';
import s2 from './s2.jpg';
import s3 from './s3.jpg';
import s4 from './s4.jpg';
import s5 from './s5.jpg';
import s6 from './s6.jpg';
import s7 from './s7.jpg';
import s8 from './s8.jpg';
import s9 from './s9.jpg';
import s10 from './s10.jpg';
import s11 from './s11.jpg';
import s12 from './s12.jpg';
import s13 from './s13.jpg';
import s14 from './s14.jpg';
import s15 from './s15.jpg';
import s16 from './s16.jpg';
import s17 from './s17.jpg';
import s18 from './s18.jpg';
import s19 from './s19.jpg';
import s20 from './s20.jpg';
import s21 from './s21.jpg';
import s22 from './s22.jpg';
import s23 from './s23.jpg';
import s24 from './s24.jpg';

const Page = () => {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    const openFullscreen = (imageUrl: string) => {
        setFullscreenImage(imageUrl);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <>
            <div>
                <Navbar />
                <div className='flex flex-col items-center justify-center p-7'>
                    <h1 className='text-[#fb923c] text-3xl pt-5'>Sofas Decor</h1>
                    <p className='max-w-5xl text-center p-7'>Transform your living space with our stunning collection of sofas, designed to bring both style and comfort to your home. Our range of sofas caters to diverse tastes and preferences, from sleek modern designs to timeless classics.</p>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Alfa Sofas</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={s1} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s1.src)} />
                            <Image src={s2} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s2.src)} />
                            <Image src={s3} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s3.src)} />
                            <Image src={s4} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s4.src)} />
                            <Image src={s5} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s5.src)} />
                            <Image src={s6} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s6.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/19050702/pexels-photo-19050702/free-photo-of-sofas-in-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/19050702/pexels-photo-19050702/free-photo-of-sofas-in-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Monaco Sofas</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={s7} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s7.src)} />
                            <Image src={s8} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s8.src)} />
                            <Image src={s9} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s9.src)} />
                            <Image src={s10} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s10.src)} />
                            <Image src={s11} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s11.src)} />
                            <Image src={s12} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s12.src)} />
                        </div>

                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/4947736/pexels-photo-4947736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/4947736/pexels-photo-4947736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Cotton Cloth Sofas</h1>

                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={s13} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s13.src)} />
                            <Image src={s14} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s14.src)} />
                            <Image src={s15} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s15.src)} />
                            <Image src={s16} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s16.src)} />
                            <Image src={s17} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s17.src)} />
                            <Image src={s18} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s18.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Velvet Sofas</h1>

                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={s19} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s19.src)} />
                            <Image src={s20} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s20.src)} />
                            <Image src={s21} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s21.src)} />
                            <Image src={s22} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s22.src)} />
                            <Image src={s23} alt='' width={180} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s23.src)} />
                            <Image src={s24} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(s24.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {fullscreenImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative max-w-full max-h-full">
                        <img src={fullscreenImage} alt="Fullscreen" className="w-[400px] h-[500px] lg:w-[450px] lg:h-[600px] rounded-lg" />
                        <button className="absolute top-2 right-2 text-white text-6xl cursor-pointer" onClick={closeFullscreen}>×</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
