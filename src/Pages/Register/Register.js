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
        .catch(error => {
            
        })

    }
  
  // react hook form
    const { register, handleSubmit, formState: { errors } } =   useForm();

    const auth = getAuth();

    const onSubmit = data => {
        const {email, password, name} = data;
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
   
  
    return (
        <div className = 'form-container'>
        <div className="form-style">
            <h1 className = 'pb-3'>Register</h1>
            <h5  className= 'error'>{error}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className = 'input-field ' placeholder = ' name'  {...register("name",{required:true}) }/>
      <br />
      {errors.name && <span className= 'error'>This field is required</span>}
      <br />
     
      <input className = 'input-field' placeholder = " email"  {...register("email",{required:true}) }/>
      <br />
     
      {errors.email && <span className= 'error'>This field is required</span>}
      <br />
      
      <input className = 'input-field' placeholder = " password" type = 'password' {...register("password", { required: true })} />
      <br />
      {errors.password && <span  className= 'error'>This field is required</span>}
      
      <br />
      <button className = "signIn-btn btn btn-danger">SignUp</button>
      {/* google sign in */}
       <button 
       className = "btn btn-warning"
       onClick = {handlerSingIn}
       >Google SignIn</button>
    </form>

<hr/>
    
    <p className = 'text-dark'>Already Sign In?{<Link to = '/login'> Log In</Link>}</p>
        </div>
        </div>
    );
};

export default Register;