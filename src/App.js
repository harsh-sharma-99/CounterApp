import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    setCount(count + 1);
  };

  const subHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry, Zero limit reached!!!");
      setCount(0);
    }
  };

  return (
    <div className=" container  ">
      <div className="box title is-1 has-background-grey-light ">
        <h1 className=" has-text-light">COUNTER</h1>
      </div>
      <h1 className="box has-background-grey-light title is-1">{count}</h1>
      <br />
      <progress class="progress is-medium is-info" max="100">
        60%
      </progress>
      <progress class="progress is-large is-danger" max="100">
        60%
      </progress>
      <div className="box">
        <button onClick={addHandler} className="button is-link is-rounded">
          <FontAwesomeIcon icon={faPlus} />
          <span> Increment </span>
        </button>
      </div>
      <div className="box">
        <button onClick={subHandler} className="button is-danger is-rounded">
          <FontAwesomeIcon icon={faMinus} />
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
