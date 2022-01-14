/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useEffect, useState } from "react";
import { calculateAnswer } from "./utils/api";

function App() {
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const val = parseInt(e.target.value);
    setValue(val);
  };

  const calculate = () => {
    const result = calculateAnswer(value);

    result.then((res) => {
      if (res.status === 200) {
        setAnswer(res.data);

        error && setError(null);
      } else {
        setError(res.data);

        answer && setAnswer(null);
      }
    });
  };

  useEffect(() => {
    if (value) {
      calculate();
    }
  }, [value]);

  return (
    <div className="App">
      <input type="number" value={value} onChange={handleChange} />

      {error && <p>{error}</p>}
      {answer && <p>[{answer.join(", ")}]</p>}
    </div>
  );
}

export default App;
