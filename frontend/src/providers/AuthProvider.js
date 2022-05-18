import { createContext, useState } from 'react';
import axios from "axios";
export const userContext = createContext();

export default function AuthProvider(props) {
  // initialize state variables
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    activeUser: false,
    error: "",
    mode: ""
  });

  // login logic
  const onSubmitLoginForm = async (event) => {
    event.preventDefault();
    const userData = { email: user.email, password: user.password };
    axios.post("http://localhost:8080/login", userData)
      .then((response) => {
        setUser(prev => ({ ...prev, name: response.data.name, error: response.data.error, email: user.email, activeUser: true }));
      });
  };
  // Logout logic
  const logout = (event) => {
    event.preventDefault();
    setUser({
      name: "",
      password: "",
      email: "",
      activeUser: false,
      error: ""
    })
  }

  // userContext will expose these items
  const userData = { user, setUser, logout, onSubmitLoginForm };

  // We can use this component to wrap any content we want to share this context
  return (
    <userContext.Provider value={userData}>
      {props.children}
    </userContext.Provider>
  );
};