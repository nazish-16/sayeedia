import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sample1 from './images/sample1.jpg'
import sample2 from './images/sample2.jpg'
import sample3 from './images/sample3.jpg'
import sample4 from './images/sample4.jpg'

const Sales = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center p-10' id='samples'>
                <div className='max-w-5xl text-center text-gray-700'>
                    <h1 className='text-3xl text-[#ff9c4a]'>Samples</h1>
                    <p className='p-5'>At Sayeedia's Curtain Gallery, our samples stand as a testament to excellence in design and craftsmanship. Each curtain showcases meticulous attention to detail, crafted with premium materials that ensure durability and luxurious appeal.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col p-3 items-center justify-center rounded-lg m-1 transition'>
                        <Image src={sample3} alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Bedsheets</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>For an exceptional price of Rs. 1699/-</p>
                        <Link href="/bedsheets" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Bedsheets </Link>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <Image src={sample1} alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>For an exceptional price of Rs. 699/-</p>
                        <Link href="/curtains" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Curtains</Link>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <Image src={sample4} alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Catalogs</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>ou'll never find a more stylish and versatile solution to your window coverage. Make your home feel like home and add a touch of warmth with our wide selection of luxury curtains.</p>
                        <Link href="/catalogs" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Catalogs</Link>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <Image src={sample2} alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Sofas & Decor</h1>
                        <p className='max-w-lg text-center text-md text-gray-700  m-1'>Savvy curtains aren't born. They're made by you. And to make the job easier, we've got some ways to get you started</p>
                        <Link href="/sofas" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Sofas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales