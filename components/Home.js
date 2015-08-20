var Actions = require("./flux/Actions");
var Store = require("./flux/Store");
var Home = React.createClass({
    
    mixins : [Store.mixin],
    getInitialState : function() {
        return {
            items : Store.getItems()
        }
    },
    updateState: function(evt){
        Actions.addItem(React.findDOMNode(this.refs.statusInput).value);
        React.findDOMNode(this.refs.statusInput).value = "";
    },
    onChange : function() {
        this.setState({
            items : Store.getItems()
        });
    },
    render: function () {
        var lis = this.state.items.map(function(item) {
            return (<div>{item}</div>);
        });

        return ( 
            <div>
                
                <input ref="statusInput"></input><button onClick={this.updateState.bind(this)}>Update</button>
                {lis}
            </div>
        );
    }
});

module.exports = Home;