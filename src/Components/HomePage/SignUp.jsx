import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp({ toggle }) {
    const url = "https://localhost:7151/api/Register";
    const navigate = useNavigate();


    const handlesignup = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const cpassword = e.target.elements.cpassword.value;

        var createddate =new  Date();
        if(username,email,password){
            if (password === cpassword){
              const newperson2 = {
                username : username,
                email : email,
                password : password,

              }
                // const newperson = {
                //     name : name,
                //     email : email,
                //     password : password,
                //     isemailconfirmed : true,
                //     ispasswordconfirmed : true,
                //     datecreated : createddate,
                // }
                console.log(newperson2)
                axios.post(url, newperson2).then((res) => {console.log(res);
              toast.success("Sign up succesfull",{
                position: 'top-center',
                autoClose: 4000, // Duration in milliseconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,

              });
              navigate('/');
              setTimeout(function(){ window.location.reload(); }, 5000);
            } ).catch((e) => {console.warn("error from post", e);
            toast.error("Email id is already exist please sign in or use forget password", {
              position: 'top-center',
              autoClose: 4000, // Duration in milliseconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            })});

            }else{
                toast.error("Password doesnt match",{
                    position: 'top-right',
                    autoClose: 3000, // Duration in milliseconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }

        }else{
            toast.warn("All fields are mandatory",{
                position: 'top-right',
                autoClose: 3000, // Duration in milliseconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }

        
    }
  return (
    <>
      <form onSubmit={handlesignup}>
        <div className="form sign-up">
          <div className="input-group">
            <i className="bx bxs-user" />
            <input type="text" placeholder="Username" name="username" />
          </div>
          <div className="input-group">
            <i className="bx bx-mail-send" />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt" />
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt" />
            <input type="password" placeholder="Confirm password" name="cpassword" />
          </div>
          <button type="submit">Sign up</button>
          <p>
            <span>Already have an account?</span>
            <b onClick={toggle} className="pointer">
              Sign in here
            </b>
          </p>
        </div>
      </form>
    </>
  );
}

export default SignUp;