import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState([0]);

  return (
    <div className="counter">
      {counters.length < 3 ? (
        <button
          onClick={() => {
            const newCounters = [...counters];
            newCounters.push(0);
            setCounters(newCounters);
          }}
        >
          Add a counter
        </button>
      ) : (
        <span></span>
      )}

      {counters.map((counter, index) => {
        return (
          <div>
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
