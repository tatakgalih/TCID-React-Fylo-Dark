import React, { Component } from "react";
import Hero from "./Hero";
import Features from "./Features";
import Productive from "./Productive";
import Testimonial from "./Testimonials";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Hero />
        <Features />
        <Productive />
        <Testimonial />
      </main>
    );
  }
}
