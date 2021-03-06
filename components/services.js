var React = require('react');
var Status = require("./About.js");
var Store = require("./flux/Store");
var Services = React.createClass({
	mixins : [Store.mixin],
	getInitialState : function() {
		return {
			items : Store.getItems()
		}
	},
	onChange : function() {
		this.setState({
			items : Store.getItems()
		})
	},
    render: function() {
    	var lis = this.state.items.map(function(item,iter) {
            return (<div key = {iter}>{item}</div>);
        });
    	return (<div>
    		{lis}
    	</div>); 
    }
   
});
module.exports = Services