import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./slider";

function PostDetails ({ post })  {

  const images = post.pictures;

  return (
    <section id="post_profile_det">
        <h2>#{post.tag}</h2>
        <div className="smallFontCont">
          <p className="smallFont bold">{post.details}</p>
        </div>

        <ImageSlider images={images} />

    </section>
  );
};

export default PostDetails
