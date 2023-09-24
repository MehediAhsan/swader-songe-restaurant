import { Link } from "react-router-dom";

const Header = () => {
    const Menus = [
        {
            name: 'Home', 
            link:'/'
        },
        {
            name: 'CONTACT US', 
            link:'/'
        },
        {
            name: 'Our Menu', 
            link:'/'
        },
        {
            name: 'Our Shop', 
            link:'/'
        },

    ]
    return (
        <div className="bg-black text-white">
            <div className="md:flex justify-between px-10 py-10">
                <div>
                    <h1 className="text-2xl font-semibold">Swader Songe</h1>
                </div>
                <div>
                    <ul className="md:flex uppercase">
                        {
                            Menus.map(Menu => <li key={Menu.name} className="md:ml-6">
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