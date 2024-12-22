import React from 'react'
import Image from 'next/image'
import chairmanImg from '../../../../public/about-30.jpg'
import Link from 'next/link';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import BreadCrumb from '@/components/BreadCrumb';
import board from '../../../../public/board-29.png'
import Calculator from '@/components/Calculator';
import WhatNew from '@/components/Whatsnew';



  

const page = () => {
  return (
    <div>
       
      <BreadCrumb name='About Us'  title="Chairman"/>
 
    
        <main className="mt-10 flex flex-col md:flex-row justify-between items-start gap-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
        <div className='lg:w-2/3 bg-zinc-900 rounded-md p-3 px-4'>
        <div className="sm:text-center lg:text-left">
        <h2 className="my-6 text-2xl text-yellow-300 flex gap-4 tracking-tight font-extrabold  sm:text-3xl md:text-3xl">
    Board Of Director
  </h2>
  <div className='border border-t-2 mb-4 border-yellow-300 w-[35%]'></div>
  <div className='grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  gap-6 p-4'>
    <div className='text-white'>
        <Image src={board} alt=''/>
        <h2 className='font-bold text-center'>Mr Udai Pratap Verma</h2>
        <h2 className='text-center'>Chairman</h2>
    </div>
    <div className='text-white'>
        <Image src={board} alt=''/>
        <h2 className='font-bold text-center'>Mr. Ranjit Sinha</h2>
        <h2 className='text-center'> Deputy Chairman</h2>
    </div>
    <div className='text-white'>
        <Image src={board} alt=''/>
        <h2 className='font-bold text-center'>Mr Vivek Singh Roy</h2>
        <h2 className='text-center'>Director</h2>
    </div>
   
   
  </div>
 
  

  

</div>
</div>

<div className=" lg:w-1/3 w-full space-y-6">
<Calculator/>
<WhatNew/>



 
</div>
</main>
    </div>
  )
}

export default page







