import { HoverEffect } from "../ui/card-hover-effect";
import homeLoanImage from '../../public/icon-9.png'
import personalLoanImage from '../../public/icon-3.png'
import vechileLoanImage from '../../public/icon-7.png'
import CardComponent from "./CardComponent";
import { MdMapsHomeWork } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { FaPersonCirclePlus } from "react-icons/fa6";



export function CardHoverEffectDemo() {
  return (
    <div className="bg-gradient-to-t from-neutral-300 to-blue-500">
    <div className=" w-full px-12 py-2   container mx-auto ">
        <h2 className="text-center text-4xl mb-3 text-white font-semibold">Loan Request</h2>
        <p className="text-center font-medium text-xl text-black">Different Loans for different needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-y-0 space-y-4   lg:grid-cols-3  py-10"
        > <CardComponent items={projects}/></div>
      {/* <HoverEffect items={projects} /> */}
    </div></div>
  );
}
const projects = [
 
  {
    title: "Home Loan",
    image : MdMapsHomeWork,
    color : "sky",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Personal Loan",
    image : FaPersonCirclePlus,
    color : "red",

    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Vehicle Loan",
    image : FaCarRear,
    color : "green",
description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
 
];
