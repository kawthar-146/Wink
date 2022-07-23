import React from "react";
import imgb1 from "../../../img/G1.jpg";
import imgb2 from "../../../img/G2.jpg";
import imgb3 from "../../../img/G3.jpg";
import imgb4 from "../../../img/G4.jpg";
import imgb5 from "../../../img/G5.jpg";
import imgb6 from "../../../img/G6.jpg";
import imgb7 from "../../../img/G7.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { BsCurrencyDollar } from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineArrowRig,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

const Section5 = () => {
  const options = {
    loop: true,
    margin: 10,
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
      <div className="section2">
        <div className="row">
          <div className="col-12">
            <p className="text-center">Shop Girls</p>
          </div>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item px-3">
            <div className="text1">
              <img src={imgb1} width="295px" />
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
                  {" "}
                  <span>
                    <BsCurrencyDollar /> 74.00
                  </span>{" "}
                  <BsCurrencyDollar /> 44.00{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="item px-3">
            <img src={imgb2} width="295px" />
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
                {" "}
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>{" "}
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb3} width="295px" />
            <div className="onsale">-40%</div>{" "}
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
                {" "}
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>{" "}
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb4} width="295px" />
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
                {" "}
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>{" "}
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb5} width="295px" />
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
                {" "}
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>{" "}
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb6} width="295px" />
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
                {" "}
                <span>
                  <BsCurrencyDollar /> 74.00
                </span>{" "}
                <BsCurrencyDollar /> 44.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb7} width="295px" />
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
                {" "}
                <span>
                  <BsCurrencyDollar /> 51.00
                </span>{" "}
                <BsCurrencyDollar /> 36.00{" "}
              </p>
            </div>
          </div>
          <div className="item px-3">
            <img src={imgb2} width="295px" />
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
                {" "}
                <span>
                  <BsCurrencyDollar /> 55.00
                </span>{" "}
                <BsCurrencyDollar /> 39.00{" "}
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Section5;
