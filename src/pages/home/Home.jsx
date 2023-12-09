import AboutSwaderSonge from "./AboutSwaderSonge";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import FeatureMenu from "./FeatureMenu";
import RecommendsFood from "./RecommendsFood";
import Reviews from "./Reviews/Reviews";
import SpecialMenu from "./SpecialMenu";
import { Helmet } from 'react-helmet-async';
import EventsAndPromotions from "./EventsAndPromotions";
import { ScrollUp } from './../../helpers/ScrollUp';

const Home = () => {
    ScrollUp();
    return (
        <div>
            <Helmet>
                <title>
                    Swader Songe - Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <AboutSwaderSonge></AboutSwaderSonge>
            <SpecialMenu></SpecialMenu>
            <FeatureMenu></FeatureMenu>
            <RecommendsFood></RecommendsFood>
            <Reviews></Reviews>
            <EventsAndPromotions></EventsAndPromotions>
        </div>
    );
};

export default Home;