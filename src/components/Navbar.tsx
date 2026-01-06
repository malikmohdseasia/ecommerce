
import { NavLink } from "react-router-dom";
import Logo from "../assets/Navbar/logo.png";
import { CartIcon, HeartIcon, ProfileIcon, SearchIcon } from "../assets/Icons";

const Navbar = () => {

const items = [{title:"Home", route:"/home"}, {title:"Shop", route:"/shop"}, {title:"About", route:"/about"}, {title:"Contact", route:"/contact"}, {title:"Blog", route:"/blog"}];
const svgItems = [{title: "profile", svg: ProfileIcon}, {title: "search", svg: SearchIcon}, {title: 'heart' , svg: HeartIcon}, {title: "cart", svg: CartIcon },]

  return (
    <div className="w-container mx-auto flex items-center justify-between py-5">

        <div className="flex items-center gap-1">
            <img src={Logo} alt="logo" className="cursor-pointer"/>
            <h1 className="font-bold font-Montserrat text-[34px] cursor-pointer">Furniro</h1>
        </div>

        <div className="flex gap-18.75 ">
            {
                items.map((item, index)=>(
                    <NavLink
                    key={index}
                    to={item.route}
                    className={({isActive})=>`font-medium font-poppins ${isActive ? 'underline ':''}`}
                    >
                        {item.title}
                    </NavLink>
                ))
            }
        </div>

        <div className="flex items-center gap-11.25">
            {
                svgItems.map((item, index)=>(
                    <div key={index} className="cursor-pointer">
                        {item.svg}
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Navbar