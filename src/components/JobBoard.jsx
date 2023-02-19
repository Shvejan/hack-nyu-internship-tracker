import React, { useContext, useEffect } from "react";
// import JobsContext from "../context/JobsContext";
import Card from "./Card";

import JobsContext from "../context/JobsContext";

const colorMap = {
  Applied: "#63a5c7;",
  "Online Assessment": "#F99417",
  Interview: "#647845",
  Rejected: "#E96479",
};

export default function JobBoard() {
  const { jobs } = useContext(JobsContext);

  return (
    <div className="col-10 right-dock">
      <div className="row category-section">
        {jobs &&
          jobs.length &&
          jobs.map((c, i) => (
            <div className="col-3 no-gitter" key={i}>
              <div className="category">
                <div
                  className="category-title"
                  style={{ backgroundColor: colorMap[c.title] }}
                >
                  <p>{c.title}</p>
                </div>
                <div className="card-holder">
                  {!c.data.length && (
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      No Jobs found
                    </p>
                  )}
                  {c.data.map((job, index) => (
                    <Card
                      key={index}
                      company={job[0]}
                      jobTitle={job[1]}
                      emailContent={job[3]}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        <div></div>
      </div>
    </div>
  );
}
