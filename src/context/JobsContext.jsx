import React from "react";
import { createContext, useState } from "react";

const JobsContext = createContext();

const jobsTemplate = {
  applied: [],
  rejected: [],
  onlineAssessment: [],
  interview: [],
};

export function JobsContextProvider({ children }) {
  const [jobs, setjobs] = useState(jobsTemplate);
  return (
    <JobsContext.Provider value={{ jobs, setjobs }}>
      {children}
    </JobsContext.Provider>
  );
}

export default JobsContext;
