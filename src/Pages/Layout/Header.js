import React from "react";
import { BsSearch, BsPerson, BsBag, BsHeart } from "react-icons/bs";
import logo from "../../img/logo-300x51.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Header = (props) => {
  console.log(props)
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Navbar
              className="navb"
              bg="transparent"
              expand="lg navbar-dark  shadow-5-strong"
            >
              <Container>
                <Navbar.Brand href="/">
                  <img src={logo} Width="225px" className="logoH"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link
                      className={props.backgroundPage ? "navColor" : "navLight"}
                      href="/"
                    >
                      Home
                    </Nav.Link>
                    <NavDropdown
                      className={props.backgroundPage ? "navColor" : "navLight"}
                      title="BOYS"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="/Age2">
                        Age 2 to 7 years
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Age8">
                        Age 8 to 14 years
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        coats and jackets
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      className={props.backgroundPage ? "navColor" : "navLight"}
                      title="GIRLS"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Age 2 to 7 years
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Age 8 to 14 years
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Sweat Shirts
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>

                  <div className=" icon ">
                    <div>
                      <div className=" d-flex flex-row icon">
                        <ul   >
                          <li className={props.backgroundPage ? "navColor" : "navLight"}>
                            <a usehref="/">
                              <BsSearch size={20} />
                            </a>
                          </li>
                          <li className={props.backgroundPage ? "navColor" : "navLight"}>
                            <a href="/wishlist">
                              <BsHeart size={20} />
                            </a>
                          </li>

                          <li className={props.backgroundPage ? "navColor" : "navLight"}>
                            <a usehref="/">
                              <BsPerson size={20} />
                            </a>
                          </li>
                          <li className={props.backgroundPage ? "navColor" : "navLight"}>
                            <a href="/cart">
                              <BsBag size={20} />
                            </a>
                          </li>
                          <li className={props.backgroundPage ? "navColor" : "navLight"}>
                            <a usehref="/">Bag(0)</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
