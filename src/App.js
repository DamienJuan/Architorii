import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Above from "./Pages/Above"
import Interior from "./Pages/Interior"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="above" element={ <Above/> } />
        <Route path="interior" element={ <Interior/> } />
      </Routes>
    </div>
  );
}

export default App;
