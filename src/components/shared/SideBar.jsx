import { FaThLarge, FaUser, FaCog, FaChartBar, FaCalendar, FaEnvelope, FaTools, FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState } from 'react';

const SideBar = () => {
  const [open, setOpen] = useState(false);

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
    <>
      <FaBars onClick={() => setOpen(!open)} className={`${open && "hidden"} text-orange-500 absolute top-8 left-8 text-xl block lg:hidden`}></FaBars>
      <ImCross onClick={() => setOpen(!open)} className={`${!open && "hidden"}  absolute top-8 left-8 text-white z-10 text-xl block lg:hidden`}></ImCross>
    <div className={`${open ? "absolute top-6": "hidden"} bg-primary w-72 rounded shadow lg:block`}>
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
    </>
  );
};

export default SideBar;
