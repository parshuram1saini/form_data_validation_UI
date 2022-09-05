import React from "react";
import "./carditem.css";

function CardItem() {
  return (
    <>
      <div className="card-field m-left-1 width-35 font-color-white position-relative">
        <div className="d-flex justify-between">
          <div>Class VI</div>
          <div className="b-color-gold border-radius-10 P-2">GOLD</div>
        </div>
        <div className="d-flex justify-between">
          <div>Chemistry</div>
          <div>
            <small>subscription:</small>
            <small className="font-weight-1000">1 year</small>
          </div>
        </div>
        <span className="bar-height-width position-absolute"></span>
        <progress className="width-100 m-top-6" value="32" max="100">
          32%
        </progress>
        <span className="bar-height-width position-absolute"></span>
        <div className="d-flex justify-between">
          <small>Start Date</small>
          <small>Expiry Date</small>
        </div>
        <div className="d-flex justify-between m-top-bottom">
          <div className="font-bold">12 JUNE 2022</div>
          <div className="font-bold">12 JUNE 2023</div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
