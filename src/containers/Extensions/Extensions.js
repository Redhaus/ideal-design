import React from "react";

import { Card, Switch, notification, Popover, Icon } from "antd";
import Scrollbar from "../../components/utility/customScrollBar.js";
import Mark from "mark.js";

const gridStyle = {
  width: "100%",
  height: "56px"
};




let extensions = undefined;

class Extensions extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      language: this.props.languageSelect
    };
  }

  componentDidMount() {
    extensions = this.props.extensions;
    this.highlightFunction();
  }

  componentDidUpdate(prevProps, prevState) {
    // check to see if current language state, matches existing language store
    // if so ignore event because language did not change.
    // If so then reload the extensions from props which are updated language
    // rerun highlight function, then update local state to reset

    if (prevState.language === this.props.languageSelect) {
      return; ///if no change to language return
    } else {
      extensions = this.props.extensions;
      this.highlightFunction();

      //  update language state
      this.setState(() => {
        return {
          language: this.props.languageSelect
        };
      });
    }
  }

  highlightFunction() {
    // Unselect everything
    const uncontext = document.querySelectorAll(".extensions"); // requires an element with class "context" to exist
    const uninstance = new Mark(uncontext);
    uninstance.unmark();

    // when document loaded set up mark.js highlights and click events
    extensions.map((item, key) => {
      // if it has a callout add highlight with that callout
      if (item.callout) {
        // set up options for markjs constructor
        const options = {
          separateWordSearch: false, //set up no spaces on selection
          filter: function(textNode, foundTerm, totalCounter, counter) {
            //set up to only return first selection
            if (totalCounter > 0) {
              return false;
            }
            return true;
          },
          className: item.id.toString(), //assign key + 1 to start at 1 instead of zero as class incase it is needed

          //add a callback function after the highlight has been applied
          //that adds a click function for the element and connections it to the item
          each: function() {
            // getElement by className and add click to it
            const cc = item.id; //(item.id).toString();
            const elem = document.getElementsByClassName(cc); //returns html collection array
            const el = elem[0]; // get sole item in array

            // for each item addeventlistener that calls notification function to open
            el.addEventListener("click", e => {
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

      return undefined;
    }); //end of map
  }

  // adds selection to redux store
  handleSelect = (e, data) => {
    this.props.saveExtensions(data);
  };

  // opens notification with info
  openNotification = (e, callout, rollover) => {
    if (e.stopPropagation) e.stopPropagation();

    notification.destroy();

    const content = (
      <div className="isoContactList notification-popup">
        <Scrollbar className="contactListScrollbar max-height extensionNote">
          <p className="callout"> {callout ? callout : ""} </p>

          <p className="description"> {rollover ? rollover : ""} </p>
        </Scrollbar>
      </div>
    );

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
          key={item.id}
          style={gridStyle}
          onClick={e => this.handleSelect(e, item)}
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
        <Card className="allhead extensions-container">
        <h3>Extensions  /  <span className="section-title">{this.props.title}</span>
        <Popover content={this.props.description} placement="left"  >
        <Icon className="hard-right-icon" type="question-circle-o"/>
        </Popover>
        </h3>
        </Card>
        <div className="extensions-container">
          {this.handleExtensions(this.props.extensions)}
        </div>
        {/* </Scrollbar> */}
      </div>
    );
  }
}

export default Extensions;
