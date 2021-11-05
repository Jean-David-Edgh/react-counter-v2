import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState([0]);

  //   const counter = (counter, index) => {
  //       counters.map((counter, index))
  //   };

  return (
    <div>
      <div className="counter">
        <button
          onClick={() => {
            counters.map();
            const newCounters = [];
            newCounters.push();
            setCounters(newCounters);
          }}
        >
          -
        </button>

        <div>{counters}</div>

        <button onClick={() => {}}>+</button>

        <button onClick={() => {}}>Reset</button>

        {/* ===============================VERSION 1 */}

        {/*   
        //   const handleClick = () => {
//     const newCounters = [...counters];
//     let a = newCounters.pop();
//     if (a === 1 || a === 2) {
//       newCounters.push(a + 1);
//     }
//   };
        const [counters, setCounters] = useState([0]);
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
        </button> */}
      </div>
    </div>
  );
};

export default Counter;
