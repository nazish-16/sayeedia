'use client'

import React from 'react'
import Store from './Store'
import Sales from './Sales'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Projects from './Projects'
import Contact from './Contact'

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
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257786122365440091/image.png?ex=6685ac1c&is=66845a9c&hm=de39354d737c1e325ecea543377a09bbaf76ad69d74c7acee4d8cd924ae6480e&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Our stunning collection of curtains is sure to make your room stand out.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257786623631032350/image.png?ex=6685ac93&is=66845b13&hm=81cf326cfdf8d2587f92ae56be25b655d6478d3ba7f2f18b6ad78ef7c43a6288&=&format=webp&quality=lossless&width=765&height=676" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Comforters</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Looking for the perfect piece to complement your bedsheets? Look no further!</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257786943345922108/image.png?ex=6685acdf&is=66845b5f&hm=340a8f51abd60c665a76631e7aaa8e913271584d59469fcc4369f723d20641e3&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Catalogs</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Catalogs are a quick and easy way to check out more samples. There are endless color & style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257787857980882955/image.png?ex=6685adb9&is=66845c39&hm=d3a71841cfb90c313e29f43ddff32d444ca5df7cf9582679e02a0164ba161581&=&format=webp&quality=lossless&width=741&height=676" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Accessories</h1>
                        <p className='max-w-lg text-center text-md text-gray-700  m-1'>Add a finishing touch to your decor with our collection of finials. The perfect style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257788723551146075/image.png?ex=6685ae88&is=66845d08&hm=0d630de717aa1d65307e36a06b995b98b41142e23f68b39979fafd736bc205a4&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-[23px] text-[#205980] font-normal tracking-wider text-center'>Fabric Samples</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>We offer a variety of different types of fabric, to help you find the perfect fit for your project.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257788909056950272/image.png?ex=6685aeb4&is=66845d34&hm=1e977030d1000de61bf37eaa915db27298d73d1f35c5979bf09f80032aae0148&=&format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
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
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783417597198377/WhatsApp_Image_2024-06-26_at_15.png?ex=6685a997&is=66845817&hm=49a7d5b16c0ec3aaa61e0d01e4ff681071906b0e02859788d8fe8084b8a7df19&=&format=webp&quality=lossless&width=619&height=676" alt="owner" className='ml-4 rounded-full m-2' width={330} />
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