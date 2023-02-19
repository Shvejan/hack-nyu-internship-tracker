import React, { useState } from "react";
import { loginApi } from "../apis/login";
import "../css/unauthenticated-styles.css";

const Register = () => {
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
            class="btn"
            onClick={() => loginApi(name, email, password)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default function UnauthenticatedPage() {
  const [register, setregister] = useState(true);
  return <>{register && <Register />}</>;
}
