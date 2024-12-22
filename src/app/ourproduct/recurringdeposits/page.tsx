import BreadCrumb from '@/components/BreadCrumb'
import React from 'react'
import Calculator from '@/components/Calculator';
import WhatNew from '@/components/Whatsnew'
import Image from 'next/image';

const page = () => {
  return (
    <div>
         <BreadCrumb name='Our Products' title="Recurring Deposits"/>
         <main className="mt-10 flex flex-col md:flex-row justify-between gap-4 items-start mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
            <div className='lg:w-2/3 bg-zinc-900 rounded-md p-3 px-4'>
<div className="sm:text-center lg:text-left">
<h2 className="my-6 text-2xl text-yellow-300 flex gap-4 tracking-tight font-extrabold  sm:text-3xl md:text-3xl">
   Recurring Deposits
  </h2>
  <div className='border border-t-2 mb-4 border-yellow-300 w-[35%]'></div>
  <div className='flex justify-center items-center'>  <Image src={""} alt=""/></div>

  

  <div className="p-6">
    <p className='mb-2 text-white'>
    Recurring deposit is a type of deposit wherein the depositor pays an agreed fixed amount of money into his/ her account every month over a stipulated period. On the expiry of the period, the installments deposited are repaid along with the interest there on as per the agreed terms and prevailing rules. 
    </p>
      {/* Title Section */}
      <h1 className="text-md font-bold mb-4 text-neutral-300">
      Eligibility and Target Group -
      </h1>
      <ul className="list-disc list-inside text-white space-y-2">
      





      <li>      Individual - In his/her name
      </li>
      <li>Two or more Individuals - Joint Accounts in their names.
      </li>
      <li>Minors</li>
      <li>Sole Proprietary Concerns</li>
      <li>Partnership Firms</li>
      <li>Limited Companies</li>
      <li>Illiterate Persons, Blind Persons        </li>
      <li>Students of the age of 10 years and above.
      </li>
    </ul>
    <h1 className="text-md font-bold my-4 text-neutral-300">
      Maturity Value -
      </h1>
      {/* Description Section */}
      <p className="text-md text-neutral-200 mb-4">
      The period of deposit should be in multiples of 3 months, the minimum period being 6 months and the maximum 120 months. 
      </p>
   

      <h1 className="text-md font-bold my-4 text-neutral-300">
      Rate of Interest -
      </h1>
      {/* Description Section */}
      <p className="text-md text-neutral-200 mb-4">
     The rates of interest applicable to Recurring Deposits are as per guidelines issued from time to time by Bank. The interest is computed at quarterly rests on the basis of monthly products with the help of Interest Tables.
      </p>
      <h1 className="text-md font-bold my-4 text-neutral-300">
      Loan against Recurring Deposits -
      </h1>
      {/* Description Section */}
      <p className="text-md text-neutral-200 mb-4">
      Loan facility is available against pledge of RD observing the prescribed procedure for such loans.
For more details,please contact the Zila Sahkari  Bank Ltd. Mirzapur nearest Branch.
      </p>
      
      {/* Types of Accounts Section */}
   
      {/* List Section */}
    
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