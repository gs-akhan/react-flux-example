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

  getInitialState: function getInitialState() {
    return { name: "" };
  },
  updateState: function updateState(evt) {
    this.setState({
      name: React.findDOMNode(this.refs.input).value
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", ref: "input", onKeyUp: this.updateState.bind(this) }),
      React.createElement("br", null),
      this.state.name
    );
  }

});

module.exports = About;

},{}],4:[function(require,module,exports){
"use strict";

var Actions = require("./flux/Actions");
var Store = require("./flux/Store");
var Home = React.createClass({
    displayName: "Home",

    mixins: [Store.mixin],
    getInitialState: function getInitialState() {
        return {
            items: Store.getItems()
        };
    },
    updateState: function updateState(evt) {
        Actions.addItem(React.findDOMNode(this.refs.statusInput).value);
        React.findDOMNode(this.refs.statusInput).value = "";
    },
    onChange: function onChange() {
        this.setState({
            items: Store.getItems()
        });
    },
    render: function render() {
        var lis = this.state.items.map(function (item) {
            return React.createElement(
                "div",
                null,
                item
            );
        });

        return React.createElement(
            "div",
            null,
            React.createElement("input", { ref: "statusInput" }),
            React.createElement(
                "button",
                { onClick: this.updateState.bind(this) },
                "Update"
            ),
            lis
        );
    }
});

module.exports = Home;

},{"./flux/Actions":7,"./flux/Store":9}],5:[function(require,module,exports){
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
				"Feed"
			)
		);
	}
});

},{}],6:[function(require,module,exports){
"use strict";

var Status = require("./About.js");
var Store = require("./flux/Store");
var Services = React.createClass({
	displayName: "Services",

	mixins: [Store.mixin],
	getInitialState: function getInitialState() {
		return {
			items: Store.getItems()
		};
	},
	onChange: function onChange() {
		this.setState({
			items: Store.getItems()
		});
	},
	render: function render() {
		var lis = this.state.items.map(function (item) {
			return React.createElement(
				"div",
				null,
				item
			);
		});
		return React.createElement(
			"div",
			null,
			lis
		);
	}

});
module.exports = Services;

},{"./About.js":3,"./flux/Store":9}],7:[function(require,module,exports){
"use strict";

var mcFly = require("./McFly.js");
var Actions = mcFly.createActions({
    addItem: function addItem(item) {
        return {
            actionType: "ADD",
            data: item
        };
    }
});

module.exports = Actions;

},{"./McFly.js":8}],8:[function(require,module,exports){
"use strict";

module.exports = new McFly();

},{}],9:[function(require,module,exports){
"use strict";

var mcFly = require("./McFly.js");
var items = [];

function addItem(item) {
	items.push(item);
}

var Store = mcFly.createStore({
	getItems: function getItems() {
		return items;
	}
}, function (payload) {

	if (payload.actionType === "ADD") {
		addItem(payload.data);
	}
	Store.emitChange();
	return true;
});

module.exports = Store;

},{"./McFly.js":8}]},{},[1])