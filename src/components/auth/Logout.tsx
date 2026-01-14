import { useNavigate } from "react-router-dom";

const Logout = ({ isOpen, onClose }:any) => {
  const navigate = useNavigate();

  if (!isOpen) return null;
  const handleLogout = () => {
    localStorage.removeItem("user"); 
    onClose();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-90 rounded-xl shadow-lg p-6 ">
        <h2 className="text-lg font-semibold mb- font-poppins">
          Logout Confirmation
        </h2>

        <p className="mt-2 text-gray-600 mb-6 font-poppins">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="font-poppins px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="font-poppins px-5 py-2 rounded-md bg-[#B88E2F] text-white hover:bg-red-600 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;