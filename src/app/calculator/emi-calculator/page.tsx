"use client"
import React, { useState } from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BreadCrumb from '@/components/BreadCrumb';
import Calculator from '../emi-calculator/components/Calculator';

ChartJS.register(ArcElement, Tooltip, Legend);
const EmiCalculator = () => {
    const [rangeValue, setRangeValue] = useState<any>(20000);
    const [monthValue, setMonthValue] = useState<number>(12);

    const [interestValue, setInterestValue] = useState<number>(1); // Default value
    // Default value

    const handleRangeChange = (e: any) => {
      setRangeValue(e.target.value);
    };
    const handleMonthChange = (e: any) => {
        setMonthValue(e.target.value);
      };
    const handleInterestChange = (e: any) => {
        setInterestValue(e.target.value);
      };

      const totalInterest = ((rangeValue * (interestValue / 100)) * (monthValue / 12)).toFixed(2);
      const totalAmount: any = (parseFloat(rangeValue) + parseFloat(totalInterest)).toFixed(2);
      const monthlyEMI = (totalAmount / monthValue).toFixed(2);
      const pieData = {
        labels: ["Interest Amount", "Principal Amount"],
        datasets: [
          {
            data: [parseFloat(totalInterest), parseFloat(rangeValue)],
            backgroundColor: ["#FFFFFF", "#0A58CA"],
            hoverBackgroundColor: ["#F3F3F3", "#126FE3"],
            borderWidth: 0,
          },
        ],
      };
  return (
    <>
    <BreadCrumb/>
    <div className='mx-auto container px-6 md:px-8 xl:px-12    gap-4 items-start justify-center'>
    <div className="pt-6 flex flex-col  gap-2 justify-center items-center">
            <h2 className='text-yellow-300 font-poppins text-2xl'>EMI Calculator</h2>
            <div className='border border-b-[2px] w-full border-yellow-300 mb-2'></div>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-12  py-10">
      <div className=' w-full'>
      
      <div className='w-full bg-zinc-900 border border-gray-500 rounded-lg  p-3'>
      <label
    htmlFor="default-range"
    className="block mb-2 text-md font-poppins  text-white dark:text-white"
  >
     Amount you need : {rangeValue}
  </label>
  <input
    id="default-range"
    type="range"
    min="20000"
    max="1000000"
    value={rangeValue}
    onChange={handleRangeChange}
    className="w-full h-2 bg-gray-200 rounded-lg mb-4 appearance-none cursor-pointer dark:bg-gray-700"
  />
     <label
    htmlFor="default-range"
    className="custom-range block mb-2 text-md font-poppins text-white dark:text-white"
  >
     Rate Of Interest : {interestValue} %
  </label>
  <input
    id="default-range"
    type="range"
    min="1"
    step='0.1'
    max="30"
    value={interestValue}
    onChange={handleInterestChange}
    className="w-full h-2 mb-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
  />
      <label
    htmlFor="default-range"
    className="custom-range block mb-2 text-md font-poppins text-white dark:text-white"
  >
     Loan Tenures (in  months) : {monthValue}
  </label>
  <input
    id="default-range"
    type="range"
    min="12"
    step='0'
    max="120"
    value={monthValue}
    onChange={handleMonthChange}
    className="w-full h-2 bg-gray-200 rounded-lg mb-4 appearance-none cursor-pointer dark:bg-gray-700"
  />
    
      </div>
      <div>
  
  
  
    </div>
      </div>
      <div className='w-full  bg-zinc-900 border border-gray-500 rounded-lg  p-3'>
      <div className=" w-full text-white flex flex-col justify-between items-start font-poppins text-sm md:text-md xl:text-lg">
        <p className='my-4'>
          Total Interest : <span className='text-md font-poppins text-white'>₹{totalInterest}</span>
        </p>
        <p className='my-4'>
          Principal Amount: <span className='text-md font-poppins text-white'>₹{rangeValue}</span>
        </p>
        <p className='my-4'>
          Total Amount (Principal +  Total Interest): <span className='text-md font-poppins text-white'>₹{totalAmount}</span>
        </p>
        <p className='my-4'>
        Monthly EMI : <span className='text-md font-poppins text-white'>₹{monthlyEMI}</span>
        </p>
      </div>
        </div>
        <div className='w-full xl:w-1/2  mt-6'>
    <Pie className='' data={pieData} />
    </div>
   <div className='w-full xl:w-2/3 xl:flex flex-col  xl:items-start justify-start'> <Calculator/> </div>
      </div>
     
     
      
   
     

   
  </div>
  </>
  )
}

export default EmiCalculator