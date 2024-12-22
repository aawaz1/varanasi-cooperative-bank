import { HoverEffect } from "../ui/card-hover-effect";
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import ActiveCard from '@/components/ActiveCard';
import Whatnew from '@/components/Whatsnew'
import { FaCheck } from "react-icons/fa";




import Link from "next/link";
import Calculator from "./Calculator";



export function ActivitiesCard() {
  return (
    (<div className=" w-full px-0 lg:px-12 py-4 pt-32 justify-center items-center gap-4     grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  
  container mx-0 md:mx-auto ">
   <Calculator/>  
    <ActiveCard/>
    <Whatnew/>
   
  
       
    </div>)
  );
}
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
