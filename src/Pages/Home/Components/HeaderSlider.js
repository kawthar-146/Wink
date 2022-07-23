import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import p1 from "../../../img/p1.jpg";
import p2 from "../../../img/Grey.jpg";
const HeaderSlider = () => {
  return (
    <>
      <div className=" slider3">
        <div className="row">
          <OwlCarousel
            className="owl-theme"
            loop={true}
            items={1}
            autoplay={true}
            dots={true}
          >
            <div className="item">
              <img src={p1} />
            </div>
            <div className="item">
              <img src={p2} />
              <div className="par">
                <p>WINTER COLLECTION</p>
              </div>
              <div className="par2">
                <p>
                  Organic cotton
                  <br />
                  Sweater
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default HeaderSlider;
