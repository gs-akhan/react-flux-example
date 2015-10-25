var React = require('react');
var ReactDOM = require('react-dom');
var About = React.createClass({
	getInitialState : function() {
		return  {name : ""};
	},
	updateState : function(evt) {
		this.setState({
			name : ReactDOM.findDOMNode(this.refs.input).value
		});
	},
    render: function() {
    	return (
        		<div>
        			We are in About. We will implement something here soon.	
        			<br />
        			{this.state.name}
        		</div>
        	) 
    }
   
});

module.exports = About;