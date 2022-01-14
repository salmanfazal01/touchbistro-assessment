/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useEffect, useState } from "react";
import { calculateAnswer } from "./utils/api";

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    const val = parseInt(e.target.value);
    val ? setLoading(true) : setLoading(false);
    setValue(val);
  };

  const calculate = () => {
    const result = calculateAnswer(value);

    result
      .then((res) => {
        if (res.status === 200) {
          setResult(res.data);
          error && setError(null);
        } else {
          setError(res.data);
          result && setResult(null);
          loading && setLoading(false);
        }
      })
      .then(() => {
        loading && setLoading(false);
      });
  };

  useEffect(() => {
    result && setResult(null);
    error && setError(null);

    const delayResult = setTimeout(() => {
      if (value) {
        calculate();
      }
    }, 2000);

    return () => clearTimeout(delayResult);
  }, [value]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Prime Median Finder</h1>

        <h3 className="subtitle">
          Input any number in the field below to find the median number
        </h3>

        <div className="resultContainer">
          {loading && <p>Calculating ...</p>}
          {error && <p>{error}</p>}
          {result && <p>[{result.join(", ")}]</p>}
        </div>

        <input
          placeholder="Enter a number"
          type="number"
          value={value}
          onChange={handleChange}
          className="input"
          max={100000}
        />
      </div>
    </div>
  );
}

export default App;
