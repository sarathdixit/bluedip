/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function OverviewGird() {
  return (
    <div className="bg-white py-4 px-4 max-w-[1095px] m-auto rounded-lg flex justify-center">
      <div className="flex flex-col gap-4 lg:gap-9 lg:flex-row lg:w-[1002px] lg:justify-evenly ">
        <div className="flex items-center gap-3 max-w-[300px]">
          <img src="/assets/images/overview-grid-image.svg" alt="" />
          <p className="dm-sans text-[16px] font-[600]">
            Increase takeaway & dine-in demand
          </p>
        </div>
        <div className="h-[1px] lg:h-[64px] my-auto lg:w-[2px] bg-[#F5EEDD] "></div>
        <div className="flex items-center gap-3">
          <img src="/assets/images/overview-grid-image2.svg" alt="" />
          <p className="dm-sans text-[16px] font-[600]">
            Industry&apos;s first software to create and predict future demand
          </p>
        </div>
        <div className="h-[1px] lg:h-[64px] my-auto lg:w-[2px] bg-[#F5EEDD] "></div>
        <div className="flex items-center gap-3 dm-sans">
          <img src="/assets/images/overview-grid-image3.svg" alt="" />
          <p className="dm-sans text-[16px] font-[600]">
            Promote your venue to millions of customers
          </p>
        </div>
      </div>
    </div>
  );
}
