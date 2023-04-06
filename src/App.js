import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  let [excuse, setExcuse] = useState(null);

  const getExcuseParty = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then(
      (res) => {
        setExcuse(res.data[0]);
      }
    );
  };

  const getExcuseFamily = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then(
      (res) => {
        setExcuse(res.data[0]);
      }
    );
  };

  const getExcuseOffice = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then(
      (res) => {
        setExcuse(res.data[0]);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={getExcuseParty}>Party</button>
      <button onClick={getExcuseFamily}>Family</button>
      <button onClick={getExcuseOffice}>Office</button>
      <h2>{excuse.excuse}</h2>
      <h3>{excuse.category}</h3>
    </div>
  );
}

export default App;
