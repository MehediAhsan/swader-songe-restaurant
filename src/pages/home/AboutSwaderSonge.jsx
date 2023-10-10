import SectionHeading from "../../components/SectionHeading";


const AboutSwaderSonge = () => {
    return (
        <div className=" mx-auto my-20 relative">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="h-[400px] md:h-[550px] w-full" />
            <div className="h-[400px] md:h-[550px] w-full bg-black absolute z-20 inset-0 opacity-40"></div>
            <div className="w-8/12 mx-auto flex flex-col justify-center items-center absolute bg-gray-100 h-[300px] md:h-[350px] inset-0 py-20 z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <SectionHeading sub={"--About Us--"} main={"Swader Songe"}></SectionHeading>
                <p className="text-center w-7/12 pb-16 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed laudantium officiis recusandae, deserunt sint quisquam illum eius cum omnis. Ea deleniti eos placeat dignissimos totam est eaque ratione quisquam.</p>
                <p className="text-center w-7/12 pb-16 block md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default AboutSwaderSonge;