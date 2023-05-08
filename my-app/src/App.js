import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {Teaching} from './views/teaching';

const App =()=> {
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>LONK Blog</h1>
        <p>A blog where I record whats going on in my world</p>
      </header>
      <div className="App-nav-bar" />
      <Switch>
          <Route path='/teaching' component = {Teaching}/>
      </Switch> 
    </div>
  );
}

export default App;
