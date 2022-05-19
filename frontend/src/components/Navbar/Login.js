import { useContext } from "react"
import { userContext } from "../../providers/AuthProvider";
import { useNavigate } from 'react-router-dom';


export default function Login() {

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
        <form onSubmit={onSubmitLoginForm}>
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
          {user.mode !== "SignUp" && <button onClick={() => (setUser(prev => ({ ...prev, mode: "SignUp"})))}>SignUp</button>}
        </form>
        <h6>{user.error}</h6>
      </>
    )
  }
}