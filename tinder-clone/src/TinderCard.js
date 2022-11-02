import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import TinderCards from "react-tinder-card";
import instance from "./API";
import { fetchAdd, selectadd } from "./redux/addSlice";

import "./TinderCard.css";
export default function TinderCard() {
  const [people, setPeople] = useState([]);
  const [users, setUsers] = useState([]);
  const display = useSelector(selectadd);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const fetchBody = await instance.get("/main/tinder/cards");
      const fetchUser = await instance.get("/main/login/users");

      setPeople(fetchBody.data);
      setUsers(fetchUser.data);
    };
    fetchData();
  }, []);
  const swiped = (direction, nameToDelete) => {
    console.log("removing:", nameToDelete);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name, "left the screen");
  };
  const myFunction = () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };
  const [hire, setHire] = useState(0);
  return (
    <>
      <div class="navbar">
        <div class="navbar_left"></div>

        <div class="navbar_center"></div>
      </div>
      <div class="content">
        <div class="content_left">
          <div class="Prof"></div>
          <ul>
            <li class="navleftdesc">
              <a href="#">
                <img src="" alt="" />
                {/* {people.map((user) =>
                  users[0].email ? (
                    user.email === users[0].email ? (
                      <div key={user.id}>
                        <div>
                          <span>Name:</span>&nbsp;{user.name}
                          <span></span>
                        </div>
                        <div>
                          <span>Stack:</span>&nbsp;{user.stack}
                          <span></span>
                        </div>
                      </div>
                    ) : null
                  ) : null
                )} */}
              </a>
            </li>
          </ul>
        </div>

        <div class="content_center">
          <div class="stories">
            <img src="./images/1.jpeg" alt="" />
            <img src="./images/2.jpeg" alt="" />
            <img src="./images/3.jpeg" alt="" />
            {/* <img src="https://picsum.photos/id/231/110/200" alt="" />
            <img src="https://picsum.photos/id/537/110/200" alt="" />
            <img src="https://picsum.photos/id/237/110/200" alt="" /> */}
          </div>
          <div class="">
            <div class="">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <input
                    placeholder="search skills or any keywords"
                    name="search"
                    style={{ color: "black" }}
                    class="search-field"
                    type="text"
                    id="myInput"
                    onKeyUp={myFunction}
                  />
                </div>

                <div>
                  <button className="btn-primary" id="searchbyfilbutton">
                    Search
                  </button>
                </div>
              </div>
              <div>
                <button
                  class="btn btn-primary"
                  id="buttonhire"
                  style={{ width: "200px" }}
                >
                  <NavLink to="/dev-tinder">SWIPE our DEVS</NavLink>
                </button>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "500px",
                    marginTop: "50px",
                    position: "relative",
                    left: " 50%",
                    transform: "translateX(-50%)",
                  }}
                ></div>
              </div>

              <ul id="myUL">
                {people.map((people) => (
                  <li key={people.contact}>
                    <div class="flex-box">
                      <div>
                        <img
                          width="300"
                          height="250"
                          src={`${people.img}`}
                          alt=""
                        />
                      </div>
                      <a style={{ visibility: "hidden" }} href="#">
                        {people.stack}
                      </a>
                      <div class="flex-content">
                        <h1>{people.name}</h1>
                        <div>{people.name}</div>
                        <div>{people.email}</div>
                        <div>{people.stack}</div>

                        <div>
                          <button
                            class="btn btn-primary"
                            style={{ marginTop: "20px" }}
                          >
                            <NavLink
                              exact
                              to={{
                                pathname: "/profile",
                                aboutProps: {
                                  ppl: people,
                                },
                              }}
                            >
                              View Profile
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div class="share_downSide"></div>
            </div>
            <div class="news_feed"></div>
          </div>
        </div>

        <div class="content_right">
          <div class="content_right_inner">
            <div>
              <button
                onClick={() => setHire(!hire)}
                class="btn btn-primary"
                id="buttonhire"
              >
                Hire devs
              </button>
            </div>
            {hire ? (
              <ul className="">
                {people.map((people) => (
                  <li
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      alignItems: "center",
                    }}
                  >
                    {people.hire == "Yes" ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="hire-content">
                          <div>Name: {people.name}</div>
                          <div>Domain/Stack: {people.stack}</div>
                        </div>

                        <button class="btn btn-primary">
                          <NavLink
                            exact
                            to={{
                              pathname: "/profile",
                              aboutProps: {
                                ppl: people,
                              },
                            }}
                          >
                            View
                          </NavLink>
                        </button>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
