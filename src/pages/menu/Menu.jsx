import { Helmet } from 'react-helmet-async';
import Button from '../../components/Button';
import SectionHeading from '../../components/SectionHeading';
import SectionBox from '../shared/SectionBox';
import MenuCard from './../shared/MenuCard';
import { useEffect } from 'react';
import { useState } from 'react';
import ChickenChap from './ChickenChap';
import Pizza from './Pizza';
import Burger from './Burger';
import Soups from './Soups';

const Menu = () => {
    let [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            const specialMenu = data.filter(item => item.category === 'offered')
            setMenu(specialMenu)
        })

    },[])
    return (
        <div>
            <Helmet>
                <title>
                    Swader Songe - Menu
                </title>
            </Helmet>
            <SectionBox title={"our menu"}></SectionBox>
             
             <div className="w-10/12 mx-auto">
                <SectionHeading sub={"Don't miss"} main={"Today's Offer"}></SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuCard
                    key={item._id}
                    item={item}
                    ></MenuCard>)
                }
                </div>
                <div className="flex justify-center my-10">
                    <Button name={"order your favourite one"} design={"px-4 py-3 bg-gray-100 hover:bg-orange-400"}></Button>
                </div>
             </div>

             <ChickenChap></ChickenChap>

             <Pizza></Pizza>

             <Burger></Burger>

             <Soups></Soups>

        </div>
    );
};

export default Menu;