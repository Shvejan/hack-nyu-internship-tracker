import React, { useContext } from "react";
import JobsContext from "../context/JobsContext";
import Card from "./Card";
import appleLogo from "../images/apple.jpg";
import amazonLogo from "../images/amazonlogo.jpg";
import googleLogo from "../images/googlelogo.png";
import metaLogo from "../images/metalogo.jpg";

const categories = [
  {
    title: "Applied",
    data: [
      {
        company: "Apple",
        jobTitle: "Software Intern",
        image: appleLogo,
      },

      {
        company: "Amazon",
        jobTitle: "Data Science Intern",
        image: amazonLogo,
      },
      {
        company: "Google",
        jobTitle: "Frontend Developer Intern",
        image: googleLogo,
      },
    ],
  },
  {
    title: "Online Assessment",
    data: [
      {
        company: "Meta",
        jobTitle: "Security Enginner",
        image: metaLogo,
      },
    ],
  },
  {
    title: "Interview",
    data: [],
  },
  {
    title: "Rejected",
    data: [],
  },
];

export default function JobBoard() {
  const { jobs } = useContext(JobsContext);
  return (
    <div className="row category-section">
      {categories.map((c, i) => (
        <div className="col-3 no-gitter" key={i}>
          <div className="category">
            <div className="category-title">
              <p>{c.title}</p>
            </div>
            <div className="card-holder">
              {!c.data.length && (
                <p style={{ textAlign: "center", justifyContent: "center" }}>
                  No Jobs found
                </p>
              )}
              {c.data.map((job, i) => (
                <Card
                  key={i}
                  company={job.company}
                  jobTitle={job.jobTitle}
                  image={job.image}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}
