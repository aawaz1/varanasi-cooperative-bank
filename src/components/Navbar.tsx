/** @format */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import  logo from '../../public/logo.png'
type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: any = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "About Us",
    link: "#",
    children: [
      {
        label: "History",
        link: "/about/history",
        iconImage: ""
      },
      {
        label: "Chairman Message",
        link: "/about/chairman",

        iconImage:""
      },
      {
        label: "GM/CEO Message",
        link: "/about/ceo",
        iconImage: ""
      },
      {
        label: "Our Mission and Vision",
        link: "/about/mission",
        iconImage: ""
      },
      {
        label: "Bank HO Staff",
        link: "/about/ho",
        iconImage: ""
      },
      {
        label: "Board of Director",
        link: "/about/director",
        iconImage: ""
      }
    ]
  },
  {
    label: "Our Products",
    link: "#",
    children: [
      {
        label: "Saving Deposits",
        link: "/ourproduct/savingdeposits"
      },
      {
        label: "Current Deposits",
        link: "/ourproduct/currentdeposits"
      },
      {
        label: "Recurring Deposits",
        link: "/ourproduct/recurringdeposits"
      },
      {
        label: "Fixed Deposits",
        link: "/ourproduct/fixeddeposits"
      }
      ,
      {
        label: "Reinvestment Deposits",
        link: "/ourproduct/reinvestmentdeposits"
      }
      ,
      {
        label: "Daily Deposits Scheme",
        link: "/ourproduct/dailyscheme"
      }
    ]
  },
  {
    label: "Our Services",
    link: "#",
    children: [
      {
        label: "NEFT/RTGS",
        link: "#"
      },
      {
        label: "Service Charges",
        link: "#"
      },
      {
        label: "Locker",
        link: "#"
      }
      ,
      {
        label: "ATM",
        link: "#"
      }
      ,
      {
        label: "SMS Alert",
        link: "#"
      }
      ,
      {
        label: "DBTL",
        link: "#"
      }
      ,
      {
        label: "Point Of Scale",
        link: "#"
      }
    ]
  },
  {
    label: "Loan",
    link: "#",
    children: [
      {
        label: "Home Loan",
        link: "#"
      },
      {
        label: "Consumer Durable Loan",
        link: "#"
      },
      {
        label: "Business Term Loan",
        link: "#"
      }
      ,  {
        label: "Vechile Loan",
        link: "#"
      },
      {
        label: "Agriculture Loan",
        link: "#"
      },
      {
        label: "Veer Chandra Singh Garhwali Loan",
        link: "#"
      }
      ,
      {
        label: "Kissan Credit Card",
        link: "#"
      }
      ,
      {
        label: "Govt Sponsered Loan",
        link: "#"
      }
    ]
  },
  {
    label: "Interest Rates",
    link: "#",
    children: [
      {
        label: "Deposits Interest Rate",
        link: "#"
      },
      {
        label: "Loan Interest Rate",
        link: "#"
      },
     
    ]
  },
  {
    label: "Gallery",
    link: "#"
  },
  {
    label: "Societies",
    link: "#"
  },
  {
    label: "Branch",
    link: "Branch"
  }
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="">
    <div className="mx-auto flex  w-full max-w-7xl justify-between  py-5 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-5">
        {/* logo */}
        <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className=" bg-transparent rounded-xl  flex items-center justify-center">
                <Image src={logo} alt="logo" width={90}/>
                </div>
                <span className="text-md font-semibold text-white">
                VARANASI DISTRICT CO-OPERATIVE BANK	
                </span>
              </Link>
            </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden  xl:flex items-center gap-2 transition-all">
          {navItems.map((d:any, i:any) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-1 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-white  group-hover:border-yellow-300   group-hover:border-b-[2px]">
                <span className="text-md">{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all   " />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0 z-50   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-blue-950 py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch :any, i:any) => (
                    <Link
                      key={i}
                      href={ch.link}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap  hover:border-b-[2px] hover:border-yellow-300 text-white">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
    

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl xl:hidden text-white"
      />
    </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed z-50 left-0 top-0 flex h-full w-full justify-end xl:hidden">
      <div className="h-full w-[65%]  bg-black  px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-white"
          />
        </section>
        <div className="flex flex-col gap-2 text-base text-white transition-all">
          {navItems.map((d:any, i:any) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}


function SingleNavItem(d: any) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span className="text-white ">{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all text-white   ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-blue-950 py-3   transition-all flex ">
          {d.children.map((ch:any, i:any) => (
            <Link
              key={i}
              href={ch?.link}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap text-white  pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
