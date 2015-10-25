var Actions = require("./flux/Actions");
var Store = require("./flux/Store");
var React = require('react');
var ReactDOM = require('react-dom');
var Home = React.createClass({
    mixins : [Store.mixin],
    getInitialState : function() {
        return {
            items : Store.getItems()
        };
    },
    updateState: function(evt){
        Actions.addItem(ReactDOM.findDOMNode(this.refs.statusInput).value);
        ReactDOM.findDOMNode(this.refs.statusInput).value = "";
    },
    onChange : function() {
        this.setState({
            items : Store.getItems()
        });
    },
    render: function () {
        var lis = this.state.items.map(function(item, iter) {
            return (<div key = {iter}>{item}</div>);
        });

        return ( 
            <div>
                
                <input ref="statusInput"></input><button onClick={this.updateState}>Update</button>
                {lis}
            </div>
        );
    }
});

module.exports = Home;