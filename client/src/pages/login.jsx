import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/userSlice";

export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    setPassword("");
    setUsername("");
  };

  const loggedIn = useSelector((state) => state.user.isValidated);
  if(loggedIn) {
    navigate(`/map`, {replace: true})
  };
  

  return (
    <div className="V_centered">
      <form onSubmit={handleSubmit} id="login">
        <input
          placeholder="Enter a username"
          className="capsule_big bold widthEl flex_center center input"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="Enter a password"
          className="capsule_big bold widthEl flex_center center input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {useSelector((state) => state.user.error) !== "" && <p>Wrong password or username try again</p> }

        <button
          type="submit"
          className="capsule_big flex_center center inverted widthEl"
        >
          <h2>THIS NOW </h2>
        </button>
      </form>
    </div>
  );
}
