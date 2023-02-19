import axios from "axios";

export const fetchJobsApi = (email, setjobs) => {
  if (!email.length) return;
  console.log("api call made", email);
  axios
    .post(`http://127.0.0.1:5000/get_applications`, {
      email: email,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setjobs(res.data.applications);
    });
};
