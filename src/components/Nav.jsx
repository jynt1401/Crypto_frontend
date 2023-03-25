import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import { useState,useEffect } from 'react';





function Nav() {
    const [value,setvalue]=useState(false);
    const  handleClick=()=>{
        console.log(value);
        setvalue(!value);
        console.log(value);
    }
    useEffect(() => {
        
       
      });

    

    return (
        <div>
            <div className='text-white flex justify-between max-w-[1200px] mx-auto mt-3 px-5 '>
                <h1 className='text-xl font-bold text-[#00df9a]  md:text-2xl lg:text-3xl'>REACT.</h1>
                <ul className='font-medium text-1xl uppercase my-2  hidden mr-2  sm:flex'>
                    <li className='px-2 '>home</li>
                    <li className='px-2 '>company</li>
                    <li className='px-2 '>resource</li>
                    <li className='px-2 '>about</li>
                    <li className='px-2 '>contact</li>

                </ul>


                {/* -----------mobile view-------------- */}


                <div className='bg-sky flex sm:hidden ' onClick={handleClick}>
                    {!value?  <AiOutlineMenu  className='size={30} mt-3' />: <AiOutlineClose className='size={30} mt-3'/> }

               
                </div>
            </div>
            <div className={value?'text-white flex uppercase max-w-[1200px] bg-[#141414] mt-3 px-5 w-[60%] h-screen tease-in-out':'hidden h-screen ease-in-out'}>
                <ul className='w-[100%]'>
                    <li className='p-2 border-b-2 border-gray-700  w-[100%]'>home</li>
                    <li className='p-2 border-b-2 border-gray-700  w-[100%]'>company</li>
                    <li className='p-2 border-b-2 border-gray-700  w-[100%]'>resource</li>
                    <li className='p-2 border-b-2 border-gray-700  w-[100%]'>about</li>
                    <li className='p-2 border-b-2 border-gray-700  w-[100%] mb-5'>contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
