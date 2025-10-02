import React, { useEffect, useState } from 'react'
import style from "../styles/login.module.css";

const Login = () => {
 const [Loading, setLoading] = useState(false);
   const [formState, setFormState] = useState({
     email: "",
     password: ""
   });
 
   const submitHandler = async (e) => {
     e.preventDefault();
     if ( !formState.email ||  !formState.password ) {
       return alert("All fields are required");
     }
 
     try {
       setLoading(true);
       const res = await fetch("http://localhost:4000/auth/login", {
         method: "post",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formState),
       });
 
       const data = await res.json();
       console.log(data);
       if (!data.success) {
         return alert(data.error);
       }

    const token = data.data.accessToken;
    const refresh=data.data.refreshToken;

    localStorage.setItem("token",token);
    localStorage.setItem("refresh",refresh);
 
       alert("login Successful!");
       // Reset form
       setFormState({
         email: "",
         password: "",
       });
     window.location.href="/";
 
 
     } catch (error) {
       console.log("Error", error);
       alert("Something went wrong!");
     } finally {
       setLoading(false);
     }
   };
    useEffect(()=>{
    if(localStorage.getItem("token")){
      window.location.href="/"
    }
  },[]);
 
   return (
     <div className={style.body}>
       <div className={style.container}>
         <h1 className={style.hadding}>LOGIN</h1>
         <form onSubmit={submitHandler} className={style.forms} autoComplete='off' >
           <InputField name="email" value={formState.email} update={setFormState} lable="Email :-" type="email" />
           <InputField name="password" value={formState.password} update={setFormState} lable="Password :-" type="password" />
           <button className={style.buttons}>{Loading ? "Loading..." : "Login"}</button>
         </form>
       </div>
     </div>
   );
 };
 
 const InputField = ({ lable, type, update, value, name }) => {
   return (
     <div className={style.inputfield}>
       <span>{lable}</span>
       <InputBox type={type} update={update} value={value} name={name} />
     </div>
   );
 };
 
 const InputBox = ({ type, value, update, name }) => {
   return (
     <input
       value={value}
       name={name}
       onChange={(e) => update((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
       type={type}
       className={style.input}
       autoComplete='off'
     />
   );
 };
 

export default Login