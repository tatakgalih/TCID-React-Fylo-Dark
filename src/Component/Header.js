import React, { Component } from "react";
import Logo from "../Images/logo.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
    };
    this.showNav = this.showNav.bind(this);
  }
  showNav(e) {
    e.preventDefault();
    this.setState({
      isDisplay: !this.state.isDisplay,
    });
  }
  render() {
    const navList = ["features", "team", "sign in"];
    return (
      <header>
        <div className="container">
          <div className="row header-area">
            <div className="logo-area">
              <img className="img-fluid" src={Logo} alt="" />
            </div>
            <nav className={this.state.isDisplay ? "show" : ""}>
              <Nav links={navList} />
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

class Nav extends Component {
  render() {
    const listItem = this.props.links.map((link, idx) => {
      return (
        <li key={idx}>
          <a href={`#${link}`}>{link}</a>
        </li>
      );
    });
    return <ul>{listItem}</ul>;
  }
}
