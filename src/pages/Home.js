import React from "react";
import { Button } from "reactstrap";

// --------------------- Components
import Navbar from "../components/Navbar";
import FeaturedCards from "../components/FeaturedPodcasts";
import EpisodeCards from "../components/EpisodeCards";

// --------------------------- styles
import "../styles.css";

// -------------------- Data
import dummyGenerator from "../Data/dummyData";

const Home = () => {
  const Info = () => {
    return (
      <div className="info">
        <h2
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: "60px",
            textAlign: "center",
            paddingTop: "150px",
            opacity: "90%",
          }}
        >
          Welcome to Helpresturant.in
        </h2>
        <br />
        <p
          style={{
            color: "white",
            textAlign: "center",
            opacity: "60%",
          }}
        >
          A non profit to support the resturant community in their toughest
          times
        </p>
        <br />
        <p
          style={{
            textAlign: "center",
            color: "red",
            opacity: "90%",
          }}
        >
          Build by WTF, with love for resturants
        </p>
        <br />
        <Button outline color="danger" size="lg" className="btn">
          Subscribe To Podcast
        </Button>
      </div>
    );
  };

  const data = dummyGenerator();

  return (
    <React.Fragment>
      <div className="main">
        <div className=" container">
          <Navbar />
          {Info()}
        </div>
      </div>
      <div className="cards " style={{ paddingTop: "20px" }}>
        <div className="container">
          <FeaturedCards />
          <EpisodeCards data={data} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
