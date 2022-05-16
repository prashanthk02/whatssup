import axios from "axios";

export default function SignUp(props) {

  const onSubmitSignUpForm = async (event) => {
    event.preventDefault();
    const user = { name: props.state.name, email: props.state.email, password: props.state.password };
    axios.post("http://localhost:8080/register", user)
      .then((response) => {
        props.setState(prev => ({ ...prev, error: response.data.error, email: props.state.email, activeUser: true }));
      });
  };

  return (
    <>
      <form onSubmit={onSubmitSignUpForm}>
        <input
          type="text"
          className="form-control"
          placeholder="enter name"
          onChange={e => (props.setState(prev => ({ ...prev, name: e.target.value })))}
        />
        <input
          type="text"
          className="form-control"
          onChange={e => (props.setState(prev => ({ ...prev, email: e.target.value })))}
        />
        <input
          type="text"
          className="form-control"
          placeholder="enter password"
          onChange={e => (props.setState(prev => ({ ...prev, password: e.target.value })))}
        />
        <button>Register</button>
        <h6>{props.state.error}</h6>
      </form>
    </>
  )
}