import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function Login() {


  const navigate = useNavigate();


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");





  const handleLogin = (e) => {


    e.preventDefault();




    const users =
      JSON.parse(localStorage.getItem("users")) || [];





    const validUser = users.find(

      (user)=>
        user.email === email &&
        user.password === password

    );





    if(!validUser){


      alert("Invalid Email or Password ❌");

      return;

    }





    localStorage.setItem(

      "user",

      JSON.stringify(validUser)

    );





    alert("Login Successful 🎉");



    navigate("/dashboard");



  };







  return (

    <>


      <Navbar />




      <div className="login-page">


        <div className="login-box">



          <h1>

            Login 🔐

          </h1>





          <form onSubmit={handleLogin}>




            <label>
              Email
            </label>



            <input

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              placeholder="Enter Email"

              required

            />







            <label>
              Password
            </label>



            <input

              type="password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              placeholder="Enter Password"

              required

            />







            <button type="submit">

              Login

            </button>





          </form>





        </div>



      </div>




    </>


  );


}


export default Login;