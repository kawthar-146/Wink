import React from "react";
import img1c from "../../../img/c1.jpg";
import img2c from "../../../img/c2.jpg";
import img3c from "../../../img/c3.jpg";


const Section1 = () => {
  return (
    <>
      <div className="container section1">
        <div className="row part ">
          <div className="col-lg-3 card1 ">
            <img src={img1c} className="imgS" />
            <h3 className="title">All Boys</h3>
            <button class="button">
              <a>Shop Now </a>
            </button>
          </div>
          <div className=" col-lg-3 card border-0">
            <img src={img2c} className="imgS" />
            <h3 className="title">Kids sels</h3>
            <button class="button1">
              <a>Shop Now </a>
            </button>
          </div>
          <div className="col-lg-4  border-0 ">
            <img src={img3c} className="imgS" />
            <h3 className="title">All girls</h3>
            <button class="button2">
              <a>Shop Now </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
