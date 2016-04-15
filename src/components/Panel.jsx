var React = require('react');
var PanelItem = require('./PanelItem.jsx');

var array = [
    {"id":1, "text": "New followers added this month", "number": "20"},
    {"id":2, "text": "Average Monthly Income", "number": "$ 1250"},
    {"id":3, "text": "Yearly Income Goal", "number": "$ 13865"},
    {"id":4, "text": "Paris", "number": "80"},
    {"id":5, "text": "Shot Views", "number": "15080"},
    {"id":6, "text": "Likes", "number": "12000"}
  ];

var Panel = React.createClass({
  render: function() {
    var panelItems = array.map(function(item) {
      return <PanelItem text={item.text} number={item.number}/>;
    });

    return (
        <div>{panelItems}</div>
    );
  }
});

module.exports = Panel;
