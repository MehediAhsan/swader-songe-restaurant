
import { Helmet } from 'react-helmet-async';
import SectionBox from './../shared/SectionBox';

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Swader Songe - Shop
                </title>
            </Helmet>
            <SectionBox title={"our shop"}></SectionBox>
        </div>
    );
};

export default Shop;