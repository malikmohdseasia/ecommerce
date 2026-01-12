import { NavLink } from "react-router-dom";

const Footer = () => {
  const items1 = [{ title: "Home", route: "/home" }, { title: "Shop", route: "/shop" }, { title: "Contact", route: "/contact" }];
  const items2 = ["Payment Options", "Returns", "Privacy Policies"];

  return (
    <div className="pt-12 pb-9.5 px-25 border-t border-[#0000002B]">
      <div className="grid grid-cols-1 lg:grid-cols-4 text-center lg:text-start justify-items-center ">
        <div className="flex flex-col gap-2 lg:gap-13.75">
          <h1 className="font-poppins font-bold text-[24px]">Funiro.</h1>
          <p className="font-poppins text-footer">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        <div>
          <p className="font-medium font-poppins text-footer">Links</p>
          <div className="mt-13.75 flex flex-col gap-5 lg:gap-11.5">
            {items1.map((item, index) => (
              <NavLink
                key={index}
                to={item.route}
                className={({ isActive }) =>
                  `${isActive ? "underline" : ""}`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="font-poppins font-medium text-footer mt-5 lg:mt-0">Help</p>
          <div className="mt-4 lg:mt-13.75 flex flex-col gap-5 lg:gap-11.5">
            {items2.map((item, index) => (
              <p className="font-poppins font-medium cursor-pointer" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className=" relative">
          <p className="font-poppins font-medium text-footer mt-5 lg:mt-0">Newsletter</p>
          <div className="mt-13.25 flex flex-col-reverse xl:flex-row gap-2 ">
            <input type="text" name="" id="" placeholder="Enter Your Email Address" className="outline-none border-b
             w-50 text-[14px] text-center lg:text-start
             " />
            <div>
              <p className="font-poppins text-[14px] cursor-pointer  lg:border-b lg:border-[#000000] p-2">SUBSCRIBE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 hidden lg:block">
        <hr className="border border-hrLine" />
      </div>

      <div className="pt-8.75 text-center lg:text-start">
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};

export default Footer;
