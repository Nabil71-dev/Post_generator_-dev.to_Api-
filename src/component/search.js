import { useState } from "react";
import PostData from "./func";
import "./components.css";
const MyComponent = () => {
  const [name, setName] = useState("");
  const [array, setArray] = useState([]);
  const [c, setC] = useState(false);
  const [error, setError] = useState("");

  const clear = () => {
    setError("");
  };

  const getdata = () => {
    if (name === "") {
      setError("Please insert a value");
    } else {
      clear();
      fetch(`https://dev.to/api/articles?username=${name}`)
        .then((res) => res.json())
        .then((data) => {
          setArray(data);
          setC(true);
        });
    }
  };
  return (
    <div className="search_container">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a valid Username"
        ></input>
        <button onClick={getdata}>Search</button>
      </div>
      <h1>{error}</h1>
      {c && <PostData data={array} />}
    </div>
  );
};
export default MyComponent;
