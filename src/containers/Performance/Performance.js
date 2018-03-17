import React from "react";

import { Card, Switch } from "antd";

const gridStyle = {
  width: "33.3333%",
  height: "195px"
};

class Performance extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e, data) => {
    if (e.stopPropagation) e.stopPropagation();
    this.props.savePerformance(data);
  };

  handlePerformance = data => {
    return data.map((item, key) => {
      // checks if selection is in store to set active state of button
      const selectedClass = this.props.performanceSelect.includes(item)
        ? "selected"
        : "";

      // builds body of each book outline
      const template = (
        <Card.Grid
          className={`${selectedClass}`}
          key={key}
          style={gridStyle}
          onClick={e => this.handleSelect(e, item)}
        >
          <h4>
            {item.header}{" "}
            <Switch
              className="hard-right"
              checked={selectedClass ? true : false}
              size="small"
            />{" "}
          </h4>
          <p>{item.description}</p>
        </Card.Grid>
      );

      return template;
    }); // end map()
  }; // end handle()

  render() {
    return (
      <div>
        <Card className="performance-container">
          <h3>Performance Objectives</h3>
        </Card>
        <div className="performance-container">
          {this.handlePerformance(this.props.data)}
        </div>
      </div>
    );
  }
}

export default Performance;
