import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

export default function Card(props) {
  const [showModel, setshowModel] = useState(false);
  const makeUrl = (companyName) => {
    // let string =
    //   "https://logo.uplead.com/" + companyName.toLowerCase() + ".com";
    let string =
      "https://logo.uplead.com/" + companyName.toLowerCase() + ".com";
    return string;
  };
  return (
    <div className="card" onClick={() => setshowModel(!showModel)}>
      <div className="row">
        <div className="col-9">
          <h5>{props.company}</h5>
          <h6>{props.jobTitle}</h6>
        </div>
        <div className="col-3">
          <div className="card-img-container">
            {/* <img src={props.image} className="card-img" alt="ig" /> */}
            <img
              src={makeUrl(props.company)}
              alt="amazon logo"
              className="card-img"
            />
          </div>
        </div>
      </div>
      <Modal show={showModel} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{props.jobTitle}</h5>
          <p>{props.emailContent}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
