import React, { useEffect, useState, useWindowSize } from "react";
import { useDispatch, useSelector } from "react-redux";
import TinderCards from "react-tinder-card";
import instance from "./API";
import { fetchAdd, selectadd } from "./redux/addSlice";
import { useWindowSize as useWindowSizeD } from "@react-hook/window-size/";
import Confetti from "react-confetti";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./TinderCard.css";
export default function Display() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState();

  const [direction, setDirection] = useState("");
  const display = useSelector(selectadd);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const fetchBody = await instance.get("/main/tinder/cards");
      setPeople(fetchBody.data);
      console.log(fetchBody.data);
    };
    fetchData();
  }, []);
  const swiped = (direction, nameToDelete) => {
    console.log("removing:", nameToDelete);
    setDirection(direction);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name, "left the screen");
  };
  //   const [width, height] = useWindowSize({ fps: 60 });
  return (
    <div className="tinder__cards">
      <div className="tinder__cards__container">
        {/* {display.add.name === "old" ? (
          <>
            {people.map((person) => (
              <TinderCards
                className="swipe"
                key={person.stack}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.stack)}
                onCardLeftScreen={() => outOfFrame(person.stack)}
              >
                <div
                  style={{ backgroundImage: `url(${person.img})` }}
                  className="card"
                >
                  <h3>{person.stack}</h3>
                </div>
              </TinderCards>
            ))}
          </>
        ) : (
          <> */}

        {direction === "right" ? (
          <Confetti width="1500px" height="1500px" />
        ) : null}
        {people.map((person) => (
          <TinderCards
            className="swipe"
            key={person.stack}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.stack)}
            onCardLeftScreen={() => outOfFrame(person.stack)}
          >
            <div
              style={{ backgroundImage: `url(${person.img})` }}
              className="cardT"
            >
              <h3>{person.stack}</h3>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "100%",
                  transform: "translate(-50%,100%)",
                }}
              >
                {direction === "right" ? (
                  <>
                    <a
                      href={`https://wa.me/91${person.contact}?text=Hey! I want to collab with you!!!`}
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        width: "100px",
                        height: "50px",
                        padding: "10px",
                        fontSize: "15px",
                        borderRadius: "20px",
                        marginTop: "50px",
                      }}
                    >
                      {" "}
                      CONNECT THROUGH WHATSAPP
                    </a>
                    <Alert
                      className="alert"
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "100%",
                        width: "200px",
                        transform: "translate(-50%,160%)",
                      }}
                      severity="success"
                    >
                      You got a match wohoooo!
                    </Alert>
                  </>
                ) : null}
              </div>
            </div>
          </TinderCards>
        ))}
        {/* </>
        )} */}
      </div>
    </div>
  );
}
