import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase-init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Signup = () => {

    const [success,setSuccess] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSignup = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked
        console.log(email,password,terms)

        setErrorMessage('')

        if(!terms){
            setErrorMessage('please check click box')
            return;
        }

        if(password.length < 6){
            setErrorMessage('password long 6 charecter long')
            return;
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            console.log(result.user)
            setSuccess(true)

            sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('verification email send')
            })
        })
        .catch(error => {
            console.log('error',error.message)
            setErrorMessage(error.message)
            setSuccess(false)
        })
    }

    return (
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                <h3 className="text-3xl text-center font-bold">sign up now!</h3>
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? 'text' : 'password'} 
                    name="password" 
                    placeholder="password" 
                    className="input input-bordered" required />
                    <button onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-12">
                        {
                            showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                    </button>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label justify-start cursor-pointer">
                        <input type="checkbox" className="checkbox mr-3" name="terms" />
                        <span className="label-text">Accept our terms and condition</span>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                {
                    errorMessage && <p className="text-2xl text-red-600">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-700">successfully signup</p>
                }
                <p>alrady have an account <Link to="/login">login</Link></p>
            </div>
    );
};

export default Signup;