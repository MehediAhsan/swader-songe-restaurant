import { Link } from "react-router-dom";
import {FaBars, FaThLarge, FaTimes} from 'react-icons/fa'
import { useState } from "react";
import { FaHome, FaTools, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DashboardHeader = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }

    const Menus = [
        {
            name: 'Home', 
            link:'/',
            icon: <FaHome></FaHome>
        },
        {
            name: 'Dahsboard', 
            link:'/dashboard',
            icon: <FaThLarge></FaThLarge>
        }
    ]

    let [open, setOpen] = useState(false)

    return (
        <div className="bg-black text-white w-full shadow-xl opacity-90">
            <div className="flex items-center justify-between px-14 py-5">
                <div className="flex justify-center items-center text-2xl font-semibold gap-3">
                    <FaTools className="text-orange-500 text-3xl"></FaTools>
                    <Link to="/"><h1 className="font-semibold font-sans italic">Swader Songe</h1></Link>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className="md:hidden absolute top-8 right-10 text-xl">
                        {
                            open ? <FaTimes></FaTimes> : <FaBars></FaBars> 
                        }
                    </div>
                    
                    <ul className={`md:flex md:items-center justify-center absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 py-4 md:py-0 uppercase ${open ? 'top-20 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'} `}>
                        {
                            Menus.map(Menu => <li key={Menu.name} className="flex justify-center items-center gap-1 md:ml-6 my-6 md:my-0 transition duration-300 hover:text-orange-500 font-medium">
                                <span className="text-xl text-orange-500">{Menu.icon}</span>
                               <Link to={Menu.link}>{Menu.name}</Link> 
                            </li>)
                        }
                        {
                            user ? <button title={user.displayName} onClick={handleLogOut} className="text-orange-500 ml-6 text-xl font-medium flex justify-center items-center gap-2">Logout <FaUser className="text-4xl text-orange-500 border-2 rounded-full p-1"></FaUser></button> : <div className="flex justify-center items-center"><button className="border border-orange-500 hover:bg-orange-500 rounded px-4 py-2 ml-6 text-base font-medium uppercase"><Link to="/login">Login</Link></button></div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;