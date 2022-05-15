import { useState } from "react"

export default function Login() {
  const [email,  setEmail] = useState("")
  const [password,  setPassword] = useState("")

  
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
        <button id="login">Login</button>
      </form>
    </>
  )
}