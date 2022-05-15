import { useState } from "react"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")


  const onSubmitSignUpForm = async (event) => {
    event.preventDefault();
    try {
      const user = { name, email, password };
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });
      console.log(response)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <>
      <form onSubmit={onSubmitSignUpForm}>
      <input
          type="text"
          className="form-control"
          value={name}
          placeholder="enter name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={email}
          placeholder="enter email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={password}
          placeholder="enter password"
          onChange={e => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </>
  )
}