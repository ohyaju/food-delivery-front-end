import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { MapPin } from 'lucide-react';

const HeaderComp = () => {
  return (
    <div>
      <div className='bg-black h-[68px] w-full flex justify-between'>
        <div className='flex mt-4 ml-[88px] content-center'>
          <img src="deliverylogo.png" alt="" className='h-[30px]' />
          <img src="nomnomlogo.png" alt="" className='h-[30px]' />
        </div>
        <div className='flex gap-3 mr-[88px]'>
          <button className='text-[#EF4444] w-[200px] mt-4 h-[20px] bg-white rounded-full text-[10px] flex'>
            <MapPin className='rounded-full w-[29px] h-[29px] p-2 flex place-self-center' /> <span className='place-self-center'>Delivery address:</span>
           <span className='text-gray-400 place-self-center'>Add Location <span></span></span> </button>
          <ShoppingCart className='bg-white rounded-full w-[29px] h-[29px] p-2 mt-4' />
          <User className='bg-[#EF4444] text-white rounded-full w-[29px] h-[29px] p-2 mt-4' />
        </div>
      </div>
      <div>
        <img src="todaysoffer.png" alt="" />
      </div>
    </div>
  )
}

export default HeaderComp