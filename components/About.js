var About = React.createClass({
	getInitialState : function() {
		return  {name : "azhar"};
	},
	updateState : function(evt) {
		this.setState({
			name : React.findDOMNode(this.refs.input).value
		});
	},
    render: function() {
    	return (
        		<div>
        			<input type = "text" ref = "input" onKeyUp = {this.updateState.bind(this)} />	
        			<br />
        			We are in About {this.state.name}!!
        		</div>
        	) 
    }
   
});

module.exports = About;