import SectionBox from './../../components/shared/SectionBox';
import Button from './../../components/Button';
import MenuCard from './../../components/shared/MenuCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChickenChap = () => {
    let [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            const specialMenu = data.filter(item => item.category === 'Chicken Chap')
            setMenu(specialMenu)
        })

    },[])
    return (
        <div>
           <SectionBox title={"Chicken chap"}></SectionBox> 

           <div className="w-10/12 mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuCard
                    key={item._id}
                    item={item}
                    ></MenuCard>)
                }
                </div>
                <Link to="/shop">
                    <div className="flex justify-center my-10">
                        <Button name={"order your favourite one"} design={"px-4 py-3 bg-gray-100 hover:bg-orange-400"}></Button>
                    </div>
                </Link>
             </div>
        </div>
    );
};

export default ChickenChap;