import { useEffect, useState } from "react";
import {
  AwardIcon,
  CompereIcon,
  Filter,
  FourDot,
  LikeIcon,
  ShareIcon,
  Shipping,
  Support,
  Warranty,
} from "../assets/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

const Shop = () => {
  const [products, setProducts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const itemsPerPage = 4;

  const getData = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    data = await data.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const isLastPage = currentPage === totalPages;
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname.slice(1)

  return (
    <div>
      <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>

        <div className="relative z-20 flex flex-col items-center justify-center ">
          <h1 className="text-[#000000] text-[48px] font-medium">Shop</h1>
          <div className="flex items-center">
            
            <Breadcrumb  aria-label="Default breadcrumb example">
              <BreadcrumbItem href="/home" >
                <p className="font-poppins font-medium">Home</p>
              </BreadcrumbItem>
      

              <BreadcrumbItem href="/shop"  >
            <p className="font-poppins font-light text-[16px]">{path}</p>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F1E7] flex justify-between items-center py-8.75 px-25">
        <div className="flex items-center gap-6">
          {Filter}
          <h1 className="font-poppins text-[20px]">Filter</h1>
          {FourDot}
          <p className="border-l-2 border-footer px-8.5 font-poppins">
            Showing 1–16 of 32 results
          </p>
        </div>

        <div className="flex items-cente gap-7.25">
          <div className="flex items-center gap-4.25">
            <h1 className="font-poppins text-[20px]">Show</h1>
            <p className="font-poppins text-[20px] text-footer bg-white py-3 px-4.5">
              {currentProducts.length}
            </p>
          </div>

          <div className="flex items-center gap-4.25">
            <p className="font-poppins text-[20px]">Short by</p>
            <p className="font-poppins text-[20px] text-footer bg-white py-3 pl-7.5 pr-21.5">
              Default
            </p>
          </div>
        </div>
      </div>

      <div className="mt-15.75 flex flex-wrap justify-center gap-8">
        {currentProducts && currentProducts?.map((item: any, index: any) => (
          <div key={index} className="bg-[#F4F5F7] relative group w-60 h-90 
          "
            onClick={() => navigate(`/shop/${item.id}`)}
          >
            <div className="relative">
              <img src={item.image} alt="product" className="w-60 h-60 p-5" />

              <div className="py-4 px-5">
                <h1 className="font-poppins font-semibold text-[12px] text-[#3A3A3A] mt-4 line-clamp-2  ">
                  {item.title}
                </h1>

                <div className="mt-2 flex gap-4 items-center">
                  <p className="font-poppins text-[#3A3A3A] font-semibold">
                    ${Math.round(item.price)}
                  </p>
                </div>
              </div>

              <div
                className="absolute z-30 inset-0 bg-[#3A3A3A] opacity-0 group-hover:opacity-80 transition-opacity duration-300
              flex items-center justify-center
              "
              >
                <div className="flex flex-col gap-6 items-center ">
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

      <div className=" flex items-center gap-9.5 justify-center mt-17.5">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`cursor-pointer font-poppins text-[20px] w-15 h-15 rounded-[10px]   ${currentPage === index + 1
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7]"
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev: any) => prev + 1)}
          disabled={isLastPage}
          className={` w-15 h-15 rounded-[10px] 
    ${isLastPage
              ? "bg-[#B88E2F] text-white cursor-not-allowed"
              : "bg-[#F9F1E7]"
            }`}
        >
          Next
        </button>
      </div>

      <div className="bg-[#FAF3EA] py-25 px-13.25 flex justify-between items-center gap-3 mt-21.25 ">
        <div className="flex items-center gap-2.5">
          <div>{AwardIcon}</div>
          <div>
            <h1 className="text-[#242424] text-[25px] font-poppins font-semibold">
              High Quality
            </h1>
            <p className="text-[#898989] text-[20px] font-medium font-poppins">
              crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div>{Warranty}</div>
          <div>
            <h1 className="text-[#242424] text-[25px] font-poppins font-semibold">
              Warranty Protection
            </h1>
            <p className="text-[#898989] text-[20px] font-medium font-poppins">
              Over 2 years
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div>{Shipping}</div>

          <div>
            <h1 className="text-[#242424] text-[25px] font-poppins font-semibold">
              Free Shipping
            </h1>
            <p className="text-[#898989] text-[20px] font-medium font-poppins">
              Order over 150 $
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div>{Support}</div>

          <div>
            <h1 className="text-[#242424] text-[25px] font-poppins font-semibold">
              24 / 7 Support
            </h1>
            <p className="text-[#898989] text-[20px] font-medium font-poppins">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
