import { React, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import TableCart from "../Components/TableCart";
import { NavLink } from "react-router-dom";
import Checkout from "../Components/Checkout";
import { Helmet } from "react-helmet";
const Cart = () => {
  const [fillActive, setFillActive] = useState("shopping");
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  return (
    <>
      <Helmet
        style={[
          {
            cssText: `
            .navLink {
                color: green;
            }
        `,
          },
        ]}
      />
      <div className="container-fluid headercart">
        <div className="cart1">
          <div className="content1">
            <MDBTabs fill justify className="mb-3">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick("shopping")}
                  active={fillActive === "shopping"}
                >
                  Shopping Cart(1)
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick("addInfo")}
                  active={fillActive === "addInfo"}
                >
                  Checkout
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick("order")}
                  active={fillActive === "order"}
                >
                  Order Tracking
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={fillActive === "shopping"}>
                <div className="row">
                  <div className="col-lg-8">
                    <TableCart />
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-header">Cart totals</div>
                      <div className="card-body">
                        <h5 className="card-title">
                          <div class="cart-subtotal">
                            <div className="title">Subtotal</div>
                            <div data-title="Subtotal">
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  78.00
                                </bdi>
                              </span>
                            </div>
                          </div>
                        </h5>
                        <p className="card-text">
                          <div class="woocommerce-shipping-totals shipping">
                            <h2>Shipping</h2>
                            <div data-title="Shipping">
                              Enter your address to view shipping options.
                              {/* <NavLink To="/" className="shipping-calculator-button">Calculate shipping</NavLink> */}
                              <br />{" "}
                              <NavLink
                                className="shipping-calculator-button"
                                to="/"
                              >
                                Calculate shipping
                              </NavLink>
                            </div>
                          </div>
                          <div class="order-total">
                            <div class="title">Total</div>
                            <div data-title="Total">
                              <strong>
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    78.00
                                  </bdi>
                                </span>
                              </strong>{" "}
                            </div>
                          </div>
                        </p>
                        <button
                          onClick={() => handleFillClick("addInfo")}
                          className="btn btn-primary btn1"
                        >
                          Proceed to checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
            <MDBTabsContent>
            <MDBTabsPane show={fillActive === "addInfo"}>
              <h3 style={{ textAlign: "center" }}>
                <strong
                  style={{
                    color: "red",
                    fontSize: "24px",
                    fontWeight: "400",
                    position: "relative",
                    top: "-130px",
                  }}
                >
                  NB. All Prices are converted to Turkish Lira on Checkout
                </strong>
              </h3>
              <Checkout />
            </MDBTabsPane>
            </MDBTabsContent>
            <MDBTabsContent>
              <MDBTabsPane show={fillActive === "order"}>
                <div className="container lastp">
                  <p>
                    To track your order please enter your Order ID in the box
                    below and press the "Track" button. This was given to you on
                    your receipt and in the confirmation email you should have
                    received.
                  </p>
                  <form style={{    width:"500px", marginLeft:"300px" }}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" style={{    fontSize: "13px",fontWeight: "bold"}}>Order ID</label>
    <input type="text" className="form-control" style={{    fontSize: "13px"}} placeholder="Found in your order confirmation email." id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"style={{    fontSize: "13px",fontWeight: "bold"}}>Billing email</label>
    <input type="email" style={{    fontSize: "13px"}} placeholder="Email you used during checkout."  className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btnO">TRACK</button>
</form>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
