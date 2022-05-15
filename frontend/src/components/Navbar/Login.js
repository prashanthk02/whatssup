export default function Login() {
  return (
    <>
      <form action="/login">
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={e => setPassword(e.target.value)}
        />
        <button id="login">Login</button>
      </form>
    </>
  )
}