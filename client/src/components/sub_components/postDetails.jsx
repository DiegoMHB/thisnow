/* eslint-disable react/no-unescaped-entities */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./slider";

function PostDetails({ post }) {

  function noSurname(str) {
    return str.split(" ")[0].toUpperCase();
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
      {post.post_pictures ? (
        <div>
          <hr />
          <ImageSlider images={post.post_pictures} />
        </div>
      ) : null}
      <div className="menu_line center">
        <button className="capsule_big inverted bold ">
          CONTACT {post && post.username ? noSurname(post.username) : "User"}{" "}
          NOW!
        </button>
      </div>
    </section>
  );
}

export default PostDetails;
