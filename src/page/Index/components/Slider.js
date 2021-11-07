import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  const list = ["南投 ｜ 清境農場", "花蓮 ｜ 花東縱谷", "高雄 ｜ 三鳳宮", "台北 ｜ 101", "新北 ｜ 野柳"];
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 500,
    showStatus: false,
  };
  return (
    <Carousel {...settings}>
      {/* <img src={process.env.PUBLIC_URL + `image/banner/0.jpg`} /> */}
      {list.map((vo, index) => {
        return (
          <div className="carousel-item" key={vo} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}image/banner/${index}.jpg)` }}>
            <p className="carousel-title">{vo}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Slider;
