import React from 'react';
import foto from '../assets/foto.png'
import Nav from '../components/Nav'

const Home = () => {
    return (
      <>
        <Nav />
        <div>
          <h1>hola mundo estoy editado</h1>
          <img src={foto} width="100px" alt="" />
        </div>
      </>
    );
}

export default Home;