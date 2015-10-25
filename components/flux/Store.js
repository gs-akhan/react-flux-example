var mcFly = require("./McFly.js");
var items  = [];

function addItem(item) {
	items.push(item);
}

var Store = mcFly.createStore({
	getItems : function() {
		return items;
	}
}, function(payload) {
	
	if(payload.actionType === "ADD") {
		addItem(payload.data);
	}
	
	Store.emitChange();
	return true;
});
module.exports = Store;

