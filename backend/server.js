// imports
import express from "express";
import cors from "cors";
import { findPrimes, getMedian } from "./helpersFunctions.js";

// initialize express app
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.status(200).send("Hello"));

//get projects
app.post("/post/calculate", (req, res) => {
  const num = req.body.num;
  if (typeof num !== "number") {
    res.status(404).send("Enter a valid number");
  } else if (num < 0) {
    res.status(404).send("Number should be above 0");
  } else {
    const primes = findPrimes(num);
    const middle = getMedian(primes);
    res.status(200).send(middle);
  }
});

// Other routes
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

// listen
app.listen(port, () => console.log(`Listening on port: ${port}`));
