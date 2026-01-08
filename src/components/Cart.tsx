import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import {
    AwardIcon,
    DeleteIcon,
    Shipping,
    Support,
    Warranty,
} from "../assets/Icons";
import Logo from "../assets/Navbar/logo.png";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartArr, setCartArr }: any) => {
    
    const removeItem = (id: any) => {
        const updatedCart = cartArr.filter((item: any) => item.id !== id);
        setCartArr(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

   
    let subtotal = 0;
    cartArr.forEach((item: any) => {
        subtotal += item.price * item.quantity * 83;
    });
    subtotal = Math.round(subtotal);

    const navigate = useNavigate();

    return (
        <div className="">
             <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
            
                    <div className="relative z-20 flex flex-col items-center justify-center ">
                        <img src={Logo} alt="" className="object-contain" />
                        
                      <h1 className="text-[#000000] text-[48px] font-medium">Cart</h1>
                      <div className="flex items-center">
                        
                        <Breadcrumb aria-label="Default breadcrumb example">
                          <BreadcrumbItem href="/home" >
                            <p className="font-poppins font-medium">Home</p>
                          </BreadcrumbItem>
                        </Breadcrumb>
            
                        <Breadcrumb aria-label="Default breadcrumb example" >
                          <BreadcrumbItem href="/cart"  >
                           <p className="font-poppins font-medium">Cart</p>
                          </BreadcrumbItem>
                        </Breadcrumb>
                      </div>
                    </div>
                  </div>
            <div className="px-25 py-18">
                <div className="flex justify-between gap-7.5">
                    <div className="w-full">
                        <div className="bg-[#F9F1E7] flex justify-around  py-3.75 w-full ">
                            <h1 className="font-poppins">Product</h1>
                            <h1 className="font-poppins">Price</h1>
                           <div className="flex gap-9 items-center">
                             <h1 className="font-poppins">Quantity</h1>
                            <h1 className="font-poppins">Subtotal</h1>
                           </div>
                        </div>

                      {
                        cartArr.length>0 ?  cartArr?.map((item: any) => (

                            <div className="flex items-center justify-center">

                            <div
                                key={item.id}
                                className="flex gap-22 items-center mt-13.75 "
                                >
                              <div className="flex items-center gap-9.5">
                                  <img src={item.image} alt="" className="w-27 h-26.25 object-contain" />

                                <h1 className="font-poppins text-footer w-20">
                                    {item.title}
                                </h1>
                                <h1 className="font-poppins text-footer">
                                    Rs. {Math.round(item.price * 83)}
                                </h1>
                              </div>


                                <div className="flex items-center gap-20 ">


                                    <div className="flex items-center justify-center w-8 h-8 border border-footer rounded-[5px]">
                                        {item.quantity}
                                    </div>

                                     <h1>
                                    Rs.{Math.round(item.price * item.quantity * 83)}
                                </h1>


                                </div>

                               

                               
                            </div>
                            
                                 <div className="mt-15 ml-10">
                                    <button
                                    onClick={() => removeItem(item.id)}
                                    className="cursor-pointer"
                                >
                                    {DeleteIcon}
                                </button>
                                 </div>
                                </div>
                        )):<div className="flex items-center justify-center h-full font-poppins text-footer"> <h1>No Item in cart!</h1> </div>
                      }
                    </div>

                    <div className="bg-[#F9F1E7] px-21.25">
                        <h1 className="pt-3.75 font-semibold text-[32px] font-poppins">
                            Cart Totals
                        </h1>

                        <div className="pt-15.25 flex items-center justify-between">
                            <h2 className="font-poppins">Subtotal</h2>
                            <h2 className="font-poppins text-footer">
                                Rs. {subtotal}
                            </h2>
                        </div>

                        <div className="pt-7.75 flex items-center justify-between">
                            <h2 className="font-poppins">Total</h2>
                            <h2 className="font-medium font-poppins text-[#B88E2F]">
                                Rs. {subtotal}
                            </h2>
                        </div>

                        <div className="pt-12 pb-20 cursor-pointer">
                            <button className="cursor-pointer w-55.5 h-14.5 border rounded-[15px] font-poppins"
                                onClick={()=>navigate("/checkout")}
                            >
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#FAF3EA] py-25 px-13.25 flex justify-between items-center gap-3">
                <div className="flex items-center gap-2.5">
                    {AwardIcon}
                    <div>
                        <h1 className="text-[25px] font-poppins font-semibold">
                            High Quality
                        </h1>
                        <p className="text-[20px] text-[#898989]">
                            crafted from top materials
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2.5">
                    {Warranty}
                    <div>
                        <h1 className="text-[25px] font-poppins font-semibold">
                            Warranty Protection
                        </h1>
                        <p className="text-[20px] text-[#898989]">
                            Over 2 years
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2.5">
                    {Shipping}
                    <div>
                        <h1 className="text-[25px] font-poppins font-semibold">
                            Free Shipping
                        </h1>
                        <p className="text-[20px] text-[#898989]">
                            Order over 150 $
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2.5">
                    {Support}
                    <div>
                        <h1 className="text-[25px] font-poppins font-semibold">
                            24 / 7 Support
                        </h1>
                        <p className="text-[20px] text-[#898989]">
                            Dedicated support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
