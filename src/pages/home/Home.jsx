import AboutSwaderSonge from "./AboutSwaderSonge";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import FeatureMenu from "./FeatureMenu";
import RecommendsFood from "./RecommendsFood";
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
        </div>
    );
};

export default Home;