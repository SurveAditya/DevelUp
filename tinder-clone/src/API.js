import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export const addCard = (add) =>
  fetch("http://localhost:9000/main/tinder/cards", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(add),
  });
export const addUser = (add) =>
  fetch("http://localhost:9000/main/login/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(add),
  });

export default instance;
