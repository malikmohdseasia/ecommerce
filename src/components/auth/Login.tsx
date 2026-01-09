import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import LoginImg from "../../assets/Login/img.png";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Enter a valid email";
    return "";
  };

  const validatePassword = (value: string) => {
    const strongPwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!value) return "Password is required";
    if (!strongPwdRegex.test(value))
      return "At least 6 chars, uppercase, lowercase & number required";
    return "";
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    return !emailError && !passwordError;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    localStorage.setItem("user", JSON.stringify({ email, password }));
    toast.success("Successfully Login!");
    navigate("/home");
  };

  return (
    <div className="h-screen flex bg-white overflow-hidden">
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 font-poppins">
            Welcome Back
          </h2>
          <p className="text-gray-500 mb-6 font-poppins">
            Please login to your account
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-poppins">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="example@email.com"
              className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 font-poppins
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-black"
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-poppins">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 font-poppins">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                placeholder="••••••••"
                className={`w-full border rounded-lg px-3 py-2 pr-10 outline-none focus:ring-2 font-poppins
                  ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-black"
                  }`}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1 font-poppins">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!!errors.email || !!errors.password}
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition font-poppins disabled:opacity-50"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 font-poppins">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:flex items-center justify-end bg-gray-50 w-1/2">
        <img src={LoginImg} alt="Login" className="w-3/4 object-contain" />
      </div>
    </div>
  );
};

export default Login;
