import { useContext, useState } from "react"
import axios from "axios";
import { userContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.scss"


export default function SignUp() {

  const { user, setUser } = useContext(userContext);
  const [closeSignUp, setCloseSignUp] = useState(false);
  const navigate = useNavigate();

  const onSubmitSignUpForm = async (event) => {
    event.preventDefault();
    const userData = { name: user.name, email: user.email, password: user.password };
    axios.post("http://localhost:8080/register", userData)
      .then((response) => {
        if (response.data.error) {
          return setUser(prev => ({ ...prev, error: response.data.error, email: "", activeUser: false }));
        }
        setUser(prev => ({ ...prev, error: response.data.error, user_id: response.data.id, email: user.email, activeUser: true, mode: "SignIn" }));
      });
  };

  const closeHandler = e => {
    window.location.reload();
    setCloseSignUp(true);
  };

  return (
    <>
    <div className="show">
      
          {closeSignUp == false && <form className="form-box solid" onSubmit={onSubmitSignUpForm}>
            <button onClick={closeHandler}> X </button>
            <h1 className="signup-text">Sign Up</h1>
            <label>Username</label>
            <br></br>
            <input
              type="text"
              name="name"
              className="signup-box"              
              onChange={e => (setUser(prev => ({ ...prev, name: e.target.value })))}
            />
            <br></br>
            <label>Emaill</label>
            <input
              type="text"
              name="email"
              className="signup-box"
              onChange={e => (setUser(prev => ({ ...prev, email: e.target.value })))}
            />
            <br></br>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="signup-box"
              autoComplete="on"            
              onChange={e => (setUser(prev => ({ ...prev, password: e.target.value })))}
            />
            <br></br>
            <input type="submit" value="SUBMIT" className="login-btn" />
          </form>}
        
    </div>
    </>
  )
}