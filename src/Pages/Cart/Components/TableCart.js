import React from 'react'
import { NavLink } from 'react-router-dom'
import imgc from "../../../img/imgCart.jpg"
import {BsCurrencyDollar} from "react-icons/bs"
import IncDecCounterc from './IncDecCounterc/IncDecCounterc'
const TableCart = () => {
    return (
        <div>
         <div className="tableT1">
         <table className="table table-borderless">
 
  <tbody>
    <tr>
      <th colSpan="5" >Product</th>
      <th >Price</th>
      <th>Quantity</th>
      <th className="th3">Subtotal</th>
    </tr>
    <tr>
      <td colSpan="5" >
         <div className="imgc">
         <img src={imgc} width="75px"/>
         <NavLink to="/">80s Set - Neon Green, 2 years</NavLink>
         </div>
      </td>
      <td><span className="dollarc"><BsCurrencyDollar size={13}/>39.00</span></td>
      <td><IncDecCounterc/></td>
      <td><span className="dollarc1"><BsCurrencyDollar size={13}/>39.00</span></td>
    </tr>
    <tr>
      <td colspan="5"><span class="woosw-copy-url1">
            <input
              id="woosw_copy_url"
              type="url"
              value=""
              readonly=""
              placeholder="Coupon code"
            />{" "}
       
          </span>  <button type="submit" className="add3" onClick={()=> alert("Copied the wishlist link: https://winkwink-tr.com/wishlist/X7WXYO")} >
              <p className="submitI" >Apply coupon</p></button>
              <NavLink to="/" className="linkC">Continue Shopping</NavLink>
              <button type="submit" className="add4" onClick={()=> alert("Copied the wishlist link: https://winkwink-tr.com/wishlist/X7WXYO")} >
              <p className="submitI" >Update Cart</p></button>
             </td>
          
      {/* <td colspan="2"><NavLink to="/" className="linkC">Continue Shopping</NavLink></td>
      <td>@twitter</td> */}
    </tr>
  </tbody>
</table>
</div>
        </div>
    )
}

export default TableCart;
