import { FiHome, FiShoppingBag, FiMail, FiPackage } from "react-icons/fi";
export const navItems = [
  { name: "Home", path: "/", icon: <FiHome className="text-xl" /> },
  {
    name: "Items",
    path: "/items",
    icon: <FiShoppingBag className="text-xl" />,
  },
  { name: "Contact", path: "/contact", icon: <FiMail className="text-xl" /> },
  {
    name: "My Orders",
    path: "/myorders",
    icon: <FiPackage className="text-xl" />,
  },
];
