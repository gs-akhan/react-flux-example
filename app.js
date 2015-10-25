
var React = require('react');
var Router = require('react-router').Router;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;


var Navbar = require("./components/Navbar.js");
var Home = require("./components/Home.js");
var About = require("./components/About.js");
var noRoute = require("./components/404.js");
var Services = require("./components/Services.js");
var ReactDOM = require("react-dom");
//var NotFoundRoute = ReactRouter.NotFoundRoute;


var routes = (
    <Router>    
      <Route path="/" component = {Home}/>
      <Route path="about" component = {About}/>
      <Route path="home" component = {Home} />
      <Route path="services" component = {Services} />
      <Route path="*" component={noRoute}/>
    </Router>
  );

window.onload = function() {
	ReactDOM.render(<Navbar />, document.getElementsByClassName("navbar")[0]);
	ReactDOM.render(
      routes,
    document.getElementsByClassName("app-container")[0]
  );
}
