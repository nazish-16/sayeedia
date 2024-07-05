'use client'

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import cat3 from './cat3.jpg'
import cat4 from './cat4.jpg'
import cat5 from './cat5.jpg'
import cat6 from './cat6.jpg'
import cat7 from './cat7.jpg'
import cat8 from './cat8.jpg'
import cat9 from './cat9.jpg'
import cat10 from './cat10.jpg'
import cat11 from './cat11.jpg'
import cat12 from './cat12.jpg'
import cat13 from './cat13.jpg'
import cat14 from './cat14.jpg'
import cat15 from './cat15.jpg'
import cat16 from './cat16.jpg'
import cat17 from './cat17.jpg'
import cat18 from './cat18.jpg'
import cat19 from './cat19.jpg'
import cat20 from './cat20.jpg'
import cat21 from './cat21.jpg'
import cat22 from './cat22.jpg'
import cat23 from './cat23.png'
import cat24 from './cat24.png'

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
                    <h1 className='text-[#fb923c] text-3xl pt-5'>Catalogs & Accessories</h1>
                    <p className='max-w-5xl text-center p-7'>Explore our comprehensive catalogs, meticulously curated to provide you with a wide array of choices for every room in your home. Our catalogs feature detailed descriptions, high-quality images, and all the information you need to make informed decisions.</p>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Catalogs</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={cat1} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat1.src)} />
                            <Image src={cat2} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat2.src)} />
                            <Image src={cat3} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat3.src)} />
                            <Image src={cat4} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat4.src)} />
                            <Image src={cat5} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat5.src)} />
                            <Image src={cat6} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat6.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={cat7} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat7.src)} />
                            <Image src={cat8} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat8.src)} />
                            <Image src={cat9} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat9.src)} />
                            <Image src={cat10} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat10.src)} />
                            <Image src={cat11} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat11.src)} />
                            <Image src={cat12} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat12.src)} />
                        </div>

                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={cat13} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat13.src)} />
                            <Image src={cat14} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat14.src)} />
                            <Image src={cat15} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat15.src)} />
                            <Image src={cat16} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat16.src)} />
                            <Image src={cat17} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat17.src)} />
                            <Image src={cat18} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat18.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/2343469/pexels-photo-2343469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/2343469/pexels-photo-2343469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Accessories</h1>

                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <Image src={cat19} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat19.src)} />
                            <Image src={cat20} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat20.src)} />
                            <Image src={cat21} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat21.src)} />
                            <Image src={cat22} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat22.src)} />
                            <Image src={cat23} alt='' width={180} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat23.src)} />
                            <Image src={cat24} alt='' width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen(cat24.src)} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div >

            {/* Fullscreen Image Modal */}
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
