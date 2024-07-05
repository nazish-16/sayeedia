'use client'

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import bed1 from './bed1.jpg'
import bed2 from './bed2.jpg'
import bed3 from './bed3.jpg'
import bed4 from './bed4.jpg'
import bed5 from './bed5.jpg'
import bed6 from './bed6.jpg'
import bed7 from './bed7.jpg'
import bed8 from './bed8.jpg'
import bed9 from './bed9.jpg'
import bed10 from './bed10.jpg'
import bed11 from './bed11.jpg'
import bed12 from './bed12.jpg'
import bed13 from './bed13.jpg'
import bed14 from './bed14.jpg'
import bed15 from './bed15.jpg'
import bed16 from './bed16.jpg'
import bed17 from './bed17.jpg'
import bed18 from './bed18.jpg'



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
                    <h1 className='text-[#fb923c] text-2xl pt-5'>Bedsheets & Comforters</h1>
                    <p className='max-w-5xl text-center p-7'>Discover the epitome of comfort and style with our luxurious bedsheet collection. Crafted from the finest materials, our bedsheets are designed to offer the perfect blend of softness, durability, and elegance.</p>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Trendy Comforters</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={bed1} alt='' width={220} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed2} alt='' width={220} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed3} alt='' width={220} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed4} alt='' width={220} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed5} alt='' width={220} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed6} alt='' width={220} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/15/33/bedroom-2593500_1280.jpg" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://cdn.pixabay.com/photo/2017/08/06/15/33/bedroom-2593500_1280.jpg")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Silk Satin</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={bed7} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed8} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed9} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed10} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed11} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed12} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                        </div>

                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Hybrid Bedsheets</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={bed13} alt='' width={230} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed14} alt='' width={230} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed15} alt='' width={230} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed16} alt='' width={230} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed17} alt='' width={230} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                            <Image src={bed18} alt='' width={230} className='h-[220px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
            {fullscreenImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative max-w-full max-h-full">
                        <img src={fullscreenImage} alt="Fullscreen" className="max-w-full max-h-full" />
                        <button className="absolute top-2 right-2 text-white text-6xl cursor-pointer" onClick={closeFullscreen}>×</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
