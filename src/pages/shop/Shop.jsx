
import { Helmet } from 'react-helmet-async';
import SectionBox from './../shared/SectionBox';

const Shop = () => {
    const items = ['Buger', 'Chicken Chap', 'Pizza', 'Soups']
    return (
        <div>
            <Helmet>
                <title>
                    Swader Songe - Shop
                </title>
            </Helmet>
            <SectionBox title={"our shop"}></SectionBox>

            <div className='my-20'>
                <ul className='flex justify-center items-center gap-8 uppercase'>
                    {
                        items.map((item, index) => <li className='text-xl font-bold transition duration-300 hover:text-orange-500 cursor-pointer hover:border-b-4 hover:border-orange-500' key={index}>
                            {item}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Shop;