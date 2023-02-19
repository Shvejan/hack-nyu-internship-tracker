import React, { useState } from "react";
import { LoginApi, RegisterApi } from "../apis/login";

import "../css/unauthenticated-styles.css";

const Register = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="form-div">
      <div className="form">
        <h2 className="title">Application Tracker</h2>
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="name">
              Name
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
          </div>

          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>
        </div>
        <div class="footer">
          <button
            type="submit"
            className="btn"
            onClick={() => RegisterApi(name, email, password)}
          >
            Register
          </button>
        </div>
        <div className="btns-container row">
          <button className="button col-6">Register</button>

          <button
            className="button col-6"
            onClick={() => props.setregister(false)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="form-div">
      <div className="form">
        <h2 className="title">Application Tracker</h2>
        <div className="form-body">
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>
        </div>
        <div class="footer">
          <button
            type="submit"
            className="btn"
            onClick={() => LoginApi(email, password)}
          >
            Login
          </button>
        </div>
        <div className="btns-container row">
          <button
            className="button col-6"
            onClick={() => props.setregister(true)}
          >
            Register
          </button>

          <button className="button col-6">Login</button>
        </div>
      </div>
    </div>
  );
};
export default function UnauthenticatedPage() {
  const [register, setregister] = useState(true);
  return (
    <div className="row form-container">
      <div className="col-6"></div>
      <div className="col-6">
        {register && <Register setregister={setregister} />}
        {!register && <Login setregister={setregister} />}
      </div>
    </div>
  );
}
