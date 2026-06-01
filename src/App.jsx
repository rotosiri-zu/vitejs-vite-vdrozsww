import { BrowserRouter, Link } from "react-router-dom";

import { useState } from 'react'
import { Router } from "./router/Router";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <link to="/">Home</link>
        <br />
        <link to="/page1">Page1</link>
        <br />
        <link to="/page2">Page2</link>
      </div>
     <Router />
    </BrowserRouter>
  );
}

export default App
