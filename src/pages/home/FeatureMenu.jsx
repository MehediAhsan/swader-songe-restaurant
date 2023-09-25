import Button from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";


const FeatureMenu = () => {
    return (
        <div className="w-10/12 bg-fixed mx-auto my-20 bg-[url('https://images.unsplash.com/photo-1692616788615-61efbcfc6ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">
            <div className="bg-black opacity-75">
            <div className="text-white pt-6">
            <SectionHeading 
            sub={"---Check it out---"}
            main={"from our menu"}
            ></SectionHeading>
            </div>
            <div className="flex justify-center items-center gap-10 pb-14 px-20">
                <div>
                <img src="https://images.unsplash.com/photo-1692616788615-61efbcfc6ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="text-white">
                    <p className="text-xl">March 20, 2023</p>
                    <h1 className="text-2xl uppercase my-2">Where I can get something</h1>
                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid velit, sapiente vitae deserunt voluptatum quas nemo tempora aperiam nesciunt dolorum adipisci autem perferendis delectus amet. Maxime facere tempore quibusdam accusamus.</p>
                    <Button name={"Read More"} design={"px-4 py-2 border-gray-200 hover:bg-orange-500"}></Button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeatureMenu;