import React from 'react'
import laptop from '../assets/laptop.jpg'

export default function Home2() {
  return (
    <div className='bg-white w-full '>
      <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[1200px] mx-auto p-3'>
        <img src={laptop} alt="/" />
        <div className='m-auto p-5 overflow-hidden'>
          <p className='font-bold uppercase  text-[#00df9a]  '>data analytics dashboard</p>
          <p  className='text-black font-bold my-2 text-2xl sm:text-2xl  lg:text-3xl'>Manage Data Analytics Centrally</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur sequi quod molestias laboriosam, excepturi odio quo. Ab voluptates quis laudantium quas expedita at aut voluptatem! Doloremque possimus aspernatur molestiae perspiciatis. Enim possimus voluptate error minima, eius delectus nam quae est tenetur ipsum iusto atque reiciendis totam modi dolorum fuga.</p>

          <button className='w-[130px] bg-black text-[#00df9a] rounded-lg p-1 my-4 mx-auto'>Get Started</button>

        </div>


      </div>

    </div>
  )
}
