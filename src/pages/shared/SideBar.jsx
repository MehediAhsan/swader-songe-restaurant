import { FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menu = [
    {
      name: "menu",
      link: "/"
    },
    {
      name: "item",
      link: "/"
    }
  ]
  return (
    <div className="bg-gray-200 w-72 rounded shadow">
      <div className="flex justify-center items-center text-xl font-semibold gap-2 bg-orange-200 rounded p-2">
        <FaThLarge className="text-black text-xl"></FaThLarge>
        <Link to="/">
          <h1 className="font-semibold font-sans uppercase">Dashboard</h1>
        </Link>
      </div>
      {
        menu.map((item, index) =>(
          <Link to={item.link} key={index}>{item.name}</Link>
        ))
      }
    </div>
  );
};

export default SideBar;
