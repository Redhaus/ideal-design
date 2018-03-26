import React from "react";

import { Collapse } from "antd";
import { Card, Col, Row, Icon, Switch, Button, Popover } from "antd";

const Panel = Collapse.Panel;

class PrimaryReadings extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = data => {
    // call save action sending in selection object
    this.props.savePrimary(data);
  };

  handlePrimaryReadings = readings => {
    return readings.map((item, key) => {
      // checks if selection is in store to set active state of button
      const selectedClass = this.props.primarySelect.includes(item)
        ? "selected"
        : "";

      // builds body of each book outline
      const template = (
        <Row gutter={16} key={key} className={`${selectedClass}`} onClick={() => this.handleOnClick(item)}>
          <Col span={8}>
            <Card
              title={item.title}
              bordered={false}
              extra={
                <Switch
                  size="small"
                  checked={selectedClass ? true : false}
                  // onChange={() => this.handleOnClick(item)}
                />
              }
            >

           
            <Col span={12} >
              <img className="primary-image" src={item.img}/>
            </Col>

            <Col span={12} className="book-padding">
              <p>
                <strong>Author: </strong><br/> {item.author}{" "}
              </p>
              <p>
                <strong>Dates: </strong><br/>  {item.date}{" "}
              </p>
              <a href={item.link} target="blank">
              <Button className="buy-button" >Add to Library  <Icon type="shopping-cart" className="icon-right" /></Button>
              </a>

              </Col>
             
             
              
            </Card>
          </Col>

          <Col span={16}>
            <Card
              title="Synopsis"
              bordered={false}
       
            >
              {item.description}
            </Card>
          </Col>
        </Row>
      );

      return template;
    }); // end map()
  }; // end handle()

  render() {
    return (
      // Accordion Structure
      <div>
      
        <Card className="allhead primary-header" >
      
          <h3>Primary Readings  /  <span className="section-title">{this.props.title}</span> 
          <Popover content={this.props.description} placement="left"  >
          <Icon className="hard-right-icon" type="question-circle-o"/>
          </Popover>
          </h3>
       
        </Card>
       
        <div className="primary-container">
          <Collapse accordion defaultActiveKey={["1"]}>
            <Panel header={<h3>Beginner</h3>} key="1" defaultActiveKey>
              {this.handlePrimaryReadings(
                this.props.readings.category.beginner
              )}
            </Panel>
            <Panel header={<h3>Intermediate</h3>} key="2">
              {this.handlePrimaryReadings(
                this.props.readings.category.intermediate
              )}
            </Panel>
            <Panel header={<h3>Advanced</h3>} key="3">
              {this.handlePrimaryReadings(
                this.props.readings.category.advanced
              )}
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}


export default PrimaryReadings;
