import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const SimpleSlider = (props) => {
  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{props.children}</Slider>;
};

export default SimpleSlider;
