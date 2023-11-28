import { FaThLarge, FaUser, FaCog, FaChartBar, FaCalendar, FaEnvelope, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menu = [
    {
      name: "Dashboard",
      link: "/dashboard",
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
    <div className="bg-primary w-72 rounded shadow">
      <div className="flex justify-center items-center text-xl font-semibold gap-2 rounded pt-8">
        <FaTools className="text-black text-xl" />
        <Link to="/">
          <h1 className="font-semibold font-sans italic">Swader Songe</h1>
        </Link>
      </div>
      <div className="p-6">
        {menu.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex items-center py-3 px-4 text-gray-800 hover:text-gray-100 rounded transition duration-300 text-sm"
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
