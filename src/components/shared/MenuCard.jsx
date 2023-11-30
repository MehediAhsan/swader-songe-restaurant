

const MenuCard = ({item}) => {
    const {image, name, description, price} = item;
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 shadow-md rounded p-6 bg-gray-100 cursor-pointer border-2">
            <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[118px] h-[104px] bg-gray-300 p-1" src={image} alt="" />
            <div>
                <h1 className="text-xl font-medium">{name}</h1>
                <p className="mt-1 text-gray-700">{description}</p>
            </div>
            <p className="text-xl font-medium text-orange-500">${price}</p>
        </div>
    );
};

export default MenuCard;