import React, { useState } from "react";
import CustomImage from "../image/image";

export default function Faq() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="border-solid border-[#E2DBCB] px-[16px] gap-3 lg:px-[64px] py-[32px] border-[1px] rounded-xl">
      <div className=" flex items-center justify-between">
        <p className="text-[20px] dm-sans font-[700] flex-1">
          Where does Bluedip operates?
        </p>
        <div onClick={() => setIsopen((prev) => !prev)}>
          <CustomImage
            url="/assets/images/dropdown.svg"
            className="w-[40px] h-[40px] m-auto cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <p className="text-[18px] dm-sans mt-6">
          Bluedip works with thousands of restaurants across Melbourne, Sydney,
          Brisbane, Perth, Adelaide, the Gold Coast and the Sunshine Coast.
        </p>
      )}
    </div>
  );
}
