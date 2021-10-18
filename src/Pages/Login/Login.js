import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebse';


const Login = () => {
  const {googleSignIn} = useAuth()
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
       onClick = {googleSignIn}
       >Google SignIn</button>
    </form>
        </div>
    );
};

export default Login;