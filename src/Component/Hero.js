import React, { Component } from "react";
import illustrationIntro from "../Images/illustration-intro.png";
export default class Hero extends Component {
  render() {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="row hero-area">
            <div>
              <img className="img-fluid" src={illustrationIntro} alt="" />
              <h2>All your files in one secure location, accessible anywhere.</h2>
              <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
              <a className="button-cta" href="#">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
