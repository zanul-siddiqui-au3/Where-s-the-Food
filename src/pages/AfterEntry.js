import React from "react";
import { Link } from "react-router-dom";
// --------------- Components
import Navbar from "../components/Navbar";

// ------------------------ Styles

import "../styles.css";

// ------------- Data
import dummyGenerator from "../Data/dummyData";

const AfterEntry = (props) => {
  const data = dummyGenerator()[parseInt(props.match.params.id)];

  const leftSide = () => {
    return (
      <React.Fragment>
        <h4>
          <Link to="/"> Go Back</Link>
        </h4>
        <hr />
        <h2 style={{ color: "white" }}>
          <i> "{data.title}"</i>
        </h2>
        <hr
          style={{ border: "none", height: "2px", backgroundColor: "white" }}
        />
        <br />
        <br />
        <h4 style={{ color: "white", fontWeight: "lighter" }}>{data.author}</h4>
        <h4 style={{ color: "white", fontWeight: "lighter" }}>
          {data.resturant}
        </h4>
        <br />
        <br />
      </React.Fragment>
    );
  };

  const rightSide = () => {
    return (
      <React.Fragment>
        <img src={data.image} style={{ paddingLeft: "90px" }} />
        <br />
        <br />
        <br />
        <a
          className="card-text"
          href={data.video}
          style={{ color: "#ff5252", fontSize: "35px", paddingLeft: "70px" }}
        >
          Listen to this podcast
        </a>
        <br />
        <br />
        <br />
        <h7 style={{ color: "white", fontWeight: "lighter" }}>
          Subsscibe new for Free : Apple Podcasts | Google Play Music | Spotify
        </h7>
      </React.Fragment>
    );
  };

  const bodyTranscript = () => {
    return (
      <React.Fragment>
        <div className="container">
          <h4 style={{ textAlign: "center" }}>EPISODE TRANSCRIPT</h4>
          <br />
          <br />
          <p style={{ fontWeight: "lighter" }}>{data.transcipt}</p>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {console.log(data)}
      <div className="afterEntryMain">
        <Navbar />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-6">{leftSide()}</div>
            <div className="col-6"> {rightSide()}</div>
          </div>
        </div>
      </div>
      <br />
      {bodyTranscript()}
    </React.Fragment>
  );
};

export default AfterEntry;
