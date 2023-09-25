

const SectionHeading = ({sub, main}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-10">
            <p className="text-orange-500 italic text-lg font-medium my-3">{sub}</p>
            <h1 className="text-3xl font-medium border-y-4 py-4">{main}</h1>
        </div>
    );
};

export default SectionHeading;