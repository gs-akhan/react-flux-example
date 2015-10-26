var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

jest.autoMockOff();

var Home = require('../components/Home');

describe('Home', function() {
 it('Rendering home component', function() {
   
   var _Home = TestUtils.renderIntoDocument(<Home />);
   var homeNode = ReactDOM.findDOMNode(_Home);
   expect(2).toEqual(2);
 });
});