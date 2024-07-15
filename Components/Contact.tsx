import React from 'react';
import Image from 'next/image';
import shop from './images/shop.jpg'
import Link from 'next/link';

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
                    <form className="space-y-3 w-[400px] p-6 bg-white shadow-lg rounded-md">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-black"
                            >
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-orange-400 border-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-black"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-orange-400 border-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium leading-6"
                            >
                                Subject
                            </label>
                            <div className="mt-2">
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    autoComplete="subject"
                                    required
                                    className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-orange-400 border-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium leading-6"
                            >
                                Message
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    autoComplete="message"
                                    required
                                    className="block w-full rounded-md py-1.5 text-gray-900 sm:text-sm sm:leading-6 border-orange-400 border-2"
                                    rows={5}
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="flex justify-center rounded-md border-2 border-orange-400 text-black px-4 py-2 text-sm font-semibold hover:bg-orange-400 hover:text-white transition duration-200 ease-in-out"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
