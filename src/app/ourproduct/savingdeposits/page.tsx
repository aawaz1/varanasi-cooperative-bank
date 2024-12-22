import BreadCrumb from '@/components/BreadCrumb';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import Calculator from '@/components/Calculator';
import WhatNew from '@/components/Whatsnew';


const page = () => {
 
  return (
    <div>
          
       
        <BreadCrumb name='Our Products' title="Saving Deposits"/>
 
    
       <main className="mt-10 flex flex-col md:flex-row justify-between gap-4 items-start mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
            <div className='lg:w-2/3 bg-zinc-900 p-3 rounded-md px-4'>
<div className="sm:text-center lg:text-left">
<h2 className="my-6 text-2xl text-yellow-300 flex gap-4 tracking-tight font-extrabold  sm:text-3xl md:text-3xl">
    Saving Deposits
  </h2>
  <div className='border border-t-2 mb-4 border-yellow-300 w-[35%]'></div>
  <div className='flex justify-center items-center'>  <Image src={""} alt=""/></div>

  

  <div className="p-6">
      {/* Title Section */}
      <h1 className="text-2xl font-bold mb-4 text-neutral-300">
        DCB Mirzapur Regular Savings Account
      </h1>
      {/* Description Section */}
      <p className="text-md text-white mb-4">
        The account is an endeavor by the Bank to understand the consumers&apos; needs and redefine banking to suit your requirements for a truly comfortable banking experience. Regular Savings Account gives you instant access to your money anywhere, anytime. Possessing a range of unmatched features, it has been devised to suit the convenience of our client.
      </p>
      
      {/* Types of Accounts Section */}
      <h2 className="text-lg font-semibold mt-6 mb-2 text-neutral-300">TYPES OF ACCOUNTS</h2>
      <p className="text-md text-neutral-200 mb-2">
        Savings Bank Accounts may be opened in the names of:
      </p>
      {/* List Section */}
      <ol className="list-decimal list-inside space-y-2 text-white">
        <li>Individual - Single Accounts</li>
        <li>Two or more individuals - Joint Accounts</li>
        <li>Illiterate persons</li>
        <li>Blind persons</li>
        <li>Minors</li>
        <li>Associations, Clubs, Societies</li>
        <li>Trusts</li>
        <li>Institutions/Agencies specially permitted by the RBI</li>
      </ol>
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