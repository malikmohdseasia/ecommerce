import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import LOGO from "../assets/Navbar/logo.png";
import { BlackDot, BottomIcon, Hollowcon, Xicon } from "../assets/Icons";
import Award from "./Award";

const Checkout = () => {
    return (
        <div>
            <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>

                <div className="relative z-20 flex flex-col items-center justify-center ">
                    <img src={LOGO} alt="" className="object-contain" />
                    <h1 className="text-[#000000] text-[35px] lg:text-[48px] font-medium">Checkout</h1>
                    <div className="flex items-center">

                        <Breadcrumb aria-label="Default breadcrumb example">
                            <BreadcrumbItem href="/home" >
                                <p className="font-poppins font-medium">Home</p>
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <Breadcrumb aria-label="Default breadcrumb example" >
                            <BreadcrumbItem href="/checkout"  >
                                <p className="font-poppins font-light text-[16px]">Checkout</p>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="mt-15.75 flex flex-col lg:flex-row  px-2 lg:px-25 gap-6.5">
                <div className="flex flex-col gap-9 text-center lg:text-start">

                    <h1 className="font-poppins font-semibold text-[24px] lg:text-[36px]">Billing details</h1>

                    <div className="flex flex-col lg:flex-row  gap-7.75 items-center">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-poppins font-medium">First Name</label>
                            <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">

                            <label className="font-poppins font-medium">Last Name</label>
                            <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                        </div>


                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Company Name (Optional)</label>
                        <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Country / Region(Optional)</label>
                        <div className="p-3 border border-footer rounded-[10px] h-10 w-full flex justify-between items-center ">
                            <input type="text" name="" id="" placeholder="Sri Lanka" className="w-full outline-none" />
                            {BottomIcon}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Street address</label>
                        <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Town / City</label>
                        <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Province</label>
                        <div className="border border-footer rounded-[10px] h-10 p-3 flex justify-between outline-none">
                            <input type="text" name="" id="" className="
                    placeholder:text-footer w-full outline-none
                    "
                                placeholder="Western Province"
                            />
                            {BottomIcon}
                        </div>

                    </div> <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">ZIP code</label>
                        <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                    </div> <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Phone (Optional)</label>
                        <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                    </div> <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Email address</label>
                        <input type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                    </div> <div className="flex flex-col gap-2">

                        <input type="text" name="" id="" className=" text-center lg:text-start p-3 border border-footer rounded-[10px] h-10 font-poppins
                    placeholder:text-footer outline-none
                    "
                            placeholder="Additional information"
                        />
                    </div>

                </div>


                <div className="py-21.5 px-2 lg:px-9.5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className="font-poppins font-medium text-lg lg:text-[24px] mb-3.5">Product</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2.75">
                                    <h1 className="font-poppins text-footer">Asgaard sofa</h1>
                                    {Xicon}
                                    <h1 className="font-poppins">1</h1>
                                </div>
                                <h1 className="font-poppins ">Subtotal</h1>
                                <h1 className="font-poppins">Total</h1>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="font-poppins font-medium text-lg lg:text-[24px] mb-3.5">Subtotal</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-poppins">Rs. 250,000.00</h1>
                                <h1 className="font-poppins">Rs. 250,000.00</h1>
                                <h1 className="font-poppins text-lg lg:text-[24px] text-[#B88E2F] font-bold">Rs. 250,000.00</h1>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-8.25 border border-hrLine" />

                    <div className="mt-5.5">

                        <div className="flex flex-col items-center lg:block">
                            <div className="flex gap-3.75 items-center">

                                {BlackDot}
                                <h1 className="font-poppins">Direct Bank Transfer</h1>
                            </div>
                            <p className="mt-2.75 font-poppins text-footer font-light text-center lg:text-start">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        </div>

                        <div className="mt-6.25 flex flex-col items-center lg:block">
                            <div className="flex gap-3.75 items-center">

                                {Hollowcon}
                                <h1 className="font-poppins font-medium text-footer">Direct Bank Transfer</h1>
                            </div>
                            <div className="flex gap-3.75 items-center mt-2.75 ">

                                {Hollowcon}
                                <h1 className="font-poppins font-medium text-footer">Cash On Delivery</h1>
                            </div>
                        </div>

                        <div className="mt-5.5">
                            <p className="font-poppins font-light text-center lg:text-start">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy.</span></p>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="border text-[20px] rounded-[15px] w-79.5 h-16 mt-10 cursor-pointer">Place order</button>
                        </div>

                    </div>
                </div>
            </div>

            <Award />
        </div>
    )
}

export default Checkout
