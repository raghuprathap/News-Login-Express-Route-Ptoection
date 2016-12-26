import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, hashHistory, Route, Router, IndexRoute}
  from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ChildReact from './components/ChildReact.jsx';
import MainComponents from './components/MainComponents.jsx';
import ContactUs from './components/ContactUs.jsx';
import NavBar from './components/NavBar.jsx';
import FavNews from './components/FavNews.jsx';
import Login from './components/Login.jsx';
import Logout from './components/LogOut.jsx';


class main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <br /><br /><br /><br />
        {this.props.children}
      </div>
    )
  }
}
ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" components={Login} />
      <Route path="/home" components={main} >
        <IndexRoute component={MainComponents} />
        <Route path="/contact" components={ContactUs} />
        <Route path="/favNews" components={FavNews} />
      </Route>
    </Router>
  </MuiThemeProvider>, document.getElementById('content'));
