import { useContext, useEffect } from "react"
import axios from "axios";
import { userContext } from "../../providers/AuthProvider";


export default function SignUp(props) {

  const { user, setUser } = useContext(userContext);

  const onSubmitSignUpForm = async (event) => {
    event.preventDefault();
    props.setMode("SignIn")
    const userData = { name: user.name, email: user.email, password: user.password };
    axios.post("http://localhost:8080/register", userData)
      .then((response) => {
        if (response.data.error) {
          return setUser(prev => ({ ...prev, error: response.data.error, email: "" }));
        }
        setUser(prev => ({ ...prev, user_id: response.data.id, error: response.data.error, email: user.email, activeUser: true }));
      });
  };

  return (
    <>
      <form onSubmit={onSubmitSignUpForm}>
        <input
          type="text"
          className="form-control"
          placeholder="enter name"
          onChange={e => (setUser(prev => ({ ...prev, name: e.target.value })))}
        />
        <input
          type="text"
          placeholder="enter email"
          className="form-control"
          onChange={e => (setUser(prev => ({ ...prev, email: e.target.value })))}
        />
        <input
          type="password"
          className="form-control"
          autoComplete="on"
          placeholder="enter password"
          onChange={e => (setUser(prev => ({ ...prev, password: e.target.value })))}
        />
        <button>SignUp</button>
      </form>
    </>
  )
}