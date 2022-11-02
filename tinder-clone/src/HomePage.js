import React, { useState } from "react";
import { Card, CardContent } from "@material-ui/core";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import "./TinderCard.css";
import App from "./App";
import { useDispatch } from "react-redux";
import { fetchAdd } from "./redux/addSlice";
import Header from "./Header";
import { addCard } from "./API";
export default function HomePage() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [contact, setContact] = useState("");
  const [git, setGit] = useState("");

  const [linked, setLinked] = useState("");
  const [hack, setHack] = useState("");
  const [stack, setStack] = useState("");
  const [hire, setHire] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  const addInfo = async () => {
    dispatch(
      fetchAdd({
        name: name,
        email: email,
        contact: contact,
        git: git,
        linked: linked,
        hack: hack,
        stack: stack,
        hire: hire,
        img: img,
        display: true,
      })
    );
    await addCard({
      name: name,
      email: email,
      contact: contact,
      git: git,
      linked: linked,
      hack: hack,
      stack: stack,
      img: img,
      hire: hire,
    });
  };
  return (
    <div>
      <Header />

      <div className="tinder__cards">
        <div className="tinder__cards__container">
          <Card className="card">
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
              className="form"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 20,
                }}
                className="input-fields"
              >
                <div>
                  <input
                    required
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    required
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    required
                    name="contact"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    required
                    name="git"
                    placeholder="Github link"
                    value={git}
                    onChange={(e) => setGit(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    required
                    name="linked"
                    placeholder="Linkedin link"
                    value={linked}
                    onChange={(e) => setLinked(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    required
                    name="hack"
                    value={hack}
                    placeholder="Hackerrank link"
                    onChange={(e) => setHack(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    required
                    name="stack"
                    placeholder="Preferred Stack/Domain"
                    value={stack}
                    onChange={(e) => setStack(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    required
                    name="hire"
                    placeholder="Interested in hiring process? Yes or No"
                    value={hire}
                    onChange={(e) => setHire(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    required
                    name="img"
                    placeholder="Enter image URL"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>

                <div style={{ display: "flex", marginTop: "20px" }}>
                  <button className="btn-primary">
                    <NavLink onClick={addInfo} exact to="/main">
                      Edit Profile
                    </NavLink>
                  </button>
                  <div>
                    <button className="btn-primary">
                      <NavLink exact to="/main">
                        Skip
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <img width="500px" src="./images/svg.png" alt="" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
