import React from "react";
import ContactForm from "../components/ContactForm";
import Desc from "../components/Desc";
import Header from "../common/Header";
import We from "../common/We";
import { header, about } from "../assets/text";

const About = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header
        title={header.about.headerTitle}
        count={header.main.HeaderCount}
        text={header.about.headerText}
        bg={header.about.headerBg}
      />
      <We
        text={about.aboutText.text}
        hight={about.aboutText.textH}
        subtitle={about.aboutText.subTitle}
        position={about.aboutText.position}
      />
      <Desc />
      <ContactForm />
    </div>
  );
};

export default About;
