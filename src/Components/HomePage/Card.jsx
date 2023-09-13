import React,{useState} from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import "../../Resources/Styles/Card.css";

function Card({setIsLoggedIn}) {
    const [togglebutton, setToggle] = useState(false);

    const toggle = () => {
      setToggle(!togglebutton);
    };
  return (
    <div id="containerbox" className={togglebutton ? "containerbox sign-up" : "containerbox sign-in"}>
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <SignUp toggle={toggle} />
            </div>
          </div>
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <SignIn setIsLoggedIn={setIsLoggedIn} toggle={toggle} />
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card