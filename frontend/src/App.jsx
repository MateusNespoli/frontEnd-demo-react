import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './paginas/Home';
import Usuario from './paginas/Usuario';
import Util from './paginas/Util';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/usuario" element={<Layout><Usuario/></Layout>} />
        <Route path="/util" element={<Layout><Util/></Layout>} />
        <Route path="/sobre" element={<Layout><Sobre/></Layout>} />
    </Routes></>
  );
}

export default App;
