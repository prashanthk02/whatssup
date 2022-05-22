import { useContext, useState } from "react"
import axios from "axios";
import { userContext } from "../../providers/AuthProvider";
import "../../styles/login.scss"


export default function SignUp() {

  const { user, setUser } = useContext(userContext);
  const [closeSignUp, setCloseSignUp] = useState(false);

  const onSubmitSignUpForm = async (event) => {
    event.preventDefault();
    const userData = { name: user.name, email: user.email, password: user.password };
    axios.post("http://localhost:8080/register", userData)
      .then((response) => {
        if (response.data.error) {
          return setUser(prev => ({ ...prev, error: response.data.error}));
        }
        setUser(prev => ({ ...prev, error: response.data.error, user_id: response.data.id, email: user.email, activeUser: true, mode: "SignIn" }));
        localStorage.setItem("activeUser", true);
        localStorage.setItem("mode", "SignIn");
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("user_id", response.data.id);
      });
  };

  const closeHandler = e => {
    setUser(prev => ({ ...prev, mode: ""}));
    setCloseSignUp(true);
  };

  return (
    <div className="login--form"  onClick={closeHandler}>
    <div className="show" onClick={e => e.stopPropagation()}>
      
          {closeSignUp === false && <form className="form-box" onSubmit={onSubmitSignUpForm}>
            <button className="close-btn" onClick={closeHandler}> X </button>
            <h1 className="login-text">Sign up</h1>
            <br/>
            <label>Username</label>
            <input
              type="text"
              name="name"
              className="login-box"              
              onChange={e => (setUser(prev => ({ ...prev, name: e.target.value })))}
            />
            <br/>
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="login-box"
              onChange={e => (setUser(prev => ({ ...prev, email: e.target.value })))}
            />
            <br/>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="login-box"
              autoComplete="off"            
              onChange={e => (setUser(prev => ({ ...prev, password: e.target.value })))}
            />
            <br/>
            <button type="submit" className="login-btn" >SUBMIT</button>
            <h6 className="error-message">{user.error}</h6>
          </form>}
        
    </div>
    </div>
  )
}