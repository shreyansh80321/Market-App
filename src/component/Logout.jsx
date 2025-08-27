import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    // Debugging: check what's left in localStorage
    console.log("After logout:", localStorage);

    // Notify App about state change
    window.dispatchEvent(new Event("authStateChanged"));

    // Redirect to login
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <button
        onClick={handleLogout}
        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </button>
      <p className="mt-4 text-gray-600">
        You are already signed in. Click above to Logout
      </p>
    </div>
  );
};

export default Logout;
