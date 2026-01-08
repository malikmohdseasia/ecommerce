import { NavLink } from "react-router-dom";
import Logo from "../assets/Navbar/logo.png";
import { CartIcon, HeartIcon, ProfileIcon, SearchIcon } from "../assets/Icons";
import Logout from "./auth/Logout";
import { useState } from "react";
import CartSidebar from "./CartSidebar";

const Navbar = ({ cartArr, setCartArr }) => {
  const [openLogout, setOpenLogout] = useState(false);
  const [showEmail, setShowEmail] = useState<Boolean>(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  let email = user?.email;
  let dataName = email.split('@')[0];
  const [cartShow, setCartShow] = useState<any>(false);

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

  let totalCartItems = 0;

  for (const item of cartArr) {
    totalCartItems += item.quantity;
  }



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
        <CartSidebar cartShow={cartShow} setCartShow={setCartShow} cartArr={cartArr} setCartArr={setCartArr} />
      </div>

      <div className="flex items-center gap-11.25">
        {svgItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              if (item.title === "profile") {
                setOpenLogout(true);
              } if (item.title === 'cart') {
                setCartShow(true)
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

            {item.title === "cart" && totalCartItems > 0 && (
              <div className="font-semibold font-poppins text-[10px] absolute top-7 right-15 bg-red-500 rounded-full w-3 h-3 flex items-center justify-center p-2 text-white">
                {totalCartItems}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
