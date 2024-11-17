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
  if (loggedIn) {
    navigate(`/map`, { replace: true });
  }

  return (
    <div className=" V_centered">
      <h3>LOG IN :</h3>
      <form onSubmit={handleSubmit} id="login" className="box_post">
        <label htmlFor="username" className="smallFont">
          Enter a username:
        </label>
        <input
          id="username"
          placeholder="...username"
          className="I_capsule_big"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password" className="smallFont">
          Enter a password:
        </label>
        <input
          id="password"
          placeholder="...password"
          className="I_capsule_big"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {useSelector((state) => state.user.error) !== "" && (
          <p>Wrong password or username try again</p>
        )}

        <button type="submit" className="B_big_inverted">
          <h2>THIS NOW </h2>
        </button>
      </form>
    </div>
  );
}
