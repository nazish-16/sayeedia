'use client'

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import curtain1 from './curtain1.jpg'
import curtain2 from './curtain2.jpg'
import curtain3 from './curtain3.jpg'
import curtain4 from './curtain4.jpg'
import curtain5 from './curtain5.jpg'
import curtain6 from './curtain6.jpg'
import curtain7 from './curtain7.jpg'
import curtain8 from './curtain8.jpg'
import curtain9 from './curtain9.jpg'
import curtain10 from './curtain10.jpg'
import curtain11 from './curtain11.jpg'
import curtain12 from './curtain12.jpg'
import curtain13 from './curtain13.jpg'
import curtain14 from './curtain14.jpg'
import curtain15 from './curtain15.jpg'
import curtain16 from './curtain16.jpg'
import curtain17 from './curtain17.jpg'
import curtain18 from './curtain18.jpg'
import curtain19 from './curtain19.jpg'
import curtain20 from './curtain20.jpg'
import curtain21 from './curtain21.jpg'
import curtain22 from './curtain22.jpg'
import curtain23 from './curtain23.jpg'
import curtain24 from './curtain24.jpg'
import Image from 'next/image';

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
                    <h1 className='text-[#fb923c] text-3xl pt-5'>Curtains</h1>
                    <p className='max-w-5xl text-center p-7'>We have a variety of exquisite curtains designed to enhance the beauty and functionality of any space. Our collection features an extensive range of styles, from modern and minimalist to classic and luxurious, ensuring that there is something to suit every taste and decor.</p>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Metallic Curtains</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={curtain1} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain1.src)} />
                            <Image src={curtain2} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain2.src)} />
                            <Image src={curtain3} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain3.src)} />
                            <Image src={curtain4} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain4.src)} />
                            <Image src={curtain5} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain5.src)} />
                            <Image src={curtain6} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain6.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/2766345/pexels-photo-2766345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/2766345/pexels-photo-2766345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Qupid Curtains</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={curtain7} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain7.src)} />
                            <Image src={curtain8} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain8.src)} />
                            <Image src={curtain9} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain9.src)} />
                            <Image src={curtain10} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain10.src)} />
                            <Image src={curtain11} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain11.src)} />
                            <Image src={curtain12} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain12.src)} />
                        </div>

                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/5835536/pexels-photo-5835536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/5835536/pexels-photo-5835536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Softy-Satin Curtains</h1>

                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={curtain13} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain13.src)} />
                            <Image src={curtain14} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain14.src)} />
                            <Image src={curtain15} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain15.src)} />
                            <Image src={curtain16} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain16.src)} />
                            <Image src={curtain17} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain17.src)} />
                            <Image src={curtain18} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain18.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/7407771/pexels-photo-7407771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/7407771/pexels-photo-7407771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>English Net Curtains</h1>

                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={curtain19} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain19.src)} />
                            <Image src={curtain20} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain20.src)} />
                            <Image src={curtain21} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain21.src)} />
                            <Image src={curtain22} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain22.src)} />
                            <Image src={curtain23} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain23.src)} />
                            <Image src={curtain24} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(curtain24.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/3255244/pexels-photo-3255244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/3255244/pexels-photo-3255244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
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
