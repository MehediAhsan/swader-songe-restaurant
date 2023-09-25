import AboutSwaderSonge from "./AboutSwaderSonge";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import FeatureMenu from "./FeatureMenu";
import SpecialMenu from "./SpecialMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AboutSwaderSonge></AboutSwaderSonge>
            <SpecialMenu></SpecialMenu>
            <FeatureMenu></FeatureMenu>
        </div>
    );
};

export default Home;