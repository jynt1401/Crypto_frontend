import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
export default function Home4() {
    return (
        <div className='bg-white w-full py-20 px-5'>
            <div className='w-[70%] mt-8 max-w-[1000px] mx-auto grid gap-10 gap-y-9 grid-cols-1 lg:grid-cols-3'>



                {/* ------------card 1------------------ */}




                {/* ----card---- */}
                <div className='shadow-xl hover:scale-105 mb-20'>

                    {/* ----img---- */}
                    <div className='w-20 mx-auto mt-[-20px] '>

                        <img src={Single} alt='/' className='bg-red' />
                    </div>

                    {/* ----values---- */}
                    <div className='flex justify-center flex-col'>

                        <h1 className='text-black font-semibold text-center text-xl my-2'>Single User</h1>
                        <p className='text-center font-bold border-b text-2xl'>$150</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>50gb storage</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>1 year warenty</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>send upto 2gb</p>
                        <button className='w-[130px] font-semibold bg-[#00df9a] rounded-lg p-1 my-4 mx-auto'>Get Started</button>
                    </div>

                </div>




                {/* ------------card 2------------------ */}




                {/* ----card---- */}
                <div className='shadow-2xl hover:scale-105 mb-20'>

                    {/* ----img---- */}
                    <div className='w-20 mx-auto mt-[-20px] '>

                        <img src={Double} alt='/' className='bg-red' />
                    </div>

                    {/* ----values---- */}
                    <div className='flex justify-center flex-col'>

                        <h1 className='text-black font-semibold text-center text-xl my-2'>Double User</h1>
                        <p className='text-center font-bold border-b text-2xl'>$250</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>10gb storage</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>1.5 year warenty</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>send upto 5gb</p>
                        <button className='w-[130px] font-semibold bg-[#00df9a] rounded-lg p-1 my-4 mx-auto'>Get Started</button>
                    </div>

                </div>
                {/* ------------card 3------------------ */}




                {/* ----card---- */}
                <div className='shadow-2xl hover:scale-105 mb-20'>

                    {/* ----img---- */}
                    <div className='w-20 mx-auto mt-[-20px] '>

                        <img src={Triple} alt='/' className='bg-red' />
                    </div>

                    {/* ----values---- */}
                    <div className='flex justify-center flex-col'>

                        <h1 className='text-black font-semibold text-center text-xl my-2'>Triple User</h1>
                        <p className='text-center font-bold border-b text-2xl'>$350</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>150gb storage</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>2 year warenty</p>
                        <p className='text-center font-semibold my-1 border-b py-1'>send upto 10gb</p>
                        <button className='w-[130px] font-semibold bg-[#00df9a] rounded-lg p-1 my-4 mx-auto'>Get Started</button>
                    </div>

                </div>



            </div>

        </div>
    )
}
