import React, { useState } from "react";
import Swiper from "swiper";
import { NavLink } from "react-router-dom";  
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  BsCurrencyDollar,
  BsHeart,
  BsPencil,
  BsStar,
  BsStarFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { Table,Modal,Button } from "react-bootstrap";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import ProductImagesSlider from "../Components/productslider/product-image-slider";
import IncDecCounter from "../Components/IncDecCounter/IncDecCounter";
import {RiFlag2Line} from "react-icons/ri";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import imgd1 from "../../../img/prod1.jpg";
import imgd2 from "../../../img/prod2.jpg";
import imgd3 from "../../../img/prod3.jpg";
import imgd4 from "../../../img/prod4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
const ItemDetail = () => {
  const [fillActive, setFillActive] = useState("desc");
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  // const [modalOpen, setModalOpen] = useState(false);

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
  const [toggleHeart, setToggleHeart] = useState(false);

  const changeColor = () => {
    setToggleHeart(!toggleHeart);
    setShow(true);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid itemd">
        <div className="row detail">
          <div className="col-lg-6">
            <ProductImagesSlider />
          </div>
          <div className="col-lg-6 item1"> 
          <div className="breadcrumb">
         <NavLink className="linkI" to="/">Home</NavLink>
           <RiArrowRightSLine className="iconI"/>
           <NavLink className="linkI" to="/Age2">Boys</NavLink>
           <RiArrowRightSLine className="iconI"/>
           <NavLink className="linkI" to="/Age2">Age 2 to 7 Years</NavLink>
           <RiArrowRightSLine className="iconI"/>
           <span>80s Set</span>
          </div>
            <h1 id="header1">80s Set</h1>
            <div className="dollar">
              <p className="single">
                {" "}
                <span>
                  <BsCurrencyDollar /> 55.00
                </span>
                <BsCurrencyDollar /> 39.00
                <span className="onsale4"> <div className="tag">
    <h3 className="tag-title">29%</h3>
    <div className="tag-tail"></div>
  </div></span>
              </p>
              <div className="desc">
                <p>Bicolor Set for Boys</p>
              </div>
              <p id="p2">color</p>

              <p id="p3">
                <div className="c1"></div> <div className="c2"></div>
              </p>

              <p id="p4">Size</p>
              <div className="drop">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Choose an option
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Choose an option
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        2 years
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3 years
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        4 years
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        5 years
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        6 years
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        7 years
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btns">
                <IncDecCounter />
                <button type="submit" class="single_add">
                  <p>Add to cart</p>
                </button>
                <button
                  className="woosw-btn "
                  // className="openModalBtn"
                  onClick={changeColor}
                  // onClick={handleShow}
                >
                  <span>
                    {toggleHeart ? (
                      <BsFillHeartFill color="black" />
                    ) : (
                      <BsHeart />
                    )}
                  </span>
                </button>
               
                {/* {modalOpen && <Modalwishlist setOpenModal={setModalOpen} />} */}
              </div>
              <div>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
              </div>
              <button type="submit" class="single_add1">
                <p className="buy">BY NOW</p>
              </button>
              <div className="product_meta">
                <span class="sku_wrapper">
                  SKU:{" "}
                  <span class="sku" data-o_content="212BW032">
                    212BW032-BalReng-8y
                  </span>
                </span>
                <span class="posted_in">
                  Categories:
                  <a
                    href="https://winkwink-tr.com/product-category/boys/age-8-to-14-years/"
                    rel="tag"
                  >
                    Age 8 to 14 Years
                  </a>
                  ,{" "}
                  <a
                    href="https://winkwink-tr.com/product-category/boys/"
                    rel="tag"
                  >
                    Boys
                  </a>
                  ,{" "}
                  <a
                    href="https://winkwink-tr.com/product-category/kids/"
                    rel="tag"
                  >
                    Kids
                  </a>
                  ,{" "}
                  <a
                    href="https://winkwink-tr.com/product-category/boys/sets/"
                    rel="tag"
                  >
                    Sets
                  </a>
                  ,{" "}
                  <a
                    href="https://winkwink-tr.com/product-category/sets-2/"
                    rel="tag"
                  >
                    Sets
                  </a>
                  ,{" "}
                  <a
                    href="https://winkwink-tr.com/product-category/sports/"
                    rel="tag"
                  >
                    Sports
                  </a>
                </span>
                <div class="social-icon">
                  Share :
                  <div class="social-share">
                    <a
                      href="http://www.facebook.com/sharer.php?u=https://winkwink-tr.com/product/pilot-set/&amp;i=https://winkwink-tr.com/wp-content/uploads/2022/01/212BW032-honeybrown-4.jpg"
                      title="Facebook"
                      class="share-facebook"
                      target="_blank"
                    >
                      <TiSocialFacebook />
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://winkwink-tr.com/product/pilot-set/"
                      title="Twitter"
                      class="share-twitter"
                    >
                      <TiSocialTwitter />
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://winkwink-tr.com/product/pilot-set/"
                      title="LinkedIn"
                      class="share-linkedin"
                    >
                      <TiSocialLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" woocommerce">
          <div className="content">
            <MDBTabs fill justify className="mb-3">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick("desc")}
                  active={fillActive === "desc"}
                >
                  Description
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick("addInfo")}
                  active={fillActive === "addInfo"}
                >
                  Additional information
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick("reviews")}
                  active={fillActive === "reviews"}
                >
                  Reviews (0)
                </MDBTabsLink>
              </MDBTabsItem>

              <MDBTabsPane show={fillActive === "custom"}> </MDBTabsPane>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={fillActive === "desc"}>
                {" "}
                <p className="p1">
                  Bitonal two pieces 80s set for boys comprised of a hooded
                  sweatshirt and cuffed elasticated joggers.
                  <br />
                  95% Cotton, 5% Elastane
                </p>
              </MDBTabsPane>
            </MDBTabsContent>
            <MDBTabsPane show={fillActive === "addInfo"}>
              <div className="tableT">
                <Table size="sm">
                  <tbody>
                    <tr>
                      <td style={{ width: "300px", color: "black" }}>
                        <b>Weight</b>
                      </td>
                      <td>0.5 kg</td>
                    </tr>
                    <tr>
                      <td style={{ width: "300px", color: "black" }}>
                        <b>Color</b>
                      </td>
                      <td>Neon Green, Orange</td>
                    </tr>
                    <tr>
                      <td style={{ width: "300px", color: "black" }}>
                        <b>Size</b>
                      </td>
                      <td>
                        2 years, 3 years, 4 years, 5 years, 6 years, 7 years
                      </td>
                    </tr>
                  </tbody>
                </Table>{" "}
              </div>
            </MDBTabsPane>
            <MDBTabsContent>
              <MDBTabsPane show={fillActive === "reviews"}>
                <div className="container info">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="review">
                        <div className="comment">
                          <h2 className="Reviews-title">Reviews</h2>
                          <p className="noreviews">There are no reviews yet.</p>
                        </div>
                        <div className="review_form_wrapper">
                          <p>
                            <BsPencil />
                            BE THE FIRST TO REVIEW “80S SET”
                          </p>
                        </div>
                        {/* <div className="container info">
                    <div className="row">
                      <div className="col-lg-6"> */}{" "}
                        <div className="form">
                          <p>
                            Your email address will not be published.Required
                            fields are marked<span>*</span>{" "}
                          </p>
                        </div>
                        <div className="rating">
                          <p>
                            Your rating{" "}
                            <span>
                              <div style={{ marginLeft: "80px" }}>
                                {stars.map((_, index) => {
                                  return (
                                    <BsStarFill
                                      key={index}
                                      size={24}
                                      onClick={() => handleClick(index + 1)}
                                      onMouseOver={() =>
                                        handleMouseOver(index + 1)
                                      }
                                      onMouseLeave={handleMouseLeave}
                                      color={
                                        (hoverValue || currentValue) > index
                                          ? colors.orange
                                          : colors.grey
                                      }
                                      style={{
                                        marginRight: 10,
                                        cursor: "pointer",
                                        marginTop: -40,
                                      }}
                                      size={15}
                                    />
                                  );
                                })}
                              </div>
                            </span>
                          </p>
                          <p className="author">
                            <input
                              id="author"
                              className="authorInput"
                              name="author"
                              placeholder="Name *"
                              type="text"
                              size="70"
                              required=""
                            />
                          </p>
                          <p className="author">
                            <input
                              id="email"
                              className="authorInput"
                              name="email"
                              placeholder="Email *"
                              type="email"
                              size="70"
                              required=""
                            />
                          </p>
                          <p className="cookies">
                            <input
                              id="wp-comment-cookies-consent"
                              name="wp-comment-cookies-consent"
                              type="checkbox"
                              value="yes"
                            />
                            <span>
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </span>
                          </p>
                        </div>
                        <button type="submit" class="add">
                          <p className="submitI">SUBMIT</p>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <textarea
                        placeholder="Your Reviews *"
                        className="textArea"
                      />
                    </div>
                  </div>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
        <div className="comtainer related ">
          <div className="title-block">
            <h2>Related Products</h2>
          </div>
          <div className="sliderd">
            <div className="section2">
              <div className="row">
                <div className="col-12">
                  <p className="text-center">Shop Boys</p>
                </div>
              </div>
              <OwlCarousel className="owl-theme" {...options}>
                <div className="item px-3">
                  <div className="text1">
                    <img src={imgd1} className="imgS2" />
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
                    <div className="dollarc">
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
                  <img src={imgd2} className="imgS2" />
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
                  <div className="dollarc">
                    <p>
                      <span>
                        <BsCurrencyDollar /> 74.00
                      </span>
                      <BsCurrencyDollar /> 44.00{" "}
                    </p>
                  </div>
                </div>
                <div className="item px-3">
                  <img src={imgd3} className="imgS2" />
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
                  <div className="dollarc">
                    <p>
                      <span>
                        <BsCurrencyDollar /> 74.00
                      </span>
                      <BsCurrencyDollar /> 44.00{" "}
                    </p>
                  </div>
                </div>
                <div className="item px-3">
                  <img src={imgd4} className="imgS2" />
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
                  <div className="dollarc">
                    <p>
                      <span>
                        <BsCurrencyDollar /> 74.00
                      </span>
                      <BsCurrencyDollar /> 44.00{" "}
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
