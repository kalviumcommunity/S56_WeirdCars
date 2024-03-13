import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://weirdcars.onrender.com/userinfo")
      .then((res) => {
        // console.log(res.data)
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  let users = userData.map((el) => el.username);
  let handleSubmit = (e) => {
    e.preventDefault();
    document.cookie =
      `username=${username};expires=` + new Date(2030, 0, 1).toUTCString;
    axios
      .post("https://weirdcars.onrender.com/auth", { username })
      .then((res) => {
        // console.log(res)
        document.cookie =
          `token=${res.data}; expires=` + new Date(2030, 0, 1).toUTCString;

        navigate("/")
      })
      .catch((err) => console.log(err));

    if (users.includes(`${username}`)) {
      console.log("true");
      return;
    } else {
      // localStorage.setItem("currentUser",username)
      axios
        .post("https://weirdcars.onrender.com/addUser", { username })
        .then((res) => {
          console.log(res);
        });
    }
    navigate("/");
  };
  return (
    <div className="LoginformContainer">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="loginheading">Login</h1>
        <input
          type="text"
          placeholder="Enter UserName"
          value={username}
          onChange={(el) => setName(el.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(el) => setPassword(el.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
