import "./App.css";
import React, { useEffect, useState } from "react";
import { calculateAnswer } from "./utils/api";

function App() {
  const [answer, setAnswer] = useState();

  useEffect(() => {
    calculateAnswer(setAnswer);
  }, []);

  console.log(answer);

  return <div className="App">{answer}</div>;
}

export default App;
