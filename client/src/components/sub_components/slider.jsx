import Slider from "react-slick";

function ImageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div id="Slider">
      <Slider {...settings} >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "80%", height: "100%", margin: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
