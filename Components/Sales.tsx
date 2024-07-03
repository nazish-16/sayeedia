import React from 'react'

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
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783660804051046/WhatsApp_Image_2024-07-02_at_15.54.58_da02791a.jpg?ex=6685a9d1&is=66845851&hm=24ecc62a817ca81de82248302fc4a6555593acc9e6b4509adaa3ef3d1cae4499&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Bedsheets</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>100sets of assorted cushion covers @ Rs. 15,000/-</p>
                        <a href="#" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Bedsheets </a>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783562606743683/WhatsApp_Image_2024-07-02_at_15.53.13_dbd01736.jpg?ex=6685a9b9&is=66845839&hm=bbac6b979bb5c36b3ac832b1f5d81bb93bd0a15c330ff772f43d3f9fc7e3bf9d&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Curtains</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>For an exceptional price of Rs. 699/-</p>
                        <a href="#" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Curtains</a>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783608672911370/WhatsApp_Image_2024-07-02_at_15.53.13_6159b5a0.jpg?ex=6685a9c4&is=66845844&hm=220216afc62ecc6c8c4d35f1187a3b4527a5a6a1808bc7c9a60e86c47807f120&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Catalogs</h1>
                        <p className='max-w-lg text-center text-md text-gray-700'>ou'll never find a more stylish and versatile solution to your window coverage. Make your home feel like home and add a touch of warmth with our wide selection of luxury curtains.</p>
                        <a href="#" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Catalogs</a>
                    </div>
                    <div className='flex flex-col p-3 items-center justify-center m-1 transition'>
                        <img src="https://media.discordapp.net/attachments/1257783340673536053/1257783643674247188/WhatsApp_Image_2024-07-02_at_15.54.09_465a430f.jpg?ex=6685a9cd&is=6684584d&hm=e4f48253b98c244f89cee72f980230364b75f135d35dc135396aa993c9b21148&=&format=webp&width=901&height=676" alt="#" className='w-[520px] rounded-3xl hover:scale-110 transition-transform cursor-pointer' />
                        <h1 className='p-3 text-2xl text-[#205980] font-normal tracking-wider text-center'>Sofas & Decor</h1>
                        <p className='max-w-lg text-center text-md text-gray-700  m-1'>Savvy curtains aren't born. They're made by you. And to make the job easier, we've got some ways to get you started</p>
                        <a href="#" className='mt-5 pl-5 pr-5 pt-2 pb-2 bg-[#20596e] text-white rounded-lg hover:bg-[#ff9c4a] transition-all'>Sofas</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales