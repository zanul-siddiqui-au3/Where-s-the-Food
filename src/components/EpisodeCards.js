import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";

const EpisodeCards = (props) => {
  return (
    <React.Fragment>
      <div className="badge">
        <h5 style={{ color: "white" }}>MORE EPISODES</h5>
      </div>

      {props.data.map((data, index) => (
        <div className="container-fluid" key={index}>
          <div className="row">
            <div className="col-12 mt-3">
              <div className="card">
                <div className="card-horizontal">
                  <div className="img-square-wrapper">
                    <Link to={`/${index}`}>
                      <img
                        className="card-img-left"
                        src={data.image}
                        alt="Card image cap"
                        height="270px"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">
                      <i> "{data.title}."</i>
                    </h2>
                    <hr />
                    <h5 className="card-text">{data.author}</h5>
                    <h5 className="card-text">{data.resturant}</h5>
                    <a
                      className="card-text"
                      href={data.video}
                      style={{ color: "red", fontSize: "25px" }}
                    >
                      Listen to this podcast
                    </a>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default EpisodeCards;
