import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { Table, Alert, Button } from "react-bootstrap";
import { VscClose } from "react-icons/vsc";
import imgw1 from "../../../img/b3.jpg";
import imgw2 from "../../../img/G3.jpg";
import {
  BsCurrencyDollar,
  BsHeart,
  BsPencil,
  BsStar,
  BsStarFill,
  BsFillHeartFill,
} from "react-icons/bs";
const Wishlist = () => {
  const style = { color: "white", marginRight: "10px" };
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="container-fluid headerWish">
        <h1 className="text-title-heading">Wishlist</h1>
        <div className="breadcrumb1">
          <NavLink className="linkI" to="/">
            Home
          </NavLink>
          <RiArrowRightSLine style={style} />
          <span>Wishlist</span>
        </div>
      </div>
      <div className="wishlist">
        <div className="tableT">
          <Table size="sm">
            <tbody>
              <tr>
                <td colspan={2}>
                  <span>
                    <VscClose />
                  </span>
                  <div className="imgw">
                    <img src={imgw1} width="78px" className="img1" />
                  </div>
                  <NavLink className="linkI" to="/">
                    Active Boy Trousers
                  </NavLink>
                  <div className="price">
                    <span className="dollar1">
                      <BsCurrencyDollar /> 55.00
                    </span>
                    <p>
                      <BsCurrencyDollar /> 55.00
                    </p>
                  </div>
                  <div class="woosw-content-item">April 12, 2022</div>
                </td>
                <td>
                  <div class="woosw-content-item--stock">In stock</div>
                  <button type="submit" class="add1">
                    <p className="submitI">Add to cart</p>
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan={2} style={{ width: "300px", color: "black" }}>
                  <span>
                    <VscClose />
                  </span>
                  <div className="imgw">
                    <img src={imgw2} width="78px" className="img1" />
                  </div>
                  <NavLink className="linkI" to="/">
                    Active Boy Trousers
                  </NavLink>
                  <div className="price">
                    <span className="dollar1">
                      <BsCurrencyDollar /> 55.00
                    </span>
                    <p>
                      <BsCurrencyDollar /> 55.00
                    </p>
                  </div>
                  <div class="woosw-content-item">April 12, 2022</div>
                </td>
                <td>
                  <div class="woosw-content-item--stock">In stock</div>
                  <button type="submit" className="add1">
                    <p className="submitI">Add to cart</p>
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>{" "}
        </div>
        <div className="woosw-copy">
          <span className="title">Wishlist link:</span>
          <span class="woosw-copy-url">
            <input
              id="woosw_copy_url"
              type="url"
              value="https://winkwink-tr.com/wishlist/X7WXYO"
              readonly=""
            />{" "}
         {    <button type="submit" className="add2" onClick={()=> alert("Copied the wishlist link: https://winkwink-tr.com/wishlist/X7WXYO")} >
              <p className="submitI" >copy</p>
             
            </button>}
          </span>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
