import React from "react";
import { BsEnvelopeOpen } from "react-icons/bs";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import lg from "../../img/logo.png";
// import { InputGroup, FormControl } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="Footer ">
        <hr />
        <div className="row">
          <div className="col-lg-4">
            <h2>
              <BsEnvelopeOpen size={50} className="send" />
              Subscribe for Exclusive <br />
              Sales & News
            </h2>
          </div>
          <div className="col-lg-4">
            <p>
              Subscribe to the weekly newsletter for all the
              <br />
              latest updates
            </p>
          </div>
          <div className="col-lg-4">
            <div className="content-newsletter">
              <input
                type="email"
                name="your-email"
                value=""
                size="20"
                className="email"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email Address"
              />
              <button class="button1">
                <a>SUBSCRIBE </a>
              </button>
            </div>
          </div>
        </div>
        <div className="row footer2">
          <div className="col-lg-4">
            <img src={lg} width="147px" className="lg" />
            <p className="p1">
              With over 40 years of experience in the world of kids fashion, our
              aim was to share our touches of apparel beauty across the region.
            </p>
            <p className="p2">
              Contact Info
              <br />
              Phone : <a href="tel:+905392244222">+905392244222</a>
              <br />
              Email :{" "}
              <a href="mailto:info@winkwink-tr.com">info@winkwink-tr.com</a>
            </p>
            <ul class="social-link">
              <li>
                <a href="https://www.instagram.com/winkwinktr/">
                  <GrFacebookOption />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/winkwinkbrand/">
                  <GrInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h2 className="pr">SHOP </h2>
            <div class="list">
              <ul>
                <li>
                  <a href="https://winkwink-tr.com/product-category/boys/">
                    Boys
                  </a>
                </li>
                <li>
                  <a href="https://winkwink-tr.com/product-category/girls/">
                    Girls
                  </a>
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="col-lg-3">
            <h2 className="pr">ABOUT US</h2>
            <div class="list">
              <ul>
                <li>
                  <a href="/about-us/">Our story</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <h2 className="pr">HELP</h2>
            <div className="list">
              <ul>
                <li>
                  <a href="https://winkwink-tr.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://winkwink-tr.com/terms-conditions/">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="https://winkwink-tr.com/returns-refund/">
                    Refunds and Exchanges
                  </a>
                </li>
                <li>
                  <a href="https://winkwink-tr.com/shipping-order-tracking/">
                    Shipping and Order Tracking
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="hr1" />
          <p className="p3">
            © Wink Wink 2022 | Developed By:{" "}
            <a href="https://vision-more.com">Vision &amp; More</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
