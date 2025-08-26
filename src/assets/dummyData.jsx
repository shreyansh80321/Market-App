import {
  GiAppleCore,
  GiBroccoli,
  GiMilkCarton,
  GiWineGlass,
  GiPopcorn,
  GiShrimp,
  GiCroissant,
  GiChickenLeg,
} from "react-icons/gi";
export const categories = [
  {
    name: "Fruits",
    icon: <GiAppleCore className="text-red-500 text-2xl" />,
  },
  {
    name: "Vegetables",
    icon: <GiBroccoli className="text-green-100 text-2xl" />,
  },
  {
    name: "Dairy",
    icon: <GiMilkCarton className="text-yellow-400 text-2xl" />,
  },
  {
    name: "Beverages",
    icon: <GiWineGlass className="text-blue-500 text-2xl" />,
  },
  {
    name: "Snacks",
    icon: <GiPopcorn className="text-amber-600 text-2xl" />,
  },
  {
    name: "Bakery",
    icon: <GiCroissant className="text-amber-700 text-2xl" />,
  },
];
