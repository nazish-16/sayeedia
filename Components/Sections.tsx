'use client'

import React from 'react'
import Store from './Store'
import Sales from './Sales'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Projects from './Projects'
import Contact from './Contact'
import owner from './owner.png'
import Image from 'next/image'

const Sections = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{
                ease: "ease",
                duration: 1,
                x: { duration: 1 }
            }}
        >
            <div className='relative top-[260px]'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6'>
                    <div className='flex flex-col p-10 items-center justify-center rounded-lg m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257786122365440091/image.png?ex=6687a65c&is=668654dc&hm=b425cb37d0dfb3f93b34a1e3388bf6424c1238542b6630c15766574844ea5203&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Our stunning collection of curtains is sure to make your room stand out.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257786623631032350/image.png?ex=6687a6d3&is=66865553&hm=d15b1b506f82f3542ee53389770870c840e0f961acb0a5f7ffc05c6042da4bf2&=&format=webp&quality=lossless&width=765&height=676" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Comforters</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Looking for the perfect piece to complement your bedsheets? Look no further!</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257786943345922108/image.png?ex=6687a71f&is=6686559f&hm=26fff6d92d3103e7cbb4f510ade9d48abfb333aa7f5a8d93e38952c7af34f267&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Catalogs</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Catalogs are a quick and easy way to check out more samples. There are endless color & style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257787857980882955/image.png?ex=6687a7f9&is=66865679&hm=8ef3df3ff57a29b886f0244506f4ea561efe6097879892f64213dc5a1d50cfa4&=&format=webp&quality=lossless&width=741&height=676" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Accessories</h1>
                        <p className='max-w-lg text-center text-md text-gray-700  m-1'>Add a finishing touch to your decor with our collection of finials. The perfect style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257788723551146075/image.png?ex=6687a8c8&is=66865748&hm=9a4d75eb8470b4fe6a2bf0340971406a7e1a69a218a20c22d3ea4c15d201d118&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-[23px] text-[#205980] font-normal tracking-wider text-center'>Fabric Samples</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>We offer a variety of different types of fabric, to help you find the perfect fit for your project.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257788909056950272/image.png?ex=6687a8f4&is=66865774&hm=576abbb6568093cfca358742f253adf7dc41779d2a26d2c9f0f9f72a0e455840&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Net Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Our sheer curtains add a touch of elegance to your home. These sheers will add style and privacy</p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col xl:flex-row items-center justify-center p-12' id='company'>
                    <div className='max-w-4xl text-center text-gray-700'>
                        <h1 className='text-3xl text-[#ff9c4a]'>Company Profile</h1>
                        <p className='pt-5'>Sayeedia Curtain Gallery established for over 20 years now and all made to measure curtains and curtains, specializing in made-to-measure curtains. Their extensive experience ensures high-quality, custom-fitted curtains tailored to meet the specific needs and tastes of their clients. With a focus on craftsmanship and customer satisfaction, Sayeedia Curtain Gallery offers a wide range of fabrics and designs, providing bespoke solutions that enhance any living space.</p>
                        <p className='pt-5'> <strong>Minhaj Ahmed</strong>, the visionary behind Sayeedia's Curtain Gallery, embodies a passion for interior design that stems from a lifelong appreciation for aesthetics and functionality. With a keen eye for detail and a commitment to quality, Minhaj has curated a collection of curtains that blend innovation with timeless elegance.</p>
                    </div>
                    <div className='pt-8 pr-6 pl-6 items-center'>
                        <Image src={owner} alt="owner" className='ml-4 rounded-full m-2' width={330} />
                    </div>
                </div>
                <Sales />
                <Projects />
                <hr />
                <Store />
                <hr />
                <Contact />
                <Footer />
            </div>
        </motion.div>
    )
}

export default Sections