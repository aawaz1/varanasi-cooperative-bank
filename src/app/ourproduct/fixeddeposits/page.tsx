import BreadCrumb from '@/components/BreadCrumb'
import Image from 'next/image'
import React from 'react'
import Calculator from '@/components/Calculator';
import WhatNew from '@/components/Whatsnew';

const page = () => {
  return (
    <div>
        
       
       <BreadCrumb name='Our Products' title="Fixed Deposits"/>
       <main className="mt-10 flex flex-col md:flex-row justify-between gap-4 items-start mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
            <div className='lg:w-2/3 bg-zinc-900 rounded-md p-3 px-4'>
<div className="sm:text-center lg:text-left">
<h2 className="my-6 text-2xl text-yellow-300 flex gap-4 tracking-tight font-extrabold  sm:text-3xl md:text-3xl">
   Fixed Deposits
  </h2>
  <div className='border border-t-2 mb-4 border-yellow-300 w-[35%]'></div>
  <div className='flex justify-center items-center'>  <Image src={""} alt=""/></div>

  

  <div className="p-6">
    <p className='mb-2 text-white'>
    This is a term deposits repayable after an agreed period fixed at the time of deposit. It will include both deposits made for a fixed period and deposits made subject to notice of withdrawal.
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
      <li>Clubs, Association, Societies, Trusts, etc.</li>
     
      <li>Limited Companies</li>
      <li>Minor under the guardianship of the natural guardians or guardians appointed by the Court of Law
      </li>
      <li>Partnership or Proprietory concerns.

      </li>
    </ul>
   
   

      <h1 className="text-md font-bold my-4 text-neutral-300">
      Rate of Interest -
      </h1>
      {/* Description Section */}
      <p className="text-md text-white mb-4">
      The Rate of Interest is determined with reference to the period and quantum of deposit and is subjected to the guidelines issued from time to time by the Bank.
      </p>
      <h1 className="text-md font-bold my-4 text-neutral-300">
     Additonal Rate of Interest -
      </h1>
      {/* Description Section */}
      <p className="text-md text-white mb-4">
      The rate of interest to certain category of depositors like Senior citizens, bank staff, a Banking Institution, Group Insurance Directorate,  Insurance Fund and  Insurance Society, etc. are different from that applicable in case of deposits of other public and the additional interest to these categories are prescribed by Bank from time to time.
      </p>
      
      <h1 className="text-md font-bold my-4 text-neutral-300">
      Computation And Payment Of Interest -
      </h1>
      



<ul className="list-disc list-inside text-white space-y-2">
      





      <li>      The interest should generally be computed at quarterly or larger rests and not on monthly basis as per the directives of the Reserve Bank of India. However, if monthly payment of interest is insisted upon by any depositor, branches may agree to do so, provided that the amount of interest paid every month is not more than the discounted value of the interest for one month so that even if interest is allowed on the interest so paid, the aggregate interest amount paid would not exceed one month’s interest on the deposit calculated on a quarterly basis.
      </li>
      <li>The interest on deposits repayable within six months (short term deposits) should be paid for the actual number of days on the basis of 365 days in a year. On deposits repayable after six months and where the terminal month is incomplete, interest should be paid for the completed months on a actual months basis and for the incomplete month on the actual number of days of the deposit in that month on the basis of 365 days in a year. When the deposit is repayable after six months and where the terminal month is complete, the interest should be paid on the basis of actual months completed.
      </li>
      <li>Loan facility is available against pledge of FDR receipts observing the prescribed procedure for such loans.</li>
     
   
    
    </ul>
   
    <h1 className="text-md font-bold my-4 text-neutral-300">
    INCOME TAX ON FIXED DEPOSIT INTEREST -
      </h1>
      <ul className="list-disc list-inside text-white space-y-2">
        <li>
        TDS is applicable on such deposits as per guidelines issued by Govt. of India from time to time.
        </li>

      </ul>

      <h1 className="text-md font-bold my-4 text-neutral-300">
    Note -
      </h1>
      <ul className="list-decimal list-inside text-white space-y-2">
        <li>
        For DCB Bank Staff  will be paid 1% more interest on their deposits for any time period.

        </li>
      <li>
      Senior citizens will be paid 0.50% more interest on their deposits for one & above time period.

      </li>

      </ul>
      <h1 className="text-md font-bold my-4 text-neutral-300">
    For More Details Contact Us
      </h1>
   

     
     
      
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