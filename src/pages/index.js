import CustomImage from "@/modules/common/components/image/image";
import React, { useState } from "react";
import Slider from "react-slick";
import Lottie from "lottie-react";
import webjson from "../modules/home/json/web.json";

export default function Index() {
  const [activeTab, setActiveTab] = useState(1);
  const settings = {
    dots: false, // Hide the dots
    arrows: false, // Hide the original arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Center the items
    centerPadding: "0", // Adjust the padding as needed
    // responsive: [
    //   {
    //     breakpoint: 1200, // Large screens
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768, // Medium screens
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 576, // Small screens
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 0, // Extra-small screens
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
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
      <div
        style={{
          backgroundImage: 'url("/assets/images/Homebackground.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[602px] m-auto py-[60px]">
          <CustomImage
            url="/assets/images/herotext.svg"
            className="w-[full] h-[148px]"
          />
          <p className="px-[54px] text-center font-[400] mt-4 dm-sans text-[20px] text-[#202937]">
            A mobile app that helps you discover local restuarants with
            exclusive offers throughout the day
          </p>
          <div className="flex gap-5 justify-center mt-8">
            <CustomImage
              url="/assets/images/App Store.svg"
              className="w-[189px] h-[61px]"
            />
            <CustomImage
              url="/assets/images/Play Store.svg"
              className="w-[202px] h-[61px]"
            />
          </div>
        </div>
        <div className="m-auto relative">
          <CustomImage
            url="/assets/images/herosection.svg"
            className="w-[1221px] h-[545px] m-auto"
          />
          <CustomImage
            url="/assets/images/info.svg"
            className="w-[1206px] h-[120px] m-auto  top-[60px]"
          />
        </div>
      </div>
      <section>
        <p className="mt-[120px] text-center text-[48px]">
          Over 500 Restaurants in Delhi
        </p>
        <div className="flex justify-center mt-4 gap-2">
          <p
            onClick={() => setActiveTab(1)}
            className={`dm-sans text-[20px] font-[400]  px-4 pb-2 border-b-[2px] cursor-pointer ${
              activeTab == 1
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            East
          </p>
          <div className="w-[1px] h-[28px] mt-1 bg-[#6A7079]"></div>
          <p
            onClick={() => setActiveTab(2)}
            className={`dm-sans text-[20px] font-[400]  px-4 border-b-[2px] cursor-pointer ${
              activeTab == 2
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            West
          </p>
          <div className="w-[1px] h-[28px] mt-1 bg-[#6A7079]"></div>
          <p
            onClick={() => setActiveTab(3)}
            className={`dm-sans text-[20px] font-[400]  px-4 border-b-[2px] cursor-pointer ${
              activeTab == 3
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            North
          </p>
          <div className="w-[1px] h-[28px] mt-1 bg-[#6A7079]"></div>
          <p
            onClick={() => setActiveTab(4)}
            className={`dm-sans text-[20px] font-[400]  px-4 border-b-[2px] cursor-pointer  ${
              activeTab == 4
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            South
          </p>
        </div>
        <div className="w-[1184px] mx-auto mt-[60px]">
          <Slider {...settings} ref={sliderRef}>
            <CustomImage
              url="/assets/images/pizza.svg"
              className="w-[372.99px] h-[355.939px]  !mx-auto"
            />

            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px] !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px]  !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px]  !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px]  !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px] !mx-auto"
              />
            </div>
          </Slider>
          <div className="flex gap-16 justify-center mt-12 pb-[100px]">
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
        </div>
      </section>
      <section>
        <div
          style={{
            backgroundImage: 'url("/assets/images/pattern-bg.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-[60px]"
        >
          <p className="text-[48px] text-[#202937] text-center max-w-[500px] m-auto mb-[60px]">
            Exclusive offers in your pocket
          </p>
          <div className="flex w-[1184px] gap-8 justify-between m-auto">
            <div>
              <div className="flex mt-4 gap-2">
                <p
                  onClick={() => setActiveTab(1)}
                  className={`text-[32px] font-[400]  px-4 pb-2 border-b-[2px] cursor-pointer ${
                    activeTab == 1
                      ? "border-b-[#D8B448] text-[#202937]"
                      : "border-b-transparent text-[#6A7079]"
                  } `}
                >
                  Dine-in
                </p>
                <div className="w-[1px] h-[38px] mt-1 bg-[#6A7079]"></div>
                <p
                  onClick={() => setActiveTab(2)}
                  className={`text-[32px] font-[400]  px-4 border-b-[2px] cursor-pointer ${
                    activeTab == 2
                      ? "border-b-[#D8B448] text-[#202937]"
                      : "border-b-transparent text-[#6A7079]"
                  } `}
                >
                  Takeaway
                </p>
              </div>
              <p className="dm-sans text-[25px] text-[#202937] font-[400] mt-5">
                Redeem a dine-in offer and enjoy up to 50% off your total bill,
                including drinks!
              </p>
              <div className="flex mt-10 gap-7">
                <div>
                  <CustomImage
                    url="/assets/images/vertical-timeline.svg"
                    className="w-[50px] h-[224px]"
                  />
                </div>
                <div>
                  <p className="dm-sans text-[20px] text-[#202937] mt-3">
                    Redeem a dine-in offer
                  </p>
                  <br />
                  <br />
                  <p className="dm-sans text-[20px] text-[#202937] mt-1">
                    Eat, drink, have a great time
                  </p>
                  <br />
                  <br />
                  <p className="dm-sans text-[20px] text-[#202937] mt-1">
                    Show your digital voucher to the venue on arrival and they
                    will apply the offer to the total bill at the end of your
                    meal.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <CustomImage
                url="/assets/images/dinnin-bg.svg"
                className="w-[576.347px] h-[504.421px] flex-1"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Lottie animationData={webjson} loop={true} />
      </section>
    </main>
  );
}
