import React from "react";
import Adventage from "../components/Adventage";
// import Header from "../components/Header";
import Offer from "../components/Offer";
import We from "../common/We";
import Write from "../components/Write";
import { header, main } from "../assets/text";
import Header from "../common/Header";
import Client from "../components/Client";
import News from "../components/News";

const Home = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header
        title={header.main.headerTitle}
        count={header.main.HeaderCount}
        bg={header.main.headerBg}
      />
      <div className="">
        <Adventage />
        <Offer />
        <Write />
        <We
          text={main.mainText.text}
          hight={main.mainText.textH}
          title={main.mainText.title}
          position={main.mainText.position}
        />
        <Client />
        <News />
      </div>
    </div>
  );
};

export default Home;
