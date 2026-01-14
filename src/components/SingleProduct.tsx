import {
  CompereIcon,
  FacebookIcon,
  fifty,
  InstaIcon,
  LIcon,
  LikeIcon,
  newIcon,
  RatingIcon,
  ShareIcon,
  thirty,
  XIcon,
  XL,
  XS,
} from "../assets/Icons";
import IMG1 from "../assets/single/image1.png";
import IMG2 from "../assets/single/image2.png";
import IMG3 from "../assets/single/image3.png";
import IMG4 from "../assets/single/image4.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import GROUP1 from "../assets/single/Group 107.png";
import GROUP2 from "../assets/single/Group 106.png";
import IMGR1 from "../assets/Home/image4.png";
import IMGR2 from "../assets/Home/image5.png";
import IMGR3 from "../assets/Home/image6.png";
import IMGR4 from "../assets/Home/image7.png";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { useParams } from "react-router-dom";

const items = [IMG1, IMG2, IMG3, IMG4];
const items2 = [
  { title: "SKU", desc: "SS001" },
  { title: "Category", desc: "Sofas" },
  { title: "Tags", desc: "Sofa, Chair, Home, Shop" },
  { title: "Share" },
];

const svgItems = [FacebookIcon, InstaIcon, XIcon];

const itemsRelated = [
  {
    title: "Syltherine",
    img: IMGR1,
    desc: "Stylish cafe chair",
    price1: "Rp 2.500.000",
    price2: "Rp 3.500.000",
    svg: thirty,
  },
  {
    title: "Leviosa",
    img: IMGR2,
    desc: "Stylish cafe chair",
    price1: "Rp 2.500.000",
    price2: "",
  },
  {
    title: "Lolito",
    img: IMGR3,
    desc: "Luxury big sofa",
    price1: "Rp 7.000.000",
    price2: "Rp 14.000.000",
    svg: fifty,
  },
  {
    title: "Respira",
    img: IMGR4,
    desc: "Outdoor bar table and stool",
    price1: "Rp 500.000",
    price2: "",
    svg: newIcon,
  },
];


const SingleProduct = ({ cartArr, setCartArr, setCartShow }: any) => {


  const formatINR = (price: any) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price * 90);
  };


  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [cartMessage, setCartMessage] = useState("");


  const getData = async () => {
    setLoading(true);
    let data: any = await fetch("https://fakestoreapi.com/products");
    data = await data.json();
    setProducts(data);
    setLoading(false)
  };

  const product = products.find((item: any) => item.id == id);

  const cartProduct = cartArr.find(
    (item: any) => item.id === product?.id
  );

  const quantity = cartProduct ? cartProduct.quantity : 0;
  console.log(quantity <= 0)

  useEffect(() => {
    getData();
  }, []);

  const handleAddToCart = () => {
    setCartMessage("");
    const existingProduct = cartArr.find(
      (item: any) => item.id === product.id
    );

    if (existingProduct && existingProduct.quantity >= 2) {
      setCartMessage("Only 2 quantities allowed for this product");
      return;
    }

    if (existingProduct) {
      const updatedCart = cartArr.map((item: any) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartArr(updatedCart);
      return;
    }

    setCartArr([
      ...cartArr,
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    ]);
  };

  const handleDecrease = () => {
    if (!cartProduct) return;

    setCartMessage("");

    if (cartProduct.quantity === 1) {
      setCartArr(cartArr.filter((item: any) => item.id !== product.id));
      return;
    }

    setCartArr(
      cartArr.map((item: any) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };




  if (!product) return <h1>Loading...!</h1>


  return (
    <>
      {loading ? (<h1>loading....</h1>) :
        <div className="">
          <div className="bg-[#F9F1E7] px-2 lg:pl-25 py-9.5 flex items-center gap-2 lg:gap-6">
            <div className="flex items-center gap-3.5">
              <Breadcrumb aria-label="Default breadcrumb example" className="flex items-center group-first:hidden ">
                <BreadcrumbItem
                  href="/home"
                  className="flex items-center"
                >
                  <p className="font-poppins font-medium text-lg">Home</p>
                </BreadcrumbItem>

                <BreadcrumbItem href="/shop" className="flex items-center">
                  <p className="font-poppins font-light text-[16px]">Shop</p>
                </BreadcrumbItem>
              </Breadcrumb>
            </div>

            <div className="flex items-center gap-3.5">

            </div>

            <div className="border-l-2 border-footer pl-8.5">
              <h1 className="font-poppins text-[12px] lg:text-[16px]">{product.title}</h1>
            </div>
          </div>

          <div className="py-8.75 px-2 lg:px-25 flex flex-col lg:flex-row gap-20.5">
            <div className="flex w-full md:justify-center lg:w-1/2 gap-2 md:px-5 lg:px-0">
              <div className="flex flex-col gap-8">
                {items.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="" className="object-contain  lg:w-full" />
                  </div>
                ))}
              </div>

              <div>
                <img src={product?.image} alt="" className="object-contain" />
              </div>
            </div>

            <div className="w-full px-2 lg:px-0 lg:w-1/2 text-center lg:text-start">
              <h1 className="font-poppins text-[18px] lg:text-[42px]">{product?.title}</h1>
              <p className="font-poppins text-lg lg:text-[24px] text-footer"> {formatINR(product?.price)}</p>
              <div className="flex justify-center lg:justify-start items-center  gap-4.5 mt-3.75">
                {RatingIcon}
                <p className="border-l border-footer pl-5.5 text-footer text-[13px]">
                  5 Customer Review
                </p>
              </div>

              <p className="font-poppins text-[13px] px-5 lg:px-0 lg:pr-25 mt-3.25">
                {product.description}
              </p>

              <p className="font-poppins text-sm text-footer mt-5.5">Size</p>

              <div className="flex gap-4 items-center mt-3 justify-center lg:justify-start">
                {LIcon}
                {XL}
                {XS}
              </div>

              <p className="text-footer font-poppins text-sm mt-4.5">Color</p>

              <div className="mt-3 flex gap-4 items-center justify-center lg:justify-start">
                <div className="bg-[#816DFA] w-7.5 h-7.5 rounded-full"></div>
                <div className="bg-[#000000] w-7.5 h-7.5 rounded-full"></div>
                <div className="bg-[#B88E2F] w-7.5 h-7.5 rounded-full"></div>
              </div>

              {cartMessage && (
                <p className="text-red-500 text-sm mt-3 font-poppins">
                  {cartMessage}
                </p>
              )}

              <div className="mt-8 flex flex-col lg:flex-row items-center gap-2.5 ">
                <div className=" cursor-pointer flex items-center justify-between px-3 border border-footer h-17 w-30.75 rounded-[10px]">
                  <button className="cursor-pointer"
                    onClick={handleDecrease}
                    disabled={quantity === 0}
                  >
                    <FaMinus />
                  </button>
                  <p className="cursor-pointer">{quantity}</p>
                  <button className="cursor-pointer"
                    onClick={handleAddToCart}
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="cursor-pointer flex items-center justify-center px-3.75 border border-footer h-17 w-53.75 rounded-[10px]"
                  onClick={()=>{quantity <=0 ? handleAddToCart() :  setCartShow(true)}}
                >
                  {
                    quantity <= 0 ? <button className="cursor-pointer"
                      onClick={handleAddToCart}
                    >Add To Cart</button> : <button className="cursor-pointer"
                      onClick={() =>
                        setCartShow(true)}

                    >Go To Cart</button>
                  }
                </div>



                <div className="cursor-pointer flex items-center justify-center gap-2.5 px-3.75 border border-footer h-17 w-53.75 rounded-[10px]">
                  <FaPlus />
                  <button className="cursor-pointer">Compare</button>
                </div>
              </div>
              <hr className="mt-15 border border-hrLine" />

              <div className="mt-10.25 flex flex-col gap-3 ">
                {items2.map((item, index) => (
                  <div className="flex justify-center lg:justify-start gap-4 " key={index}>
                    <div className="w-15 lg:w-20">
                      <p className="font-poppins text-footer">{item.title}</p>
                    </div>

                    <div className="text-footer">:</div>
                    <div className="flex flex-col lg:flex-row gap-2">
                      {item.desc?.split(',').map((itemDESC, index) => (
                        <div key={index} >

                          <p className="font-poppins text-footer">{itemDESC},
                          </p>
                        </div>
                      ))}
                      <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-6.25">
                        {item.title === "Share" &&
                          svgItems.map((item, index) => (
                            <div key={index}>{item}</div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border border-hrLine" />

          <div className="mt-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-13">
              <h1 className="text-[24px] font-poppins">Description</h1>
              <h1 className="text-[24px] font-poppins text-footer">
                Additional Information
              </h1>
              <h1 className="text-[24px] font-poppins text-footer">Reviews [5]</h1>
            </div>

            <div className="mt-9.25 flex flex-col gap-7.5 px-2 lg:px-37.5">
              <p className="font-poppins text-footer">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and sound
                of Marshall, unplugs the chords, and takes the show on the road.
              </p>

              <p className="font-poppins text-footer">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                vintage styled engineering. Setting the bar as one of the loudest
                speakers in its class, the Kilburn is a compact, stout-hearted hero
                with a well-balanced audio which boasts a clear midrange and
                extended highs for a sound that is both articulate and pronounced.
                The analogue knobs allow you to fine tune the controls to your
                personal preferences while the guitar-influenced leather strap
                enables easy and stylish travel.
              </p>
            </div>

            <div className="mt-9 flex flex-col lg:flex-row items-center justify-center gap-7.25 px-2 lg:px-25">
              <div>
                <img src={GROUP1} alt="" />
              </div>

              <div className="">
                <img src={GROUP2} alt="" />
              </div>
            </div>

            <div className="mt-16.25">
              <hr className="border border-hrLine" />
            </div>

            <h1 className="font-poppins font-medium text-[36px] text-center mt-13.75">
              Related Products
            </h1>

            <div className="mt-6.5">
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                {itemsRelated.map((item, index) => (
                  <div key={index} className="bg-[#F4F5F7] mb-8 relative group text-center lg:text-start">
                    <div className="relative">
                      <img src={item.img} alt="product" />

                      <div className="py-4 px-5">
                        <h1 className="font-poppins font-semibold text-[24px] text-[#3A3A3A] mt-4">
                          {item.title}
                        </h1>

                        <p className="font-poppins font-medium text-[#898989]">
                          {item.desc}
                        </p>

                        <div className="mt-2 flex flex-col lg:flex-row justify-between gap-4 items-center">
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
              <div className="pb-17.25 flex items-center justify-center ">
                <button className="cursor-pointer font-poppins text-[#B88E2F] font-semibold border border-[#B88E2F] py-3 px-18.5">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )

};

export default SingleProduct;
