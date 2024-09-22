/* eslint-disable react/no-unescaped-entities */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./slider";

function PostDetails({ post, user }) {
  const images = post.pictures;

  function noSurname(str) {
    return str.split(" ")[0];
  }

  return (
    <section className="genericBox bg_blue">
      <div id="post_details" >
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
      {images ? (
        <div>
          <hr />
          <ImageSlider images={images} />
        </div>
      ) : null}
      <div className="menu_line center">
        <button className="capsule_big inverted bold ">
          Contact {user && user.username ? noSurname(user.username) : "User"}{" "}
          now!
        </button>
      </div>
    </section>
  );
}

export default PostDetails;
