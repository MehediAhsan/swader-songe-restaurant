import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react";
import { FaHome, FaPhone, FaUtensils, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const Menus = [
        {
            name: 'Home', 
            link:'/',
            icon: <FaHome></FaHome>
        },
        {
            name: 'CONTACT US', 
            link:'/',
            icon: <FaPhone></FaPhone>
        },
        {
            name: 'Our Menu', 
            link:'/',
            icon: <FaUtensils></FaUtensils>
        },
        {
            name: 'Our Shop', 
            link:'/',
            icon: <FaShoppingCart></FaShoppingCart>
        },

    ]

    let [open, setOpen] = useState(false)

    return (
        <div className="bg-black text-white w-full fixed top-0 left-0 z-50 opacity-90">
            <div className="md:flex items-center justify-between px-14 py-8">
                <div>
                    <h1 className="text-2xl font-semibold">Swader Songe</h1>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className="md:hidden absolute top-10 right-10 text-xl">
                        {
                            open ? <FaTimes></FaTimes> : <FaBars></FaBars> 
                        }
                    </div>
                    
                    <ul className={`md:flex md:items-center justify-center absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 py-4 md:py-0 uppercase ${open ? 'top-20 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'} `}>
                        {
                            Menus.map(Menu => <li key={Menu.name} className="flex justify-center items-center gap-1 md:ml-6 my-6 md:my-0 hover:text-orange-400">
                                <span className="text-xl">{Menu.icon}</span>
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