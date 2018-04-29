const React = require('react');
const ReactDOM = require('react-dom');

// var App = require('../app.js').App;

class App extends React.Component {
  render() {
    return React.createElement('div', {className: 'list'},
      React.createElement('h1',),
      React.createElement('ul',{},
          React.createElement('li',{},'1'),
          React.createElement('li',{},'2'),
          React.createElement('li',{},'3')
      )
    );
  }
}

ReactDOM.render(
  React.createElement(App, {toWhat: 'appThing'}, null),
  document.getElementById('app')
)
