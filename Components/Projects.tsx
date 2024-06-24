import React from 'react';

const Projects = () => {


    return (
        <>
            <div className='flex flex-col items-center justify-center p-5'>
                <h1 className='text-3xl text-[#ff9c4a] p-4 text-center tracking-wide'>𝗢𝘂𝗿 𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝘀</h1>
                <p className='max-w-5xl text-center'>Sayedia Curtains Gallery prides itself on a legacy of excellence in every project undertaken. Renowned for its craftsmanship and attention to detail, Sayedia Curtains Gallery ensures that each client's vision is not only met but exceeded.</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='flex-col flex'>
                    <img src="https://www.curtainlabel.com/wp-content/uploads/2023/01/BARBADOS_1235_4.jpg" className='w-[400px] lg:w-[530px] m-2 rounded-lg hover:scale-105 transition-transform' />
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-3 m-10'>
                    <img src="https://www.curtainlabel.com/wp-content/uploads/2022/12/75380300_111228216994825_3332626362333659136_n-2.jpg" width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <img src="https://www.curtainlabel.com/wp-content/uploads/2022/12/74209236_111228353661478_205416848269770752_n-2.jpg" width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <img src="https://www.curtainlabel.com/wp-content/uploads/2022/12/IMG-20220319-WA0063.jpg" width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <img src="https://www.curtainlabel.com/wp-content/uploads/2022/12/IMG-20220319-WA00591.jpg" width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <img src="https://www.curtainlabel.com/wp-content/uploads/2022/12/IMG-20210909-WA0012.jpg" width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                    <img src="https://www.curtainlabel.com/wp-content/uploads/2022/12/74209236_111228353661478_205416848269770752_n-2.jpg" width={250} className='m-5 rounded-lg hover:scale-105 transition-transform' />
                </div>
            </div>
        </>
    )
}

export default Projects;
