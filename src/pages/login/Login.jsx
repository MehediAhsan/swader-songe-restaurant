import loginImg from '../../assets/login.json'
import Lottie from "lottie-react";
import {FaGoogle, FaFacebook, FaGithub} from 'react-icons/fa'

const Login = () => {
    return (
        <div className="bg-gray-100 w-10/12 mx-auto my-44 flex">
            <div className='w-1/2'>
                <Lottie animationData={loginImg} />
            </div>
            <div className='w-1/2 my-8'>
                <h1 className='text-center text-2xl font-semibold my-4'>Login</h1>
                <form action="" className='w-7/12 mx-auto flex flex-col gap-5'>
                    <div>
                        <legend className='text-lg font-medium mb-2'>Email</legend>
                        <input type="email" name="" id="" className='p-3 w-full rounded' placeholder='Write your email...' />
                    </div>
                    <div>
                        <legend className='text-lg font-medium mb-2'>Password</legend>
                        <input type="password" name="" id="" className='p-3 w-full rounded' placeholder='Write your password...' />
                    </div>
                    <button className='bg-orange-400 p-3 rounded text-white font-medium'>Sign In</button>
                    <p className='text-orange-400 text-center'>New here? Create a New Account</p>
                    <p className='text-gray-800 text-center'>Or sign in with</p>
                    <div className='flex justify-center items-center gap-10 text-4xl'>
                        <FaFacebook></FaFacebook>
                        <FaGoogle></FaGoogle>
                        <FaGithub></FaGithub>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;