import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Mouse />
        <Navigation />
        <SocialNetwork />

        <div className="home-main">
          <div className="main-content">
            <h1>Web Alliance</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
