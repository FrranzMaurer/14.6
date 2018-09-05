var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'licznik1'},
        	React.createElement('button', {onClick: this.increment}, 'Increase'),
        	React.createElement('button', {onClick: this.decrement}, 'Decrease'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'licznik2'},
        	React.createElement('button', {onClick: this.increment}, 'Increase'),
        	React.createElement('button', {onClick: this.decrement}, 'Decrease'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    },
});

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter, {}),
        React.createElement(Counter2, {}, {})
      )
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));