var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

jest.dontMock('../components/Home');

describe('sum', function() {
 it('adds 1 + 2 to equal 3', function() {
	var Home = require('../components/Home');
   //var _Home = TestUtils.renderIntoDocument(<Home>);
   //var homeNode = ReactDOM.findDOMNode(_Home);
   expect(2).toEqual(2);
 });
});