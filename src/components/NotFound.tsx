import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-7xl font-bold text-gray-900">404</h1>

      <p className="text-xl text-gray-600 mt-4">
        Oops! Page not found
      </p>

      <p className="text-sm text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
