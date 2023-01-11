import React, {useState} from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <div className="card w-50 m-auto noBorder">
          <h2>Contador</h2>
        </div>
        <div className="card w-50 m-auto noBorder ">
          <h2 className="text-center">{count}</h2>

          <div className=" d-flex justify-content-around">
            <button
              className="btn btn-outline-primary"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
            <button
              className="btn btn-outline-danger d-flex w-10"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
          </div>
        </div>
      </>
    );
}

export default Contador;