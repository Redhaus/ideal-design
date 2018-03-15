import React from "react";

import { Collapse } from "antd";
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
  notification
} from "antd";
import _ from "lodash";
import Scrollbar from "../../components/utility/customScrollBar.js";
import Mark from "mark.js";

const FormItem = Form.Item;

const gridStyle = {
  width: "100%",
  height: "56px"
};

class Extensions extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
   
  }

  componentDidMount() {
    // this.handleExtensions(this.props.extensions)

    const extensions = this.props.extensions;


    // when document loaded set up mark.js highlights and click events
    extensions.map((item, key) => {

      // if it has a callout add highlight with that callout
      if (item.callout) {

        // set up options for markjs constructor
        const options = {
          separateWordSearch: false,  //set up no spaces on selection
          filter: function(textNode, foundTerm, totalCounter, counter) {  //set up to only return first selection
            if (totalCounter > 0) {
              return false;
            }
            return true;
          },
          className: key + 1, //assign key + 1 to start at 1 instead of zero as class incase it is needed

          //add a callback function after the highlight has been applied
          //that adds a click function for the element and connections it to the item
          each: function() {

            // getElement by className and add click to it
            const cc = (key + 1).toString();
            const elem = document.getElementsByClassName(cc); //returns html collection array
            const el = elem[0]; // get sole item in array

            // for each item addeventlistener that calls notification function to open
            el.addEventListener("click", (e) => {

              // sets up location of notification and various other config items
              notification.config({
                placement: "topRight",
                top: 156,
                duration: 7
              });

              this.openNotification(e, item.callout, item.rollover);
            
            });
          }.bind(this) // bind is important to set scope of callback function to class
        };

        const context = document.querySelectorAll(".extensions"); // requires an element with class "context" to exist
        const instance = new Mark(context);
        instance.mark(item.callout, options); // will mark the callout term
      }
    }); //end of map
  }

  
  // adds selection to redux store
  handleSelect = (e,data) => {
    this.props.saveExtensions(data);
  };


  // opens notification with info
  openNotification = (e, callout, rollover) => {

    if (e.stopPropagation) e.stopPropagation();
    
    notification.destroy()


    const content = (
      
            <div className="isoContactList notification-popup">
             <Scrollbar className="contactListScrollbar max-height extensionNote">
              
            {/* <h3 className="select"> {currentSelection ? currentSelection : ''} </h3>
            <label>Reference:</label>
            <p className="anno">{currentAnnotation ? currentAnnotation : ''} </p>
            <Divider></Divider> */}
            <p className="callout"> {callout ? callout : ''} </p>
           
            <p className="description"> {rollover ? rollover : ''} </p>
            
           
            </Scrollbar>
           
            </div>

          )

    notification.open({
      // message: callout,
      description: content
    });
  };

  // iterates over list of extensions and displays them
  handleExtensions = data => {
    return data.map((item, key) => {

      // checks if selection is in store to set active state of button
      const selectedClass = this.props.extensionSelect.includes(item)
        ? "selected"
        : "";

    

      // if not new item display as list
      const template = (
        <Card.Grid
          className={`${selectedClass}`}
          key={key + 1}
          style={gridStyle}
          onClick={(e) => this.handleSelect(e,item)}
        >
          <p className="extensions">
            <Switch
              checked={selectedClass ? true : false}
              className="question-switch"
              size="small"
             
            />
            {item.ext}
          </p>
        </Card.Grid>
      );

     
      return template;
    }); // end map()
  }; // end handle()

  render() {
    return (

      <div>
        {/* <Scrollbar className="contactBoxScrollbar"> */}
          <Card className="extensions-container"><h3>Extensions</h3></Card>
          <div className="extensions-container">
            {this.handleExtensions(this.props.extensions)}
            </div>
        {/* </Scrollbar> */}
      </div>
    );
  }
}

export default Extensions;
