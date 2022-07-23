import React from "react";
import img1a from "../../../img/Accessories.jpg";
import img2a from "../../../img/SS21-Collection.jpg";

const Section4 = () => {
  return (
    <>
      <div className=" section4">
        <div className="row ">
          <div className="col-lg-6 part1">
            <img src={img1a} className="img1a" />
            <h3>Boys Age 8-14</h3>
            <button class="button1">
              <a>Shop Now </a>
            </button>
          </div>
          <div className="col-lg-6 part1">
            <img src={img2a} className="img1a" />
            <h3>Boys Age 2-7</h3>
            <button class="button1">
              <a>Shop Now </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section4;
