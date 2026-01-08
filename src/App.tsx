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

const App = () => {

  const [cartArr, setCartArr] = useState<any>([]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />

        <Routes>
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />

          <Route path="/signup" element={<SignUp />} />

          <Route element={<Layout cartArr={cartArr} setCartArr={setCartArr} />}>
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
                  <SingleProduct cartArr={cartArr} setCartArr={setCartArr} />
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
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
