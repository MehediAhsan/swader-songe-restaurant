import SectionHeading from "../../components/SectionHeading";


const AboutSwaderSonge = () => {
    return (
        <div className="w-10/12 mx-auto my-20 relative">
            <img src="https://images.unsplash.com/photo-1555992457-b8fefdd09069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="h-[400px] md:h-[500px] w-full" />
            <div className="w-10/12 mx-auto flex flex-col justify-center items-center absolute bg-white h-[300px] md:h-[350px] inset-0 py-20 top-14 md:top-20">
                <SectionHeading sub={"About Us"} main={"Swader Songe"}></SectionHeading>
                <p className="text-center w-7/12 pb-16 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed laudantium officiis recusandae, deserunt sint quisquam illum eius cum omnis. Ea deleniti eos placeat dignissimos totam est eaque ratione quisquam.</p>
                <p className="text-center w-7/12 pb-16 block md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default AboutSwaderSonge;