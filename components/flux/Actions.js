var mcFly = require("./McFly.js");
var Actions = mcFly.createActions({
    addItem : function(item) {
        return {
            actionType : "ADD",
            data : item
        }
    }
});

module.exports = Actions;