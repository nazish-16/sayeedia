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
                        <img src="https://www.curtainlabel.com/wp-content/uploads/2023/03/OCEAN_1229_4-150x150.jpg" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Our stunning collection of curtains is sure to make your room stand out.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://www.curtainlabel.com/wp-content/uploads/2023/05/ATMOSPHERE_109_2-150x150.jpg" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Cushion Covers</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Looking for the perfect piece to complement your sofa? Look no further!</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://www.curtainlabel.com/wp-content/uploads/2023/06/Untitled-design-1-150x150.png" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Blinds</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Blinds are a quick and easy way to transform your space. There are endless color & style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://www.curtainlabel.com/wp-content/uploads/2023/06/Untitled-design-2-150x150.png" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtain Finials</h1>
                        <p className='max-w-lg text-center text-md text-gray-700  m-1'>Add a finishing touch to your decor with our collection of finials. The perfect style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://www.curtainlabel.com/wp-content/uploads/2023/03/CEDAR_1258_4-1-150x150.jpg" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Fabric Samples</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>We offer a variety of different types of fabric, to help you find the perfect fit for your project.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://www.curtainlabel.com/wp-content/uploads/2023/04/EXPRESSION_1230_1-150x150.jpg" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Sheer Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Our sheer curtains add a touch of elegance to your home. These sheers will add style and privacy</p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col items-center justify-center p-10' id='company'>
                    <div className='max-w-5xl text-center text-gray-700'>
                        <h1 className='text-3xl text-[#ff9c4a]'>𝗖𝗼𝗺𝗽𝗮𝗻𝘆 𝗣𝗿𝗼𝗳𝗶𝗹𝗲</h1>
                        <p className='pt-5'>Sayeedia Curtain Gallery established for over 20 years now and all made to measure curtains and curtains, specializing in made-to-measure curtains. Their extensive experience ensures high-quality, custom-fitted curtains tailored to meet the specific needs and tastes of their clients. With a focus on craftsmanship and customer satisfaction, Sayeedia Curtain Gallery offers a wide range of fabrics and designs, providing bespoke solutions that enhance any living space.</p>
                        <p className='pt-5'> <strong>Minhaj Ahmed</strong>, the visionary behind Sayeedia's Curtain Gallery, embodies a passion for interior design that stems from a lifelong appreciation for aesthetics and functionality. With a keen eye for detail and a commitment to quality, Minhaj has curated a collection of curtains that blend innovation with timeless elegance.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 pt-5 items-center'>
                        <img src="https://lh3.googleusercontent.com/p/AF1QipPf6WiQo52z-1pRg1FP9Lr8jRNIMSdrRv06rZ7d=s680-w680-h510" width={500} className='ml-4 hover:scale-105 transition-transform rounded-md m-2' />
                        <img src="https://media.discordapp.net/attachments/1197447599993659474/1254365895397216367/WhatsApp_Image_2024-06-22_at_15.18.18_507be6e0.jpg?ex=66793ac6&is=6677e946&hm=3a8bf30d05c1a2a1291a97618cbccbb592d8bd7d701d34e50e3c793918d67000&=&format=webp&width=507&height=676" alt="" className='ml-4 hover:scale-105 transition-transform rounded-md m-2' width={400} />
                    </div>
                </div>
                <Sales />
                <Projects />
                <hr />
                <Store />
                <Contact />
                <Footer />
            </div>
        </motion.div>
    )
}

export default Sections