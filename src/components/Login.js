import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateLogin, validateRegister } from '../utils/validations';
import BGIMAGE from '../images/bg.jpg'
import USERIMAGE from '../images/netflix-user.jpg'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { firebaseAuth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
//const auth = getAuth(); // we can also store this in firebase.js file if you dont want again and agian

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignInForm ,setIsSignInForm] = useState(true);
    const [errorMessage ,setErrorMessage] = useState(null);
    const updateSignInFormStatus = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef();
    const password = useRef();
    const name = useRef();
    const confirmPassword = useRef();
    const validateForm = ()=>{
        if(isSignInForm){
            const isValid = validateLogin(email.current.value, password.current.value);
            setErrorMessage(isValid);
            if(isValid !== null) return;
            signInWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value).then((userCredential) => {
                const {uid, email, displayName, photoURL} = userCredential.user;
                dispatch(addUser({uid:uid, email:email, name:displayName, profile:photoURL}));
                navigate("/browse");
            }).catch((error) => {
                setErrorMessage(error.message);
            });
        }else{
            const isValid = validateRegister(name.current.value, email.current.value, password.current.value, confirmPassword.current.value);
            setErrorMessage(isValid);
            if(isValid !== null) return;
            createUserWithEmailAndPassword(firebaseAuth, email.current.value, password.current.value).then((userCredential) => {
                updateProfile(firebaseAuth.currentUser, {
                    displayName:name.current.value,
                    photoURL:USERIMAGE
                }).then(() => {
                    const {uid, email, displayName, photoURL} = firebaseAuth.currentUser;
                    dispatch(addUser({uid:uid, email:email, name:displayName, profile:photoURL}));
                    navigate("/browse");
                  }).catch((error) => {
                    setErrorMessage(error.message)
                  });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(error.message);
            });
        }
    }
    return (
        <>
            <Header  isLogin={false}/>
            <div className="relative h-screen bg-cover bg-center"  style={{ backgroundImage: `url(${BGIMAGE})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                    <div className="w-full max-w-md p-16 text-white bg-black bg-opacity-70 mt-24">
                        <h2 className="text-3xl font-bold mb-8">{(isSignInForm) ? "Sign In" : "Register Here"}</h2>
                        <form className="space-y-4">
                            { (!isSignInForm) && <div><input ref={name} type="text" placeholder="Full Name" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div> }
                            <div><input ref={email} type="text" placeholder="Email" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div>
                            <div><input ref={password} type="password" placeholder="Password" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div>
                            { (!isSignInForm) && <div> <input ref={confirmPassword} type="password" placeholder="Confirm Password" className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/></div> }
                            { (isSignInForm) &&  
                                <div className="space-y-4 flex justify-between">
                                    <div className="flex items-center justify-center space-x-2">
                                        <input type="checkbox" className="form-checkbox text-red-600" />
                                        <span className="text-sm text-gray-400">Remember me</span>
                                    </div>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">Forgot password?</a>
                                </div> 
                            }
                            <p className='text-red-500 text-sm'>{errorMessage}</p>
                            <button type='button' onClick={validateForm} className="w-full p-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200">
                                {(isSignInForm) ? "Sign In" : "Register" }
                            </button>
                        </form>

                        <div className="flex items-center my-4">
                            <span className="flex-grow h-px bg-gray-700"></span>
                            <span className="px-4 text-sm text-gray-400">OR</span>
                            <span className="flex-grow h-px bg-gray-700"></span>
                        </div>

                        {(isSignInForm) ? ( 
                            <div className="mt-6 text-center text-gray-400 text-sm">
                                New to Netflix?{' '}
                                <a href="#" className="text-white hover:underline" onClick={updateSignInFormStatus}>Sign up now.</a>
                            </div>
                        ):(
                            <div className="mt-6 text-center text-gray-400 text-sm">
                                Already have account?{' '}
                                <a href="#" className="text-white hover:underline" onClick={updateSignInFormStatus}>Sign in now.</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login