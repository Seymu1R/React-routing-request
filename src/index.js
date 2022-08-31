import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom"

import Listinput from './Listinput';
import Comments from './Comments';



ReactDOM.render( 
    <React.StrictMode>
    <Router>
      <Header/>
    <Switch>
      <Route exact path="/"  >
        <App/>
      </Route>
      <Route path="/list" exact >
      <Listinput />
      </Route>
      <Route path="/comment" exact >
      <Comments />
      </Route>
    </Switch>
  </Router>
   </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
