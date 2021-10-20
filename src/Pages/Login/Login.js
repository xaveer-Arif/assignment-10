import React, {useState } from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { Link } from 'react-router-dom';



const Login = () => {
  const {googleSignIn} = useAuth()
    const location = useLocation();
    const history = useHistory()

    const [error, setError] = useState('')

    const redirect_url = location.state?.from || '/home'
    
    const handlerSingIn = () => {
        googleSignIn()
        .then(resutt => {
            setError({})
            history.push(redirect_url)
        })
        .catch(error => {
            setError(error.message)
        })

    }
  
  // react hook form
    const { register, handleSubmit, formState: { errors } } =   useForm();

    const auth = getAuth();

    const onSubmit = data => {
        const {email, password} = data;
       
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            history.push(redirect_url)
            console.log(result.user)
            setError({})
        })
        .catch(error => {
            setError(error.message)
        })
    };

  

    return (
        <div  className = 'form-container'>
        <div className="form-style">
            <h1 className = 'pb-3'>Log in</h1>
            <h5  className= 'error'>{error}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            
      <input  className = 'input-field ' placeholder =" email"  {...register("email",{required:true}) }/>
      <br />
     
      {errors.email && <span className= 'error'>This field is required</span>}
      <br />
      <input  className = 'input-field'  placeholder = " password" type = 'password' {...register("password", { required: true })} />
      <br />
      {errors.password && <span  className= 'error'>This field is required</span>}
      
      <br />
      <input  className = "signIn-btn btn btn-danger" type="submit" />
      {/* google sign in */}
       <button 
       className = "btn btn-warning"
       onClick = {handlerSingIn}
       >Google SignIn</button>
    </form>
    <hr />
    <p className = 'text-dark'>New User?{<Link to = '/register'>Register Now</Link>}</p>
        </div>
        </div>
    );
};

export default Login;