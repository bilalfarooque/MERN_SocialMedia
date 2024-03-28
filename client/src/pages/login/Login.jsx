import React, { useContext, useRef } from "react";
import "./Login.css";
import RotateRightIcon from "@mui/icons-material/RotateRight";

export default function Login() {
  const email = useRef();
  const password = useRef();
//   const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <>
      <div className="login">
        <div className="login-wrapper">
          <div className="login-left">
            <h3 className="login-logo">Share Space</h3>
            <span className="login-desc">
              Connect with friends and the world around you on Share Space.
            </span>
          </div>
          <div className="login-right">
            <form className="login-box" onSubmit={handleClick}>
              <input
                type="email"
                placeholder="Email"
                className="login-input"
                ref={email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                ref={password}
                minLength={6}
                required
              />
              <button className="login-button" 
            //   disabled={isFetching}
              >
                {/* {isFetching ? (
                  <RotateRightIcon sx={{ color: "white" }} size={20} />
                ) : (
                  "Login"
                )} */}
              </button>
              <span className="login-forgot">Forgot Password?</span>
              <button className="login-register-button">
                {/* {isFetching ? (
                  <RotateRightIcon sx={{ color: "white" }} size={20} />
                ) : (
                  "Create a new account"
                )} */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
