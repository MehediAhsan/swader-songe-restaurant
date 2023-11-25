import { FaThLarge, FaUser, FaCog, FaChartBar, FaCalendar, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menu = [
    {
      name: "Dashboard",
      link: "/",
      icon: <FaThLarge />
    },
    {
      name: "Profile",
      link: "/profile",
      icon: <FaUser />
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <FaCog />
    },
    {
      name: "Analytics",
      link: "/analytics",
      icon: <FaChartBar />
    },
    {
      name: "Calendar",
      link: "/calendar",
      icon: <FaCalendar />
    },
    {
      name: "Messages",
      link: "/messages",
      icon: <FaEnvelope />
    }
  ];

  return (
    <div className="bg-gray-100 w-72 rounded shadow">
      <div className="flex justify-center items-center text-xl font-semibold gap-2 bg-orange-200 rounded p-2">
        <FaThLarge className="text-black text-xl" />
        <Link to="/dashboard">
          <h1 className="font-semibold font-sans uppercase">Dashboard</h1>
        </Link>
      </div>
      <div className="p-4">
        {menu.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-300 hover:text-black rounded transition duration-300"
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
