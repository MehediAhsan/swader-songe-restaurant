import AboutSwaderSonge from "./AboutSwaderSonge";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import SpecialMenu from "./SpecialMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AboutSwaderSonge></AboutSwaderSonge>
            <SpecialMenu></SpecialMenu>
        </div>
    );
};

export default Home;