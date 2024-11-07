import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newPost } from "../features/postsSlice";

const emptyForm = {
  tag: "",
  details: "",
  lifespan: "",
  city: "",
};

export default function NewPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const coordinates = useSelector((state) => state.map.coordinates);
  const { username, _id, email } = useSelector((state) => state.user.user);
  const userMapProps = { coordinates, username, user_id: _id, email };

  const [form, setForm] = useState(emptyForm);
  const [radio, setRadio] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleChangeRadio = (e) => {
    setRadio(e.target.value);
  };

  const reqBody = { ...form, ...userMapProps, category: radio, coordinates };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newPost(reqBody));
    navigate(`/user/${_id}`);

    setForm(emptyForm);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="V_centered">
      <h3>CREATE A NEW POST :</h3>
      <form id="signin" className="genericBox" onSubmit={handleSubmit}>
        <div>
          <fieldset className=" fontInputSignin widthEl mgL20 input">
            ...Category:
            <div>
              <input
                type="radio"
                value="NEED"
                className="bold"
                checked={radio === "NEED"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="need">NEED</label>
            </div>
            <div>
              <input
                type="radio"
                value="OFFER"
                checked={radio === "OFFER"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="offer">OFFER</label>
            </div>
          </fieldset>

          <input
            placeholder="...Tag for your post* "
            className="I_transparent"
            type="text"
            name="tag"
            required
            value={form.tag}
            onChange={handleChange}
          />
          <textarea
            placeholder="...details (max 125 characters)*"
            className="I_transparent"
            minLength="25"
            maxLength="125"
            type="text"
            name="details"
            required
            value={form.details}
            onChange={handleChange}
          />
          <input
            placeholder="...time it will be visible (hours)*"
            className="I_transparent"
            type="number"
            min="0.5"
            max="5"
            step="0.5"
            name="lifespan"
            required
            value={form.lifespan}
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
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                e.target.files[0]
                  ? (document.querySelector("#fileName").innerHTML = "")
                  : (document.querySelector("#fileName").innerHTML =
                      "No file chosen");
              }}
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="capsule fontInputSignin "
            >
              Upload File
            </button>
            <span id="fileName" className="fontInputSignin">
              No file chosen
            </span>
          </div>
        </div>
        <button type="submit" className="B_big_inverted">
          <h2>POST IT NOW ! ! ! !</h2>
        </button>
      </form>
    </div>
  );
}
