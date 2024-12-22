import React from 'react';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';
import { PiSmileySad } from "react-icons/pi";

const Calculator = () => {
    const projects :any = [
 
      
       
      ];
  return (
    <div className='bg-zinc-900 hover:bg-sky-800/30  group relative h-[410px] p-3 flex flex-col justify-start gap-6 py-8 rounded-xl px-4 md:px-12 '>
       <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div>
        <h2 className='text-2xl font-poppins text-yellow-300'>
                      Whats New
                      </h2>
                      <div className='border-t-2 border-yellow-500'></div>
                      </div>
      {
        projects.length > 0 ? (
            projects.map((item:any , idx:any) => {
                return (
                  <Link key={idx} href={item.link} className=''>
                    <button className=' bg-gradient-to-r from-blue-700 to-violet-600 p-0.5 px-2 flex justify-start items-center gap-4 text-white w-full rounded-full'> <span className='rounded-full p-2 bg-sky-800 border-white border'></span>{item.title}</button>
                  
                   {/* <button className="flex rounded-full bg-gradient-to-r from-blue-500 to-violet-500 group hover:from-violet-500 hover:to-yellow-500 w-full gap-4 p-2 py-4 justify-center items-center">


                        <span className="text-4xl text-white">{item.image}</span>
                        <span className="text-xl text-white">{item.title}</span>

           
                    </button> */}
                  </Link>
                 
                )
            })

        )  : (
             
            <button className='bg-white/5 ring-1 ring-inset ring-white/10   hover:bg-white/10 p-1 px-2 flex justify-start items-center gap-4 text-white w-full rounded-full'> <span className='rounded-full text-white text-2xl'><PiSmileySad/></span>
            Nothing New Right Now</button>
          
         
          
        )
      }

    </div>
  )
}

export default Calculator