import React, { useState } from 'react';
import style from "../styles/signin.module.css";

const Signin = () => {
  const [Loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    role: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone || !formState.password || !formState.role) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/auth/register", {
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

      alert("Registration Successful!");
      // Reset form
      setFormState({
        name: "",
        phone: "",
        email: "",
        password: "",
        role: "",
      });
    window.location.href="/login";


    } catch (error) {
      console.log("Error", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.body}>
      <div className={style.container}>
        <h1 className={style.hadding}>SIGN UP</h1>
        <form onSubmit={submitHandler} className={style.forms} autoComplete='off' >
          <InputField name="name" value={formState.name} update={setFormState} lable="Full Name :-" type="text" />
          <InputField name="phone" value={formState.phone} update={setFormState} lable="Phone No :-" type="number" />
          <InputField name="email" value={formState.email} update={setFormState} lable="Email :-" type="email" />
          <InputField name="password" value={formState.password} update={setFormState} lable="Password :-" type="password" />
          <InputField name="role" value={formState.role} update={setFormState} lable="Role :-" type="text" />

          <button className={style.buttons}>{Loading ? "Loading..." : "Sign Up"}</button>
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

export default Signin;