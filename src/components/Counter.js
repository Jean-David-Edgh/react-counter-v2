import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState([0]);

  const handleClick = () => {
    const newCounters = [...counters];
    let a = newCounters.pop();
    if (a === 1 || a === 2) {
      newCounters.push(a + 1);
    }
  };

  return (
    <div>
      <div className="counter">
        <button
          className="add-counter"
          handleClick={handleClick}
          onClick={handleClick}
        >
          Add counter
        </button>

        <button
          onClick={() => {
            const newCounters = [...counters];
            let a = newCounters.shift();
            newCounters.unshift(a - 1);
            setCounters(newCounters);
          }}
          className="button-aside"
        >
          -
        </button>

        <p className="counter">{counters}</p>

        <button
          onClick={() => {
            const newCounters = [...counters];
            let a = newCounters.shift();
            newCounters.unshift(a + 1);
            setCounters(newCounters);
          }}
          className="button-aside"
        >
          +
        </button>

        <button
          className="reset"
          onClick={() => {
            const newCounters = [...counters];
            let a = newCounters.shift();
            newCounters.unshift(a - a);
            setCounters(newCounters);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
