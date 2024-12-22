"use client";
import React from "react";
import { GiShakingHands } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import Link from "next/link";

const Calculator = () => {
  const projects = [
  
    {
      title: "RD Calculator",
      image: <VscLightbulbSparkle />,
      link: "/calculator/rd-calculator",
    },
    {
      title: "Maturity Calculator",
      image: <VscLightbulbSparkle />,
        link: "/calculator/maturity-calculator",
    },
  ];

  return (
    <div className="bg-zinc-900 p-3  hover:bg-sky-800/30 flex flex-col justify-center gap-9 py-8 rounded-xl px-4 md:px-12">
   
      <div>
        <h2 className="text-2xl font-poppins text-yellow-300"> Other Calculator</h2>
        <div className="border-t-2 border-yellow-500"></div>
      </div>
      {projects.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
         
          className="flex rounded-full bg-white/5 ring-1 ring-inset ring-white/10 hover:bg-white/10 cursor-pointer w-full gap-4 p-2 py-4 justify-center items-center"
        >
          <span className="text-4xl text-white">{item.image}</span>
          <span className="md:text-xl text-sm text-white">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Calculator;
