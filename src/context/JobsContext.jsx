import React from "react";
import { createContext, useState } from "react";
import appleLogo from "../images/apple.jpg";
import amazonLogo from "../images/amazonlogo.jpg";
import googleLogo from "../images/googlelogo.png";
import metaLogo from "../images/metalogo.jpg";

const JobsContext = createContext();
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

// const jobsTemplate = [
//   { Applied: [["Apple", "Intern", "Applied"]] },
//   { Interview: [["Amazon", "SDE Intern", "Interview"]] },
//   { "Online Assesment": [["Meta", "Research Intern", "Online Assesment"]] },
//   { Rejected: [["Netflix", "ML Intern", "Rejected"]] },
// ];

export function JobsContextProvider({ children }) {
  const [jobs, setjobs] = useState([]);
  return (
    <JobsContext.Provider value={{ jobs, setjobs }}>
      {children}
    </JobsContext.Provider>
  );
}

export default JobsContext;
