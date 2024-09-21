import "../../App.css";

export const PostDetails = ({ post }) => {
  return (

    <section id="post_profile_det">
        <h2>#{post.tag}</h2>
        <div className="smallFontCont">
          <p className="smallFont bold">{post.details}</p>
        </div>

        <img id='post_picture' src={post.pictures} alt='not available'/>

    </section>
  );
};
