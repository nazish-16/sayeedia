'use client'

import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';

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
                    <h1 className='text-[#fb923c] text-3xl pt-5'>Bedsheets & Comforters</h1>
                    <p className='max-w-5xl text-center p-7'>Discover the epitome of comfort and style with our luxurious bedsheet collection. Crafted from the finest materials, our bedsheets are designed to offer the perfect blend of softness, durability, and elegance.</p>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Trendy Comforters</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258123788302680225/WhatsApp_Image_2024-07-02_at_15.15.37_aed4b64d.jpg?ex=6686e695&is=66859515&hm=dbfead6adc880b7d5746c4522062378d8d6002a35420bb71590ecf6cbaa38133&=&format=webp&width=901&height=676" width={200} className='h-[250px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258123788302680225/WhatsApp_Image_2024-07-02_at_15.15.37_aed4b64d.jpg?ex=6686e695&is=66859515&hm=dbfead6adc880b7d5746c4522062378d8d6002a35420bb71590ecf6cbaa38133&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258123802924028005/WhatsApp_Image_2024-07-02_at_15.15.37_bdb945c7.jpg?ex=6686e699&is=66859519&hm=dd7d1697cd49bb4d3cd4e47cae8c93d80ed9d009f1f76f94aa29831a3b7831ed&=&format=webp&width=901&height=676" width={200} className='h-[250px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258123802924028005/WhatsApp_Image_2024-07-02_at_15.15.37_bdb945c7.jpg?ex=6686e699&is=66859519&hm=dd7d1697cd49bb4d3cd4e47cae8c93d80ed9d009f1f76f94aa29831a3b7831ed&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258124204533092473/WhatsApp_Image_2024-07-02_at_15.15.37_98303e2a.jpg?ex=6686e6f9&is=66859579&hm=c23160bfaa72cd3cbdbe9da9d026e9c19377c2824b554bd14940e7a9e1b8a8b2&=&format=webp&width=901&height=676" width={200} className='h-[250px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258124204533092473/WhatsApp_Image_2024-07-02_at_15.15.37_98303e2a.jpg?ex=6686e6f9&is=66859579&hm=c23160bfaa72cd3cbdbe9da9d026e9c19377c2824b554bd14940e7a9e1b8a8b2&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258124204876759250/WhatsApp_Image_2024-07-02_at_15.15.37_ce03aa43.jpg?ex=6686e6f9&is=66859579&hm=92a9a0f2e2b1a2e845c2dcdc17b5b2d4bf51b5c901af5077eb852bfb581685ea&=&format=webp&width=901&height=676" width={200} className='h-[250px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258124204876759250/WhatsApp_Image_2024-07-02_at_15.15.37_ce03aa43.jpg?ex=6686e6f9&is=66859579&hm=92a9a0f2e2b1a2e845c2dcdc17b5b2d4bf51b5c901af5077eb852bfb581685ea&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258124205182947358/WhatsApp_Image_2024-07-02_at_15.15.37_2d784f69.jpg?ex=6686e6f9&is=66859579&hm=70df0b8df6249c2a722a0ead1713ea40535fca25de4f06647a882d2b9323433b&=&format=webp&width=901&height=676" width={200} className='h-[250px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258124205182947358/WhatsApp_Image_2024-07-02_at_15.15.37_2d784f69.jpg?ex=6686e6f9&is=66859579&hm=70df0b8df6249c2a722a0ead1713ea40535fca25de4f06647a882d2b9323433b&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258124205485068328/WhatsApp_Image_2024-07-02_at_15.15.37_9b1dbbea.jpg?ex=6686e6f9&is=66859579&hm=0356e78f3211db95592a8bdf3fb100bf60560b3ddbf3ca9a751600d1f9170b31&=&format=webp&width=901&height=676" width={200} className='h-[250px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258124205485068328/WhatsApp_Image_2024-07-02_at_15.15.37_9b1dbbea.jpg?ex=6686e6f9&is=66859579&hm=0356e78f3211db95592a8bdf3fb100bf60560b3ddbf3ca9a751600d1f9170b31&=&format=webp&width=901&height=676")} />
                        </div>
                        <div className='hidden lg:flex'>
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/15/33/bedroom-2593500_1280.jpg" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://cdn.pixabay.com/photo/2017/08/06/15/33/bedroom-2593500_1280.jpg")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Silk Satin</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258125390904299551/WhatsApp_Image_2024-07-02_at_15.16.18_2c98828a.jpg?ex=6686e814&is=66859694&hm=e42a1ae37e833a8e3215163d0f7c4a4153f9908afe13ee2e70c3534a3c98f52e&=&format=webp&width=507&height=676" width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258125390904299551/WhatsApp_Image_2024-07-02_at_15.16.18_2c98828a.jpg?ex=6686e814&is=66859694&hm=e42a1ae37e833a8e3215163d0f7c4a4153f9908afe13ee2e70c3534a3c98f52e&=&format=webp&width=507&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258125391185580173/WhatsApp_Image_2024-07-02_at_15.16.18_3c4dc9f9.jpg?ex=6686e814&is=66859694&hm=9bfc639245b6ad371b392e3865dd9545d880190c399fc65d4c7a1e23fe25d79f&=&format=webp&width=507&height=676" width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258125391185580173/WhatsApp_Image_2024-07-02_at_15.16.18_3c4dc9f9.jpg?ex=6686e814&is=66859694&hm=9bfc639245b6ad371b392e3865dd9545d880190c399fc65d4c7a1e23fe25d79f&=&format=webp&width=507&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258125391520858192/WhatsApp_Image_2024-07-02_at_15.16.18_9993daad.jpg?ex=6686e814&is=66859694&hm=49e8230240ca25bb463f7eb4fdfe7a11938140a62093c46efba3a945c6434609&=&format=webp&width=507&height=676" width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258125391520858192/WhatsApp_Image_2024-07-02_at_15.16.18_9993daad.jpg?ex=6686e814&is=66859694&hm=49e8230240ca25bb463f7eb4fdfe7a11938140a62093c46efba3a945c6434609&=&format=webp&width=507&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258125391961526403/WhatsApp_Image_2024-07-02_at_15.16.18_573310a4.jpg?ex=6686e814&is=66859694&hm=62f96845697887005cc1f2ab39081d5eb020f7a52aaa8a0817e50f7c6294d88e&=&format=webp&width=507&height=676" width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258125391961526403/WhatsApp_Image_2024-07-02_at_15.16.18_573310a4.jpg?ex=6686e814&is=66859694&hm=62f96845697887005cc1f2ab39081d5eb020f7a52aaa8a0817e50f7c6294d88e&=&format=webp&width=507&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258125392393408512/WhatsApp_Image_2024-07-02_at_15.16.18_738e284c.jpg?ex=6686e814&is=66859694&hm=5f6b2c83139559bbaacb8756316b3f2392690555e1ee076e2ebb79ae8916f1ad&=&format=webp&width=507&height=676" width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258125392393408512/WhatsApp_Image_2024-07-02_at_15.16.18_738e284c.jpg?ex=6686e814&is=66859694&hm=5f6b2c83139559bbaacb8756316b3f2392690555e1ee076e2ebb79ae8916f1ad&=&format=webp&width=507&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258125392829480990/WhatsApp_Image_2024-07-02_at_15.16.18_8c794b3c.jpg?ex=6686e814&is=66859694&hm=8568460c13042dee247e42fa42fadc6af1033a0435594ec528c4306a0d4ff06b&=&format=webp&width=507&height=676" width={200} className='m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258125392829480990/WhatsApp_Image_2024-07-02_at_15.16.18_8c794b3c.jpg?ex=6686e814&is=66859694&hm=8568460c13042dee247e42fa42fadc6af1033a0435594ec528c4306a0d4ff06b&=&format=webp&width=507&height=676")} />
                        </div>

                        <div className='hidden lg:flex'>
                            <img src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={280} className='rounded-md hover:translate-y-[-4px] transition-transform m-5 cursor-pointer' onClick={() => openFullscreen("https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")} />
                        </div>
                    </div>
                    <h1 className='text-[#205980] text-2xl pt-5 font-normal underline underline-offset-1'>Hybrid Bedsheets</h1>
                    <div className='flex justify-between items-center'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 m-5 p-3'>
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258126896806236181/WhatsApp_Image_2024-07-02_at_15.14.08_7822d364.jpg?ex=6686e97b&is=668597fb&hm=16f74b23d73c566ff608636ac841193f3db381e0f9684dea4b1d05061bff1405&=&format=webp&width=901&height=676" width={200} className='h-[240px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258006528267386960/WhatsApp_Image_2024-07-02_at_14.38.18_b0f10e16.jpg?ex=66867960&is=668527e0&hm=7453effbce37e216ab6701e07e213136f3dd82902e256f4103fe07d9116bb49f&=&format=webp&width=507&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258126897112682536/WhatsApp_Image_2024-07-02_at_15.14.08_72fb316f.jpg?ex=6686e97b&is=668597fb&hm=d93a5eef3e08467aa582ceb5f3c2a1ba133b40dec221bcc8a6a23b8342245d72&=&format=webp&width=901&height=676" width={200} className='h-[240px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258126897112682536/WhatsApp_Image_2024-07-02_at_15.14.08_72fb316f.jpg?ex=6686e97b&is=668597fb&hm=d93a5eef3e08467aa582ceb5f3c2a1ba133b40dec221bcc8a6a23b8342245d72&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258126897586503781/WhatsApp_Image_2024-07-02_at_15.14.08_75f8591b.jpg?ex=6686e97b&is=668597fb&hm=0a1b581f3036928c0c3e2da14678ec9343c356c2bd2228480c54c2a3c1458aaf&=&format=webp&width=901&height=676" width={200} className='h-[240px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258126897586503781/WhatsApp_Image_2024-07-02_at_15.14.08_75f8591b.jpg?ex=6686e97b&is=668597fb&hm=0a1b581f3036928c0c3e2da14678ec9343c356c2bd2228480c54c2a3c1458aaf&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258126898005938348/WhatsApp_Image_2024-07-02_at_15.14.08_c0983af2.jpg?ex=6686e97b&is=668597fb&hm=f5fbdb59e81d3a69ff1bf3cf148fecf6c513459ceb22c92a804c955dae286163&=&format=webp&width=901&height=676" width={200} className='h-[240px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258126898005938348/WhatsApp_Image_2024-07-02_at_15.14.08_c0983af2.jpg?ex=6686e97b&is=668597fb&hm=f5fbdb59e81d3a69ff1bf3cf148fecf6c513459ceb22c92a804c955dae286163&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258127478002553014/WhatsApp_Image_2024-07-02_at_15.14.09_f5ae8afe.jpg?ex=6686ea05&is=66859885&hm=dc37bb5eb65eff16f53372ea059706a5b75f40a359a83ee2e9e0c307ec4aa99e&=&format=webp&width=901&height=676" width={200} className='h-[240px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258127478002553014/WhatsApp_Image_2024-07-02_at_15.14.09_f5ae8afe.jpg?ex=6686ea05&is=66859885&hm=dc37bb5eb65eff16f53372ea059706a5b75f40a359a83ee2e9e0c307ec4aa99e&=&format=webp&width=901&height=676")} />
                            <img src="https://media.discordapp.net/attachments/1257783340673536053/1258126898786078720/WhatsApp_Image_2024-07-02_at_15.14.09_4bf64544.jpg?ex=6686e97b&is=668597fb&hm=34caffdaead3e9eab82668e6eb706fc1036773240257b21cdc9b4c7a494a1616&=&format=webp&width=901&height=676" width={200} className='h-[240px] m-2 rounded-md hover:scale-105 transition-transform cursor-pointer' onClick={() => openFullscreen("https://media.discordapp.net/attachments/1257783340673536053/1258126898786078720/WhatsApp_Image_2024-07-02_at_15.14.09_4bf64544.jpg?ex=6686e97b&is=668597fb&hm=34caffdaead3e9eab82668e6eb706fc1036773240257b21cdc9b4c7a494a1616&=&format=webp&width=901&height=676")} />
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
