import loginImg from '../../assets/login.json'
import Lottie from "lottie-react";
import {FaGoogle, FaFacebook, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const {createUser,userUpdateProfile} = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;

        createUser(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            userUpdateProfile(displayName)
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
    }
    return (
        <>
        <Helmet>
                <title>
                    Swader Songe - SignUp
                </title>
            </Helmet>
        <div className="bg-gray-100 w-10/12 mx-auto my-44 flex flex-row-reverse items-center">
            <div className='w-1/2'>
                <Lottie animationData={loginImg} />
            </div>
            <div className='w-1/2 my-8'>
                <h1 className='text-center text-2xl font-semibold my-4'>Sign Up</h1>
                <form onSubmit={handleSubmit} action="" className='w-7/12 mx-auto flex flex-col gap-4'>
                    <div>
                        <legend className='text-lg font-medium mb-2'>Name</legend>
                        <input type="text" name="name" id="" className='p-3 w-full rounded border' placeholder='Write your name...' />
                    </div>
                    <div>
                        <legend className='text-lg font-medium mb-2'>Email</legend>
                        <input type="email" name="email" id="" className='p-3 w-full rounded border' placeholder='Write your email...' />
                    </div>
                    <div>
                        <legend className='text-lg font-medium mb-2'>Password</legend>
                        <input type="password" name="password" id="" className='p-3 w-full rounded border' placeholder='Write your password...' />
                    </div>
                    <button className='bg-orange-400 p-3 rounded text-white font-medium'>Sign Up</button>
                    <Link to="/login"><p className='text-orange-400 text-center'>Already registered? Go to log in</p></Link>
                    <p className='text-gray-800 text-center'>Or sign in with</p>
                    <div className='flex justify-center items-center gap-10 text-4xl'>
                        <FaFacebook></FaFacebook>
                        <FaGoogle></FaGoogle>
                        <FaGithub></FaGithub>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default SignUp;