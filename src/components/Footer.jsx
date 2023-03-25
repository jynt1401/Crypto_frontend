import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
    return (

        <div className='bg-[#000300] w-full '>
            <div className='max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-3 p-8'>
                <div>
                    <h1 className='text-xl font-bold text-[#00df9a]  md:text-2xl lg:text-3xl'>REACT.</h1>
                    <p className='text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio at enim ut nostrum quas temporibus, repellendus odit fugiat blanditiis.</p>
                </div>
                <div>
                    <FaDribbbleSquare size={10} />
                    <FaFacebookSquare size={10} />
                    <FaGithubSquare size={10} />
                    <FaInstagram size={10} />
                    <FaTwitterSquare size={10} />
                </div>

                <div className='flex justify-between'>



                    <div className='m-5'>
                        <h6 className='font-medium text-gray-500 '>Solutions</h6>
                        <ul>
                            <li className='py-2 text-sm text-white'>Analytics</li>
                            <li className='py-2 text-sm text-white'>Marketing</li>
                            <li className='py-2 text-sm text-white'>Commerce</li>
                            <li className='py-2 text-sm text-white'>Insights</li>
                        </ul>
                    </div>
                    <div  className='m-5'>
                        <h6 className='font-medium text-gray-500'>Support</h6>
                        <ul>
                            <li className='py-2 text-sm text-white'>Pricing</li>
                            <li className='py-2 text-sm text-white'>Documentation</li>
                            <li className='py-2 text-sm text-white'>Guides</li>
                            <li className='py-2 text-sm text-white'>API Status</li>
                        </ul>
                    </div>
                
                    <div  className='m-5'>
                        <h6 className='font-medium text-gray-500'>Company</h6>
                        <ul>
                            <li className='py-2 text-sm text-white'>About</li>
                            <li className='py-2 text-sm text-white'>Blog</li>
                            <li className='py-2 text-sm text-white'>Jobs</li>
                            <li className='py-2 text-sm text-white'>Press</li>
                            <li className='py-2 text-sm text-white'>Careers</li>
                        </ul>
                    </div>
                    <div  className='m-5'>
                        <h6 className='font-medium text-gray-500'>Legal</h6>
                        <ul>
                            <li className='py-2 text-sm text-white'>Claim</li>
                            <li className='py-2 text-sm text-white'>Policy</li>
                            <li className='py-2 text-sm text-white'>Terms</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}
