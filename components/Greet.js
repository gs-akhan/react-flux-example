var Greet = React.createClass({
    displayName: 'Greet',
    propTypes : {
    	buttonText : React.PropTypes.string.isRequired
   	},
    render: function () {
    	return (
            <div>How do you do !! Man !!
            <button onClick = {this.clickMe}> {this.props.buttonText}</button>
            </div>
        );
    },
    clickMe : function() {
    	alert("I am CS1.6");	
    }
});

module.exports = Greet;