import { FaThLarge, FaUser, FaCog, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menu = [
    {
      name: "Dashboard",
      link: "/"
    },
    {
      name: "Profile",
      link: "/profile"
    },
    {
      name: "Settings",
      link: "/settings"
    },
    {
      name: "Analytics",
      link: "/analytics"
    }
  ];

  return (
    <div className="bg-gray-200 w-72 rounded shadow">
      <div className="flex justify-center items-center text-xl font-semibold gap-2 bg-orange-200 rounded p-2">
        <FaThLarge className="text-black text-xl" />
        <Link to="/">
          <h1 className="font-semibold font-sans uppercase">Dashboard</h1>
        </Link>
      </div>
      <div className="p-4">
        {menu.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="block py-2 px-4 text-gray-700 hover:bg-gray-300 hover:text-black rounded transition duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
