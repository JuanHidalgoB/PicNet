import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Story from './Story';
import face from '../images/face1.jpg'
import user from '../images/user.jpg'

const SliderComponent = () => {
  const slides = [
    <Story name="lina_jimenes" src={face}/>,
    <Story name="juankmilo" src={user}/>,
    <Story name="andreshb" src={face}/>,
    <Story name="santiagolb" src={user}/>,
    <Story name="vilna" src={face}/>,
    <Story name="hanoi" src={user}/>,
    <Story name="srilanka" src={face}/>,
    <Story name="gitega" src={user}/>,
    <Story name="astana" src={face}/>,
    <Story name="hangaroa" src={user}/>,
    <Story name="mariosaba" src={face}/>,
    <Story name="portvila" src={face}/>

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
    prevArrow: (
      <button className="slick-prev dark"> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="color"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="slick-next dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="color"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    ),
  };

  return (
    <Slider {...settings}>
      {slides}
    </Slider>
  );
};

export default SliderComponent;

