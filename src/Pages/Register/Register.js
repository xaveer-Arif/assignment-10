import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import './Register.css'
import useFirebase from '../../Hooks/useFirebse';
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification, updateProfile, onAuthStateChanged  } from "firebase/auth";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Form , Button} from 'react-bootstrap';



const Register = () => {
  const {googleSignIn,user, setUser} = useAuth()
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
        const {email, password, name} = data;
        // console.log(name)
        if(password.length < 6){
            setError('password at least 6 charecter')
            return 
        }
       
            createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            history.push(redirect_url)
            setUser(result.user)
            
            emailVerify()
            updateName()
        }) 
        
       
    
        
        // .catch(error => {
        //     setError(error.message)
        // })
    //   / update 
   const updateName = () => {
        updateProfile (auth.currentUser, {displayName:name})
        .then(result => {})
    }
    };
     
   
    // verify email
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
        .then((result)=> {
            console.log(result)
        })
    }
   

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
            <h1>Register</h1>
            <h5>{error}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            
      <input className = 'input-field'  {...register("name",{required:true}) }/>
      <br />
      {errors.name && <span>This field is required</span>}
      <br />
      <input className = 'input-field'  {...register("email",{required:true}) }/>
      <br />
      {/* <input defaultValue="test" {...register("example")} />
      <br /> */}
      {errors.email && <span>This field is required</span>}
      <br />
      <input className = 'input-field' type = 'password' {...register("password", { required: true })} />
      <br />
      {errors.password && <span>This field is required</span>}
      
      <br />
      <input  type="submit" />
      {/* google sign in */}
       
    </form>

{/*  */}


{/*  */}
    <button 
       className = "btn btn-warning"
       onClick = {handlerSingIn}
       >Google SignIn</button>
    <p>Already Sign In?{<Link to = '/login'>Log In</Link>}</p>
        </div>
    );
};

export default Register;