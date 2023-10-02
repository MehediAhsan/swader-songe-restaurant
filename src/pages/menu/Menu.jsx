import { Helmet } from 'react-helmet-async';
import SectionBox from '../shared/SectionBox';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Swader Songe - Menu
                </title>
            </Helmet>
            <SectionBox></SectionBox>
        </div>
    );
};

export default Menu;