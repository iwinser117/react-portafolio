import React, {useState} from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);
    return (
      
        <div className="card m-auto w-50 p-4 bg-dark text-white">
          <div className="card  m-auto w-100 noBorder bg-dark text-white">
            <h4 className='text-center'>Contador</h4>
            <p>
              Interfaz en la cual cada boton se le asigna una funcion, muy
              intuitiva, como sumar 1, restar 1 y el boton reset el cual deja el
              contador a cero 0. Haciendo uso de "useState"
            </p>
          </div>
          <div className="card  noBorder w-100 bg-dark text-white">
            <h2 className="text-center fs-1">{count}</h2>

            <div className=" d-flex justify-content-around">
              <button
                className="btn btn-outline-primary"
                onClick={() => setCount(count - 1)}
              >
                Decrement
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
            </div>
            <div className="m-auto row pt-4">
              <button
                className="btn btn-outline-danger d-flex w-10"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      
    );
}

export default Contador;