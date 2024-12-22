import Link from "next/link";
import { MdMapsHomeWork } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import History from "@/components/History";
import { ActivitiesCard } from "@/components/ActivitesCard";
import EmiCalculator from "@/components/EmiCalculator";
import Carousel from "@/components/Slider";

export default function Home() {
  return (
    // <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
    <main className=" px-6 pt-16">
        <Carousel/>
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
        
          {/* <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Secure & Anonymous Reporting
          </div> */}

       

       

          {/* <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href={"/submit-report"}>
              <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400">
                Make Anonymous Report
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
            <Link href={"/how-it-works"}>
              <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
                How it Works
              </button>
            </Link>
          </div> */}
        </div>
        <History/>
        <InfiniteMovingCards
          direction="right"
        speed="slow" 
        items={testimonials}/>

        {/* Features Grid */}
        <div className="mt-40 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Home Loan",
              link  :  "aa",
              description:
                "Your identity is protected with state-of-the-art encryption protocols",
              icon: (
                <MdMapsHomeWork className="text-sky-400 text-2xl"/>
                // <svg
                //   className="h-6 w-6 text-sky-400"
                //   fill="none"
                //   viewBox="0 0 24 24"
                //   stroke="currentColor"
                // >
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth={2}
                //     d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                //   />
                // </svg>
              ),
            },
            {
              title: "Personal Loan",
              link  :  "aa",
              description:
                "Instant verification and secure routing of all reports",
              icon: (
                <FaPersonCirclePlus className="text-sky-400 text-2xl"/>
              ),
            },
            {
              title: "Vechile Loan",
              link  :  "aa",
              description: "Two-way anonymous channel with law enforcement",
              icon: (
                <FaCarRear className="text-sky-400 text-2xl"/>
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
                <Link href={feature.link}>
                <button className="flex mt-2 h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
                Read More
              </button></Link>
               
              </div>
            </div>
          ))}
        </div>

     
      
     

       
     
        {/* <div className="mt-40 mb-20 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Trusted by Law Enforcement Nationwide
          </div>
        </div> */}
      </div>
      <ActivitiesCard/>
    </main>
    // </div>
  );
}


const testimonials = [
  {
    quote:
      "In the country`s agricultural development Co-Operative plays a very important role. Co-Operatives played an important role in the Country`s social and economic upliftment. Today, 68% of the country`s population lives in rural India.",
    name: "Dr. Jagdish Singh Patel",
    title: "Chairman",
    link :"/about/chairman",
  },
  {
    quote:
      "Zila Sahkari Bank Ltd. Mirzapur covers two districts namely Mirzapur & Sonebhadra which is lives in sounth east part of Uattar Pradesh & connected with unique four State i.e. Bihar, Jharkhand, Madhya Pradesh & Chhattisgarh",
      name: "Dr. Jagdish Singh Patel",
    title: "Cheif Executive Officer",
     link : "/about/ceo"
  },
  {
    quote:
      "In the country`s agricultural development Co-Operative plays a very important role. Co-Operatives played an important role in the Country`s social and economic upliftment. Today, 68% of the country`s population lives in rural India.",
    name: "Dr. Jagdish Singh Patel",
    title: "Chairman",
    link :"/about/chairman",
  },
 
];