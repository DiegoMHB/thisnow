import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../features/postsSlice";

export default function Landing({ setIsClicked }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="V_centered">
      <div className="B_big_inverted">
        <h2
          onClick={() => {
            dispatch(fetchPosts());
            setIsClicked(true);
          }}
        >
          EXPLORE THIS NOW
        </h2>
      </div>

      <section>
        <div
          className="B_big"
          onClick={() => {
            dispatch(fetchPosts());
            navigate(`/login`, {
              replace: true,
            });
          }}
        >
          LOG IN
        </div>
        <div
          className="B_big"
          onClick={() => {
            dispatch(fetchPosts());
            navigate(`/signin`, {
              replace: true,
            });
          }}
        >
          {" "}
          SIGN IN
        </div>
      </section>
    </section>
  );
}
