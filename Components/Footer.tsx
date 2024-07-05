import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row p-[100px] mt-10 bg-[#ececec] items-center justify-between'>
                <div>
                    <div className='items-center lg:items-start flex flex-col justify-center'>
                        <a href="/">
                            <img src="https://img.icons8.com/?size=100&id=Os2uH6Y2KyxM&format=png&color=000000" width={30} className='pb-4' />
                        </a>
                        <a href="/" className='text-[18px] lg:text-2xl text-[#fb923c] text-center'>S𝓪𝔂𝓮𝓮𝓭𝓲𝓪𝓼 C𝓾𝓻𝓽𝓪𝓲𝓷 G𝓪𝓵𝓵𝓮𝓻𝔂</a>
                        <p className='pt-3 text-center md:text-start'>"Transform your space with our elegant curtains –<br /> tailored to perfection, adding style and privacy effortlessly."</p>
                    </div>
                    <div className='flex flex-row pt-5 items-center justify-center lg:items-start lg:justify-start'>
                        <a href="https://www.instagram.com/sayeedia_curtain_gallery/">
                            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="insta" width={30} className='m-4 hover:translate-y-[-2px] transition-all' />
                        </a>
                        <a href="https://www.facebook.com/SayeediasCurtainGallery/">
                            <img src="https://img.icons8.com/?size=100&id=118468&format=png&color=000000" alt="fb" width={30} className='m-4 hover:translate-y-[-2px] transition-all' />
                        </a>
                        <a href='https://wa.me/9700011630'>
                            <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000" alt="whatsapp" width={30} className='m-4 cursor-pointer hover:translate-y-[-2px] transition-all' />
                        </a>
                    </div>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center'>
                    <h1 className='text-2xl text-[#205980] text-center font-normal'>Curtains</h1>
                    <Link href="/curtains" className='mt-4 hover:text-[#fb923c] transition-all'>Turkish</Link>
                    <Link href="/curtains" className='mt-4 hover:text-[#fb923c] transition-all'>Metallic</Link>
                    <Link href="/curtains" className='mt-4 hover:text-[#fb923c] transition-all'>Qupid</Link>
                    <Link href="/curtains" className='mt-4 hover:text-[#fb923c] transition-all'>English Net</Link>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center'>
                    <h1 className='text-2xl text-[#205980] text-center font-normal'>Bedsheets</h1>
                    <Link href="/bedsheets" className='mt-4 hover:text-[#fb923c] transition-all'>Trendy</Link>
                    <Link href="/bedsheets" className='mt-4 hover:text-[#fb923c] transition-all'>Silk Satin</Link>
                    <Link href="/bedsheets" className='mt-4 hover:text-[#fb923c] transition-all'>Mimosa</Link>
                    <Link href="/bedsheets" className='mt-4 hover:text-[#fb923c] transition-all'>Hybrid</Link>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center'>
                    <h1 className='text-2xl text-[#205980] text-center font-normal'>Decoration</h1>
                    <Link href="/catalogs" className='mt-4 hover:text-[#fb923c] transition-all'>Finials</Link>
                    <Link href="/catalogs" className='mt-4 hover:text-[#fb923c] transition-all'>Rope</Link>
                    <Link href="/catalogs" className='mt-4 hover:text-[#fb923c] transition-all'>Catalogs</Link>
                    <Link href="/catalogs" className='mt-4 hover:text-[#fb923c] transition-all'>Accessories</Link>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center'>
                    <h1 className='text-2xl text-[#205980] text-center font-normal'>Sofas</h1>
                    <Link href="/sofas" className='mt-4 hover:text-[#fb923c] transition-all'>Alfa</Link>
                    <Link href="/sofas" className='mt-4 hover:text-[#fb923c] transition-all'>Monaco</Link>
                    <Link href="/sofas" className='mt-4 hover:text-[#fb923c] transition-all'>Cotton</Link>
                    <Link href="/sofas" className='mt-4 hover:text-[#fb923c] transition-all'>Velvet</Link>
                </div>
            </div>
        </div >
    )
}

export default Footer