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
  
    <main className="mt-10 flex flex-col md:flex-row justify-between gap-3 items-start mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
      {/* Left Section */}
      <div className="lg:w-2/3 w-full">
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
      <div className="lg:w-1/3 w-full space-y-6">
        {/* Projects Section */}
        <Calculator/>
        <WhatNew/>
       
      </div>
    </main>
  </div>
  
  )
}

export default page







