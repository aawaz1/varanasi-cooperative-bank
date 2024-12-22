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
  const data = [
    ["Equity", 769.35, 830.74, 941.07, 1047.15, 1230.0],
    ["Consolidated Fund", 1114.88, 1314.73, 1508.87, 1982.72, 2172.89],
    ["Submitted Depository", 26430.32, 27097.51, 28541.33, 28958.05, 29807.87],
    ["Borrowings", 4134.85, 4166.0, 5524.06, 5764.19, 10821.17],
    ["Working capital", 34640.9, 35524.36, 38845.09, 39867.26, 45500.03],
    ["Net profit", 57.89, 102.44, 208.1, 289.98, 35.25],
    ["Branches", 27, 27, 27, 27, 27],
    ["No. Of Workers", 142, 136, 131, 125, 122],
  ];

  const years = ["2011", "2012", "2013", "2014", "2015"];

  return (
    <div>
         
        <BreadCrumb name='About Us'  title="History"/>
 
      
        <main className="mt-10 flex flex-col md:flex-row justify-between items-start gap-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
        <div className='lg:w-2/3 w-full bg-zinc-900  px-4 rounded-md p-3'>
        <div className="sm:text-center lg:text-left">
  <h2 className="my-6 text-2xl flex gap-4 tracking-tight font-extrabold text-yellow-300 sm:text-3xl md:text-3xl">
    History 
  </h2>
  <div className='border border-b-2 mb-2 w-[30%] border-yellow-300'></div>


  

  
<p className='text-white'>

In India the Co-Operative Act was first created in 1904 and then passed again in the year 1912 as the Cooperative Act which led to the formation of the Central Co-Operative Banks and the States initiated the formation of various Co-Operative Banks. In year 1915 the first Zila Sahkari Bank was founded in Gola Gokarnnath, but this institution failed due to some reasons.

           On 05/09/1916 our district&apos;s great personality Honourable Late Ram Autar Pandey bonded the progressive farmers, eminent persons of our Districts by sense of Cooperativeness and with the help of many farmers and people to set up the bank.

           In the beginning the bank faced several financial problems, during which the bank received continued support of the city&apos;s public. Just as a small seed gradually assumes the form of a giant tree, in the same way the bank grew gradually day by day. In 1941, Bank completed its first Silver Jubilee (25 years) with flying colours. In coming years, the bank accepted the 1954-55 provincial supervision. In 1965, the new Co-Operative Act was passed after which the bank progressed continually. In 1976, Bank celebrated its Golden Jubilee and in 2001, celebrated its Diamond Jubilee. The phenomenal progress of the Bank from 1916 to 2015 is shown in the following brief table:-
</p>
<table className="table-auto border-collapse border mt-6 border-gray-400 w-full text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">S.No</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            {years.map((year, index) => (
              <th key={index} className="border border-gray-400 px-4 py-2">
                Year {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              <td className="border text-white border-gray-400 px-4 py-2">{rowIndex + 1}</td>
              <td className="border text-white border-gray-400 px-4 py-2">{row[0]}</td>
              {row.slice(1).map((value, colIndex) => (
                <td key={colIndex} className="border text-white border-gray-400 px-4 py-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className='my-2 text-white'>
      In 2012, the Reserve Bank of India granted license to the Bank for doing business in Banking Sector. The most prominent feature of our bank is that, since its inception date the Bank has always been in Profit.   

Bank’s progress and development is made possible by our hardworking representatives of the people, by the guidance of the departmental officials, by smooth transmittal and bank personnel’s integrity and sweat. Currently all the Branches of the Bank have been computerized as a first step toward modern banking. The Bank is working on CBS Platform. RTGS and NEFT are operational for instant fund transfer facility throughout the country and as well as ATM’s are being operated.
      </p>
</div>
</div>

<div className=" lg:w-1/3  w-full space-y-6">
<Calculator/>
<WhatNew/>
</div>
</main>
    </div>
  )
}

export default page







