import React, { Component } from "react";
import ProductiveIcon from "../Images/illustration-stay-productive.png";
import ArrowIcon from "../Images/icon-arrow.svg";

export default class Productive extends Component {
  render() {
    return (
      <section className="productive-section">
        <div className="container">
          <div className="row productive-area">
            <div className="productive-image">
              <img className="img-fluid" src={ProductiveIcon} alt="" />
            </div>
            <div className="productive-text">
              <ProductiveText />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class ProductiveText extends Component {
  render() {
    return (
      <>
        <p className="title-section">Stay productive, wherever you are</p>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <a href="#">
          See how Fylo works
          <span>
            <img src={ArrowIcon} alt="" />
          </span>
        </a>
      </>
    );
  }
}
