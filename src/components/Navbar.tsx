import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Navbar/logo.png";
import { CartIcon, HeartIcon, ProfileIcon, SearchIcon } from "../assets/Icons";
import Logout from "./auth/Logout";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
import Searchbar from "./Searchbar";

const Navbar = ({ cartArr, setCartArr, isOpen, setIsOpen, searchShow, setSearchShow }:any) => {
  const [openLogout, setOpenLogout] = useState(false);
  const [showEmail, setShowEmail] = useState<Boolean>(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  let email = user?.email;
  let dataName = email.split('@')[0];
  const [cartShow, setCartShow] = useState<any>(false);
  const navigate = useNavigate();

  const items = [
    { title: "Home", route: "/home" },
    { title: "Shop", route: "/shop" },
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

    <div>
  <div className="w-container mx-auto flex flex-col lg:flex-row mt-0 lg:mt-0 lg:items-center items-start lg:justify-between py-5">
    
    <button
      onClick={() => setIsOpen((pre:any) => !pre)}
      className="flex lg:hidden mb-4"
    >
      ≣
    </button>

    <div className="items-center gap-1 lg:flex mx-auto lg:mx-0 -mt-12 lg:mt-0" 
    onClick={()=>navigate('/home')}
    >
      <img src={Logo} alt="logo" className="cursor-pointer mx-auto lg:mx-0 w-10  lg:w-full " />
      <h1 className="font-bold font-Montserrat text-[20px] lg:text-[22px] cursor-pointer ">
        Furniro
      </h1>
    </div>

    <div
      className={`
        ${isOpen ? "flex " : "hidden"} flex-col lg:flex lg:flex-row gap-5 -mt-3 lg:mt-0 lg:gap-8
        xl:gap-18.75
      `}
    >
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.route}
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) =>
            `font-medium font-poppins ${isActive ? " text-[#B88E2F] border-b-3 border-yellow-500" : ""}`
          }
        >
          {item.title}
        </NavLink>
      ))}

    {
      searchShow &&   <Searchbar searchShow ={searchShow } setSearchShow={setSearchShow}/>
    }

      <Logout isOpen={openLogout} onClose={() => setOpenLogout(false)} />

      <CartSidebar
        cartShow={cartShow}
        setCartShow={setCartShow}
        cartArr={cartArr}
        setCartArr={setCartArr}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>

    <div
      className={`
        ${isOpen ? "flex" : "hidden"}
        lg:flex
        items-center
        gap-11.25
        mt-4 lg:mt-0
      `}
    >
      {svgItems.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer relative"
          onClick={() => {
            if (item.title === "profile") setOpenLogout(true);
            if (item.title === "cart") setCartShow(true);
            if(item.title==='search') setSearchShow((pre:any)=>!pre);
          }}
          onMouseEnter={() =>
            item.title === "profile" && setShowEmail(true)
          }
          onMouseLeave={() =>
            item.title === "profile" && setShowEmail(false)
          }
        >
          {item.title === "profile" ? (
            <div className="relative">
              {item.svg}
              {showEmail && (
                <p className="absolute text-center -left-2 capitalize text-[#B88E2F]">{dataName}</p>
              )}
            </div>
          ) : (
            <p>{item.svg}</p>
          )}

          {item.title === "cart" && totalCartItems > 0 && (
            <div className="font-semibold font-poppins text-[10px] absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white">
              {totalCartItems}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

   
  );
};

export default Navbar;
