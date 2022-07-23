import React from "react";
import imgb1 from "../../../img/b1.jpg";
import imgb2 from "../../../img/b2.jpg";
import imgb3 from "../../../img/b3.jpg";
import imgb4 from "../../../img/b4.jpg";
import imgb5 from "../../../img/b5.jpg";
import imgb6 from "../../../img/b6.jpg";
import imgb7 from "../../../img/b7.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Section2 = () => {
  const options = {
    loop: true,
    margin: 20,
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
      <div className="container-fluid section2">
        <div className="row">
          <div className="col-12">
            <p className="text-center">Shop Boys</p>
          </div>
        </div>
        <div className="row">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item px-3">
            <div className="text1">
              <img src={imgb1} className="imgS2" />
              <div className="onsale">-29%</div>
              <div className="icon2">
                <ul>
                  <li>
                    <a usehref="/">
                      <AiFillStar size={15} />
                    </a>
                  </li>
                  <li>
                    <a usehref="/">
                      <AiFillStar size={15} />
                    </a>
                  </li>
                  <li>
                    <a usehref="/">
                      <AiFillStar size={15} />
                    </a>
                  </li>
                  <li>
                    <a usehref="/">
                      <AiFillStar size={15} />
                    </a>
                  </li>
                  <li>
                    <a usehref="/">
                      <AiFillStar size={15} />
                    </a>
                  </li>
                  <li>(0)</li>
                </ul>
              </div>
              <div>
                <h3>Warm Trousers</h3>
              </div>
              <div className="dollar">
                <p>
                  
                  <span>
                    <BsCurrencyDollar /> 74.00
                  </span>
                  <BsCurrencyDollar /> 44.00
                </p>
              </div>
            </div>
          </div>

          <div className="item px-3">
            <img src={imgb2} className="imgS2" />
            <div className="onsale">-30%</div>
            <div className="icon2">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>(0)</li>
              </ul>
            </div>
            <div>
              <h3>Warm Trousers</h3>
            </div>
            <div className="dollar">
              <p>
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb3} className="imgS2" />
            <div className="onsale">-40%</div>
            <div className="icon2">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>(0)</li>
              </ul>
            </div>
            <div>
              <h3>80s Set</h3>
            </div>
            <div className="dollar">
              <p>
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb4} className="imgS2" />
            <div className="onsale">-30%</div>
            <div className="icon2">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>(0)</li>
              </ul>
            </div>
            <div>
              <h3>Future Set</h3>
            </div>
            <div className="dollar">
              <p>
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb5} className="imgS2" />
            <div className="onsale">-29%</div>
            <div className="icon2">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>(0)</li>
              </ul>
            </div>
            <div>
              <h3>Pilot Set</h3>
            </div>
            <div className="dollar">
              <p>
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>{" "}
                <BsCurrencyDollar /> 44.00
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb6} className="imgS2" />
            <div className="onsale">-30%</div>
            <div className="icon2">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>(0)</li>
              </ul>
            </div>

            <div>
              <h3>Nimble Trousers</h3>
            </div>
            <div className="dollar">
              <p>
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>{" "}
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb7} className="imgS2" />
            <div className="onsale">-40%</div>
            <div className="icon2">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>(0)</li>
              </ul>
            </div>
            <div>
              <h3>Parker Set</h3>
            </div>
            <div className="dollar">
              <p>
                <span>
                  <BsCurrencyDollar /> 51.00
                </span>
                <BsCurrencyDollar /> 36.00
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb2} className="imgS2" />
            <div className="onsale">-30%</div>
            <div className="icon2">
              <ul>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>
                  <a usehref="/">
                    <AiFillStar size={15} />
                  </a>
                </li>
                <li>(0)</li>
              </ul>
            </div>
            <div>
              <h3>Conscious Sweatshirt</h3>
            </div>
            <div className="dollar">
              <p>
                <span>
                  <BsCurrencyDollar /> 55.00
                </span>
                <BsCurrencyDollar /> 39.00
              </p>
            </div>
          </div>
         
        
        </OwlCarousel>

        </div>
             </div>
    </>
  );
};

export default Section2;
