"use client";

import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from 'framer-motion';

const slideImages = [
    {
        url: 'https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: '𝗖𝘂𝗿𝘁𝗮𝗶𝗻𝘀'
    },
    {
        url: 'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: '𝗕𝗶𝗻𝗱𝗶𝗻𝗴𝘀'
    },
    {
        url: 'https://images.pexels.com/photos/6758245/pexels-photo-6758245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: '𝗦𝗼𝗳𝗮𝘀 & 𝗗𝗲𝗰𝗼𝗿'
    },
    {
        url: 'https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: '𝗠𝗼𝗱𝘂𝗹𝗮𝗿'
    },
    {
        url: 'https://images.pexels.com/photos/1080719/pexels-photo-1080719.jpeg',
        caption: '𝗛𝗼𝗺𝗲 𝗗𝗲𝗰𝗼𝗿'
    },
    {
        url: 'https://images.pexels.com/photos/7491145/pexels-photo-7491145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: '𝗙𝗿𝗲𝗲 𝗙𝗮𝗯𝗿𝗶𝗰 𝗦𝗮𝗺𝗽𝗹𝗲𝘀'
    },
];

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <div className="w-[100%] h-[400px] m-0">
                        <Fade duration={2000}>
                            {slideImages.map((image, index) => (
                                <div key={index} className="flex justify-center items-center h-[650px] relative pt-5">
                                    <div className="w-[100%] h-screen lg:w-[80%] lg:h-[100%] bg-cover bg-center flex justify-center items-center rounded-md" style={{ backgroundImage: `url(${image.url})` }}>
                                        <span className='p-3 text-2xl text-[#ff9c4a] bg-[#ececec] rounded-lg font-normal tracking-wide text-center'>{image.caption}</span>
                                    </div>
                                </div>
                            ))}
                        </Fade>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;
