import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-[#fc8318] bg-[#ffffff] rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;