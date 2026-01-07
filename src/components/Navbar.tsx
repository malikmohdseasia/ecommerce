import { NavLink } from "react-router-dom";
import Logo from "../assets/Navbar/logo.png";
import { CartIcon, HeartIcon, ProfileIcon, SearchIcon } from "../assets/Icons";
import Logout from "./auth/Logout";
import { useState } from "react";

const Navbar = () => {
  const [openLogout, setOpenLogout] = useState(false);
  const [showEmail, setShowEmail] = useState<Boolean>(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  let email = user?.email;
  let dataName =email.split('@')[0];

  const items = [
    { title: "Home", route: "/home" },
    { title: "Shop", route: "/shop" },
    { title: "About", route: "/about" },
    { title: "Contact", route: "/contact" },
    { title: "Blog", route: "/blog" },
  ];
  const svgItems = [
    { title: "profile", svg: ProfileIcon },
    { title: "search", svg: SearchIcon },
    { title: "heart", svg: HeartIcon },
    { title: "cart", svg: CartIcon },
  ];

  return (
    <div className="w-container mx-auto flex items-center justify-between py-5">
      <div className="flex items-center gap-1">
        <img src={Logo} alt="logo" className="cursor-pointer" />
        <h1 className="font-bold font-Montserrat text-[34px] cursor-pointer">
          Furniro
        </h1>
      </div>

      <div className="flex gap-18.75 ">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            className={({ isActive }) =>
              `font-medium font-poppins ${isActive ? "underline " : ""}`
            }
          >
            {item.title}
          </NavLink>
        ))}

        <Logout isOpen={openLogout} onClose={() => setOpenLogout(false)} />
      </div>

      <div className="flex items-center gap-11.25">
        {svgItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              if (item.title === "profile") {
                setOpenLogout(true);
              }
            }}
            onMouseEnter={() => {
              if (item.title === "profile") {
                setShowEmail(true);
              }
            }}
            onMouseLeave={() => {
              if (item.title === "profile") {
                setShowEmail(false);
              }
            }}
          >
            {item.title === "profile" ? (
              <div className="relative ">
                {item.svg}{" "}
                {showEmail && <p className="absolute text-center -left-2">{dataName}</p>}
              </div>
            ) : (
              <p>{item.svg}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
