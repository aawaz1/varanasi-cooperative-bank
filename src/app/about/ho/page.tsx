import React from 'react'
import Image from 'next/image'
import chairmanImg from '../../../../public/about-30.jpg'
import Link from 'next/link';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import BranchDetails from './components/Table'
import BreadCrumb from '@/components/BreadCrumb';
import Calculator from '@/components/Calculator';
import WhatNew from '@/components/Whatsnew';


const projects = [
 
    {
      title: "EMI Calculator",
      image : <GiShakingHands/>,
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "RD Calculator",
      image : <VscLightbulbSparkle/>,
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Maturity Calculator",
      image : <VscLightbulbSparkle/>,
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
   
  ];
  

const page = () => {
  return (
    <div>
    <BreadCrumb name="About Us" title="Bank HO Staff" />
  
    <main className="mt-10 grid grid-cols-1 xl:grid-cols-12 gap-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 xl:mt-10 xl:px-8 ">
  {/* Left Column (History and Table) */}
  <div className="col-span-12 xl:col-span-8 w-full bg-zinc-900 px-4 rounded-md p-3">
        <div className="sm:text-center lg:text-left">
          <h2 className="my-6 text-2xl text-yellow-300 flex gap-4 tracking-tight font-extrabold sm:text-3xl md:text-3xl">
            Bank HO Staff
          </h2>
          <div className="border border-t-2 mb-4 border-yellow-300 w-[35%]"></div>
  
          {/* Make sure BranchDetails is scrollable if it has overflow */}
          <div className="overflow-x-auto">
            <BranchDetails />
          </div>
        </div>
      </div>
  
      {/* Right Section */}
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







