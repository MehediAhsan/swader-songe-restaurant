

const SectionBox = ({title}) => {
    return (
        <div className="relative">
            <img src="https://images.unsplash.com/photo-1555992457-b8fefdd09069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="h-[400px] md:h-[600px] w-full" />
            <div className="h-[400px] md:h-[600px] w-full bg-black absolute z-20 inset-0 opacity-40"></div>
            <div className="w-8/12 mx-auto flex flex-col justify-center items-center gap-6 absolute bg-black opacity-80 h-[250px] md:h-[300px] inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white">
                <h1 className="text-4xl text-center font-serif uppercase">{title}</h1>
                <p className="text-center w-7/12 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed laudantium officiis recusandae, deserunt sint quisquam illum eius cum omnis. Ea deleniti eos placeat dignissimos totam est eaque ratione quisquam.</p>
                <p className="text-center w-7/12 block md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default SectionBox;