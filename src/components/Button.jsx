

const Button = ({name, design}) => {
    return (
        <>
            <button className={`boder border-b-2 border-gray-800 rounded-lg ${design} font-semibold uppercase transition duration-500 shadow-md`}>{name}</button>
        </>
    );
};

export default Button;