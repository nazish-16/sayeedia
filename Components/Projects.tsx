import React from 'react';
import Image from 'next/image';
import img1 from '../Components/images/img1.webp'
import img2 from '../Components/images/img2.jpg'
import img3 from '../Components/images/img3.webp'
import img4 from '../Components/images/img4.webp'
import img5 from '../Components/images/img5.jpg'
import img6 from '../Components/images/img6.webp'
import img7 from '../Components/images/img7.jpg'
import img8 from '../Components/images/img8.jpg'
import img9 from '../Components/images/img9.jpg'
import img10 from '../Components/images/img10.jpg'
import img11 from '../Components/images/img11.jpg'
import img12 from '../Components/images/img12.jpg'



const Projects = () => {


    return (
        <>
            <div className='flex flex-col items-center justify-center p-5' id='projects'>
                <h1 className='text-3xl text-[#ff9c4a] p-4 text-center'>Our Projects</h1>
                <p className='max-w-5xl text-center'>Sayedia Curtains Gallery prides itself on a legacy of excellence in every project undertaken. Renowned for its craftsmanship and attention to detail, Sayedia Curtains Gallery ensures that each client's vision is not only met but exceeded.</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 m-12 lg:m-0'>
                    <Image src={img1} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img2} alt='img2' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img3} alt='img3' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img4} alt='img4' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img5} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img6} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img7} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img8} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img9} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img10} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img11} alt='img1' width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <Image src={img12} alt='img1' width={210} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                </div>
            </div>
        </>
    )
}

export default Projects;
