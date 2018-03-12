import React from "react";

import {
  Affix,
  Form,
  Card,
  Col,
  Row,
  Icon,
  Button,
  Switch,
  Input,
  notification,
  Collapse
} from "antd";
import _ from "lodash";
import Scrollbar from "../../components/utility/customScrollBar.js";
import Mark from "mark.js";
import Skills from "./skills";

const FormItem = Form.Item;
const Panel = Collapse.Panel;

const gridStyle = {
  width: "100%",
  height: "40px"
};

class Extensions extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    // this.handleColumns = this.handleColumns.bind(this);
  }

  componentDidMount() {
    // this.handleExtensions(this.props.extensions)
    // const goals = this.props.goals;
    // // when document loaded set up mark.js highlights and click events
    // goals.map((item, key) => {
    //   // if it has a callout add highlight with that callout
    //   if (item.callout) {
    //     // set up options for markjs constructor
    //     const options = {
    //       separateWordSearch: false,  //set up no spaces on selection
    //       filter: function(textNode, foundTerm, totalCounter, counter) {  //set up to only return first selection
    //         if (totalCounter > 0) {
    //           return false;
    //         }
    //         return true;
    //       },
    //       className: key + 1, //assign key + 1 to start at 1 instead of zero as class incase it is needed
    //       //add a callback function after the highlight has been applied
    //       //that adds a click function for the element and connections it to the item
    //       each: function() {
    //         // getElement by className and add click to it
    //         const cc = (key + 1).toString();
    //         const elem = document.getElementsByClassName(cc); //returns html collection array
    //         const el = elem[0]; // get sole item in array
    //         // for each item addeventlistener that calls notification function to open
    //         el.addEventListener("click", () => {
    //           // sets up location of notification and various other config items
    //           notification.config({
    //             placement: "topRight",
    //             top: 150,
    //             duration: 4
    //           });
    //           this.openNotification(item.callout, item.rollover);
    //         });
    //       }.bind(this) // bind is important to set scope of callback function to class
    //     };
    //     const context = document.querySelectorAll(".extensions"); // requires an element with class "context" to exist
    //     const instance = new Mark(context);
    //     instance.mark(item.callout, options); // will mark the callout term
    //   }
    // }); //end of map
  }

  // adds selection to redux store
  handleSelect = data => {
    this.props.saveExtensions(data);
  };

  // opens notification with info
  openNotification = (callout, rollover) => {
    notification.open({
      message: callout,
      description: rollover
    });
  };

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
            <Panel className="goals-panel" header={
              <h3>{ item.goal}</h3>
             
            
            
            } 
            key={key}>
              <Skills goalSelect={this.props.goalSelect} className="skills-container" skills={item.skills} saveGoals={this.props.saveGoals} />
            </Panel>
          </Collapse>

          // </Card>
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

// <Collapse bordered={false} >
// <Panel header="This is panel header 1" key="1">
//   {text}
// </Panel>
// <Panel header="This is panel header 2" key="2">
//   {text}
// </Panel>
// <Panel header="This is panel header 3" key="3">
//   {text}
// </Panel>
// </Collapse>
