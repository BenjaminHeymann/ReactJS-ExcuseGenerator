import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  let [excuse, setExcuse] = useState(null);

  const getExcuseParty = (type) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`).then(
      (res) => {
        setExcuse(res.data[0]);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={() => getExcuseParty("party")}>Party</button>
      <button onClick={() => getExcuseParty("family")}>Family</button>
      <button onClick={() => getExcuseParty("office")}>Office</button>
      <h2>{excuse?.excuse}</h2>
      <h2>{excuse?.category}</h2>
    </div>
  );
}

export default App;
