import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebse';
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
            history.push(redirect_url)
        })
    }
  
  // react hook form
    const { register, handleSubmit, formState: { errors } } =   useForm();

    const auth = getAuth();

    const onSubmit = data => {
        const {email, password} = data;
       
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    };

  

//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
  
    return (
        <div>
            <h1>Log in</h1>
            <h5>{error}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            
      <input  {...register("email",{required:true}) }/>
      <br />
      {/* <input defaultValue="test" {...register("example")} />
      <br /> */}
      {errors.email && <span>This field is required</span>}
      <br />
      <input type = 'password' {...register("password", { required: true })} />
      <br />
      {errors.password && <span>This field is required</span>}
      
      <br />
      <input onClick ={handlerSingIn} type="submit" />
      {/* google sign in */}
       <button 
       className = "btn btn-warning"
       onClick = {handlerSingIn}
       >Google SignIn</button>
    </form>
    <p>New User?{<Link to = '/register'>Register Now</Link>}</p>
        </div>
    );
};

export default Login;