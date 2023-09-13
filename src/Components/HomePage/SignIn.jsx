import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function SignIn({ toggle, setIsLoggedIn }) {
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const url = "https://localhost:7151/api/Login";
    // function load(){
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false);
    //   },3000)
    // }




    const handlesignin = (e) => {
      e.preventDefault();
      const username = e.target.elements.uname.value;
      const password = e.target.elements.password.value;
      const login = {
        username : username,
        password : password,
      }
      if(username === "" && password === ""){
          toast.warn("You need to entered something",{
              position: "top-right",
              autoClose: 3000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
  
          })
      }else{
          console.log({username,password});
          axios.post(url,login).then((res) => {console.log(res.data);toast.success('Sign In Successfully', {
          position: 'top-right',
          autoClose: 3000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // load();
        setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/request')

      },3000)
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("username", username);
        setIsLoggedIn(true);
      } ).catch((e) => {console.warn("error from post", e);
      toast.error("Login Failed",{
          position : "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
      })});
      setIsLoggedIn(false);
  
      }
      
    }
    // useEffect(() => {
      
    // },[])

    return (
      <>{
        loading ? <ClimbingBoxLoader color="#3dcd58" loading={loading} size={20}/>
        :
        <form onSubmit={handlesignin}>
          <div className="form sign-in">
            <div className="input-group">
              <i className="bx bxs-user" />
              <input type="text" placeholder="Username" name="uname"/>
            </div>
            <div className="input-group">
              <i className="bx bxs-lock-alt" />
              <input type="password" placeholder="Password" name="password" />
            </div>
            <button type="submit">Sign in</button>
            {/* <p>
              <b>Forgot password?</b>
            </p> */}
            <p>
              <span>Don't have an account?</span>
              <b onClick={toggle} className="pointer">
                Sign up here
              </b>
            </p>
          </div>
        </form>

      }
        
      </>
    );
  }
  
  export default SignIn;
  