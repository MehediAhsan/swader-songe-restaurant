import Button from "../../components/Button";


const FoodCard = ({food}) => {
    const {image, name, description} = food;
    return (
        <div className="bg-gray-100 rounded shadow transition duration-300 hover:shadow-lg">
            <img className="p-2 transition-all duration-300 hover:p-0 rounded" src={image} alt="" />
            <div className="text-center p-4">
            <h1 className="text-2xl font-medium">{name}</h1>
            <p className="my-2">{description}</p>
            <Button name={"add to cart"} design={"px-2 py-1 text-orange-500 border-orange-500 bg-gray-200 hover:bg-gray-700 mb-2"}></Button>
            </div>
        </div>
    );
};

export default FoodCard;