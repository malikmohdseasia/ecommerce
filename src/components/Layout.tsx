import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Layout = ({cartArr, setCartArr, isOpen, setIsOpen, searchShow, setSearchShow}:any) => {
  return (
    <>
  <ScrollToTop />
    <Navbar cartArr={cartArr} setCartArr={setCartArr} isOpen={isOpen} setIsOpen={setIsOpen}
    searchShow={searchShow} setSearchShow={setSearchShow}
    />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout