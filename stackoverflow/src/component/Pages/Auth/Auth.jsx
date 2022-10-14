import React from "react";
import { useState } from "react";
import "./Auth.css";
import AboutAuth from "./AboutAuth";
import icon from "../../assests/icon.png";

const Auth = () => {
  const [isSignup, setisSignup] = useState(true);

  const handleSwitch = () => {
    setisSignup(!isSignup);
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img
            src={icon}
            alt="stackoverflow"
            className="login-logo"
            width={50}
          />
        )}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display name</h4>
              <input type="text" name="name" id="name" />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="name" id="email" />
          </label>

          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot Password
                </p>
              )}
            </div>
            <input type="password" name="name" id="password" />
            {isSignup && (
              <p>
                Password must contain at least eight
                <br />
                chracters, including at least 1 number and 1 special chracter
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p>
                Opt-in to receive occasional,
                <br />
                product update utter research invitation,
                <br />
                company annoucement and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-button">
            {isSignup ? "Sign Up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#66676", fontSize: "13px" }}>
              {" "}
              By clicking "Sign up" you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                term of
                <br /> service
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span>,{" "}
              <span style={{ color: "#007ac6" }}> cookie policy</span>{" "}
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}

          <button
            type="button"
            className="hande-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "log in" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
