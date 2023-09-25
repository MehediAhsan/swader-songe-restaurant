import SectionHeading from "../../components/SectionHeading";
import { useState } from 'react';
import { useEffect } from "react";
import MenuCard from "../shared/MenuCard";


const SpecialMenu = () => {
    let [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            const specialMenu = data.filter(item => item.category === 'special')
            setMenu(specialMenu)
        })

    },[])
    return (
        <div className="w-10/12 mx-auto">
            <SectionHeading 
            sub={"---Check it out---"}
            main={"our special menu"}
            ></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuCard
                    key={item._id}
                    item={item}
                    ></MenuCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button className="boder border-b-2 border-gray-800 rounded-lg px-7 py-5 text-xl font-semibold">View Full  Menu</button>
            </div>
        </div>
    );
};

export default SpecialMenu;