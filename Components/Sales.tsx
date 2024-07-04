import React from 'react'
import Link from 'next/link'

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
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783562606743683/WhatsApp_Image_2024-07-02_at_15.53.13_dbd01736.jpg?ex=6687a3f9&is=66865279&hm=5b9fa4a246e77db20c15a55a9e3d0a427981d192e7d18e374ad0c59f9531630e&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Bedsheets</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>100sets of assorted cushion covers @ Rs. 15,000/-</p>
                        <Link href="/bedsheets" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Bedsheets </Link>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783608672911370/WhatsApp_Image_2024-07-02_at_15.53.13_6159b5a0.jpg?ex=6687a404&is=66865284&hm=8822e7d5bfa1d1485709dc1648d993729c02bae4178b642ec0e76140e25d0dbe&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>For an exceptional price of Rs. 699/-</p>
                        <Link href="/curtains" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Curtains</Link>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783643674247188/WhatsApp_Image_2024-07-02_at_15.54.09_465a430f.jpg?ex=6687a40d&is=6686528d&hm=c485d0c77b98a47f9398cde0e80e5af387673fdb5ca142c246fa73b39c6e0c4e&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Catalogs</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>ou'll never find a more stylish and versatile solution to your window coverage. Make your home feel like home and add a touch of warmth with our wide selection of luxury curtains.</p>
                        <Link href="/catalogs" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Catalogs</Link>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783660804051046/WhatsApp_Image_2024-07-02_at_15.54.58_da02791a.jpg?ex=6687a411&is=66865291&hm=fa3b48cc460dbdb55b6ee3f0e587ce93d30280983ea6787930e2af64b7c3f19a&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
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