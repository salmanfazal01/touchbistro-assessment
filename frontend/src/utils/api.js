import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

export const calculateAnswer = async (num) => {
  return instance
    .post("/post/calculate", { num })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
