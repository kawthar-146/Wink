import React, { useState } from "react";
import {
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Pagination,
} from "react-bootstrap";
import {
  AiFillStar,
  AiOutlineArrowRig,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import imgp2 from "../../../img/product1.jpg";
import imgp1 from "../../../img/product2.jpg";
import imgp3 from "../../../img/product3.jpg";
import imgp4 from "../../../img/product4.jpg";
import imgp5 from "../../../img/product5.jpg";
import imgp6 from "../../../img/product6.jpg";
import imgp7 from "../../../img/product7.jpg";
import imgp8 from "../../../img/product8.jpg";
import imgp9 from "../../../img/product9.jpg";
import imgp10 from "../../../img/product10.jpg";
import imgp11 from "../../../img/product11.jpg";
import imgp12 from "../../../img/product12.jpg";
import Slider from "@mui/material/Slider";
import { NavLink } from "react-router-dom";
function Categories() {
  const [value, setValue] = useState([28, 50]);
  const [minPrice, setMinPrice] = useState(28);
  const [maxPrice, setMaxPrice] = useState(50);

  function valuetext(value) {
    return `${value}$`;
  }
  const handleChecked = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="categories">
        <div className="row mt-5 mx-2">
          <div className="col-lg-3 filter">
            <h3>Categories</h3>
            <div className="items">
              <div className="item-category">
                <p>
                  Kids
                  <span>57</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Sets
                  <span>23</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Sports
                  <span>23</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Boys
                  <span>33</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Age 2 to 7 Years
                  <span>16</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Age 8 to 14 Years
                  <span>17</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Coats and Jackets
                  <span>1</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Jeans
                  <span>2</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Shirts
                  <span>3</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Sweatshirts
                  <span>9</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Sets
                  <span>10</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Trousers
                  <span>8</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Sweatshirts
                  <span>9</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Vests
                  <span>1</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Girls
                  <span>24</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Age 2 to 7 years
                  <span>9</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Age 8 to 14 years
                  <span>15</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Coats and Jackets
                  <span>2</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Jeans
                  <span>3</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Sweatshirts
                  <span>5</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Sets
                  <span>12</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Trousers
                  <span>3</span>
                </p>
              </div>
              <div className="item-category">
                <p>
                  Vests
                  <span>1</span>
                </p>
              </div>
            </div>

            <h3>Price</h3>
            <div id="price" className="price">
              <Slider
                getAriaLabel={() => "price range"}
                min={minPrice}
                max={maxPrice}
                value={value}
                name="price"
                onChange={handleChecked}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <p className="price-par">
                <span>Range : &nbsp;</span>
                {+value[0] + "$ to " + value[1] + "$"}
              </p>
            </div>
            {/* <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min , max }) => console.log(`min = ${min}, max = ${max}`)}
    /> */}
            <h3>Color</h3>
            <div className="color">
              <p>
                <span className="circle"></span>
                <span className="text">Beige</span>
                <span className="num">9</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "black" }}
                ></span>
                <span className="text">Black</span>
                <span className="num">16</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#4169e1" }}
                ></span>
                <span className="text">Blue</span>
                <span className="num">6</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#8b4513" }}
                ></span>
                <span className="text">Brown</span>
                <span className="num">18</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#002c93" }}
                ></span>
                <span className="text">Dark Wash</span>
                <span className="num">1</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#c0c0c0" }}
                ></span>
                <span className="text">Gray</span>
                <span className="num">8</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#3cb371" }}
                ></span>
                <span className="text">Green</span>
                <span className="num">3</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#eba937" }}
                ></span>
                <span className="text">Honey Color</span>
                <span className="num">14</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#d1ce77" }}
                ></span>
                <span className="text">Khaki</span>
                <span className="num">3</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#2e8b57" }}
                ></span>
                <span className="text">Mint Green</span>
                <span className="num">1</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#ffdb58" }}
                ></span>
                <span className="text">Mustard</span>
                <span className="num">2</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#ff6600" }}
                ></span>
                <span className="text">Orange</span>
                <span className="num">2</span>
              </p>
              <p>
                <span
                  className="circle"
                  style={{ backgroundColor: "#ffff00" }}
                ></span>
                <span className="text">Yellow</span>
                <span className="num">1</span>
              </p>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="products">
              {/* <div className="desc">
                <p>
                  Wink Wink produce boys’ sweatshirts with a range of trendy
                  designs.
                </p>
                <p>
                  parents can find ones that accommodate your boy’s preferences,
                  sense of style, and habits.
                </p>
                <p>
                  Affordable and durable, find a sweatshirt for ages between 2
                  and14 years.
                </p>
                <p>
                  Express FREE SHIPPING for 10 plus countries and frequent
                  discount events.
                </p>
              </div> */}
              <div className="row show">
                {" "}
                <div className="col-lg-5">
                  <p>Showing 1–12 of 57 item(s)</p>
                </div>
                <div className="col-lg-7 mb-2 dropdownup text-right">
                  {["up"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="secondary"
                      title={` Default sorting `}
                    >
                      <Dropdown.Item eventKey="1">
                        Default sorting
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        Sort By Popularity
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Sort By Average Rating
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">Sort By Latest</Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        Sort By Price: Low To high
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        Sort By Price:High To Low
                      </Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </div>
              <div className="row prod">
                <div className="col-lg-4">
                  <NavLink to="/ItemDetail">
                    <div className="itemBox">
                      <img src={imgp4} className="pro" alt="80s Set" />
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
                  </NavLink>
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp5} className="pro" alt="" />
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
                      <h3>Active Boy Trousers</h3>
                    </div>
                    <div className="dollar">
                      <p>
                        {" "}
                        <span>
                          <BsCurrencyDollar /> 74.00
                        </span>{" "}
                        <BsCurrencyDollar /> 44.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp6} className="pro" />
                    <div className="onsale1">-29%</div>
                    <div className="icon2">
                      <ul>
                        <li>
                          <a href="/">
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
                      <h3>All Out Sweatshirt</h3>
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
              </div>
              <div className="row prod">
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp1} className="pro" alt="80s Set" />
                    <div className="onsale1">-29%</div>
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
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp2} className="pro" alt="" />
                    <div className="onsale1">-29%</div>
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
                      <h3>Active Boy Trousers</h3>
                    </div>
                    <div className="dollar">
                      <p>
                        {" "}
                        <span>
                          <BsCurrencyDollar /> 74.00
                        </span>{" "}
                        <BsCurrencyDollar /> 44.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp3} className="pro" />
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
                      <h3>All Out Sweatshirt</h3>
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
              </div>
              <div className="row prod">
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp6} className="pro" alt="80s Set" />
                    <div className="onsale2">-29%</div>
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
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp7} className="pro" alt="" />
                    <div className="onsale2">-29%</div>
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
                      <h3>Active Boy Trousers</h3>
                    </div>
                    <div className="dollar">
                      <p>
                        {" "}
                        <span>
                          <BsCurrencyDollar /> 74.00
                        </span>{" "}
                        <BsCurrencyDollar /> 44.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp8} className="pro" />
                    <div className="onsale2">-29%</div>
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
                      <h3>All Out Sweatshirt</h3>
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
              </div>
              <div className="row prod">
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp9} className="pro" alt="80s Set" />
                    <div className="onsale3">-29%</div>
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
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp10} className="pro" alt="" />
                    <div className="onsale3">-29%</div>
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
                      <h3>Active Boy Trousers</h3>
                    </div>
                    <div className="dollar">
                      <p>
                        {" "}
                        <span>
                          <BsCurrencyDollar /> 74.00
                        </span>{" "}
                        <BsCurrencyDollar /> 44.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="itemBox">
                    <img src={imgp11} className="pro" />
                    <div className="onsale3">-29%</div>
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
                      <h3>All Out Sweatshirt</h3>
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
              </div>
            </div>
            {/* <Pagination className="pg">
  
 
  <Pagination.Item>{1}</Pagination.Item>
  
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Next />
  
</Pagination> */}

            <div class="demo">
              <nav class="pagination-outer" aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
