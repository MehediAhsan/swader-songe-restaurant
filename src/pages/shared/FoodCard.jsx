import { useContext } from 'react';
import { CartContext } from "../../provider/CartProvider";

const FoodCard = ({food}) => {
    const {image, name, description} = food;
    const {cart, setCart} = useContext(CartContext);

    return (
        <div className="bg-gray-100 rounded shadow transition duration-300 hover:shadow-lg">
            <img className="transition-all duration-300 rounded" src={image} alt="" />
            <div className="text-center p-4">
            <h1 className="text-2xl font-medium">{name}</h1>
            <p className="my-2">{description}</p>
            <button onClick={() => setCart(cart+1)} className="px-2 py-1 text-orange-500 border-orange-500 bg-gray-200 hover:bg-gray-700 mb-2 boder border-b-2 rounded-lg font-semibold uppercase transition duration-500 shadow-md">add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;