import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState([0]);

  return (
    <div className="counter">
      {counters.map((counter, index) => {
        return (
          <div>
            {counters[index] < 3 ? <button>ternaire</button> : <span></span>}
            <button
              onClick={() => {
                const newCounters = [...counters];
                for (let i = 0; i < newCounters.length; i++) {
                  if (i < 3) {
                    newCounters.push(0);
                    setCounters(newCounters);
                  }
                }
              }}
            >
              Add a counter
            </button>

            <button
              onClick={() => {
                const newCounters = [...counters];
                newCounters[index]--;
                setCounters(newCounters);
              }}
            >
              -
            </button>

            {counter}

            <button
              onClick={() => {
                const newCounters = [...counters];
                newCounters[index]++;
                setCounters(newCounters);
              }}
            >
              +
            </button>

            <button
              onClick={() => {
                const newCounters = [...counters];
                newCounters[index] = 0;
                setCounters(newCounters);
              }}
            >
              Reset
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Counter;
