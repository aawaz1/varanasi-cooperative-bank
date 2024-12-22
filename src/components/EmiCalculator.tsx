"use client"
import React, { useState } from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

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
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      };
  return (
    <div className='mx-auto container flex items-center justify-center'>
        <div className='w-1/3 bg-zinc-900 border border-gray-500 rounded-lg  p-3'>
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
        <div className='w/13'>
        <div className="mt-4 text-white font-poppins text-sm">
        <p>
          <strong>Total Interest: </strong>₹{totalInterest}
        </p>
        <p>
          <strong>Principal Amount: </strong>₹{rangeValue}
        </p>
        <p>
          <strong>Total Amount (Principal + Interest): </strong>₹{totalAmount}
        </p>
        <p>
          <strong>Monthly EMI: </strong>₹{monthlyEMI}
        </p>
      </div>
        </div>
      
      <div className='w-1/3'>
      <h3 className="text-white text-md font-poppins mb-4">Loan Distribution</h3>
      <div className='w-1/2'>
      <Pie className='border border-red-600' data={pieData} />
      </div>
    
      </div>
     

   
  </div>
  )
}

export default EmiCalculator