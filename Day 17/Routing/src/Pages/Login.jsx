import React, { useState } from "react";

const Login = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState()


  let handleSubmit = (e) => {
    e.preventDefault();


    if(!username.trim() || !email.trim()  || !password.trim()){
      seterror("all fields are required")
      setTimeout(()=>{
        seterror("")
      },3000)
      return
    }


    console.log(username);
    console.log(email);
    console.log(password);

    alert("form submited successfully");

    setusername("");
    setemail("");
    setpassword("");
  };

  return (
    <div className="h-screen w-full   flex justify-center items-center">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="border p-5 rounded-xl bg-gray-200"
      >
        <h1 className="font-bold text-center text-2xl">Login Page</h1>
        <label htmlFor="username">username :</label>
        <input
          onChange={(event) => {
            setusername(event.target.value);
          }}
          value={username}
          type="text"
          id="username"
          className="border w-full px-2 py-1"
        />
        <br />
        <br />
        <label htmlFor="email">Email :</label>
        <input
          onChange={(event) => {
            setemail(event.target.value);
          }}
          value={email}
          type="email"
          id="email"
          className="border w-full px-2 py-1"
        />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          onChange={(event) => {
            setpassword(event.target.value);
          }}
          value={password}
          type="password"
          id="password"
          className="border w-full px-2 py-1"
        />
        <br />
        <br />

        <button className="bg-blue-400 w-full py-2 rounded">Login</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;