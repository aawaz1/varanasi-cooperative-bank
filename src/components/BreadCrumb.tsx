"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";

const BreadCrumb = ({title , name} : any) => {
  const [titles, setTitles] = useState<string[]>(["Home", "Default"]);
  const path = usePathname();
  const first = titles[titles.length - 1];
  const second = titles[titles.length - 2];
  const capitalize = (str: string) => {
    return str?.charAt(0) + str.slice(1);
  };
  useEffect(() => {
    setTitles(path.split("/"));
  }, [path]);

  console.log(capitalize(first))
  return (
    <div className=' bg-zinc-900  py-4 mb-4 border border-gray-300 rounded-md px-3 mx-4'>
      <nav
  className="relative flex h-30 w-full flex-wrap items-center justify-between   py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
>
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <nav className="w-full rounded-md" aria-label="breadcrumb">
      <ol className="list-reset ms-2 flex">
        <li>
          <Link
            href="/"
            className="motion-reduce:transition-none-none text-white transition duration-200 hover:text-zinc-300 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2 text-white">/</span>
        </li>
      
        <li>
          <span
            
            className="motion-reduce:transition-none-none text-white transition duration-200 hover:text-zinc-300 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 capitalize"
          >
     {capitalize(second)}
          </span>
        </li>
        
   
          
         {
          second ? ( <li>
            <span className="mx-2 text-white">/</span>
          </li>) : ""
         }
        <li>
          <Link
            href={capitalize(first)}
            className="motion-reduce:transition-none-none text-white transition duration-200 hover:text-zinc-300 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 capitalize"
          >
                 {capitalize(first) === "privacyPolicy" ? " Terms & Policy" :  capitalize(first) === "ho" ? "Bank HO Staff" : capitalize(first) === "mission" ? "Our Mission and Vision" : capitalize(first)}

          </Link>
        </li>
        
      </ol>
    </nav>
  </div>
</nav>

    </div>
  )
}

export default BreadCrumb