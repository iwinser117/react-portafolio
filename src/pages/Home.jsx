import React from 'react';
import ReactDOM from 'react-dom'
import foto from '../assets/foto.png'

const Home = () => {
    return (
      <div>
        <h1>hola mundo estoy editado</h1>
        <img src={foto} width="100px" alt="" />
      </div>
    );
}

export default Home;