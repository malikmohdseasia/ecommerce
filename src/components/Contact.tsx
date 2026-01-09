import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import LOGO from "../assets/Navbar/logo.png";
import { LocationIcon, PhoneIcon, WatchIcon } from "../assets/Icons";

const Contact = () => {
    return (
        <div>
            <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>

                <div className="relative z-20 flex flex-col items-center justify-center ">
                    <img src={LOGO} alt="" className="object-contain" />
                    <h1 className="text-[#000000] text-[48px] font-medium">Contact</h1>
                    <div className="flex items-center">

                        <Breadcrumb aria-label="Default breadcrumb example">
                            <BreadcrumbItem href="/home" >
                                <p className="font-poppins font-medium">Home</p>
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <Breadcrumb aria-label="Default breadcrumb example" >
                            <BreadcrumbItem href="/contact"  >
                                <p className="font-poppins font-light text-[16px]">Contact</p>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-80 text-center mt-24.5">
                <h1 className="font-poppins font-semibold text-[36px]">Get In Touch With Us</h1>
                <p className="font-poppins text-footer">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className="mt-3.5 flex  justify-center px-47.75 gap-7.5">

                <div className="w-1/2 pl-14.5 pr-18.75 flex flex-col gap-10.5">

                <div className="flex gap-7.5 ">
                
                    {LocationIcon}
                    <div className="ml-4">
                        <h1 className="font-poppins text-[24px] font-medium">Address</h1>
                        <p className="font-poppins">236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>

                  <div className="flex gap-7.5">
                    {PhoneIcon}
                    <div>
                        <h1 className="font-poppins text-[24px] font-medium">Phone</h1>
                       <p>Mobile: +(84) 546-6789</p>
                       <p>Hotline: +(84) 456-6789</p>
                    </div>
                </div>

                  <div className="flex gap-7.5">
                    {WatchIcon}
                    <div>
                        <h1 className="font-poppins text-[24px] font-medium">Working Time</h1>
                        <p>Monday-Friday: 9:00 - 22:00</p>
                        <p>Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
                </div>

               <div className="border w-1/2">
                 <div className="flex flex-col gap-9" >

                <div className="flex flex-col gap-5.5">
                        <label className="font-poppins font-medium">Your name</label>
                        <input type="text" name="" id="" className="border border-footer rounded-[10px] h-18.75  px-7.75 text-footer" 
                        placeholder="Abc"
                        />
                    </div>
                    <div className="flex flex-col gap-5.5">
                        <label className="font-poppins font-medium">Email address</label>
                        <input type="text" name="" id="" placeholder="Abc@def.com" className="border border-footer rounded-[10px] h-18.75  px-7.75 text-footer" /
                    
                        >
                    </div>
                    <div className="flex flex-col gap-5.5">
                        <label className="font-poppins font-medium">Subject</label>
                        <input type="text" name="" id="" placeholder="This is an optional" className="border border-footer rounded-[10px] h-18.75  px-7.75 text-footer" />
                    </div>
                    <div className="flex flex-col gap-5.5">
                        <label className="font-poppins font-medium">Message</label>
                        <input type="text" name="" id="" placeholder="Hi! i’d like to ask about" className="border border-footer rounded-[10px] h-30  px-7.75 text-footer" />
                    </div>


                </div>
               <div className="mt-12.25"> <button className="font-poppins text-white bg-[#B88E2F] w-59.25 h-13.75">Submit</button></div>
               </div>
            </div>
        </div>
    )
}

export default Contact
