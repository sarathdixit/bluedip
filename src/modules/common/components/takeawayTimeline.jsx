import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CustomImage from "./image/image";

export default function TakeAwayTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const div2 = document.querySelector("#info");
      const boundingBox = div2.getBoundingClientRect();

      if (boundingBox.top < window.innerHeight && boundingBox.bottom > 0) {
        // Element is in view
        const scrollPercentage =
          ((window.innerHeight - boundingBox.top) / window.innerHeight) * 100 -
          70;
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
          <p className="text-center text-[#202937] max-w-[812px] m-auto text-[32px] lg:text-[50px]">
            Make your profit consistent with Bluedip
          </p>
          <div className="relative h-full mt-6 pl-[56px]" id="info">
            <div>
              <div className="lg:mt-20 flex flex-col-reverse lg:flex-row lg:gap-[170px]">
                <div className="mt-4 lg:mt-0">
                  <p className="text-[#202937] text-[20px] lg:text-[32px] leading-[24px] lg:leading-[37.5px]">
                    Post exclusive offers to a world of new customers
                  </p>
                  <p className="dm-sans text-[#4D545F] text-[20px] mt-4">
                    Tailor offers to suit your business by setting the day, time
                    & offer percentage. See real-time predictions on how many
                    customers and revenue you’re likely to receive.
                  </p>
                </div>
                <div className="relative">
                  <div className=" bg-[#FCF9F0] w-[58px] h-[58px] flex justify-center items-center rounded-full absolute left-[-62px] lg:left-[-96px] z-10">
                    <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                      01
                    </div>
                  </div>
                  <CustomImage
                    url="/assets/images/takeawat-timeline-image1.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px]"
                  />
                </div>
              </div>
              <div className="lg:mt-20 flex flex-col lg:flex-row lg:gap-[90px] mt-6">
                <div className=" flex lg:hidden bg-[#FCF9F0] w-[58px] h-[58px]  justify-center items-center rounded-full absolute left-[-6px] lg:left-[-108px] z-10">
                  <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                    02
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <CustomImage
                    url="/assets/images/takeawat-timeline-image2.svg"
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
                      Discreet & operationally seamless experience
                    </p>
                    <p className="dm-sans text-[#4D545F] text-[20px] mt-4">
                      View an incoming order, select how long you need to
                      prepare and easily print the order straight to your
                      kitchen.
                    </p>
                    <div className="mt-4">
                      <div className="flex gap-2 items-center">
                        <CustomImage
                          url="/assets/images/tick.svg"
                          className=" w-[22px] h-[22px]"
                        />
                        <p className="dm-sans text-[16px] lg:text-[20px] text-[#4D545F]">
                          Customer redeems your offer
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <CustomImage
                          url="/assets/images/tick.svg"
                          className=" w-[22px] h-[22px]"
                        />
                        <p className="dm-sans text-[16px] lg:text-[20px] text-[#4D545F]">
                          Arrives & enjoys their meal
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <CustomImage
                          url="/assets/images/tick.svg"
                          className=" w-[22px] h-[22px]"
                        />
                        <p className="dm-sans text-[16px] lg:text-[20px] text-[#4D545F]">
                          Shows the voucher to avail the offer
                        </p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <CustomImage
                          url="/assets/images/tick.svg"
                          className=" w-[22px] h-[22px]"
                        />
                        <p className="dm-sans text-[16px] lg:text-[20px] text-[#4D545F]">
                          Taps & pays with their digital card
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:mt-20 flex flex-col-reverse lg:flex-row lg:gap-[170px] mt-6 ">
                <div className="mt-4 lg:mt-0">
                  <p className="text-[#202937] text-[20px] lg:text-[32px] leading-[24px] lg:leading-[37.5px]">
                    Control seamlessly from a central location
                  </p>
                  <p className="dm-sans text-[#4D545F] text-[20px] mt-4  lg:mb-0">
                    Manage your menu, mark items out of stock, update your
                    offers or temporarily put things on pause, all from the
                    convenience of our apps.
                  </p>
                </div>
                <div className="relative">
                  <div className=" bg-[#FCF9F0] w-[58px] h-[58px] flex justify-center items-center rounded-full absolute left-[-62px] lg:left-[-96px] z-10">
                    <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                      03
                    </div>
                  </div>
                  <CustomImage
                    url="/assets/images/takeawat-timeline-image3.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px] lg:mb-[40px]"
                  />
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
        <CustomImage
          url="/assets/images/curve.svg"
          className=" w-[45%] h-[160px] lg:mb-[40px] relative left-[20.5px] lg:hidden"
          ObjectFit="none"
        />
        <div className="bg-[#D8B448] h-[2px] w-[12.5%] m-auto"></div>
        <p className="dm-sans text-[20px] text-[#202937] mt-2 text-center">
          Our Point of Sales
        </p>
      </div>
    </>
  );
}
