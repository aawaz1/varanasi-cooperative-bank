"use client";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BreadCrumb from "@/components/BreadCrumb";
import Calculator from "./components/Calculator";

ChartJS.register(ArcElement, Tooltip, Legend);

const RDCalculator = () => {
  const [rangeValue, setRangeValue] = useState<number>(20000);
  const [monthValue, setMonthValue] = useState<number>(12);
  const [interestValue, setInterestValue] = useState<number>(1);
  const [compounding, setCompounding] = useState<string>("Yearly");

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };
  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthValue(Number(e.target.value));
  };
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterestValue(Number(e.target.value));
  };
  const handleCompoundingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCompounding(e.target.value);
  };

  // Calculate compounding factor based on selected compounding interval
  const getCompoundingFactor = () => {
    switch (compounding) {
      case "Monthly":
        return 12;
      case "Quarterly":
        return 4;
      case "Half-Yearly":
        return 2;
      case "Yearly":
      default:
        return 1;
    }
  };

  const n = getCompoundingFactor(); // Number of compounding intervals per year
  const r = interestValue / 100 / n; // Periodic interest rate
  const t = monthValue / 12; // Time in years

  // Total maturity amount calculation using compound interest formula
 
  const totalAmount = rangeValue * Math.pow(1 + r, n * t); // Raw calculation
const formattedTotalAmount = totalAmount.toFixed(2); // Format with two decimal places

   // Keep raw decimal value
  const totalInterest = totalAmount - rangeValue; // Keep raw decimal value

  const formattedTotalInterest = totalInterest.toFixed(2)
  



  return (
    <>
      <BreadCrumb />
      <div className="mx-auto container  px-6 xl:px-12 gap-4 items-start justify-center">
        <div className="pt-6">
          <h2 className="text-yellow-300 font-poppins text-2xl">Maturity Calculator</h2>
          <div className="border border-b-[2px] w-[20%] border-yellow-300 mb-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 xl:gap-x-10 py-10">
          <div className="w-full">
            <div className="w-full bg-zinc-900 border border-gray-500 rounded-lg p-3">
              <label
                htmlFor="default-range"
                className="block mb-2 text-md font-poppins text-white"
              >
                Amount Deposited: ₹{rangeValue}
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
                htmlFor="interest-rate"
                className="block mb-2 text-md font-poppins text-white"
              >
                Rate of Interest: {interestValue}%
              </label>
              <input
                id="interest-rate"
                type="range"
                min="1"
                step="0.1"
                max="30"
                value={interestValue}
                onChange={handleInterestChange}
                className="w-full h-2 bg-gray-200 rounded-lg mb-4 appearance-none cursor-pointer dark:bg-gray-700"
              />
               <label
                htmlFor="compounding"
                className="block mb-2 text-md font-poppins text-white"
              >
                Compounding Frequency:
              </label>
              <select
                id="compounding"
                value={compounding}
                onChange={handleCompoundingChange}
                className="w-full bg-zinc-900 text-white border border-gray-500 rounded-lg p-2 mb-4"
              >
                <option value="Yearly">Yearly</option>
                <option value="Half-Yearly">Half-Yearly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Monthly">Monthly</option>
              </select>
              <label
                htmlFor="loan-tenure"
                className="block mb-2 text-md font-poppins text-white"
              >
                Loan Tenure (in months): {monthValue}
              </label>
              <input
                id="loan-tenure"
                type="range"
                min="12"
                max="120"
                value={monthValue}
                onChange={handleMonthChange}
                className="w-full h-2 bg-gray-200 rounded-lg mb-4 appearance-none cursor-pointer dark:bg-gray-700"
              />
             
            
            </div>
          
          </div>
          <div className="w-full bg-zinc-900 border border-gray-500 rounded-lg p-3">
          <div className=" w-full text-white flex flex-col justify-between items-start font-poppins text-sm md:text-md xl:text-lg">
              <p className="my-4">
                 Interest Value: <span className="text-md font-poppins text-white">₹{formattedTotalInterest}</span>
              </p>
              <p className="my-4">
                 Amount Deposited: <span className="text-md font-poppins text-white">₹{rangeValue.toFixed(2)}</span>
              </p>
              <p className="my-4">
                Maturity Value: <span className="text-md font-poppins text-white">₹{formattedTotalAmount}</span>
              </p>
            
              <div className="text-neutral-300 text-md font-poppins mt-4">
              <p > <strong>Note:</strong> In India, Banks use quarterly compounding to calculate interest in Rs.</p>
            </div></div>
          
          </div>
          <div className="w-full lg:w-2/3 mt-6">
           
          </div>
        
   <div className='w-full xl:w-2/3 xl:flex flex-col  xl:items-start justify-start'> <Calculator/> </div>
        </div>
      </div>
    </>
  );
};

export default RDCalculator;
