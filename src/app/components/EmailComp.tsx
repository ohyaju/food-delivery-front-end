import React from 'react'
import { ChevronLeft } from 'lucide-react';

const EmailComp = () => {
    return (
        <div className='flex place-content-around'>
            <div className='gap-[20px] flex flex-col justify-center mt-3'>
                <div className='flex flex-col gap-5 border-[#71717A]' >
                    <ChevronLeft />
                    <h3 className='font-semibold text-[24px]'>Create your account</h3>
                    <p className='text-gray-500 text-[16px]'>Sign up to explore your favorite dishes.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <input type='email' placeholder='Enter your email' className='w-[416px] h-[36px]' />
                    <button className='bg-[#18181B] text-white w-[416px] h-[36px] backdrop-opacity-60'>Let's go</button>
                </div>
                <div>
                    <span className='text-[#71717A]'>Already have an account?</span> <a href="" className='text-[#2563EB]'>Log in</a>
                </div>

            </div>
            <div >
                <img className='w-[900px] h-[904px] rounded-[16px]' src="deliverydriver.jpeg" alt="" />
            </div>
        </div>
    )
}

export default EmailComp