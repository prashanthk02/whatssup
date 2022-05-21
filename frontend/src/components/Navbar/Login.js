import { useContext, useState } from "react"
import { userContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

import "../../styles/login.scss"


export default function Login() {  

  const { user, setUser, logout, onSubmitLoginForm } = useContext(userContext);
  const [closeLogin, setCloseLogin] = useState(false);
  const navigate = useNavigate();

  const closeHandler = e => {
    window.location.reload();
    // navigate('/');
    setCloseLogin(true);
  };

  const submitHandler = e => {
    e.preventDefault();
    navigate(`/favorites/${user.user_id}`);
<<<<<<< HEAD
  };  
 
=======
  };
  console.log("Here is user", user)
>>>>>>> main
  if (user.activeUser && !user.error) {
    console.log(user.activeUser, user.error)
    return (
      <>
        <span className="greeting"> What's sup, {user.name} !!</span>
        <div>
          <button className="logout-icon" onClick={logout}>Logout</button>
          <button className="favorite-icon" onClick={submitHandler}>MyFavorite</button>
        </div>
      </>
    )
  } else {
    return (
      <>
      <div className="show">                                       
            {closeLogin == false && <form className="form-box solid" onSubmit={onSubmitLoginForm}>
              <button onClick={closeHandler}> X </button>
              <h1 className="login-text">Sign In</h1>
              <label>email</label>
              <input
                type="text"
                name="email"
                className="login-box"
                onChange={e => (setUser(prev => ({ ...prev, email: e.target.value })))}
              />
              <br></br>
              <label>password</label>
              <input
                type="password"
                autoComplete="on"
                name="password"
                className="login-box"
                onChange={e => (setUser(prev => ({ ...prev, password: e.target.value })))}
              />
              <br></br>
              <input type="submit" value="SUBMIT" className="login-btn" />              
              <h6 className="error-message">{user.error}</h6>
            </form>}     
      </div>
      </>
    )
  }
}