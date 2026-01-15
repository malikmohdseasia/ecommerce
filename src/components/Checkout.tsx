import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import LOGO from "../assets/Navbar/logo.png";
import { BlackDot, BottomIcon, Hollowcon, Xicon } from "../assets/Icons";
import Award from "./Award";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Checkout = ({ cartArr, setCartArr }: any) => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        email: '',
        company:'',
        country:'Sri Lanka',
        province:'Western Province',
        phone:'',
        additional:'Additional information',
    })

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        email: '',
        phone:''
    })


    const navigate = useNavigate();

    const PlaceOrder = () => {
        const newErrors: any = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (form.firstName.trim() === '') {
            newErrors.firstName = 'First Name is Empty'

        }

        if (form.lastName.trim() === '') {
            newErrors.lastName = 'Last Name Is Empty!'
        }

        if (form.address.trim() === '') {
            newErrors.address = 'Please Fill Address Here!'
        }

        if (form.city.trim() === '') {
            newErrors.city = 'City Name Is Empty!'
        }

        if (form.zipCode.trim() === '') {
            newErrors.zipCode = 'Zip Code Is Empty!'
        }

        if (form.phone.trim() === '') {
            newErrors.phone = 'Phone Is Empty!'
        }

        if (form.email.trim() === '') {
            newErrors.email = 'Email is Empty!'
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = 'Please Add Valid Email!'
        }

        setError(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }


        toast.success('Order Placed Successfully!');
        navigate('/cart');
        setCartArr([]);
    }

    const formatINR = (price: any) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(price * 90);
    };



    return (
        <div>
            <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>

                <div className="relative z-20 flex flex-col items-center justify-center ">
                    <img src={LOGO} alt="" className="object-contain" />
                    <h1 className="text-[#000000] text-[35px] lg:text-[48px] font-medium">Checkout</h1>
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

                            <BreadcrumbItem href="/checkout" className="flex items-center">
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
                            <input
                                value={form.firstName}
                                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                type="text" name="" id="" className=" text-footer p-3 border border-footer rounded-[10px] h-10 outline-none" />
                            {
                                error?.firstName && <h1 className="font-poppins text-[10px] text-red-500 font-medium">{error?.firstName}</h1>
                            }

                        </div>
                        <div className="flex flex-col gap-2 w-full">

                            <label className="font-poppins font-medium">Last Name</label>
                            <input
                                value={form.lastName}
                                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                type="text" name="" id="" className="text-footer p-3 border border-footer rounded-[10px] h-10 outline-none" />
                            {
                                error?.lastName && <h1 className="font-poppins text-[10px] text-red-500 font-medium">{error.lastName}</h1>
                            }
                        </div>


                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Company Name (Optional)</label>
                        <input 
                        value={form.company}
                        onChange={(e)=>setForm({...form, company:e.target.value})}
                        type="text" name="" id="" className=" p-3 border border-footer rounded-[10px] h-10 outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Country / Region(Optional)</label>
                        <div className="p-3 border border-footer rounded-[10px] h-10 w-full flex justify-between items-center ">
                            <input 
                            value={form.country}
                            onChange={(e)=>setForm({...form, country:e.target.value})}
                            type="text" name="" id="" placeholder="Sri Lanka" className="w-full outline-none text-footer" />
                            {BottomIcon}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Street address</label>
                        <input
                            value={form.address}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            type="text" name="" id="" className="text-footer p-3 border border-footer rounded-[10px] h-10 outline-none" />
                        {
                            error?.address && <h1 className="font-poppins text-[10px] text-red-500 font-medium">{error?.address}</h1>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Town / City</label>
                        <input
                            value={form.city}
                            onChange={(e) => setForm({ ...form, city: e.target.value })}
                            type="text" name="" id="" className="text-footer p-3 border border-footer rounded-[10px] h-10 outline-none" />
                        {
                            error?.city && <h1 className="font-poppins text-[10px] text-red-500 font-medium">{error?.city}</h1>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Province</label>
                        <div className=" text-footer border border-footer rounded-[10px] h-10 p-3 flex justify-between outline-none">
                            <input 
                            value={form.province}
                            onChange={(e)=>setForm({...form, province:e.target.value})}
                            type="text" name="" id="" className="
                    placeholder:text-footer w-full outline-none
                    "
                                placeholder="Western Province"
                            />
                            {BottomIcon}
                        </div>

                    </div> <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">ZIP code</label>
                        <input
                            value={form.zipCode}
                            onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
                            type="text" name="" id="" className="text-footer p-3 border border-footer rounded-[10px] h-10 outline-none" />
                        {
                            error?.zipCode && <h1 className="font-poppins text-[10px] text-red-500 font-medium">{error?.zipCode}</h1>
                        }
                    </div> <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Phone</label>
                        <input 
                        value={form.phone}
                        onChange={(e)=>setForm({...form, phone:e.target.value})}
                        type="text" name="" id="" className="text-footer p-3 border border-footer rounded-[10px] h-10 outline-none" />
                       {error.phone && <h1 className="font-poppins text-[10px] text-red-500 font-medium">{error.phone}</h1>}
                    </div> <div className="flex flex-col gap-2">
                        <label className="font-poppins font-medium">Email address</label>
                        <input
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type="text" name="" id="" className="text-footer p-3 border border-footer rounded-[10px] h-10 outline-none" />
                        {error?.email && <h1 className="font-poppins text-[10px] text-red-500 font-medium">{error?.email}</h1>}
                    </div> <div className="flex flex-col gap-2">

                        <input 
                        value={form.additional}
                        onChange={(e)=>setForm({...form, additional:e.target.value})}
                        type="text" name="" id="" className="text-footer text-center lg:text-start p-3 border border-footer rounded-[10px] h-10 font-poppins
                    placeholder:text-footer outline-none
                    "
                            placeholder="Additional information"
                        />
                    </div>

                </div>


                <div className="py-21.5 px-2 lg:px-9.5 flex-1 flex flex-col">
                    <div className="">
                        <div className="flex items-center justify-between ">
                            {
                                cartArr && cartArr?.map((item: any, index: any) => (

                                    <div key={index} className="flex items-center justify-between  w-full">
                                        <div className="">
                                            <h1 className="font-poppins font-medium text-lg lg:text-[24px] mb-3.5">Product</h1>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2.75">
                                                    <h1 className="font-poppins text-footer">{item.title.slice(0, 20)}</h1>
                                                    {Xicon}
                                                    <h1 className="font-poppins">{item.quantity}</h1>
                                                </div>
                                                <h1 className="font-poppins ">Subtotal</h1>
                                                <h1 className="font-poppins">Total</h1>
                                            </div>
                                        </div>

                                        <div className="">
                                            <h1 className="font-poppins font-medium text-lg lg:text-[24px] mb-3.5">Subtotal</h1>
                                            <div className="flex flex-col gap-2">
                                                <h1 className="font-poppins">{formatINR(item.quantity * item.price)}</h1>
                                                <h1 className="font-poppins">{formatINR(item.quantity * item.price)}</h1>
                                                <h1 className="font-poppins text-lg lg:text-[24px] text-[#B88E2F] font-bold">{formatINR(item.quantity * item.price)}</h1>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }

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
                            <button className="border text-[20px] rounded-[15px] w-79.5 h-16 mt-10 cursor-pointer"
                                onClick={PlaceOrder}
                            >Place order</button>
                        </div>

                    </div>
                </div>
            </div>

            <Award />
        </div>
    )
}

export default Checkout
