import React, { Component } from "react";
import Profil1 from "../Images/profile-1.jpg";
import Profil2 from "../Images/profile-2.jpg";
import Profil3 from "../Images/profile-3.jpg";

export default class Testimonial extends Component {
  render() {
    return (
      <section className="testimonial-section">
        <div className="container">
          <div className="row testimonial-area">
            <TestimonialItem description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." image={Profil1} name="Satish Patel" job="Founder & CEO, Huddle" />
            <TestimonialItem description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." image={Profil2} name="Bruce McKenzie" job="Founder & CEO, Huddle" />
            <TestimonialItem description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." image={Profil3} name="Iva Boyd" job="Founder & CEO, Huddle" />
          </div>
        </div>
      </section>
    );
  }
}
class TestimonialItem extends Component {
  render() {
    return (
      <div className="testimonial-item">
        <p>{this.props.description}</p>
        <div className="testimonial-profile">
          <img src={this.props.image} />
          <div className="testimonial-name-job">
            <p className="testimonial-name">{this.props.name}</p>
            <p className="testimonial-job">{this.props.job}</p>
          </div>
        </div>
      </div>
    );
  }
}
