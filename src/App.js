import React, { useState, useEffect } from "react";
import Axios from "axios";
import './app.css';

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    Axios.get("https://api.adviceslip.com/advice").then((response) => {
      const { advice } = response.data.slip;
      setAdvice(advice);
    });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
     <div className="advice">
    
      <h3>{advice ? advice : "loading"}</h3>
      <button onClick={fetchAdvice}>Advice Me!</button>
    </div> 
    </div>
  );
};

export default App;
