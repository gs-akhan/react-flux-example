var Greet = require("./Greet.js");


var Hello = React.createClass({
    render: function() {
        var buttonText = "Call of duty";
        return (
        		<div>
        			<div>Hello {this.props.name} <Greet buttonText = {buttonText}></Greet></div>
        			
        		</div>
        	) 
    }
   
});

module.exports = Hello;