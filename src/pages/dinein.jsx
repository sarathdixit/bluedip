/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Button from "@/modules/common/components/button/button";
import DineinGrid from "@/modules/common/components/dineinGrid";
import DineInTimeline from "@/modules/common/components/dineinTimeline";
import CustomImage from "@/modules/common/components/image/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function Dinein() {
  const settings = {
    dots: false, // Hide the dots
    arrows: false, // Hide the original arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Center the items
    centerPadding: "0", // Adjust the padding as needed
  };
  const sliderRef = React.useRef();
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url("/assets/images/Homebackground.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-4 pb-[68px]"
      >
        <div className="lg:w-[747px] m-auto py-[36px] lg:py-[48px]">
          <p className="text-center font-[400] mt-4  text-[40px] lg:text-[62px] text-[#202937] leading-[47px] lg:leading-[74px]">
            Never An Empty Venue, During Off-Peak Hours
          </p>
          <p className="text-center font-[500] mt-4 dm-sans text-[20px] text-[#202937]">
            Use Bluedip to maximize profitability by filling empty tables even
            during off-peak hours
          </p>
        </div>
        <div className="">
          {/* <CustomImage
            url="/assets/images/dinein-grid.svg"
            className="w-[1036px] h-[120px] m-auto hidden lg:block"
          />
          <CustomImage
            url="/assets/images/dinein-points.svg"
            className="w-[100%] h-[172px] m-auto  lg:hidden"
          /> */}
          <DineinGrid />
        </div>
      </section>
      <section className="py-[42px] lg:py-[120px] text-center">
        <DineInTimeline />
        <div className="border-[1px] border-[#989DA330] ">
          {/* <div className="text-center m-auto max-w-[1033px] py-[40px]">
            <img src="/assets/images/dinein-timline-grid.svg" />
          </div> */}
          <div className="lg:flex max-w-[1033px] gap-[150px] px-[16px] lg:px-0 justify-center m-auto py-[40px]">
            <div>
              <div className="">
                <img
                  src="/assets/images/dinein-timeline-grid-image.svg"
                  alt=""
                  className="m-auto lg:ml-0"
                />
              </div>
              <div>
                <p className="text-[20px] text-center lg:text-left">
                  No staff training
                </p>
                <p className="text-[16px] dm-sans text-[#929496] text-center lg:text-left">
                  Head to the app store and be up and running within minutes.
                </p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="text-center">
                <img
                  src="/assets/images/dinein-timeline-grid-image2.svg"
                  alt=""
                  className="m-auto lg:ml-0"
                />
              </div>
              <div>
                <p className="text-[20px] text-center  lg:text-left">
                  Complete control
                </p>
                <p className="text-[16px] dm-sans text-[#929496]  text-center lg:text-left">
                  Put offers up, hit the pause button or take them down if
                  you’re getting too busy.
                </p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="text-center">
                <img
                  src="/assets/images/dinein-timeline-grid-image3.svg"
                  alt=""
                  className="m-auto lg:ml-0"
                />
              </div>
              <div>
                <p className="text-[20px] text-center lg:text-left">
                  Real-time visibility
                </p>
                <p className="text-[16px] dm-sans text-[#929496] text-center lg:text-left">
                  Digital dashboards and weekly reporting gives you instant
                  access and oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="/assets/images/dinein-timline-grid-mobile.svg"
          className="lg:hidden w-full"
        /> */}
      </section>
      {/* <section className="bg-[#FCF9F0] py-10 lg:py-[60px] px-4">
        <p className="text-center font-[400] text-[32px] lg:text-[48px] lg:w-[520px] m-auto text-[#202937] leading-[47px] lg:leading-[74px]">
          Tap into a rapidly growing marketplace
        </p>
        <div className="bg-[#F9F4E5] lg:w-[983px] m-auto mt-[24px] lg:mt-[60px] flex flex-col lg:flex-row gap-6 justify-between py-[32px] lg:px-[48px]">
          <div>
            <p className="text-[#202937] text-[32px] text-center">283k</p>
            <p className="text-[#6A7079] dm-sans text-[20px] text-center">
              Monthly active customers
            </p>
          </div>
          <div>
            <p className="text-[#202937] text-[32px] text-center">10.34k</p>
            <p className="text-[#6A7079] dm-sans text-[20px] text-center">
              New customers every month
            </p>
          </div>
          <div>
            <p className="text-[#202937] text-[32px] text-center">283k</p>
            <p className="text-[#6A7079] dm-sans text-[20px] text-center">
              Average order value
            </p>
          </div>
        </div>
      </section> */}
      <section className="px-4 pb-[48px] lg:pb-[120px]">
        {/* <div>
          <p className="text-center font-[400] text-[32px] lg:text-[48px] lg:w-[520px] m-auto text-[#202937] leading-[74px]mb-6 lg:mb-[60px]">
            Our Reviews
          </p>
          <Slider {...settings} ref={sliderRef}>
            <CustomImage
              url="/assets/images/review.svg"
              className=" lg:w-[1061px] h-[421px] m-auto hidden lg:block"
            />
            <CustomImage
              url="/assets/images/review.svg"
              className=" lg:w-[1061px] h-[421px] m-auto hidden lg:block"
            />
            <CustomImage
              url="/assets/images/review.svg"
              className=" lg:w-[1061px] h-[421px] m-auto hidden lg:block"
            />
            <CustomImage
              url="/assets/images/review.svg"
              className=" lg:w-[1061px] h-[421px] m-auto hidden lg:block"
            />
            <CustomImage
              url="/assets/images/review-mobile.svg"
              className=" w-[100%] h-[700px] m-auto lg:hidden"
            />
            <CustomImage
              url="/assets/images/review-mobile.svg"
              className=" w-[100%] h-[700px] m-auto lg:hidden"
            />
            <CustomImage
              url="/assets/images/review-mobile.svg"
              className=" w-[100%] h-[700px] m-auto lg:hidden"
            />
          </Slider>
          <div className="flex gap-16 justify-center lg:mt-12 lg:pb-[100px]">
            <div onClick={goToPrevSlide}>
              <CustomImage
                url="/assets/images/saffron arrow lft.svg"
                className="w-[48px] h-[48px] cursor-pointer"
              />
            </div>
            <div onClick={goToNextSlide}>
              <CustomImage
                url="/assets/images/saffron arrow rt.svg"
                className="w-[48px] h-[48px]  cursor-pointer"
              />
            </div>
          </div>
        </div> */}

        <div className="bg-[#FCF9F0] flex flex-col items-center  justify-between lg:flex-row max-w-[1267px] m-auto px-[42px] py-[34px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <CustomImage
              url={"/assets/images/package.svg"}
              className="w-full lg:w-[180px] h-[220.489px] lg:h-[121px]"
            />
            <div>
              <p className="text-[32px] lg:text-[40px]  font-[400] leading-[47px] text-center lg:text-left">
                Takeaway more revenue
              </p>
              <p className="dm-sans text-center mt-4 lg:text-left max-w-[450px] ">
                Would love an increase in take-away orders? Our dynamic pricing
                technology helps you do just that.
              </p>
            </div>
          </div>
          <div>
            <Link href={"/takeaway"}>
              <Button
                title="Explore TakeAway"
                BtnClassName="mt-5 min-w-[170px]"
                iconClassName={"h-[14px] w-[14px] ml-2"}
                icon={"/assets/images/nextarrow.svg"}
              />
            </Link>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: 'url("/assets/images/footerbackground.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-[42px]"
      >
        <div className="">
          <p className="text-[20px] px-4 text-center text-white max-w-[726px] m-auto lg:text-[32px]">
            Book your free consult and get personalised strategies from a
            Bluedip
            <span className="text-[#D8B448]"> Restaurant Consultant.</span>
          </p>
          <Button
            title="Get Started"
            BtnClassName="w-[136px] m-auto mt-6"
            cta={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdwthFELcWB2dafpGNjn9M9XaCq2DEOal5zeyaZ4BEyCa4F9A/viewform"
              )
            }
          />
        </div>
      </section>
    </main>
  );
}
