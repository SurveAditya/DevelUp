import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { addCard, addUser } from "./API";
import "./Login.css";
function Signup() {
  const [name_signup, setNameSign_Up] = useState("");
  const [email_signup, setEmailSign_Up] = useState("");
  const [password_signup, setPasswordSign_Up] = useState("");

  const addUsers = async () => {
    await addUser({
      email: email_signup,
      password: password_signup,
    });
  };

  return (
    <div>
      <div class="container">
        <div class="shadow-box">
          <div class="login-content">
            <img src="images/img1.png" />
          </div>
          <div class="login-content">
            <form action="login1.html">
              <div class="written-part">
                <h1 class="Heading">Sign-Up</h1>
                <div class="form-control-login">
                  <input
                    type="text"
                    style={{ color: "black" }}
                    placeholder="Enter Email"
                    class="input-login"
                    onChange={(e) => setEmailSign_Up(e.target.value)}
                  />
                  <i class="fas fa-user"></i>
                </div>
                <div class="form-control-login">
                  <input
                    type="password"
                    style={{ color: "black" }}
                    placeholder="Enter Password"
                    class="input-login"
                    onChange={(e) => setPasswordSign_Up(e.target.value)}
                  />
                  <i class="fas fa-unlock"></i>
                </div>

                {/*   */}
                <div>
                  <NavLink onClick={addUsers} exact to="/">
                    Confirm
                  </NavLink>
                </div>
                <div class="form-control-login hyperlink-signup forgot-pass">
                  <p>
                    Already have an Account?
                    <NavLink exact to="/main">
                      <div>Login</div>
                    </NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
