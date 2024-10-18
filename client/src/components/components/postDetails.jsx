/* eslint-disable react/no-unescaped-entities */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import ImageSlider from "./slider";

function PostDetails({ post }) {
  const user = useSelector((state) => state.user.user);

  function noSurname(str) {
    return str.split(" ")[0].toUpperCase();
  }

  return (
    <section className="genericBox bg_blue">
      <div id="post_details">
        <h3>#{post.tag}</h3>
        <div className="smallFontCont">
          <p className="smallFont">"{post.details}"</p>
        </div>
        <div className="smallFontCont">
          <p className="smallFont">Adress:</p>
          <p className="smallFont bold">Karl-Marx-Strasse</p>
        </div>
        <div className="smallFontCont">
          <p className="smallFont">Something:</p>
          <p className="smallFont bold">So important!</p>
        </div>
      </div>

      {post.post_pictures ? (
        <div>
          <hr />
          <ImageSlider images={post.post_pictures} />
        </div>
      ) : null}

      {user._id !== post.user_id &&
        <div>
          <div className="menu_line center">
            <button className="capsule_big inverted bold ">
              CONTACT{" "}
              {post && post.username ? noSurname(post.username) : "User"} NOW!
            </button>
          </div>
        </div>
      }
    </section>
  );
}

export default PostDetails;
