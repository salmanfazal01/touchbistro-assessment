// imports
import express from "express";
import cors from "cors";

// initialize express app
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.status(200).send("Hello"));

//get projects
app.get("/get/calculate", (req, res) => {
  res.status(200).send("Answer");
});

// Other routes
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

// listen
app.listen(port, () => console.log(`Listening on port: ${port}`));
