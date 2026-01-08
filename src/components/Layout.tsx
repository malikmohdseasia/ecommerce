import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({cartArr, setCartArr}) => {
  return (
    <>
    <Navbar cartArr={cartArr} setCartArr={setCartArr}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout