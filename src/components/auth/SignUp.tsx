import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import LoginImg from "../../assets/Login/img.png";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateOnSubmit = () => {
    let isValid = true;

    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      isValid = false;
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isValid = false;
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      isValid = false;
    }

    if (!confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Confirm password is required",
      }));
      isValid = false;
    }

    if (password && confirmPassword && password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      isValid = false;
    }

    return isValid;
  };


  const handleEmailChange = (value: any) => {

    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Enter a valid email" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (value: any) => {
    setPassword(value);

    const strongPwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!value) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
    } else if (!strongPwdRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        password: "At least 6 chars, uppercase, lowercase & number required",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleConfirmPasswordChange = (value: any) => {
    setConfirmPassword(value);

    if (!value) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Confirm password is required",
      }));
    } else if (value !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const isValid = validateOnSubmit();

    if (!isValid) {
      return;
    }

    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email, password })
      );

      toast.success("Account Created Successfully!");
      navigate("/home");
    }
  };

  return (
    <div className="h-screen flex bg-white overflow-hidden text-center lg:text-start">
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 font-poppins">
            Create Account
          </h2>
          <p className="text-gray-500 mb-6 font-poppins">
            Sign up to get started
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-poppins">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border text-center lg:text-start border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black font-poppins"
              placeholder="Your name"
            />
           
           {errors.name && (
              <p className="text-red-500 text-xs mt-1 font-poppins">
                {errors.name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-poppins">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full  text-center lg:text-start border rounded-lg px-3 py-2 outline-none focus:ring-2 font-poppins ${errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-black"
                }`}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-poppins">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 font-poppins">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                className={`w-full  text-center lg:text-start border rounded-lg px-3 py-2 pr-10 outline-none focus:ring-2 font-poppins ${errors.password
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-black"
                  }`}
                placeholder="••••••••"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 font-poppins">
                {errors.password}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 font-poppins">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) =>
                  handleConfirmPasswordChange(e.target.value)
                }
                className={`w-full  text-center lg:text-start border rounded-lg px-3 py-2 pr-10 outline-none focus:ring-2 font-poppins ${errors.confirmPassword
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-black"
                  }`}
                placeholder="••••••••"
              />
              <span
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 font-poppins">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className=" cursor-pointer w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition font-poppins"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-4 font-poppins">
            Already have an account?
            <Link to="/" className="font-semibold underline">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:flex items-center justify-end bg-gray-50 w-1/2">
        <img src={LoginImg} alt="Signup" className="w-3/4 object-contain" />
      </div>
    </div>
  );
};

export default SignUp;
