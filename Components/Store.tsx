import React from 'react';

const Store = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center pt-10'>
                <div className='max-w-5xl w-full px-4 text-center text-gray-700'>
                    <h1 className='text-3xl text-[#ff9c4a] tracking-wide'>𝗦𝘁𝗼𝗿𝗲 𝗩𝗶𝗲𝘄</h1>
                    <p className='py-4'>
                        Experience our store through our immersive 360-degree view. Navigate seamlessly through our spaces, browse our offerings, and get inspired from wherever you are.
                    </p>
                </div>
                <div className='m-8 max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4'>
                    <div className='overflow-hidden rounded-lg shadow-lg'>
                        <iframe
                            title='Map 1'
                            src='https://www.google.com/maps/embed?pb=!4v1719086319007!6m8!1m7!1sCAoSLEFGMVFpcE54RUZrbzNJcnRHQjk1MXhNMzZkeWxqcjNmQVZSeFVjLTFVTlFq!2m2!1d17.386773!2d78.453853!3f100!4f0!5f0.7820865974627469'
                            width='100%'
                            height='450'
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                    <div className='overflow-hidden rounded-lg shadow-lg'>
                        <iframe
                            title='Map 2'
                            src='https://www.google.com/maps/embed?pb=!4v1719086588453!6m8!1m7!1sCAoSLEFGMVFpcE9MTlhnMUh0YTZocWxXdFdlUm9mcXVMYWkyN3I3aVloeHZqU1Rf!2m2!1d17.386773!2d78.453853!3f180!4f10!5f0.7820865974627469'
                            width='100%'
                            height='450'
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                    <div className='overflow-hidden rounded-lg shadow-lg'>
                        <iframe
                            title='Map 3'
                            src='https://www.google.com/maps/embed?pb=!4v1719086611931!6m8!1m7!1sCAoSLEFGMVFpcE1NS19EaWlrVDVhcG55c3BuUjV4MVJ3cVNaODBENGpsUm5FeGZF!2m2!1d17.38674766936377!2d78.45384335996596!3f53.24794229068145!4f-28.383547664314726!5f0.7820865974627469'
                            width='100%'
                            height='450'
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                    <div className='overflow-hidden rounded-lg shadow-lg'>
                        <iframe
                            title='Map 4'
                            src='https://www.google.com/maps/embed?pb=!4v1719086640770!6m8!1m7!1sq6u_07Dx0lcu1w4YRqwWdg!2m2!1d17.39009087972104!2d78.45110513339284!3f33.278046!4f0!5f0.7820865974627469'
                            width='100%'
                            height='450'
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;
