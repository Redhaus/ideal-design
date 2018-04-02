import React from "react";

import { Affix, Form, Card, Icon, Button, Switch, Input, Popover, message } from "antd";
import _ from "lodash";

const FormItem = Form.Item;

const gridStyle = {
  width: "100%",
  height: "40px"
};

class KeyQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // tracks all questions, inputs and temp questions to know where to put delete icons
  state = {
    questions: this.props.questions,
    questionInput: "",
    tempQuestions: []
  };

  callNotification = () => {
    message.warning('Write a question before you add it!');
  }

  // adds question from input box to state
  handleAdd = (e, item) => {
    e.preventDefault();

    if(item.length < 1){
      this.callNotification()
      return
    }
    this.setState(state => {
      return {
        questions: [item, ...state.questions],
        questionInput: "",
        tempQuestions: [item, ...state.tempQuestions]
      };
    });

    this.props.saveQuestions(item);

  };

  // delete item by returning all items in array that do not match item deleted
  handleDelete = item => {
    const newQuestions = _.filter(this.state.questions, function(n) {
      return !(n === item);
    });

    this.setState(() => {
      return {
        questions: newQuestions
      };
    });

    this.props.deleteQuestions(item);
  };

  handleSelect = data => {
  
    // call save action sending in selection object
    this.props.saveQuestions(data);
  };

  handleInputChange = event => {
    this.setState({ questionInput: event.target.value });
  };

  handleQuestions = data => {
    return data.map((item, key) => {
      // checks if selection is in store to set active state of button
      const selectedClass = this.props.questionSelect.includes(item)
        ? "selected"
        : "";

      // builds body of each book outline

      let template;

      this.state.tempQuestions.includes(item)
        ? // if new item display it with delete option
          (template = (
            <Card.Grid
              className={`${selectedClass}`}
              key={item}
              style={gridStyle}
            >
              <p className="key-question">
                <Switch
                  className="question-switch"
                  checked={selectedClass ? true : false}
                  size="small"
                  onChange={() => this.handleSelect(item)}
                />
                {item}
                <Icon
                  className="hard-right"
                  type="delete"
                  onClick={() => this.handleDelete(item)}
                />
              </p>
            </Card.Grid>
          ))
        : // if not new item display as list
          (template = (
            <Card.Grid
              className={`${selectedClass}`}
              key={item}
              style={gridStyle}
              onClick={() => this.handleSelect(item)}
            >
              <p className="key-question">
                <Switch
                  className="question-switch"
                  checked={selectedClass ? true : false}
                  size="small"
                />
                {item}
              </p>
            </Card.Grid>
          ));

      return template;
    }); // end map()
  }; // end handle()

  render() {
    return (
      // Card Grid

      <div>
        <Affix>

          <div className="question-search">
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem className="question-input-container">
                <Input
                  placeholder="Add Question"
                  value={this.state.questionInput}
                  onChange={this.handleInputChange}
                  className="question-input"
                  suffix={
                    <Button
                      className="question-button"
                      htmlType="submit"
                      onClick={e =>
                        this.handleAdd(e, this.state.questionInput, true)}
                    >
                      <Icon type="plus" />
                    </Button>
                  }
                />
              </FormItem>
            </Form>
          </div>
        </Affix>

       
        
        <Card className="allhead key-question-container">
        <h3>Key Questions  /  <span className="section-title">{this.props.title}</span>
        <Popover content={this.props.keyDescription} placement="left"  >
        <Icon className="hard-right-icon" type="question-circle-o"/>
        </Popover>
        </h3>
        </Card>

       

        <div className="key-question-container">
          {this.handleQuestions(this.state.questions)}
        </div>
      </div>
    );
  }
}

export default KeyQuestions;
