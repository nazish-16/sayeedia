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
                        <img src="https://images-ext-1.discordapp.net/external/4HKwXl88t0u3W1fvpuxWyPoe-so49wSboCWK18-fKfI/https/www.curtainlabel.com/wp-content/uploads/2023/03/OCEAN_1229_4-150x150.jpg?format=webp" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Our stunning collection of curtains is sure to make your room stand out.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://images-ext-1.discordapp.net/external/a5GoxY9nivyIADBVYwCd0_bmM-qXUW7avkxDPGHgqSk/https/www.curtainlabel.com/wp-content/uploads/2023/05/ATMOSPHERE_109_2-150x150.jpg?format=webp" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Cushion Covers</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Looking for the perfect piece to complement your sofa? Look no further!</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://images-ext-1.discordapp.net/external/KyqbcA2qoy9a8VmvMih8yDKB9UDcn5D6YIbdCpQmOss/https/www.curtainlabel.com/wp-content/uploads/2023/06/Untitled-design-1-150x150.png?format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Blinds</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>Blinds are a quick and easy way to transform your space. There are endless color & style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://images-ext-1.discordapp.net/external/SzvrrPxSSIYxMmb4sm2w5QHgjQU4sETcu6hWSTGZUD4/https/www.curtainlabel.com/wp-content/uploads/2023/06/Untitled-design-2-150x150.png?format=webp&quality=lossless" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtain Finials</h1>
                        <p className='max-w-lg text-center text-md text-gray-700  m-1'>Add a finishing touch to your decor with our collection of finials. The perfect style</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://images-ext-1.discordapp.net/external/-MHyGXQuP2_Vjp10REG_x0T6fO9sJqdUMA7nfryX_Cs/https/www.curtainlabel.com/wp-content/uploads/2023/03/CEDAR_1258_4-1-150x150.jpg?format=webp" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Fabric Samples</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>We offer a variety of different types of fabric, to help you find the perfect fit for your project.</p>
                    </div>
                    <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                        <img src="https://images-ext-1.discordapp.net/external/ZEWxxoROnadIiax3hmTbjAgAv0pfl25NiV7ji1w0XGA/https/www.curtainlabel.com/wp-content/uploads/2023/04/EXPRESSION_1230_1-150x150.jpg?format=webp" alt="#" className='w-[170px] rounded-full hover:scale-105 transition-all cursor-pointer' />
                        <h1 className='p-4 text-2xl text-[#205980] font-normal tracking-wider text-center'>Sheer Curtains</h1>
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
                        <img src="https://media.discordapp.net/attachments/1196703548205973504/1255616495275479182/WhatsApp_Image_2024-06-26_at_15.18.52_5303543c.jpg?ex=667dc77c&is=667c75fc&hm=585f2d7640fcae89657478b417640c21b25544378548f1e73cd0c9cba6b181f2&=&format=webp&width=653&height=676" alt="owner" className='ml-4 rounded-full m-2' width={330} />
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