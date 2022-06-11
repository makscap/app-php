import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "../src/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://app.zadizayneno.com/api/users/read")
      .then((r) => r.json())
      .then(setData);
  }, []);

  console.log(data);

  return <div className="App">{data && <Card data={data} />}</div>;
}

export default App;
