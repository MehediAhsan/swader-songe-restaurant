
import { Helmet } from 'react-helmet-async';
import SectionBox from './../../components/shared/SectionBox';
import { useState } from 'react';
import FoodCategory from './FoodCategory';

const Shop = () => {
    const items = ['burger', 'Chicken Chap', 'pizza', 'soup']
    const [selectedFood, setSelectedFood] = useState('burger');


    return (
        <div>
            <Helmet>
                <title>
                    Swader Songe - Shop
                </title>
            </Helmet>
            <SectionBox title={"our shop"} img="https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80"></SectionBox>

            <div className='my-20'>
                <ul className='flex justify-center items-center gap-8 uppercase'>
                    {
                        items.map((item, index) => <li className={`text-xl font-bold transition duration-300 hover:text-orange-500 cursor-pointer hover:border-b-4 hover:border-orange-500 ${selectedFood === item? 'text-orange-500 border-b-4 border-orange-500': ''}`} onClick={() => setSelectedFood(item)} key={index}>
                            {item}
                        </li>)
                    }
                </ul>
            </div>

            <FoodCategory selectedFood={selectedFood}></FoodCategory>        

        </div>
    );
};

export default Shop;