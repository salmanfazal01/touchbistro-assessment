import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export const calculateAnswer = (callback) => {
  instance
    .get("/get/calculate")
    .then((res) => {
      callback && callback(res?.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
