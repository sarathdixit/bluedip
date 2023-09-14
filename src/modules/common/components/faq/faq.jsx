import React, { useState } from "react";
import CustomImage from "../image/image";

export default function Faq({ res }) {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="border-solid border-[#E2DBCB] px-[16px] gap-3 lg:px-[64px] py-[32px] border-[1px] rounded-xl">
      <div
        className=" flex items-center justify-between"
        onClick={() => setIsopen((prev) => !prev)}
      >
        <p className="text-[20px] dm-sans font-[700] flex-1">{res.heading}</p>
        <div>
          <CustomImage
            url="/assets/images/dropdown.svg"
            className="w-[40px] h-[40px] m-auto cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <p
          className="text-4 lg:text-[20px] text-[#4D545F] font-[400] dm-sans mt-4 lg:mt-6"
          dangerouslySetInnerHTML={{ __html: res.context }}
        ></p>
      )}
    </div>
  );
}
