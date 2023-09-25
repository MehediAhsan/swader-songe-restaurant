

const Button = ({name, design}) => {
    return (
        <>
            <button className={`boder border-b-2 border-gray-800 rounded-lg ${design} text-lg font-semibold uppercase transition duration-500`}>{name}</button>
        </>
    );
};

export default Button;