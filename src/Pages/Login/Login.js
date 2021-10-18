import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebse';


const Login = () => {
  const {googleSignIn} = useAuth()
    const location = useLocation();
    const history = useHistory()
    console.log('came from', location.state?.from)
    const redirect_url = location.state?.from || '/home'
    
    const handlerSingIn = () => {
        googleSignIn()
        .then(resutt => {
            history.push(redirect_url)
        })
    }
  
  // react hook form
    const { register, handleSubmit, formState: { errors } } =   useForm();
    const onSubmit = data => console.log(data);
  
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue="test" {...register("example")} />
      <br />
      
      <input {...register("exampleRequired", { required: true })} />
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input type="submit" />
       <button 
       className = "btn btn-warning"
       onClick = {handlerSingIn}
       >Google SignIn</button>
    </form>
        </div>
    );
};

export default Login;