import React from 'react'
import Image from 'next/image'
import chairmanImg from '../../../../public/about-30.jpg'
import Link from 'next/link';
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import BreadCrumb from '@/components/BreadCrumb';
import Calculator from '@/components/Whatsnew';
import Calculator1 from '@/components/Calculator';

interface Project {
    title: string;
    image: JSX.Element;
    description: string;
    link: string;
  }
   const projects :  Project[] = [
 
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
      
      <BreadCrumb name='About Us' title="CEO"/>
          <div className='flex flex-col bg-blue-300 justify-between items-start'>
       
 
       </div>
        <main className="mt-10 flex flex-col md:flex-row justify-between gap-4 items-start mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
            <div className='lg:w-2/3 bg-zinc-900 p-4 rounded-lg'>
<div className="sm:text-center lg:text-left">
  <h2 className="my-6 text-xl flex gap-4 tracking-tight font-bold text-yellow-300 sm:text-3xl md:text-3xl">
    GM/CEO&apos;s Message 
  </h2>
  <div className='border border-t-2 w-[45%] border-yellow-300 mb-3'></div>
  <div className='flex justify-center items-center mt-6'>  <Image src={""} alt=""/></div>
  <div className='flex justify-center items-center'>
    <h2 className='text-center text-white'>Chief Executive Officer</h2>
  </div>
  

  
<h2 className='font-bold text-white'>Dear Friends</h2>
<p className='text-white'>



Zila Sahkari Bank Ltd. Mirzapur covers two districts namely Mirzapur & Sonebhadra which is lives in sounth east part of Uattar Pradesh & connected with unique four State i.e. Bihar, Jharkhand, Madhya Pradesh & Chhattisgarh. Both districts is peculiar is nature certain part is plane & certain part covered by plateaus of south. Ganga River & auspicious pregrimage Temple of Goddess Maa Vindhyavasini which is famous all over our country.  

            Mirzapur & Sonebhadra is predominantly agrarian having small & marginal land holding, low productivity, lack of diversified in cropping pattern. The major crop grown in district are paddy, wheat, maiz, bajara, potato, Tomato, Chili Mirzapur is basically renowed by woolen carpet, Durries, traditional brass utensil & Banarasi sarees.

            Both district has covered by 27 Brnaches of Zila Sahkari Bank Ltd. Mirzapur which mostly covered 50% of priority sector (i.e. Agriculture Credit) & my mission is to reach zenith to reach 80% of tenebt agriculture sector through JLG, Financial Literacy regarding activities.

            During 2012-13 to 2014-15 credit growth rate is 30% to 35 %, bank has plan to reach just double what was at 2012-13 that is why CD ratio of DCB is increasing year by year 35% to 45%.

            Zila Sahkari Bank Ltd. Mirzapur is compete with commercial Bank through IT (ie. CBS, Debit & Credit Cards, SMS, ATM, Mobile Banking). It is great pleasure to shown that  all GOI social activities fallow step to step with PSBs, Stand same platform.

            We wish all the best for Zila Sahkari bank Ltd. Mirzapur with all employees.<span className='font-bold'>Thanking You.</span>
</p>
</div>
</div>

<div className=" lg:w-1/3 w-full space-y-6">
<Calculator1/>
<Calculator/>





 
</div>
</main>
    </div>
  )
}

export default page







