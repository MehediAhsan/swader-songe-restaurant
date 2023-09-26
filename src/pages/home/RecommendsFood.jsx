import SectionHeading from "../../components/SectionHeading";
import { useEffect } from 'react';
import { useState } from 'react';
import FoodCard from "../shared/FoodCard";

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
        </div>
    );
};

export default RecommendsFood;