import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";

export default function Select({ className = "" }) {
  const [values, setSelectValue] = useState("");
  const [isOpen, setIsopen] = useState(false);
  const handleSelect = () => {
    setSelectValue("Alexandra Headland");
    setIsopen(false);
  };
  return (
    <div className="relative">
      <div
        onClick={() => setIsopen((prev) => !prev)}
        className={`bg-white border-solid border-[#E2DBCB] rounded-full px-[31px] py-[13px] flex items-center justify-between w-[360px] m-auto ${className}`}
      >
        <div>
          <p className="dm-sans text-[13px] text-[#6A7079]">Select Suburb</p>
          <p className="text-[20px] text-[#202937]">
            {values ? values : "Please select"}
          </p>
        </div>
        <div>
          <ArrowDown2 size="24" color="#88857B" />
        </div>
      </div>
      {isOpen && (
        <div
          className="w-[360px] m-auto border-solid border-[#E2DBCB] bg-white absolute"
          onClick={handleSelect}
        >
          <div className="py-4 px-4 border-solid border-[#E2DBCB]">
            Alexandra Headland
          </div>
          <div className="py-4 px-4 border-solid border-[#E2DBCB]">
            Alexandra Headland
          </div>
        </div>
      )}
    </div>
  );
}
