import React, { Component } from "react";
import accessIcon from "../Images/icon-access-anywhere.svg";
import securityIcon from "../Images/icon-security.svg";
import collaborationIcon from "../Images/icon-collaboration.svg";
import fileIcon from "../Images/icon-any-file.svg";
export default class Features extends Component {
  render() {
    const datas = [
      {
        file: `${accessIcon}`,
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      },
      {
        file: `${securityIcon}`,
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      },
      {
        file: `${collaborationIcon}`,
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      },
      {
        file: `${fileIcon}`,
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      },
    ];
    return (
      <section className="features-section" id="features">
        <div className="container">
          <div className="row features-area">
            <FeaturesItem datas={datas} />
          </div>
        </div>
      </section>
    );
  }
}
class FeaturesItem extends Component {
  render() {
    const lists = this.props.datas.map((data, idx) => {
      return (
        <div className="features-item" key={idx}>
          <img src={data.file} alt="" />
          <p className="features-title">{data.title}</p>
          <p className="features-description">{data.description}</p>
        </div>
      );
    });
    return lists;
  }
}
