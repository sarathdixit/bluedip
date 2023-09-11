import React, { useEffect, useState } from "react";
import CustomImage from "../image/image";
import { motion } from "framer-motion";

export default function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const div2 = document.querySelector("#info");
      const boundingBox = div2.getBoundingClientRect();

      if (boundingBox.top < window.innerHeight && boundingBox.bottom > 0) {
        // Element is in view
        const scrollPercentage =
          ((window.innerHeight - boundingBox.top) / window.innerHeight) * 100 -
          30;
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
      <div className="lg:w-[1128px] m-auto mt-[100vh] px-4">
        <div>
          <p className="text-center text-[#202937] text-[32px] lg:text-[50px]">
            Get More Customers with 2 Simple Steps
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
                    url="/assets/images/dinein-timeline-image.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px]"
                  />
                </div>
              </div>
              <div className="lg:mt-20 flex flex-col-reverse lg:flex-row lg:gap-[170px]">
                <div className="mt-4 lg:mt-0">
                  <CustomImage
                    url="/assets/images/dinein-timeline-image2.svg"
                    className=" w-[268px] h-[198px] lg:w-[480px] lg:h-[355px]"
                  />
                </div>
                <div className="relative mt-[35px] lg:mt-0">
                  <div className=" bg-[#FCF9F0] w-[58px] h-[58px] flex justify-center items-center rounded-full absolute left-[-62px] lg:left-[-186px] z-10">
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
        {/* mobile responsiveness */}
        {/* <div>
          <p className="text-center text-[#202937] text-[50px]">
            Get More Customers with 2 Simple Steps
          </p>
          <div className="relative h-full flex px-4 " id="info">
            <div className="pl-8">
              <div>
                <div className="">
                  <p className="text-[#202937] text-[32px] leading-[37.5px]">
                    Post exclusive offers to a world of new customers
                  </p>
                  <p className="dm-sans text-[#4D545F] text-[20px] mt-4">
                    Tailor offers to suit your business by setting the day, time
                    & offer percentage. See real-time predictions on how many
                    customers and revenue you’re likely to receive.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-[#FCF9F0] w-[58px] h-[58px] flex justify-center items-center rounded-full absolute left-[-114px] z-10">
                    <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                      01
                    </div>
                  </div>
                  <CustomImage
                    url="/assets/images/dinein-timeline-image.svg"
                    className="w-[100%] h-[355px]"
                  />
                </div>
              </div>
              <div className="mt-20 flex gap-[170px]">
                <div>
                  <CustomImage
                    url="/assets/images/dinein-timeline-image2.svg"
                    className="w-[100%]  h-[355px]"
                  />
                </div>
                <div className="w-[50%]">
                  <div className="relative">
                    <div className="bg-[#FCF9F0] w-[58px] h-[58px] flex justify-center items-center rounded-full absolute left-[-114px] z-10">
                      <div className="text-[25px] bg-[#F8F1DF] w-[44px] h-[44px] flex justify-center items-center rounded-full">
                        02
                      </div>
                    </div>
                    <p className="text-[#202937] text-[32px] leading-[37.5px]">
                      Post exclusive offers to a world of new customers
                    </p>
                    <p className="dm-sans text-[#4D545F] text-[20px] mt-4">
                      Tailor offers to suit your business by setting the day,
                      time & offer percentage. See real-time predictions on how
                      many customers and revenue you’re likely to receive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1.6px] !h-full bg-[#989DA3] absolute">
              <motion.div
                className="w-[1.6px]  bg-[#D8B448] absolute top-0 left-0 m-auto right-0"
                style={{ height: `${scrollProgress}%` }}
              ></motion.div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
