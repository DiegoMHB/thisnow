import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../features/userSlice";


const emptyForm = {
  username: "",
  name: "",
  email: "",
  password: "",
  city: "",
  profile_picture: "",
};

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState(emptyForm);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(newUser(form));
    setForm(emptyForm);
    navigate(`/map`, { replace: true });
  };

  return (
    <div className="V_centered">
      <h3>CREATE AN ACCOUNT :</h3>
      <form id="signin" className="genericBox" onSubmit={handleSubmit}>
        <input
          placeholder="...username*"
          className=" fontInputSignin widthEl flex_center center mgL20 border-bottom input"
          type="text"
          name="username"
          required
          value={form.username}
          onChange={handleChange}
        />
        <input
          placeholder="...name* "
          className=" fontInputSignin widthEl flex_center center mgL20 border-bottom input"
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          placeholder="...email*"
          className=" fontInputSignin widthEl flex_center center mgL20 border-bottom input"
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <input
          placeholder="...password*"
          className=" fontInputSignin widthEl flex_center center mgL20 border-bottom input"
          type="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
        />
        <input
          placeholder="...city*"
          className=" fontInputSignin widthEl flex_center center mgL20 border-bottom input"
          type="text"
          name="city"
          required
          value={form.city}
          onChange={handleChange}
        />

        <div id="uploadFile">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              setForm({ ...form, profile_picture: e.target.files[0] });
              {
                e.target.files[0]
                  ? (document.querySelector("#fileName").innerHTML = "")
                  : (document.querySelector("#fileName").innerHTML =
                      "No file chosen");
              }
            }}
          />
          <button
            type="button"
            onClick={handleButtonClick}
            className="capsule transButton fontInputSignin "
          >
            Upload File
          </button>
          <span id="fileName" className="fontInputSignin">
            No file chosen
          </span>
        </div>

        <button
          type="submit"
          className="capsule_big flex_center center inverted widthEl"
        >
          <h2>JOIN NOW ! ! ! !</h2>
        </button>
      </form>
    </div>
  );
}
