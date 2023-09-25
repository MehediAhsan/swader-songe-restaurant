

const MenuCard = ({item}) => {
    const {image, name, description, price} = item;
    return (
        <div className="flex space-x-2 shadow-md rounded p-2">
            <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[118px] h-[104px] bg-gray-400 p-1" src={image} alt="" />
            <div>
                <h1 className="text-xl font-medium">{name}</h1>
                <p className="mt-1 text-gray-700">{description}</p>
            </div>
            <p className="text-xl font-medium text-orange-500">${price}</p>
        </div>
    );
};

export default MenuCard;