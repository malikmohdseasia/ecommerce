import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import LOGO from "../assets/Navbar/logo.png";
import { LocationIcon, PhoneIcon, WatchIcon } from "../assets/Icons";
import Award from "./Award";

const Contact = () => {
    return (
        <div>
            <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>

                <div className="relative z-20 flex flex-col items-center justify-center ">
                    <img src={LOGO} alt="" className="object-contain" />
                    <h1 className="text-[#000000] text-[35px] lg:text-[48px]  font-medium">Contact</h1>
                    <div className="flex items-center">
                        <Breadcrumb aria-label="Default breadcrumb example" className="flex items-center
            group-first:hidden
            ">
                            <BreadcrumbItem
                                href="/home"
                                className="flex items-center"
                            >
                                <p className="font-poppins font-medium text-lg">Home</p>
                            </BreadcrumbItem>

                            <BreadcrumbItem href="/contact" className="flex items-center">
                                <p className="font-poppins font-light text-[16px]">Contact</p>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 lg:px-80 text-center mt-24.5">
                <h1 className="font-poppins font-semibold text-[25px] lg:text-[36px]">Get In Touch With Us</h1>
                <p className="font-poppins text-footer mt-2 lg:mt-0">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className="mt-20.5 flex flex-col lg:flex-row justify-center lg:px-47.75 gap-7.5 md:px-10">

                <div className="w-full lg:w-1/2 px-5 lg:pl-14.5 lg:pr-18.75 flex flex-col  gap-10.5">

                    <div className="flex flex-col lg:flex-row gap-7.5 items-center lg:items-start">

                        <div> {LocationIcon}</div>
                        <div className="ml-0 lg:ml-4 ">
                            <h1 className="font-poppins text-[24px] font-medium text-center lg:text-start">Address</h1>
                            <p className="font-poppins text-center lg:text-start">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-7.5 lg:items-start text-center lg:text-start">
                        <div> {PhoneIcon}</div>
                        <div>
                            <h1 className="font-poppins text-[24px] font-medium">Phone</h1>
                            <p className="font-poppins">Mobile: +(84) 546-6789</p>
                            <p className="font-poppins">Hotline: +(84) 456-6789</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-7.5 items-center lg:items-start text-center lg:text-start">
                        <div> {WatchIcon}</div>
                        <div>
                            <h1 className="font-poppins text-[24px] font-medium">Working Time</h1>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-start p-2 lg:p-0 ">
                    <div className="flex flex-col gap-5" >

                        <div className="flex flex-col gap-2">
                            <label className="font-poppins font-medium">Your name</label>
                            <input type="text" name="" id="" className="border text-center lg:text-start border-footer rounded-[10px] h-10  px-7.75 outline-none text-footer"
                                placeholder="Abc"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-poppins font-medium">Email address</label>
                            <input type="text" name="" id="" placeholder="Abc@def.com" className="text-center lg:text-start border border-footer rounded-[10px] h-10  px-7.75 outline-none text-footer" /

                            >
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-poppins font-medium">Subject</label>
                            <input type="text" name="" id="" placeholder="This is an optional" className="border text-center lg:text-start border-footer rounded-[10px] h-10  px-7.75 outline-none text-footer" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-poppins font-medium">Message</label>
                            <input type="text" name="" id="" placeholder="Hi! i’d like to ask about" className="border text-center lg:text-start border-footer rounded-[10px] h-30  px-7.75 outline-none text-footer" />
                        </div>


                    </div>
                    <div className="mt-12.25"> <button className="cursor-pointer font-poppins text-white bg-[#B88E2F] w-59.25 h-13.75">Submit</button></div>
                </div>
            </div>
            <Award />
        </div>
    )
}

export default Contact
