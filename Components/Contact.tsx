import React from 'react';
import Image from 'next/image';
import shop from './images/shop.jpg'

const Contact = () => {
    const submitButton = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Submitted");
    };

    return (
        <div className='p-8' id='contact'>
            <div className='items-center flex flex-col justify-center'>
                <h1 className="text-3xl text-center text-orange-500 m-4">
                    Contact with us
                </h1>
                <p className='hidden sm:flex max-w-3xl text-center m-4'>
                    Experience elegance at Sayedia Curtains Gallery. From bespoke curtains to expert interior advice, we're here to transform your space. Contact us today to schedule a consultation and elevate your home or business with our tailored solutions and impeccable service.
                </p>
            </div>
            <div className='flex flex-col xl:flex-row items-center justify-center'>
                <div className='flex-col p-12 items-center hidden md:flex'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15229.797951152723!2d78.4511805!3d17.3902036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970d42f1502d%3A0x47c1f01b436babee!2sSayeedia&#39;s%20Curtain%20Gallery!5e0!3m2!1sen!2sin!4v1719257020891!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <Image src={shop} width={330} alt='shop' className='rounded-lg' />
                    </div>
                    <a className='flex flex-row justify-center items-center border-2 border-[#ba3da9] pt-1 pb-1 pr-24 pl-24 rounded-lg m-5 hover:bg-[#ba3da9] transition-all hover:text-white' href='https://www.instagram.com/sayeedia_curtain_gallery/' target='_blank'>
                        <a>
                            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="ig" className='w-8 m-1' />
                        </a>
                        <a>Instagram</a>
                    </a>
                    <a className='flex flex-row justify-center items-center border-2 border-blue-500 pt-1 pb-1 pr-24 pl-24 rounded-lg m-5 hover:bg-blue-500 transition-all hover:text-white' href='https://www.facebook.com/SayeediasCurtainGallery/' target='_blank'>
                        <a>
                            <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="ig" className='w-8 m-1' />
                        </a>
                        <a>Facebook</a>
                    </a>
                    <a className='flex flex-row justify-center items-center border-2 border-green-400 pt-1 pb-1 pr-24 pl-24 rounded-lg m-5 hover:bg-green-400 transition-all hover:text-white' href='https://wa.me/9700011630' target='_blank'>
                        <a>
                            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="ig" className='w-8 m-1' />
                        </a>
                        <a>Whatsapp</a>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
