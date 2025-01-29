import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../features/userSLice";
import { uploadFile } from "../firebase/firebase";

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

  const userValidated = useSelector((state) => state.user.isValidated);
  const userError = useSelector((state) => state.user.error);

  const [form, setForm] = useState(emptyForm);
  const [selectedFile, setselectedFile] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (userValidated) {
      navigate(`/map`, { replace: true });
    }
  }, [userValidated, navigate, userError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setselectedFile(file);
  }

  useEffect(() => {
    if (selectedFile) {
      
      const upload = async () => {
        try {
          const url = await uploadFile(selectedFile, "/Profile_pics/");
          if (typeof url !== "string") {
            throw new Error();
          }
          setForm((prevForm) => ({
            ...prevForm,
            profile_picture: url, 
          }));
          setIsUploaded(true);
        } catch (e) {
          setselectedFile("Failed");
          console.log(e);
        }
      };
  
      upload(); 
    }
  }, [selectedFile])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sent')

    dispatch(newUser(form));
    setForm(emptyForm);
  };

  return (
    <div className="V_centered">
      <h3>CREATE AN ACCOUNT :</h3>
      <form id="signin" className="genericBox" onSubmit={handleSubmit}>
        <input
          placeholder="...username*"
          className="I_transparent"
          type="text"
          name="username"
          required
          value={form.username}
          onChange={handleChange}
        />
        <input
          placeholder="...name* "
          className="I_transparent"
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          placeholder="...email*"
          className="I_transparent"
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <input
          placeholder="...password*"
          className="I_transparent"
          type="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
        />
        <input
          placeholder="...city*"
          className="I_transparent"
          type="text"
          name="city"
          required
          value={form.city}
          onChange={handleChange}
        />

        <div id="uploadFile">
          <input
            ref={fileInputRef}
            style={{ display: "none" }}
            type="file"
            name=""
            value=""
            onChange={handleFile}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="capsule transButton fontInputSignin "
          >
            Upload File
          </button>
          <span id="fileName" className="fontInputSignin ">
            {selectedFile ? `${selectedFile.name}` : "No file chosen"}
          </span>
        </div>

        <button
          type="submit"
          className={`B_big_inverted ${
            selectedFile && !isUploaded ? "B_disabled" : ""
          }`}
        >
          <h2>JOIN NOW ! ! ! !</h2>
        </button>
        {userError === "Email already in use" ||
        userError === "User name already in use" ? (
          <p>{userError}</p>
        ) : null}
      </form>
    </div>
  );
}
