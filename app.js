
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Navbar = require("./components/Navbar.js");
var Home = require("./components/Home.js");
var About = require("./components/About.js");
var noRoute = require("./components/404.js");
var NotFoundRoute = ReactRouter.NotFoundRoute;
var routes = (
  <Route > 
    <Route path="about" handler={About}/>
    <Route path="home" handler = {Home} />
    <DefaultRoute handler = {Home} />
    <NotFoundRoute handler = {noRoute} />
  </Route>

);
window.onload = function() {
	React.render(<Navbar />, document.getElementsByClassName("navbar")[0]);
	ReactRouter.run(routes, ReactRouter.HashLocation,  (Component) =>{
		React.render(<Component />, document.getElementsByClassName("app-container")[0]);
	});

}
