import { useContext, useEffect } from "react"
import { userContext } from "../../providers/AuthProvider";
import { NavLink, useNavigate } from 'react-router-dom';


export default function Login(props) {

  const { user, setUser, logout, onSubmitLoginForm } = useContext(userContext);
  
  const navigate = useNavigate();

  const submitHandler = e => {
		e.preventDefault();
		navigate(`/favorites/${user.user_id}`);
	};

  if (user.activeUser && !user.error) {
    return (
      <>
        <h5> What's sup {user.name}</h5>
        <button onClick={logout}>Logout</button>
				<button onClick={submitHandler}>MyFavorite</button>
        
      </>
    )
  } else {
    return (
      <>
        <form onSubmit={ onSubmitLoginForm}>
          <input
            type="text"
            className="form-control"
            placeholder="enter email"
            onChange={e => (setUser(prev => ({ ...prev, email: e.target.value })))}
          />
          <input
            type="password"
            autoComplete="on"
            className="form-control"
            placeholder="enter password"
            onChange={e => (setUser(prev => ({ ...prev, password: e.target.value })))}
          />
          <button>Login</button>
          {props.mode != "SignUp" && <button onClick={() => props.setMode("SignUp")}>SignUp</button>}
        </form>
        <h6>{user.error}</h6>
      </>
    )
  }
}