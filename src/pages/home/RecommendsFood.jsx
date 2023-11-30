import SectionHeading from "../../components/SectionHeading";
import { useEffect } from 'react';
import { useState } from 'react';
import FoodCard from "../../components/shared/FoodCard";
import Button from './../../components/Button';

const RecommendsFood = () => {
    let [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            const specialFoods = data.filter(item => item.category === 'drinks')
            setFoods(specialFoods)
        })

    },[])
    return (
        <div className="w-10/12 mx-auto">
           <SectionHeading
           sub={"---Should Try---"}
           main={"recommends food"}
           ></SectionHeading>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div> 
            <div className="flex justify-center my-10">
                <Button name={"View all food"} design={"px-4 py-3  border-orange-500 bg-gray-100 hover:bg-orange-400"}></Button>
            </div>
        </div>
    );
};

export default RecommendsFood;