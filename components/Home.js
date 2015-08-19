var Home = React.createClass({
    getDefaultProps : function() {
        return  {
            currentStatus : "rajd"
        };
    },
    updateState: function(evt){
        this.props.currentStatus = React.findDOMNode(this.refs.statusInput).value;
    },
    render: function () {
        return (
            <div>
                <input ref="statusInput"></input><button onClick={this.updateState.bind(this)}>Update</button>
            </div>
        );
    }
});

module.exports = Home;