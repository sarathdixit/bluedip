import Button from "@/modules/common/components/button/button";
import Comingsoon from "@/modules/common/components/comingSoon";
import CustomImage from "@/modules/common/components/image/image";
import TakeawayGrid from "@/modules/common/components/takeawayGrid";
import TakeAwayTimeline from "@/modules/common/components/takeawayTimeline";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function Takeaway() {
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
        <div className="lg:w-[747px] m-auto py-[36px] lg:py-[60px]">
          <p className="text-center font-[400] mt-4 text-[40px] lg:text-[62px] text-[#202937] leading-[47px] lg:leading-[74px]">
            Boosting Revenue Through Strategic Takeaways
          </p>
          <p className="text-center font-[500] mt-4 dm-sans text-[20px] text-[#202937]">
            Increase takeaway revenue by posting offers and make sure customers
            only order when you choose to drive extra sales.
          </p>
        </div>
        <div className="">
          {/* <CustomImage
            url="/assets/images/takeaway-grid.svg"
            className="w-[1036px] h-[120px] m-auto hidden lg:block"
          />
          <CustomImage
            url="/assets/images/takeaway-grid-mobile.svg"
            className="w-[100%] h-[172px] m-auto  lg:hidden"
          /> */}
          <TakeawayGrid />
        </div>
      </section>
      <section className="py-[42px] lg:py-[120px]">
        <TakeAwayTimeline />
        <div className="mt-6">
          <Comingsoon />
        </div>
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

        <div className="bg-[#FCF9F0] flex flex-col justify-between items-center lg:flex-row  max-w-[1267px] m-auto px-[42px] py-[34px]">
          <div className="flex flex-col lg:flex-row gap-6">
            <CustomImage
              url={"/assets/images/dinein-vector-icon.svg"}
              className="w-full lg:w-[180px] h-[220.489px] lg:h-[121px]"
            />
            <div>
              <p className="text-[32px] lg:text-[40px] font-[400] leading-[47px] text-center lg:text-left">
                Never an empty venue
              </p>
              <p className="dm-sans text-center mt-4 max-w-[450px]  lg:text-left">
                Find out how our Dynamic Pricing Marketplace can help increase
                your dine-in at days and times you want.
              </p>
            </div>
          </div>
          <div>
            <Link href={"/dinein"}>
              <Button
                title="Explore Dine in"
                BtnClassName="mt-5 min-w-[170px]"
                icon={"/assets/images/nextarrow.svg"}
                iconClassName={"h-[14px] w-[14px] ml-2"}
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
        <p className="text-[20px] px-4 text-center text-white max-w-[726px] m-auto lg:text-[32px]">
          Book your free consult and get personalised strategies from a Bluedip
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
      </section>
    </main>
  );
}
