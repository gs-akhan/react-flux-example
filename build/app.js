(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Navbar = require("./components/Navbar.js");
var Home = require("./components/Home.js");
var About = require("./components/About.js");
var noRoute = require("./components/404.js");
var Services = require("./components/Services.js");
var NotFoundRoute = ReactRouter.NotFoundRoute;
var routes = React.createElement(
  Route,
  null,
  React.createElement(Route, { path: "about", handler: About }),
  React.createElement(Route, { path: "home", handler: Home }),
  React.createElement(Route, { path: "services", handler: Services }),
  React.createElement(DefaultRoute, { handler: Home }),
  React.createElement(NotFoundRoute, { handler: noRoute })
);
window.onload = function () {
  React.render(React.createElement(Navbar, null), document.getElementsByClassName("navbar")[0]);
  ReactRouter.run(routes, ReactRouter.HashLocation, function (Component) {
    React.render(React.createElement(Component, null), document.getElementsByClassName("app-container")[0]);
  });
};

},{"./components/404.js":2,"./components/About.js":3,"./components/Home.js":4,"./components/Navbar.js":5,"./components/Services.js":6}],2:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			"div",
			null,
			"No route found : 404"
		);
	}
});

},{}],3:[function(require,module,exports){
"use strict";

var About = React.createClass({
    displayName: "About",

    render: function render() {
        return React.createElement(
            "div",
            null,
            "We are in About !!"
        );
    }

});

module.exports = About;

},{}],4:[function(require,module,exports){
'use strict';

var Home = React.createClass({
    displayName: 'Greet',
    propTypes: {
        buttonText: React.PropTypes.string.isRequired
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            'We are in Home'
        );
    }
});

module.exports = Home;

},{}],5:[function(require,module,exports){
"use strict";

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"a",
				{ href: "#/home" },
				"Home"
			),
			React.createElement(
				"a",
				{ href: "#/about" },
				"About"
			),
			React.createElement(
				"a",
				{ href: "#/services" },
				"Services"
			)
		);
	}
});

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = (function (_React$Component) {
	_inherits(Services, _React$Component);

	function Services() {
		_classCallCheck(this, Services);

		_get(Object.getPrototypeOf(Services.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Services, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"We are in Services. "
			);
		}
	}]);

	return Services;
})(React.Component);

module.exports = Services;

},{}]},{},[1])