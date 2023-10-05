import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";
import { FaHome, FaEnvelope, FaUtensils, FaShoppingCart, FaTools } from "react-icons/fa";

const Header = () => {
    const Menus = [
        {
            name: 'Home', 
            link:'/',
            icon: <FaHome></FaHome>
        },
        {
            name: 'CONTACT US', 
            link:'/contact',
            icon: <FaEnvelope></FaEnvelope>
        },
        {
            name: 'Our Menu', 
            link:'/menu',
            icon: <FaUtensils></FaUtensils>
        },
        {
            name: 'Our Shop', 
            link:'/shop',
            icon: <FaShoppingCart></FaShoppingCart>
        },

    ]

    let [open, setOpen] = useState(false)

    return (
        <div className="bg-black text-white w-full fixed top-0 left-0 z-50 opacity-90 shadow-xl">
            <div className="flex items-center justify-between px-14 py-7">
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;