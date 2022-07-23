import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import kids from "../../../img/vests.png";
import sets from "../../../img/sets.png";
import sports from "../../../img/girls.png";
import boys from "../../../img/boys.png";
import age2 from "../../../img/age-2-to-7.png";
function HeaderSliderb() {
  const options = {
    loop: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className=" Headersliderb">
        <div className="row">
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="shop">Shop</h1>
                  <div className="carou">
                    <OwlCarousel className="owl-theme" {...options}>
                      <div className="item ">
                        <img
                          src={kids}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,

                          }}
                          className="imgslider"
                        />
                        <p>Kids</p>
                      </div>
                      <div className="item  ">
                        <img
                          src={kids}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,
                          }}
                          className="imgslider"
                        />
                        <p>Sets</p>
                      </div>
                      <div className="item  ">
                        <img
                          src={sets}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,
                          }}
                          className="imgslider"
                        />
                        <p>Sports</p>
                      </div>
                      <div className="item ">
                        <img
                          src={sports}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,
                          }}
                          className="imgslider"
                        />
                        <p>Boys</p>
                      </div>
                      <div className="item ">
                        <img
                          src={boys}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,
                          }}
                          className="imgslider"
                        />
                        <p>Vests</p>
                      </div>
                      <div className="item ">
                        <img
                          src={age2}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,
                          }}
                          className="imgslider"
                        />
                        <p>Jeans</p>
                      </div>
                      <div className="item ">
                        <img
                          src={kids}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,
                          }}
                          className="imgslider"
                        />
                        <p>Trousers</p>
                      </div>
                      <div className="item ">
                        <img
                          src={kids}
                          style={{
                            marginLeft: 50,
                            marginRight: 0,
                            marginTop: 50,
                          }}
                          className="imgslider"
                        />
                        <p>Kids</p>
                      </div>
                      {/* <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item ">
            <img src={kids} style={{ marginLeft:100}} className="imgslider"/>
            </div>
            <div className="item px-3">
            <img src={kids} className="imgslider"/>
            </div>
            <div className="item px-3">
            <img src={kids} className="imgslider"/>
            </div>
            <div className="item px-3">
            <img src={kids} className="imgslider"/>
            </div>
            <div className="item px-3">
            <img src={kids} className="imgslider"/>
            </div>
            <div className="item px-3">
            <img src={kids} className="imgslider"/>
            </div> */}
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSliderb;
