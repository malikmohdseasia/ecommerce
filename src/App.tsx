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

const App = () => {
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

          <Route element={<Layout />}>
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
              path="/singleproduct"
              element={
                <ProtectedRoute>
                  <SingleProduct/>
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
