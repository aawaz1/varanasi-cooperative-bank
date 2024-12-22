// import Link from "next/link";
// import React from "react";

// const Testimonials = () => {
//   return (
//     <div className="text-gray-600 bg-blue-200 container mx-auto  p-6 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      

//         <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
//           {[
//             {
            
//               name: "CHAIRMAN",
//               role: "/about/chairman",
//               review:
//                 "In the country`s agricultural development Co-Operative plays a very important role. Co-Operatives played an important role in the Country`s social and economic upliftment. Today, 68% of the country`s population lives...",
//             },
//             {
//               imgSrc: "https://randomuser.me/api/portraits/women/14.jpg",
//               name: "CEO",
//               role: "/about/ceo",
//               review:"Zila Sahkari Bank Ltd. Mirzapur covers two districts namely Mirzapur & Sonebhadra which is lives in sounth east part of Uattar Pradesh & connected with unique four State i.e. Bihar, Jharkhand, Madhya Pradesh & Chhattisgarh..."
//             },
           
          
//           ].map((review, index) => (
//             <div
//               key={index}
//               className=" w-[100%] md:w-[30%] p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
//             >
//               <div className="flex gap-4">
              
//                 <div>
//                   <h6 className="text-lg font-medium  text-yellow-600 dark:text-white">{review.name}&apos;s <span className="text-black">Message</span></h6>
                 
//                 </div>
//               </div>
//               <p className="mt-8 ">{review.review} </p>
//               <Link href={review?.role}>
//               <span className="flex justify-center items-center">              <p className="mt-8 h-[30%] text-center text-white bg-blue-500 hover:bg-blue-800 rounded-full p-2 py-3">Read More</p>
//               </span></Link>
             
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import { AnimatedTestimonials } from "@/components/ui/animated-testimonals";
import chairmanImg from '../../public/about-30.jpg'


export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Dr. Jagdish Singh Patel",
      designation: "Chairman",
      src: chairmanImg,
      link : "/about/chairman"
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "",
      designation: "CEO",
      src: chairmanImg,
        link : "/about/ceo"
    },
  
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

