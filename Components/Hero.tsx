"use client";

import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from 'framer-motion';

const slideImages = [
    {
        url: 'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg',
        caption: 'Curtains'
    },
    {
        url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Blinds'
    },
    {
        url: 'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg',
        caption: 'Sofas & Decor'
    },
    {
        url: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg',
        caption: 'Modular'
    },
    {
        url: 'https://images.pexels.com/photos/1080719/pexels-photo-1080719.jpeg',
        caption: 'Home Decor'
    }
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
