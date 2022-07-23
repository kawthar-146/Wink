import { React, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import * as ReactDOM from "react-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import { Form, FloatingLabel } from "react-bootstrap";
import imgc from "../../../img/imgCart.jpg";
import imgc2 from "../../../img/cards.jpg";
const allData = [
  {
    id: 1,
    text: "Small",
  },
  {
    id: 2,
    text: "Medium",
  },
  {
    id: 3,
    text: "Large",
  },
];

const Checkout = () => {
  const [visible, setvisible] = useState(false);
  const [visible1, setvisible1] = useState(false);
  console.log(visible);

  const [data, setData] = useState(allData.slice());

  const filterData = (filter) => {
    const data = allData.slice();
    return filterBy(data, filter);
  };

  const filterChange = (event) => {
    setData(filterData(event.filter));
  };
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="woocommerce-info">
              <p>
                {" "}
                <FaRegUser size={20} />
                <span className="iconC">Returning customer?</span>{" "}
                <button
                  type="button"
                  onClick={() => setvisible(!visible)}
                  className="btn2"
                >
                  Click here to login
                </button>
              </p>
            </div>

            {visible && (
              <div class="description">
                <p>
                  If you have shopped with us before, please enter your details
                  below. If you are a new customer, please proceed to the
                  Billing section.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="username">
                      <input
                        type="text"
                        class="input-text"
                        placeholder="Username or email *"
                        name="username"
                        id="username"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="password">
                      <input
                        class="input-text"
                        type="password"
                        placeholder="Password *"
                        name="password"
                        id="password"
                      />
                    </div>
                  </div>
                </div>
                <div class="rememberme">
                  <input
                    name="rememberme"
                    type="checkbox"
                    id="rememberme"
                    value="forever"
                  />
                  <label for="rememberme" class="inline">
                    Remember me
                  </label>
                </div>
                <button className="btn btn-primary btn5">
                  <p>login</p>
                </button>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="woocommerce-info1">
              <p>
                {" "}
                <HiOutlineTicket size={30} />
                <span className="iconC">Have a coupon? </span>{" "}
                <button
                  type="button"
                  onClick={() => setvisible1(!visible1)}
                  className="btn2"
                >
                  Click here to enter your code
                </button>
              </p>
            </div>
            {visible1 && (
              <div className="form5">
                <div class="desc1">
                  <p>If you have a coupon code, please apply it below.</p>{" "}
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="coupon">
                      <input
                        type="text"
                        name="coupon_code"
                        class="input-text"
                        placeholder="Coupon code"
                        id="coupon_code"
                        value=""
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <button className="btn btn-primary btn6">
                      <p>Apply coupon</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container checkout">
        <div className="row">
          <div className="col-lg-8">
            <h3>Billing details</h3>
            <label for="billing_first_name" className="first">
              First name&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <input
                type="text"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                value=""
                autocomplete="given-name"
              />
            </span>
            <label for="billing_first_name" className="last">
              Last name&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <input
                type="text"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                value=""
                autocomplete="given-name"
              />
            </span>
            <label for="billing_first_name" className="last">
              Company name (optional)
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <input
                type="text"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                value=""
                autocomplete="given-name"
              />
            </span>
            <label for="billing_first_name" className="last">
              Country / Region&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <Select
                style={{ width: "590px", marginLeft: "110px" }}
                value={selectedCountry}
                onChange={(e) => selectCountryHandler(e.target.value)}
              >
                {!!countryArr?.length &&
                  countryArr.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
              </Select>
            </span>

            <label for="billing_first_name" className="last">
              Street address&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper1">
              <input
                type="text"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder="House number and street name "
                value=""
                autocomplete="given-name"
              />
            </span>
            <span class="woocommerce-input-wrapper1">
              <input
                type="text"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder="Apartment, suite, unit, etc. (optional)"
                value=""
                autocomplete="given-name"
              />
            </span>
            <label for="billing_first_name" className="first">
              Town / City&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <input
                type="text"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                value=""
                autocomplete="given-name"
              />
            </span>
            <label for="billing_first_name" className="first">
              State&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <Select
                style={{ width: "590px", marginLeft: "110px" }}
                value={selectedCountry}
                onChange={(e) => selectCountryHandler(e.target.value)}
              >
                {!!countryArr?.length &&
                  countryArr.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
              </Select>
            </span>
            <label for="billing_first_name" className="last">
              ZIP Code&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <input
                type="text"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                value=""
                autocomplete="given-name"
              />
            </span>
            <label for="billing_first_name" className="last">
              Phone&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <input
                type="phone"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                value=""
                autocomplete="given-name"
              />
            </span>
            <label for="billing_first_name" className="last">
              Email address&nbsp;
              <abbr className="required" title="required">
                *
              </abbr>
            </label>
            <br />
            <span class="woocommerce-input-wrapper">
              <input
                type="email"
                class="input-text "
                name="billing_first_name"
                id="billing_first_name"
                placeholder=""
                autocomplete="given-name"
              />
            </span>
            <div className="final">
              <span></span> <p>Ship to a different address?</p>
            </div>
            <label for="billing_first_name" className="last">
              Order notes (optional)
            </label>
            <br />
            <textarea
              className="textA"
              rows="4"
              cols="50"
              name="comment"
              form="usrform"
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
          <div className="col-lg-4">
            <div className="second">
              <div class="title-product-name">Product</div>
              <div class="cartitem">
                <div className="info-product">
                  <div className="product-thumble">
                    <img src={imgc} width="70px" />
                  </div>
                  <div class="product-name">
                    Pilot Set - Honey Color, 8 years&nbsp;{" "}
                    <strong class="product-quantity">QTY : 2</strong>{" "}
                  </div>
                </div>
                <div class="product-total">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      <span class="woocommerce-Price-currencySymbol">$</span>
                      88.00
                    </bdi>
                  </span>{" "}
                </div>
              </div>
              <div class="cart-subtotal">
                <h2>Subtotal</h2>
                <div class="subtotal-price">
                  <span class="woocommerce-Price-amount amount">
                    <bdi style={{ fontSize: "15px", marginLeft: "90px" }}>
                      <span class="woocommerce-Price-currencySymbol">$</span>
                      88.00
                    </bdi>
                  </span>
                </div>
              </div>
              <div class="woocommerce-shipping-totals shipping">
                <h2>Shipping</h2>
                <div data-title="Shipping">
                  Enter your address to view shipping options.
                </div>
              </div>
              <div class="order-total">
                <h2>Total</h2>
                <div class="totalprice">
                  <strong>
                    <span class="woocommerce-Price-amount amount">
                      <bdi>
                        <span class="woocommerce-Price-currencySymbol">$</span>
                        88.00
                      </bdi>
                    </span>
                  </strong>{" "}
                </div>
              </div>
              <div className="woocommerce-checkout-payment">
                <ul className=" paymentmethods">
                  <li className="wc_payment_method payment_method_kuveytpos">
                    <input
                      type="radio"
                      className="input-radio"
                      name="payment_method"
                      value="kuveytpos"
                      checked="checked"
                      data-order_button_text="Pay with Card"
                      style={{ display: "none" }}
                    />

                    <label
                      for="payment_method_kuveytpos"
                      style={{ marginLeft: "50px" }}
                    >
                      <p
                        style={{
                          fontSize: "13px",
                          marginLeft: "-10px",
                          marginRight: "10px",
                        }}
                      >
                        {" "}
                        Credit Card (Kuveyt Türk 3D){" "}
                      </p>{" "}
                      <img width="150px" src={imgc2} />{" "}
                    </label>
                    <div className="payment_box payment_method_kuveytpos">
                      <p
                        style={{
                          fontSize: "13px",
                          marginLeft: "20px",
                          color: "#7A7A7A",
                        }}
                      >
                        Pay securely using your credit card.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <p style={{fontSize:"12.77px", color:"#7A7A7A"}}>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}<a style={{textDecoration:"none",color:"black"}} href="https://winkwink-tr.com/privacy-policy/" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>
              </p>
              <button className="ntn5">Pay with Card</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
