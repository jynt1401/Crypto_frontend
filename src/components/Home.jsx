import React from 'react'
import Typed from 'react-typed'

export default function Home() {
    return (
        <div className='flex justify-center flex-col w-[100%] h-screen text-center mt-[-100px] md:mt-[-50px]'>
            <div className='flex justify-center flex-col '>
                <p className='text-[#00df9a] uppercase text-xs md:text-base lg:text-xl font-medium'>growing with data analytics</p>
                <p className='text-white flex justify-center flex-col text-4xl md:text-6xl lg:text-8xl font-bold '>Grow with Data</p>

            </div>
            <div className='flex justify-center  mt-1 md:mt-2'>
                <p className='text-white text-base md:text-xl lg:text-3xl '>Fast,Flexible finacing for</p>
                <Typed className='text-gray-600 text-base md:text-xl lg:text-3xl font-bold ml-2'
                strings={['BTB','BTC','SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop/>
               
            </div>
            <div className='mt-1 md:mt-2 lg:mt-3 text-gray-500 flex justify-center flex-col  text-center text-xs md:text-base lg:text-xl'>Monitor your data analytics to increase revenue for </div>
            <p className='text-gray-500 flex justify-center flex-col  text-center text-xs md:text-base lg:text-xl'>BTB,BTC & SASS plateform.</p>
            <button className='bg-[#00df9a] font-semibold mt-3 w-[100px] rounded-lg mx-auto '>Get Started</button>
        </div>
    )
}
