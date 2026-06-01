import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { useState } from 'react'
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
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
      <switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <page1 />
        </Route>
        <Route path="/page2">
          <page2 />
        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App
