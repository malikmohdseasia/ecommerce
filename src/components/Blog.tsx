import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import LOGO from "../assets/Navbar/logo.png";
import { Admin, DateIcon, SearchIco, TagIcon } from "../assets/Icons";
import IMG1 from "../assets/Blog/Rectangle 68.png"
import IMG2 from "../assets/Blog/Rectangle 68 (1).png"
import IMG3 from "../assets/Blog/Rectangle 68 (2).png"
import SIDEIMG1 from "../assets/Blog/img1.png";
import SIDEIMG2 from "../assets/Blog/img2.png";
import SIDEIMG3 from "../assets/Blog/img3.png";
import SIDEIMG4 from "../assets/Blog/img4.png";
import SIDEIMG5 from "../assets/Blog/img5.png";
import Award from "./Award";




const Blog = () => {

    const items = [{ title: "Crafts", value: "2" }, { title: "Design", value: "8" }, { title: "Handmade", value: "7" }, { title: "Interior", value: "1" }, { title: "Wood", value: "6" },]
    const items2 = [{ title: "Going all-in with millennial design", desc: '03 Aug 2022', img: SIDEIMG1 },
    { title: "Exploring new ways of decorating", desc: "03 Aug 2022", img: SIDEIMG2 },
    { title: "Handmade pieces that took time to make", desc: "03 Aug 2022", img: SIDEIMG3 },
    { title: "Modern home in Milan", desc: "03 Aug 2022", img: SIDEIMG4 },
    { title: "Colorful office redesign", desc: "03 Aug 2022", img: SIDEIMG5 },
    ]
    return (
        <div>
            <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>

                <div className="relative z-20 flex flex-col items-center justify-center ">
                    <img src={LOGO} alt="" className="object-contain" />

                    <h1 className="text-[#000000] text-[35px] lg:text-[48px] font-medium">Blog</h1>
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

                            <BreadcrumbItem href="/blog" className="flex items-center">
                                <p className="font-poppins font-light text-[16px]">Blog</p>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-8 lg:mt-26.5 gap-7.5 ">
                <div className="w-full lg:w-[70%] p-2 lg:pl-25 ">

                    <div className="xl:pr-10" >
                        <img src={IMG1} alt="" />
                        <div className="mt-4.25 flex items-center justify-center lg:justify-start gap-8.75 ">
                            <div className="flex items-center gap-1.75 ">
                                {Admin}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">Admin</h1>
                            </div>

                            <div className="flex items-center gap-1.75">
                                {DateIcon}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">14 Oct 2022</h1>
                            </div>

                            <div className="flex items-center gap-1.75">
                                {TagIcon}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">Wood</h1>
                            </div>
                        </div>

                        <div className="mt-3.75">
                            <h1 className="font-poppins  text-[20px] lg:text-[30px] font-medium text-center lg:text-start">Going all-in with millennial design</h1>
                            <p className="font-poppins text-[15px] text-footer mt-3 text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        </div>

                        <div className="mt-7.5 flex flex-col items-center justify-center lg:block">
                            <button className="font-poppins ">Read more</button>
                            <hr className="border w-19.25 mt-3 ml-1" />
                        </div>
                    </div>

                    <div className="mt-13.5 xl:pr-10">
                        <img src={IMG2} alt="" />
                        <div className="mt-4.25 flex items-center justify-center lg:justify-start gap-8.75">
                            <div className="flex items-center gap-1.75">
                                {Admin}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">Admin</h1>
                            </div>

                            <div className="flex items-center gap-1.75">
                                {DateIcon}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">14 Oct 2022</h1>
                            </div>

                            <div className="flex items-center gap-1.75">
                                {TagIcon}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">Handmade</h1>
                            </div>
                        </div>

                        <div className="mt-3.75">
                            <h1 className="font-poppins  text-[20px] lg:text-[30px] font-medium text-center lg:text-start">Exploring new ways of decorating</h1>
                            <p className="font-poppins text-[15px] text-footer mt-3 text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        </div>

                        <div className="mt-7.5 flex flex-col justify-center items-center lg:block">
                            <button className="font-poppins">Read more</button>
                            <hr className="border w-19.25 mt-3 ml-1" />
                        </div>
                    </div>

                    <div className="mt-13.5 xl:pr-10">
                        <img src={IMG3} alt="" />
                        <div className="mt-4.25 flex items-center gap-8.75 justify-center lg:justify-start">
                            <div className="flex items-center gap-1.7 ">
                                {Admin}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">Admin</h1>
                            </div>

                            <div className="flex items-center gap-1.75">
                                {DateIcon}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">14 Oct 2022</h1>
                            </div>

                            <div className="flex items-center gap-1.75">
                                {TagIcon}
                                <h1 className="font-poppins text-footer text-[10px] lg:text-[16px]">Wood</h1>
                            </div>
                        </div>

                        <div className="mt-3.75">
                            <h1 className="font-poppins  text-[20px] lg:text-[30px] font-medium text-center lg:text-start">Handmade pieces that took time to make</h1>
                            <p className="font-poppins text-[15px] text-footer mt-3 text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        </div>

                        <div className="mt-7.5 flex flex-col justify-center items-center lg:block">
                            <button className="font-poppins">Read more</button>
                            <hr className="border w-19.25 mt-3 ml-1" />
                        </div>




                    </div>
                </div>



                <div className="py-5.5 px-5.25 w-full lg:w-[25%]">
                    <div className="h-10 border border-footer w-full rounded-lg flex items-center px-2">
                        <input type="search" name="" id="" className="w-full h-full outline-none px-2" />
                        <button className="cursor-pointer"> {SearchIco}</button>
                    </div>

                    <div className="mt-10.75 lg:px-5">
                        <h1 className="font-poppins mt-10.75 text-[24px] font-medium text-center lg:text-start">Categories</h1>
                        <div className="mt-8.25 flex flex-col gap-10.25">
                            {
                                items?.map((item, index) => (
                                    <div key={index} className="flex justify-between">
                                        <h1 className="font-poppins text-footer">{item.title}</h1>
                                        <h2 className="font-poppins text-footer">{item.value}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-10.25">

                        <h1 className="font-poppins font-medium text-[20px] lg:text-[24px] text-center lg:text-start">Recent Posts</h1>

                        <div className="mt-6.5 flex flex-col items-center lg:items-start gap-9.75">
                            {
                                items2?.map((item, index) => (
                                    <div key={index} className="flex flex-col lg:flex-row gap-3 items-center lg:items-start">
                                        <div><img src={item.img} alt="" /></div>
                                        <div>
                                            <h1 className="font-poppins text-[14px] w-full lg:w-[70%] ">{item.title}</h1>
                                            <h2 className="font-poppins text-[12px] text-footer text-center lg:text-start">{item.desc}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-13.5 flex justify-center items-center">
                <div className="flex gap-2 lg:gap-9.5 cursor-pointer">
                    <div className="bg-[#B88E2F] w-15 h-15 rounded-[10px] text-white flex items-center justify-center font-light text-[20px]">1</div>
                    <div className="w-15 h-15 rounded-[10px]  flex items-center justify-center font-light text-[20px] bg-[#F9F1E7]">2</div>
                    <div className="w-15 h-15 rounded-[10px]  flex items-center justify-center font-light text-[20px] bg-[#F9F1E7]">3</div>
                    <div className="w-15 h-15 rounded-[10px]  flex items-center justify-center font-light text-[20px] bg-[#F9F1E7]">Next</div>
                </div>
            </div>

            <Award />


        </div>
    )
}

export default Blog
