import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginRoute from "./components/auth/LoginRoute";
import NotFound from "./components/NotFound";

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
          <Route element={<Layout />}>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
              <Route path="*" element={<NotFound/>} />
          </Route>

        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
