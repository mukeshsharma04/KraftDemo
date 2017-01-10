import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from '../containers/App';
const  Men = require('../components/MenCategory');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import 'bootstrap/less/bootstrap.less';
//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


ReactDOM.render(
  <Provider>
   <Router history={hashHistory}>
       <Route path="/" component={App}>
           <Route name="men" path='/men' handler={Men} />
       </Route>

   </Router>
  </Provider>,
  document.getElementById("root")
);
