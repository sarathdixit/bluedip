import React from "react";
import CustomImage from "../image/image";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-20 pt-12"
      style={{
        backgroundImage: 'url("/assets/images/footerbackground.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex  justify-between mb-12">
        <div>
          <CustomImage
            url="/assets/images/logo-white.svg"
            className="w-[124px] h-[49px] mr-2"
          />
          <p className="text-[16px] font-[400] text-[#FEFEFC] dm-sans w-[322px]">
            A mobile app that helps you discover local restuarants with
            exclusive offers throughout the day
          </p>
        </div>
        <div className="flex gap-20">
          <div>
            <div>
              <span className="text-[16px] font-[700] flex-1 text-[#FFF] dm-sans border-b-2 border-[#D8B448] pb-1">
                SOLUTIONS
              </span>
            </div>
            <div className="mt-4">
              <Link href={"/takeaway"}>
                <div className="text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2 cursor-pointer">
                  Takeaway <ArrowRight size="20" color="#FFF" />
                </div>
              </Link>
              <Link href={"/dinein"}>
                <div className="text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2 mt-4 cursor-pointer">
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
              <div className="text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2">
                Overview <ArrowRight size="20" color="#FFF" />
              </div>
              <div className="text-[16px] font-[400] flex-1 text-[#FFF] dm-sans flex items-center gap-2 mt-4">
                What is dynamic Pricing <ArrowRight size="20" color="#FFF" />
              </div>
            </div>
          </div>
          <div>
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
      </div>
      <div className="flex items-center justify-between py-8 border-t  border-t-[#D9D9D92B]">
        <p className="text-[16px] font-[400] flex-1 text-[#FFF] dm-sans">
          © 2023 Bluedip
        </p>
        <div className="flex gap-4">
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
