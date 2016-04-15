var React = require('react');

var PanelItem = React.createClass({
  render: function() {
    var panelStyle = {
      marginTop:10
    };
    var panelBodyStyle = {
      marginLeft:10,
      marginRight:10
    };
    var headingStyle = {
      color:"#6d6d6d",
      fontWeight:"bold"
    };
    var detailStyle = {
      color:"#aeaeae"
    };

    return (
      <div class="row">
        <div className = "col-md-2">
          <div style={panelStyle} className = "panel panel-default">
            <div style={panelBodyStyle} className = "row panel-body">
              <h4 style={headingStyle}>{this.props.number}</h4>
              <p style={detailStyle}>{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PanelItem;
