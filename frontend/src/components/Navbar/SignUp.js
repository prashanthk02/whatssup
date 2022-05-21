import { useContext } from "react"
import axios from "axios";
import { userContext } from "../../providers/AuthProvider";
import "../../styles/signup.scss"


export default function SignUp() {

  const { user, setUser } = useContext(userContext);

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

  return (
    <>
    <div className="show">
      <div className="signup-form">
        <div className="form-box solid">
          <form className="form-box-inner" onSubmit={onSubmitSignUpForm}>
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
          </form>
        </div>
      </div>
    </div>
    </>
  )
}