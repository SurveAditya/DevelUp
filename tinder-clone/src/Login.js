import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import instance, { addCard } from "./API";
import "./Login.css";
function Login() {
  var sideButtons = document.querySelectorAll(".side button");
  sideButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      document.body.classList.toggle("signup");
    })
  );
  const [name_signup, setNameSign_Up] = useState("");
  const [email_signup, setEmailSign_Up] = useState("");
  const [password_signup, setPasswordSign_Up] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchBody = await instance.get("/main/tinder/cards");
      const fetchUser = await instance.get("/main/login/users");

      setUsers(fetchUser.data);
    };
    fetchData();
  }, []);
  return (
    <div class="body-login">
      <div class="container">
        <div class="shadow-box">
          <div class="login-content">
            <img src="images/img2.png" />
          </div>
          <div class="login-content">
            <form action="login1.html">
              <div class="written-part">
                <h1 class="Heading">Log-in</h1>
                <div class="form-control-login">
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    style={{ color: "black" }}
                    onChange={(e) => setEmailSign_Up(e.target.value)}
                    value={email_signup}
                    class="input-login"
                  />
                  <i class="fas fa-user"></i>
                </div>
                <div class="form-control-login">
                  <input
                    required
                    style={{ color: "black" }}
                    onChange={(e) => setPasswordSign_Up(e.target.value)}
                    type="password"
                    value={password_signup}
                    placeholder="Password"
                    class="input-login"
                  />
                  <i class="fas fa-unlock"></i>
                </div>
                <div class="form-control-login hyperlink-signup forgot-pass">
                  <p>
                    Don't have an Account?{" "}
                    <NavLink exact to="/sign-up">
                      <div id="" class="submit">
                        Sign-up{" "}
                      </div>
                    </NavLink>
                  </p>
                </div>
                {users.map((user) =>
                  user.email === email_signup &&
                  user.password === password_signup ? (
                    <NavLink exact to="/homepage">
                      <button id="" class="submit">
                        Log-in
                      </button>
                    </NavLink>
                  ) : null
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
