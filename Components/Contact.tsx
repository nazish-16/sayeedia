import React from 'react';

const Contact = () => {
    const submitButton = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Submitted");
    };

    return (
        <div className='p-8' id='contact'>
            <div className='items-center flex flex-col justify-center'>
                <h1 className="text-3xl text-center text-orange-500 m-4">
                    Connect with us
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
                <div className='flex flex-col w-[100%] md:w-[60%] xl:w-[30%] p-10 bg-white rounded-lg shadow-lg'>
                    <form onSubmit={submitButton} className='space-y-6 grid-cols-1 md:grid-cols-2 grid relative bottom-16'>
                        <div className='p-1'>
                            <label className='block text-sm font-medium text-gray-700 relative top-6'>Name</label>
                            <input
                                type="text"
                                className='mt-7 block w-full p-2 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                                required
                            />
                        </div>
                        <div className='p-1'>
                            <label className='block text-sm font-medium text-gray-700'>Email</label>
                            <input
                                type="email"
                                className='mt-1 block w-full p-2 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                                required
                            />
                        </div>
                        <div className='p-1'>
                            <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
                            <input
                                type="phone-number"
                                className='mt-1 block w-full p-2 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                                required
                            />
                        </div>
                        <div className='p-1'>
                            <label className='block text-sm font-medium text-gray-700'>Type</label>
                            <select
                                name="Type"
                                className='mt-1 block w-full p-2 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                            >
                                <option value="Curtains">Curtains</option>
                                <option value="Sofas & Decor">Sofas & Decor</option>
                                <option value="Blindings">Blindings</option>
                                <option value="Fabric">Fabric</option>
                            </select>
                        </div>
                    </form>
                    <div className='p-1 bottom-12 relative'>
                        <label className='block text-sm font-medium text-gray-700'>Message</label>
                        <textarea
                            className='mt-1 block w-full p-2 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                            rows={4}
                            required
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className='px-6 py-2 border-2 border-orange-400 text-black hover:text-white font-medium rounded-md shadow-sm hover:bg-orange-400 transition-all items-center'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
