import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import Logo from "../assets/Navbar/logo.png";
import { useNavigate } from "react-router-dom";
import Award from "./Award";
import { DeleteIcon } from "../assets/Icons";

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
            <div className="px-5 lg:px-25 lg:py-18">
                <div className="flex flex-col lg:flex-row justify-between gap-7.5">
                    <div className="w-full ">
                        <div className="bg-[#F9F1E7] lg:flex justify-around  py-3.75 w-full hidden ">
                            <h1 className="font-poppins">Product</h1>
                            <h1 className="font-poppins">Price</h1>
                           <div className="flex gap-9 items-center">
                             <h1 className="font-poppins">Quantity</h1>
                            <h1 className="font-poppins">Subtotal</h1>
                           </div>
                        </div>

                      {
                        cartArr.length>0 ?  cartArr?.map((item: any) => (

                            <div className="flex flex-col lg:flex-row items-center justify-center">

                            <div
                                key={item.id}
                                className="flex flex-col lg:flex-row gap-22 items-center mt-13.75 "
                                >
                              <div className="flex flex-col lg:flex-row items-center gap-9.5">
                                  <img src={item.image} alt="" className="w-full lg:w-27 lg:h-26.25 object-contain" />

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
                        )):<div className="flex items-center justify-center h-full font-poppins text-footer"> <h1 className="font-poppins mt-5">No Item in cart!</h1> </div>
                      }
                    </div>

                    <div className="bg-[#F9F1E7] px-5 lg:px-21.25">
                        <h1 className="pt-3.75 font-semibold text-[18px] lg:text-[32px] font-poppins">
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

                        <div className="pt-12 pb-20 cursor-pointer flex justify-center">
                            <button className="cursor-pointer  w-55.5  h-14.5 border rounded-[15px] font-poppins"
                                onClick={()=>navigate("/checkout")}
                            >
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

           <Award/>
        </div>
    );
};

export default Cart;
