import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function Register() {


  const navigate = useNavigate();


  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [confirmPassword,setConfirmPassword] = useState("");




  const handleRegister = (e) => {


    e.preventDefault();



    if(password !== confirmPassword){


      alert("Passwords do not match ❌");

      return;

    }




    const users =
      JSON.parse(localStorage.getItem("users")) || [];




    const existingUser = users.find(
      (user)=>user.email === email
    );




    if(existingUser){


      alert("User already exists ❌");

      return;

    }





    const newUser = {


      name,

      email,

      password


    };





    users.push(newUser);




    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );



    // current user save
    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );





    alert("Registration Successful 🎉");



    navigate("/login");



  };






  return (

    <>


      <Navbar />



      <div className="login-page">


        <div className="login-box">



          <h1>
            Register 📝
          </h1>





          <form onSubmit={handleRegister}>



            <label>
              Name
            </label>


            <input

              type="text"

              value={name}

              onChange={(e)=>setName(e.target.value)}

              placeholder="Enter Name"

              required

            />





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






            <label>
              Confirm Password
            </label>


            <input

              type="password"

              value={confirmPassword}

              onChange={(e)=>setConfirmPassword(e.target.value)}

              placeholder="Confirm Password"

              required

            />






            <button type="submit">

              Register

            </button>




          </form>




        </div>


      </div>



    </>


  );


}


export default Register;