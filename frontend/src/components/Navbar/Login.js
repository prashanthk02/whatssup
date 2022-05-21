import { useContext, useState } from "react"
import { userContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

import "../../styles/login.scss"


export default function Login() {  

  const { user, setUser, logout, onSubmitLoginForm } = useContext(userContext);
  const [closeLogin, setCloseLogin] = useState(false);
  const navigate = useNavigate();

  const closeHandler = e => {    
    setUser(prev => ({ ...prev, mode: ""}));
    setCloseLogin(true);
  };

  const submitHandler = e => {
    e.preventDefault();
    navigate(`/favorites/${user.user_id}`);
  };
 
  if (user.activeUser && !user.error) {
    return (
      <>        
        <div className="logout_favorite-icon">
          <button className="logout-icon" onClick={logout}>Logout</button>
          <button className="favorite-icon" onClick={submitHandler}>My Favorites</button>
        </div>
        <p className="greeting"> What's sup, {user.name} !</p>
      </>
    )
  } else {
    return (
      <div className="login--form"  onClick={closeHandler}>
      <div className="show" onClick={e => e.stopPropagation()}>                                       
            {closeLogin === false && <form className="form-box" onSubmit={onSubmitLoginForm}>
              <button className="close-btn" onClick={closeHandler}> X </button>
              <h1 className="login-text">Login</h1>
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
                autoComplete="on"
                name="password"
                className="login-box"
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
}