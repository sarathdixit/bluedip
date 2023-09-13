import React from "react";
import CustomImage from "../image/image";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-6 py-8 lg:px-20 lg:pt-12"
      style={{
        backgroundImage: 'url("/assets/images/footerbackground.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:flex  lg:justify-between mb-12">
        <div>
          <CustomImage
            url="/assets/images/logo-white.svg"
            className="w-[124px] h-[49px] m-auto lg:mr-auto lg:ml-0"
          />
          <p className="text-[12.8px] lg:text-[16px] font-[400] mt-4 text-center lg:text-left text-[#FEFEFC] dm-sans lg:w-[322px]">
            A mobile app that helps you discover local restuarants with
            exclusive offers throughout the day
          </p>
        </div>
        <div className="flex justify-between gap-6 lg:gap-20 mt-7">
          <div>
            <div>
              <span className="text-[16px] font-[700] flex-1 text-[#FFF] dm-sans border-b-2 border-[#D8B448] pb-1">
                SOLUTIONS
              </span>
            </div>
            <div className="mt-4">
              <Link href={"/takeaway"}>
                <div className="text-[12.8px] lg:text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2 cursor-pointer">
                  Takeaway <ArrowRight size="20" color="#FFF" />
                </div>
              </Link>
              <Link href={"/dinein"}>
                <div className="text-[12.8px] lg:text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2 mt-4 cursor-pointer">
                  Dine in <ArrowRight size="20" color="#FFF" />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <span className="text-[16px] font-[700] flex-1 text-[#FFF] dm-sans border-b-2 border-[#D8B448] pb-1">
                COMPANY
              </span>
            </div>
            <div className="mt-4">
              <Link href={"/restaurant"}>
                <div className="text-[12.8px] lg:text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2">
                  Overview <ArrowRight size="20" color="#FFF" />
                </div>
              </Link>
              <Link href={"/dynamic-pricing"}>
                <div className="text-[12.8px] lg:text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2 mt-4">
                  What is dynamic Pricing <ArrowRight size="20" color="#FFF" />
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div>
              <span className="text-[16px] font-[700] flex-1 text-[#FFF] dm-sans border-b-2 border-[#D8B448] pb-1">
                DOWNLOAD OUR APP
              </span>
            </div>
            <div className="mt-4">
              <CustomImage
                url="/assets/images/App Store white.svg"
                className="w-[158px] h-[48px]"
              />
              <CustomImage
                url="/assets/images/Play Store.svg"
                className="w-[158px] h-[48px] mt-4"
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden mt-8">
          <div>
            <div className="text-[16px] font-[700] text-center w-[166px] m-auto text-[#FFF] dm-sans border-b-2 border-[#D8B448] pb-1">
              DOWNLOAD OUR APP
            </div>
          </div>
          <div className="mt-4 flex gap-7">
            <CustomImage
              url="/assets/images/App Store white.svg"
              className="w-[158px] h-[48px]"
            />
            <CustomImage
              url="/assets/images/Play Store.svg"
              className="w-[158px] h-[48px]"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex items-center justify-between border-t  border-t-[#D9D9D92B]">
        <p className="text-[16px] font-[400] text-center lg:text-left flex-1 text-[#FFF] dm-sans">
          © 2023 Bluedip
        </p>
        <div className="flex justify-center gap-4">
          <CustomImage
            url="/assets/images/twitter.svg"
            className="w-[41px] h-[41px] mt-4"
          />
          <CustomImage
            url="/assets/images/fb.svg"
            className="w-[41px] h-[41px] mt-4"
          />
          <CustomImage
            url="/assets/images/instagram.svg"
            className="w-[41px] h-[41px] mt-4"
          />
          <CustomImage
            url="/assets/images/linkedin.svg"
            className="w-[41px] h-[41px] mt-4"
          />
        </div>
      </div>
    </footer>
  );
}
