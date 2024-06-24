import React from 'react';

const Contact = () => {
    const submitButton = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Submitted");
    };

    return (
        <div className="flex flex-col justify-center items-center p-10" id='contact'>
            <h1 className="mt-10 text-center text-3xl tracking-wide mb-6 text-[#fb923c]">
                𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝘂𝘀
            </h1>
            <p className='max-w-5xl text-center'>Experience elegance at Sayedia Curtains Gallery. From bespoke curtains to expert interior advice, we're here to transform your space. Contact us today to schedule a consultation and elevate your home or business with our tailored solutions and impeccable service.</p>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative top-10">
                <form className="space-y-6" onSubmit={submitButton}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6">Name</label>
                        <div className="mt-2">
                            <input id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md py-1.5 sm:text-sm border-2 border-orange-400" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6">Email</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md py-1.5 sm:text-sm border-2 border-orange-400" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium leading-6">Subject</label>
                        <div className="mt-2">
                            <input id="subject" name="subject" type="text" autoComplete="subject" required className="block w-full rounded-md py-1.5 sm:text-sm border-2 border-orange-400" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium leading-6">Message</label>
                        <div className="mt-2">
                            <textarea id="message" name="message" autoComplete="message" required className="block w-full rounded-md py-1.5 sm:text-sm border-2 border-orange-400" rows={5}></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="flex justify-center rounded-md border-2 border-orange-400 px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-orange-400 hover:text-white">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
