import { useState } from "react"

export default function Login() {
  const [email,  setEmail] = useState("")
  const [password,  setPassword] = useState("")

  const onSubmitLoginForm = async (event) => {
    event.preventDefault();
    try {
      const user = { email, password };
      const response = await fetch("http://localhost:8080/login", {
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
      <form onSubmit={onSubmitLoginForm}>
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
        <button>Login</button>
      </form>
    </>
  )
}