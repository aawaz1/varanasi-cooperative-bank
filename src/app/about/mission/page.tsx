import React from 'react'
import Image from 'next/image'
import chairmanImg from '../../../../public/about-30.jpg'
import Link from 'next/link';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import BreadCrumb from '@/components/BreadCrumb';
import Calculator from '@/components/Calculator';
import WhatNew from '@/components/Whatsnew';


  

const page = () => {
  return (
    <div>
         
       
       <BreadCrumb name='About Us' title="Vision & Mission"/>
 
      
       <main className="mt-10 grid grid-cols-1 xl:grid-cols-12 gap-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 xl:mt-10 xl:px-8 ">
  {/* Left Column (History and Table) */}
  <div className="col-span-12 xl:col-span-8 w-full bg-zinc-900 px-4 rounded-md p-3">
<div className="sm:text-center lg:text-left">
<h2 className="my-6 text-2xl text-yellow-300 flex gap-4 tracking-tight font-extrabold  sm:text-3xl md:text-3xl">
    Our Mission and Vision
  </h2>
  <div className='border border-t-2 mb-4 border-yellow-300 w-[45%]'></div>


  

  
<h2 className='font-bold text-neutral-300'>Our Vision -</h2>

      <p className='text-white'>To help our customers meet their financial goal and objective through our banking products & services.</p>
      <ul className='text-white' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>To be the Bank of the people</li>
        <li>Delivering Innovative banking products and services by consistent improvement of technology, process, and people</li>
        <li>Uplift villagers and rural masses.</li>
        <li>Based on Co-operative principles and values to be the role model of co-operative banks.</li>
      </ul>

      <h2 className='font-bold mt-8 text-neutral-300'>Our Mission -</h2>

      <ul className='text-white' style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li><strong>C</strong> - Concern for the people; commitment to social development.</li>
        <li><strong>O</strong> - Offer best quality banking service.</li>
        <li><strong>O</strong> - Operational accessibility to all.</li>
        <li><strong>P</strong> - People friendly products and activities.</li>
        <li><strong>E</strong> - Ethics and justice to customers.</li>
        <li><strong>R</strong> - Responsibility towards the down trodden.</li>
        <li><strong>A</strong> - Acceptance and accommodation of haves and have-nots.</li>
        <li><strong>T</strong> - Technological upgradation and advancement.</li>
        <li><strong>I</strong> - Innovation and Excellence.</li>
        <li><strong>V</strong> - Vibrant and proactive banking institution.</li>
        <li><strong>E</strong> - Empower the masses – Enrich society.</li>
      </ul>
    


</div>
</div>

<div className="col-span-12 xl:col-span-4 grid grid-cols-12 w-full gap-2 xl:gap-4">
  <div className="col-span-12 md:col-span-6  xl:col-span-12">
    <Calculator />
  </div>
  <div className="col-span-12 md:col-span-6 xl:col-span-12">
    <WhatNew />
  </div>
</div>
</main>
    </div>
  )
}

export default page







