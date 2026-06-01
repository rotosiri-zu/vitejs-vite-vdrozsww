import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { useState } from 'react'
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
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
        <Route path="/page1" render={({ match: { url } }) => ( 
          <switch>
            <Route exact path={url}>
              <page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </switch>
        )} />
        <Route path="/page2">
          <page2 />
        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App
