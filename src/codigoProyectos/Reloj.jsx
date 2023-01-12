import React,{useState,useEffect} from 'react'
const Reloj = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    // const [currentDate, setCurrentDate] = useState(new Date());
     const dateString = new Date().toLocaleDateString("es-ES", {
       day: "numeric",
       month: "numeric",
       year: "numeric",
     });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
 
    return (
      <>
        <div className="card m-auto w-50 p-4">
          <h4 className='text-center'>Reloj</h4>
          <p>
            En esta ocasion haciendo uso de useEffect y useState, junto con el
            metodo de toLocaleTimeString() se llama el dato de fecha actual cada
            segundo
          </p>
          <div className="card-body text-center">
            <h4>{time}</h4>
            <h6>{dateString}</h6>
          </div>
        </div>
      </>
    );
}

export default Reloj;