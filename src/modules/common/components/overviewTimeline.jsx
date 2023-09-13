/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CustomImage from "./image/image";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

export default function OverViewTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const div2 = document.querySelector("#info");
      const boundingBox = div2.getBoundingClientRect();

      if (boundingBox.top < window.innerHeight && boundingBox.bottom > 0) {
        // Element is in view
        const scrollPercentage =
          ((window.innerHeight - boundingBox.top) / window.innerHeight) * 100 -
          80;
        if (scrollPercentage >= 100) {
          setScrollProgress(100);
        } else {
          setScrollProgress(scrollPercentage);
        }
      } else {
        // Element is out of view
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="lg:w-[1128px] m-auto px-4">
        <div>
          <p className="text-center text-[#202937] max-w-[812px] m-auto text-[32px]  !lg:leading-[64px] lg:text-[50px]">
            Create Demand, Maximize Profits, Fill Tables Instantly
          </p>
          <div className="relative h-full mt-8 lg:mt-20 pl-[56px]" id="info">
            <div>
              <div className="lg:mt-20 flex flex-col-reverse lg:flex-row lg:gap-[170px]">
                <div className="mt-4 lg:mt-0">
                  <p className="text-[#202937] text-[20px] lg:text-[32px] leading-[24px] lg:leading-[37.5px]">
                    More customers at the right times
                  </p>
                  <p className="dm-sans text-[#4D545F] text-[16px] lg:text-[20px] mt-2">
                    Choose how many takeaway customers you want and exactly when
                    you want them. Optimise your kitchen output and maximise
                    your revenue.
                  </p>
                  <Link href={"/takeaway"}>
                    <div
                      className="flex items-center gap-2 underline mt-2"
                      style={{ textDecorationColor: "#D8B448" }}
                    >
                      <p className="text-[#D8B448] dm-sans text-[16px] font-[700]">
                        Explore Takeaway
                      </p>
                      <ArrowRight size="20" stroke="" color="#D8B448" />
                    </div>
                  </Link>
                </div>
                <div className="relative">
                  <div className=" bg-[#FCF9F0] w-[58px] h-[58px] flex justify-center items-center rounded-full absolute left-[-62px] lg:left-[-96px] z-10">
                    <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                      01
                    </div>
                  </div>
                  <CustomImage
                    url="/assets/images/overview-timeline-image1.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px]"
                  />
                </div>
              </div>
              <div className="lg:mt-20 flex flex-col lg:flex-row lg:gap-[90px] mt-12">
                <div className=" flex lg:hidden bg-[#FCF9F0] w-[58px] h-[58px]  justify-center items-center rounded-full absolute left-[-6px] lg:left-[-108px] z-10">
                  <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                    02
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <CustomImage
                    url="/assets/images/overview-timeline-image2.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px]"
                  />
                </div>
                <div className="relative mt-[35px] lg:mt-0">
                  <div className=" hidden lg:flex bg-[#FCF9F0] w-[58px] h-[58px]  justify-center items-center rounded-full absolute left-[-62px] lg:left-[-108px] z-10">
                    <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                      02
                    </div>
                  </div>
                  <div>
                    <p className="text-[#202937] text-[20px] lg:text-[32px] leading-[24px] lg:leading-[37.5px]">
                      Fill spare tables during off-peak hours
                    </p>
                    <p className="dm-sans text-[#4D545F] text-[16px] lg:text-[20px]  mt-2">
                      Build atmosphere, attract more walk-ins and make a profit
                      on tables that would have gone empty.
                    </p>
                    <Link href={"/dinein"}>
                      <div
                        className="flex items-center gap-2 underline mt-2"
                        style={{ textDecorationColor: "#D8B448" }}
                      >
                        <p className="text-[#D8B448] dm-sans text-[16px] font-[700]">
                          Explore dine-in
                        </p>
                        <ArrowRight size="20" stroke="" color="#D8B448" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:mt-20 flex flex-col-reverse lg:flex-row lg:gap-[170px] mt-12 ">
                <div className="mt-4 lg:mt-0">
                  <p className="text-[#202937] text-[20px] lg:text-[32px] leading-[24px] lg:leading-[37.5px]">
                    Bye-bye commissions, hello profits!
                  </p>
                  <p className="dm-sans text-[#4D545F] text-[16px] lg:text-[20px]  mt-2  lg:mb-0">
                    Say goodbye to high commission fees and hello to increased
                    profits with Bluedip. Keep more money in your pocket and
                    less on the table!
                  </p>
                </div>
                <div className="relative">
                  <div className=" bg-[#FCF9F0] w-[58px] h-[58px] flex justify-center items-center rounded-full absolute left-[-62px] lg:left-[-96px] z-10">
                    <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                      03
                    </div>
                  </div>
                  <CustomImage
                    url="/assets/images/overview-timeline-image3.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px] lg:mb-[40px]"
                  />
                </div>
              </div>
              <div className="lg:mt-20 flex flex-col lg:flex-row lg:gap-[90px] mt-12">
                <div className=" flex lg:hidden bg-[#FCF9F0] w-[58px] h-[58px]  justify-center items-center rounded-full absolute left-[-6px] lg:left-[-108px] z-10">
                  <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                    02
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <CustomImage
                    url="/assets/images/overview-timeline-image4.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px]"
                  />
                </div>
                <div className="relative mt-[35px] lg:mt-0">
                  <div className=" hidden lg:flex bg-[#FCF9F0] w-[58px] h-[58px]  justify-center items-center rounded-full absolute left-[-62px] lg:left-[-108px] z-10">
                    <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                      04
                    </div>
                  </div>
                  <div>
                    <p className="text-[#202937] text-[20px] lg:text-[32px] leading-[24px] lg:leading-[37.5px]">
                      Reach more than 45 million diners
                    </p>
                    <p className="dm-sans text-[#4D545F] text-[16px] lg:text-[20px]  mt-2">
                      Acquire new customers by listing on the Bluedip
                      marketplace. Build awareness for your brand and reach new
                      customers directly via the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1.6px] !h-full bg-[#989DA3] absolute top-0 left-[21px] lg:left-0 lg:m-auto lg:right-0">
              <motion.div
                className="w-[1.6px]  bg-[#D8B448] relative top-0  left-0 lg:m-auto lg:right-0"
                style={{ height: `${scrollProgress}%` }}
              ></motion.div>
            </div>
          </div>
        </div>
        {/* <CustomImage
          url="/assets/images/curve.svg"
          className=" w-[45%] h-[160px] lg:mb-[40px] relative left-[20.5px] lg:hidden"
          ObjectFit="none"
        /> */}
        <img
          src="/assets/images/curve.svg"
          alt=""
          className="w-[45%] relative left-[1.28rem] lg:hidden"
        />
        <div className="bg-[#D8B448] h-[2px] w-[12.5%] m-auto"></div>
        <p className="dm-sans text-[20px] text-[#202937] mt-2 text-center">
          Our Point of Sales
        </p>
      </div>
    </>
  );
}
