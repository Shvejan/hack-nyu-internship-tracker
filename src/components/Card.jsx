import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="row">
        <div className="col-9">
          <h5>{props.company}</h5>
          <h6>{props.jobTitle}</h6>
        </div>
        <div className="col-3">
          <div className="card-img-container">
            <img src={props.image} className="card-img" alt="ig" />
          </div>
        </div>
      </div>
    </div>
  );
}
