import loginImg from '../../assets/login.json'
import Lottie from "lottie-react";

const Login = () => {
    return (
        <div className="bg-gray-100 w-10/12 mx-auto my-44 flex">
            <div className='w-1/2'>
                <Lottie animationData={loginImg} />
            </div>
            <div>
                dfg
            </div>
        </div>
    );
};

export default Login;