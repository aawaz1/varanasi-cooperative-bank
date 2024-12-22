"use client";
import React, { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Calculator from "./components/Calculator";

const RDCalculator = () => {
  const [rangeValue, setRangeValue] = useState<number>(20000);
  const [monthValue, setMonthValue] = useState<number>(12);
  const [interestValue, setInterestValue] = useState<number>(1);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };
  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthValue(Number(e.target.value));
  };
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterestValue(Number(e.target.value));
  };

  // Simplified calculations without compounding
  const totalInterest = ((rangeValue * interestValue * monthValue) / 1200).toFixed(2); // Simple interest formula
  const totalAmount = (parseFloat(totalInterest) + rangeValue).toFixed(2);
  const monthlyEMI = (parseFloat(totalAmount) / monthValue).toFixed(2);

  return (
    <>
      <BreadCrumb />
      <div className="mx-auto container px-12 gap-4 items-start justify-center">
        <div>
          <h2 className="text-yellow-300 font-poppins text-2xl">Maturity Calculator</h2>
          <div className="border border-b-[2px] w-[20%] border-yellow-300 mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10">
          <div className="w-full">
            <div className="w-full bg-zinc-900 border border-gray-500 rounded-lg p-3">
              <label
                htmlFor="default-range"
                className="block mb-2 text-md font-poppins text-white"
              >
                Amount you need: ₹{rangeValue}
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
                htmlFor="loan-tenure"
                className="block mb-2 text-md font-poppins text-white"
              >
                RD Periods (in months): {monthValue}
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
            <div className="mt-4 text-white font-poppins text-lg">
              <p className="my-4">
                 Interest Amount: <span className="text-md font-poppins text-white">₹{totalInterest}</span>
              </p>
              <p className="my-4">
                Total Deposited Amount: <span className="text-md font-poppins text-white">₹{rangeValue.toFixed(2)}</span>
              </p>
              <p className="my-4">
                Maturity Amount : <span className="text-md font-poppins text-white">₹{totalAmount}</span>
              </p>
             
            
            </div>
          </div>
          <div className="w-full lg:w-2/3 mt-6"></div>
          <div className="w-2/3">
            <Calculator />
          </div>
        </div>
      </div>
    </>
  );
};

export default RDCalculator;
