import { useEffect } from 'react';
import { useState } from 'react';
import FoodCard from './../../components/shared/FoodCard';

const FoodCategory = ({selectedFood}) => {
    let [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            const specialFoods = data.filter(item => item.category === `${selectedFood}`)
            setFoods(specialFoods)
        })

    },[selectedFood])

    return (
        <div className="w-10/12 mx-auto mb-20">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodCategory;