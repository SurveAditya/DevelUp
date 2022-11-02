import React, { useEffect, useState } from "react";
import "./ViewUser.css";
import { NavLink, useLocation } from "react-router-dom";
import { GithubRepoDisplay } from "github-repo-display-react";
import "github-repo-display-react/dist/index.css"; // default github styling
import axios from "axios";
function ViewUser() {
  const [repos, setRepos] = useState("");
  let location = useLocation();
  useEffect(() => {
    // axios.get(`https://api.github.com/users/Jay-Naruto/repos`)
    fetch(`https://api.github.com/users/Jay-Naruto/repos`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setRepos(res);
      });
  }, []);
  const people = location.aboutProps.ppl;
  return (
    <div className="promo">
      <div className="promo__card">
        <div className="promo__card-left">
          <div className="promo__img">
            <img width="300" height="250" src={people.img} alt="" />
          </div>
          <div className="promo__name">
            <p className="promo__job">
              Email - {people.email} <br></br> Contact Number -{people.contact}{" "}
            </p>
          </div>
          <div className="promo__underline"></div>
          <div className="promo__job">Tech stack</div>
          <div className="techstack">
            <p>{people.stack}</p>
          </div>
          <ul className="promo__social">
            <li>
              <img
                className="medialinks"
                src="https://img.icons8.com/windows/128/000000/github.png"
                href="#"
              />
            </li>
            <li>
              <a href="https://img.icons8.com/fluency/96/000000/instagram-new.png">
                <img
                  className="medialinks"
                  src="https://img.icons8.com/fluency/96/000000/linkedin.png"
                />
              </a>
            </li>
            <li>
              <img
                className="medialinks"
                src="https://img.icons8.com/fluency/96/000000/instagram-new.png"
              />
            </li>
          </ul>
        </div>
        <div className="promo__card-right">
          <div className="promo__title">{people.name}</div>
          <div className="promo__subtitle" style={{ color: "black" }}>
            Here's who I am & what I do
          </div>
          <button className="button button_active" id="resume-btn">
            <a
              href={`https://wa.me/91${people.contact}?text=Hey! I want to collab with you!!!`}
            >
              CONNECT
            </a>
          </button>

          <div className="promo__descr">
            <a href={people.git}>{people.git}</a>
          </div>
          <div className="promo__descr">
            {" "}
            <a href={people.linked}>{people.linked}</a>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>

      <div>
        {/* {repos ? (
          <div
            style={{
              backgroundColor: "black",
              padding: "30px",
              width: "100%",
              textAlign: "left",
            }}
          >
            <h1>{repos.full_name}</h1>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}

export default ViewUser;
