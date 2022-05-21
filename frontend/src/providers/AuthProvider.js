import { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();

export default function AuthProvider(props) {
  const navigate = useNavigate();
  // initialize state variables
  const [user, setUser] = useState({
    user_id: localStorage.getItem("user_id") || "",
    name: localStorage.getItem("name") || "",
    password: "",
    email: "",
    activeUser: (localStorage.getItem("activeUser") === "true"),
    error: "",
    mode: localStorage.getItem("mode") || "",
    message: ""
  });
  // localStorage.setItem("activeUser", false);
  
  // login control
  const onSubmitLoginForm = async (event) => {
    event.preventDefault();
    const userData = { email: user.email, password: user.password };
    axios.post("http://localhost:8080/login", userData)
      .then((response) => {
        setUser(prev => ({ ...prev, error: response.data.error, mode: "SignIn", user_id: response.data.id, name: response.data.name, email: user.email, activeUser: true }));
        localStorage.setItem("activeUser", true);
        localStorage.setItem("mode", "SignIn");
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("user_id", response.data.id);
      });
  };
  console.log(user)
  console.log("Here is local storage", (localStorage.getItem("activeUser") === "true"));
  // Logout control
  const logout = (event) => {
    event.preventDefault();
    setUser({
      user_id: "",
      name: "",
      password: "",
      email: "",
      activeUser: false,
      error: "",
      mode: ""
    });
    localStorage.setItem("activeUser", false);
    navigate("/");
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