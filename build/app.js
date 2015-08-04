(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Hello = require("./components/Helloworld.js");
 
window.onload = function() {
	React.render(React.createElement(Hello, {name: " Rajdeep "}), document.body);
}

},{"./components/Helloworld.js":3}],2:[function(require,module,exports){
var Greet = React.createClass({
    displayName: 'Greet',
    propTypes : {
    	buttonText : React.PropTypes.string.isRequired
   	},
    render: function () {
    	return (
            React.createElement("div", null, "How do you do !! Man !!", 
            React.createElement("button", {onClick: this.clickMe}, " ", this.props.buttonText)
            )
        );
    },
    clickMe : function() {
    	alert("I am CS1.6");	
    }
});

module.exports = Greet;
},{}],3:[function(require,module,exports){
var Greet = require("./Greet.js");


var Hello = React.createClass({displayName: "Hello",
    render: function() {
        var buttonText = "Call of duty";
        return (
        		React.createElement("div", null, 
        			React.createElement("div", null, "Hello ", this.props.name, " ", React.createElement(Greet, {buttonText: buttonText}))
        			
        		)
        	) 
    }
   
});

module.exports = Hello;
},{"./Greet.js":2}]},{},[1])