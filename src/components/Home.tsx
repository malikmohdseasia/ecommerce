import { useState } from "react";
import IMG1 from "../assets/Home/image1.png";
import IMG2 from "../assets/Home/image2.png";
import IMG3 from "../assets/Home/image3.png";
import {
  ArrowCol,
  ArrowIcon,
  CompereIcon,
  fifty,
  LikeIcon,
  newIcon,
  ShareIcon,
  thirty,
} from "../assets/Icons";
import IMG4 from "../assets/Home/image4.png";
import IMG5 from "../assets/Home/image5.png";
import IMG6 from "../assets/Home/image6.png";
import IMG7 from "../assets/Home/image7.png";
import IMG8 from "../assets/Home/image8.png";
import IMG9 from "../assets/Home/image9.png";
import IMG10 from "../assets/Home/Image10.png";
import IMG11 from "../assets/Home/Image11.png";
import IMG from "../assets/Home/img.png";
import SLIDERIMG1 from "../assets/Home/sliderImg1.png";
import SLIDERIMG2 from "../assets/Home/sliderImg2.png";
import SLIDERIMG3 from "../assets/Home/sliderImg2.png";

import IMG36 from "../assets/Home/Rectangle 36.png";
import IMG37 from "../assets/Home/Rectangle 37.png";
import IMG38 from "../assets/Home/Rectangle 38.png";
import IMG39 from "../assets/Home/Rectangle 39.png";
import IMG40 from "../assets/Home/Rectangle 40.png";
import IMG41 from "../assets/Home/Rectangle 41.png";
import IMG42 from "../assets/Home/Rectangle 43.png";
import IMG43 from "../assets/Home/Rectangle 44.png";
import IMG44 from "../assets/Home/Rectangle 45.png";

const Home = () => {
  const sliderImages = [SLIDERIMG1, SLIDERIMG2, SLIDERIMG3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const items1 = [
    { title: "Dining", img: IMG1 },
    { title: "Living", img: IMG2 },
    { title: "Bedroom", img: IMG3 },
  ];
  const items2 = [
    {
      title: "Syltherine",
      img: IMG4,
      desc: "Stylish cafe chair",
      price1: "Rp 2.500.000",
      price2: "Rp 3.500.000",
      svg: thirty,
    },
    {
      title: "Leviosa",
      img: IMG5,
      desc: "Stylish cafe chair",
      price1: "Rp 2.500.000",
      price2: "",
    },
    {
      title: "Lolito",
      img: IMG6,
      desc: "Luxury big sofa",
      price1: "Rp 7.000.000",
      price2: "Rp 14.000.000",
      svg: fifty,
    },
    {
      title: "Respira",
      img: IMG7,
      desc: "Outdoor bar table and stool",
      price1: "Rp 500.000",
      price2: "",
      svg: newIcon,
    },
    {
      title: "Grifo",
      img: IMG8,
      desc: "Night lamp",
      price1: "Rp 1.500.000",
      price2: "",
    },
    {
      title: "Muggo",
      img: IMG9,
      desc: "Small mug",
      price1: "Rp 150.000",
      price2: "",
      svg: newIcon,
    },
    {
      title: "Pingky",
      img: IMG10,
      desc: "Cute bed set",
      price1: "Rp 7.000.000",
      price2: "Rp 14.000.000",
      svg: fifty,
    },
    {
      title: "Potty",
      img: IMG11,
      desc: "Minimalist flower pot",
      price1: "Rp 500.000",
      price2: "",
      svg: newIcon,
    },
  ];

  return (
    <div className="mb-12.5">
      <div
        className={`bg-[url(./assets/home.jpg)] h-screen bg-cover bg-center w-full`}
      >
        <div className="flex justify-end">
          <div></div>
          <div className="bg-[#FFF3E3] pt-15.5 pb-9.25 mr-14.5 pl-9.75 pr-10.75 mt-38.25">
            <h1 className="font-semibold font-poppins text-home">
              New Arrival
            </h1>
            <h2 className="font-bold font-poppins text-[52px]  text-[#B88E2F]">
              Discover Our <br /> New Collection
            </h2>
            <p className="font-medium text-[18px] text-home">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
              elit tellus, luctus nec ullamcorper mattis.
            </p>

            <button className="text-[#FFFFFF] cursor-pointer bg-[#B88E2F] py-6.25 px-18 font-poppins font-bold mt-11.5">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h1 className="font-bold font-poppins text-[32px] text-home text-center">
          Browse The Range
        </h1>
        <p className="font-poppins text-[20px] text-details text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="mt-15.5 flex gap-5 items-center justify-center">
        {items1.map((item, index) => (
          <div key={index} className="flex flex-col gap-7.5 items-center">
            <img src={item.img} alt="" />
            <p className="font-poppins font-semibold text-[24px] text-home">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="">
        <h1 className="font-poppins font-bold text-[#3A3A3A] text-[40px] text-center mt-14">
          Our Products
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {items2.map((item, index) => (
            <div key={index} className="bg-[#F4F5F7] mb-8 relative group">
              <div className="relative">
                <img src={item.img} alt="product" />

                <div className="py-4 px-5">
                  <h1 className="font-poppins font-semibold text-[24px] text-[#3A3A3A] mt-4">
                    {item.title}
                  </h1>

                  <p className="font-poppins font-medium text-[#898989]">
                    {item.desc}
                  </p>

                  <div className="mt-2 flex gap-4 items-center">
                    <p className="font-poppins text-[#3A3A3A] font-semibold">
                      {item.price1}
                    </p>
                    <p className="font-poppins text-[#B0B0B0] line-through">
                      {item.price2}
                    </p>
                  </div>
                </div>

                <div className="absolute top-6 right-6 z-10">{item.svg}</div>
                <div
                  className="absolute z-30 inset-0 bg-[#3A3A3A] opacity-0 group-hover:opacity-80 transition-opacity duration-300
        flex items-center justify-center
        "
                >
                  <div className="flex flex-col gap-6 items-center">
                    <button className="text-[#B88E2F] cursor-pointer font-poppins font-semibold py-3 px-13 bg-white  ">
                      Add to cart
                    </button>
                    <div className="flex gap-5">
                      <div className="flex items-center gap-1 font-poppins text-[#FFFFFF] cursor-pointer">
                        {ShareIcon}
                        <button className="cursor-pointer">Share</button>
                      </div>

                      <div className="flex items-center gap-1 font-poppins text-[#FFFFFF] cursor-pointer">
                        {CompereIcon}
                        <button className="cursor-pointer">Compare</button>
                      </div>

                      <div className="flex items-center gap-1 font-poppins text-[#FFFFFF] cursor-pointer">
                        {LikeIcon}
                        <button className="cursor-pointer">Like</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-17.25 flex items-center justify-center ">
        <button className="cursor-pointer font-poppins text-[#B88E2F] font-semibold border border-[#B88E2F] py-3 px-18.5">
          Show More
        </button>
      </div>

      <div className="bg-[#FCF8F3]  flex  items-center justify-center pl-25 gap-6 py-11">
        <div>
          <h1 className="text-[#3A3A3A] font-poppins font-bold text-[40px]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="font-poppins text-[#3A3A3A]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] text-white font-semibold font-poppins py-3 px-9 mt-6.25">
            Explore More
          </button>
        </div>

        <div className="relative">
          <img src={IMG} alt="" />
          <div className="absolute top-75 left-6 px-4 py-7 bg-white opacity-80">
            <div className="flex items-center gap-2">
              <p className="font-poppins font-medium text-[#616161]">01</p>
              <hr className="w-6.75 text-[#616161] " />
              <p className="font-poppins font-medium text-[#616161]">
                Bed Room
              </p>
            </div>
            <div>
              <h1 className="font-poppins text-[#3A3A3A] font-semibold text-[18px]">
                Inner Peace
              </h1>
            </div>
          </div>
          <div className="absolute top-90 left-49.5">{ArrowCol}</div>
        </div>

        <div className="relative w-100">
          <img
            src={sliderImages[currentSlide]}
            alt=""
            className="w-70 transition-all duration-500 h-104 "
          />

          <div className="mt-10 flex gap-2 ">
            {sliderImages.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index
                    ? "bg-[#B88E2F] border-[#B88E2F]"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentSlide(
                currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1
              )
            }
            className="absolute top-1/2 right-0   cursor-pointer "
          >
            {ArrowIcon}
          </button>
        </div>
      </div>

      <div className="mt-16.75">
        <h1 className="font-poppins text-[#616161] text-[20px] font-semibold text-center">
          Share your setup with
        </h1>
        <h1 className="font-Montserrat text-[40px] font-bold text-center">
          #FuniroFurniture
        </h1>

        <div className="mt-10 flex justify-center gap-4 overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img src={IMG36} className="h-95.5" />
              <img src={IMG38} className="h-78 w-112.75" />
            </div>
            <div className="flex gap-4">
              <img src={IMG37} className="h-80.75" />
              <img src={IMG39} className="h-60.5 w-86" />
            </div>
          </div>

          <div className="flex items-center">
            <img src={IMG40} className="h-98 w-73.75" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img src={IMG42} className="w-72.5 h-87" />
              <img src={IMG44} className="h-108.25" />
            </div>
            <div className="flex gap-4">
              <img src={IMG41} className="h-60.5" />
              <img src={IMG43} className="h-49" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
