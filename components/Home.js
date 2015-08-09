var Home = React.createClass({
    displayName: 'Greet',
    propTypes : {
    	buttonText : React.PropTypes.string.isRequired
   	},
    render: function () {
        return (
            <div>
                We are in Home
            </div>
        );
    }
});

module.exports = Home;