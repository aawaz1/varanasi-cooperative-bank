"use client"
import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This adds a smooth scrolling effect
    });
  };

  return (
    <div
      className="bg-blue-950 text-white rounded-full px-4 py-3 cursor-pointer fixed bottom-5 right-5 shadow-lg"
      onClick={handleScrollToTop}
      title="Scroll to Top"
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollUp;
