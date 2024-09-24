import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../features/postsSlice";

export default function Home({ setClicked }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="V_centered">
      <section className="capsule_big flex_center center inverted widthEl">
        <h2
          onClick={() => {
            dispatch(fetchPosts());
            setClicked(true);
          }}
        >
          EXPLORE THIS NOW
        </h2>
      </section>

      <section className="">
        <div
          className="capsule_big bold widthEl flex_center center"
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
          className="capsule_big bold widthEl flex_center center"
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
    </div>
  );
}
