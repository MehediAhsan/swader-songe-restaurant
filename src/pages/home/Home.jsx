import AboutSwaderSonge from "./AboutSwaderSonge";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import FeatureMenu from "./FeatureMenu";
import RecommendsFood from "./RecommendsFood";
import Reviews from "./Reviews/Reviews";
import SpecialMenu from "./SpecialMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AboutSwaderSonge></AboutSwaderSonge>
            <SpecialMenu></SpecialMenu>
            <FeatureMenu></FeatureMenu>
            <RecommendsFood></RecommendsFood>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;