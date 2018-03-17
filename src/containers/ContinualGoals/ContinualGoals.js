import React from "react";

import {
  Card,
  Col,
  Row,
  // notification,
  Collapse
} from "antd";

import Skills from "./skills";

const Panel = Collapse.Panel;


class Extensions extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    // this.handleColumns = this.handleColumns.bind(this);
  }


  // adds selection to redux store
  handleSelect = data => {
    this.props.saveExtensions(data);
  };

  // opens notification with info
  // openNotification = (callout, rollover) => {
  //   notification.open({
  //     message: callout,
  //     description: rollover
  //   });
  // };

  //   handleColumns = () => {

  //     const columns = (

  // )

  // }

  // iterates over list of extensions and displays them
  handleGoals = (goals, position) => {
    return goals.map((item, key) => {
      // checks if selection is in store to set active state of button
      const displayContents = () => {
        return (
          // <Card className="skills" >

          <Collapse key={key} className="goals-accordion" bordered={true}>
            <Panel className="goals-panel" 
              header={<h3>{ item.goal}</h3>} 
              key={key}>
                <Skills goalSelect={this.props.goalSelect} className="skills-container" skills={item.skills} saveGoals={this.props.saveGoals} />
            </Panel>
          </Collapse>

        );
      };

      // if not new item display as list

      switch (position) {
        case 1:
          if (key === 0 || key === 3) {
            return displayContents();
          }

          break;

        case 2:
          // if not new item display as list
          if (key === 1 || key === 4) {
            return displayContents();
          }

          break;

        case 3:
          // if not new item display as list
          // if not new item display as list
          if (key === 2 || key === 5) {
            return displayContents();
          }

          break;

        default:
          break;
      }

      return undefined;
      

      
    }); // end map()
  }; // end handle()

  // <Col span={8}>  </Col>
  // <Row className="masonry" gutter={16}>
  render() {
    return (
      <div>
        {/* <Scrollbar className="contactBoxScrollbar"> */}
          <Card className="goals-container"><h3>Continual Goals</h3></Card>
            <Row gutter={16} >
            <Col className="goals-left" span={8}>{this.handleGoals(this.props.goals, 1)}</Col>

            <Col span={8}>{this.handleGoals(this.props.goals, 2)}</Col>

            <Col className="goals-right"  span={8}>{this.handleGoals(this.props.goals, 3)}</Col>
            </Row>
          {/* </Card> */}
          
        {/* </Scrollbar> */}
      </div>
    );
  }
}

export default Extensions;

