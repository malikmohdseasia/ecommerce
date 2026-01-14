import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginRoute from "./components/auth/LoginRoute";
import NotFound from "./components/NotFound";
import SignUp from "./components/auth/SignUp";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

const App = () => {

   const [isOpen, setIsOpen] = useState(false);
  const [cartArr, setCartArr] = useState<any>([]);
  const [searchShow, setSearchShow] = useState(false);
   const [cartShow, setCartShow] = useState<any>(false);


  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />

        <Routes>
          <Route
            path="/"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />

          <Route path="/signup" element={<LoginRoute><SignUp /></LoginRoute>} />

          <Route element={<Layout cartShow={cartShow}  setCartShow={setCartShow} isOpen={isOpen} setIsOpen={setIsOpen} cartArr={cartArr} setCartArr={setCartArr} 
          searchShow={searchShow} setSearchShow={setSearchShow}
          />}>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shop"
              element={
                <ProtectedRoute>
                  <Shop />
                </ProtectedRoute>
              }
            />

            <Route
              path="/shop/:id"
              element={
                <ProtectedRoute>
                  <SingleProduct setCartShow={setCartShow} cartArr={cartArr} setCartArr={setCartArr} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart cartArr={cartArr} setCartArr={setCartArr} />
                </ProtectedRoute>
              }
            />

               <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout cartArr={cartArr} setCartArr={setCartArr}/>
                </ProtectedRoute>
              }
            />

              <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />

              <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />


          </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
