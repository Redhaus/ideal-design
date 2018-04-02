import React from "react";

import {
  Form,
  Card,
  Icon,
  Button,
  Switch,
  Input,
  Popover,
  DatePicker,
  message
} from "antd";
import _ from "lodash";
import uuid from "uuid";
import { Select } from "antd";

const Option = Select.Option;
const InputGroup = Input.Group;
const FormItem = Form.Item;
const { TextArea } = Input;
const dateFormat = "YYYY/MM/DD";
let goals = [];
let goal = '';
let date = undefined;
const goalValue = '';

const success = () => {


  const hide = message.loading('Outline Saved...', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 1500);
};




class WeekOutline extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);

    
  }

  // tracks all questions, inputs and temp questions to know where to put delete icons
  // state = {
  //   formItems: [uuid()],
  //   cName: "",
  //   tName: "",
  //   goals: [],
  //   summary: "",
  //   notes: ""
  //   // saved: false
  // };

  state = {
    // formItems: (this.props.weekOutlineSelect.formItems) ? (this.props.weekOutlineSelect.formItems) : [uuid()],
    // cName: this.props.weekOutlineSelect.cName,
    // tName: this.props.weekOutlineSelect.tName,
    // goals: (this.props.weekOutlineSelect.goals) ? this.props.weekOutlineSelect.goals : [],
    // summary: this.props.weekOutlineSelect.summary,
    // notes: this.props.weekOutlineSelect.notes,
    // tempDate: this.props.weekOutlineSelect.tempDate,
    // tempGoal: this.props.weekOutlineSelect.tempGoal,
    // saved: false

    formItems: (this.props.weekOutlineSelect.formItems) ? (this.props.weekOutlineSelect.formItems) : [uuid()],
    cName: this.props.weekOutlineSelect.cName,
    tName: this.props.weekOutlineSelect.tName,
    goals: (this.props.weekOutlineSelect.goals) ? this.props.weekOutlineSelect.goals : [],
    summary: this.props.weekOutlineSelect.summary,
    notes: this.props.weekOutlineSelect.notes,
    tempDate: this.props.weekOutlineSelect.tempDate,
    tempGoal: this.props.weekOutlineSelect.tempGoal,
    saved: false
  };

  // adds goal item to formItems as ID
  addGoal = (e, id) => {
    this.setState(
      state => {
        return {
          formItems: [...state.formItems, id]
        };
      }
    );
  };


  // deletes goals
  deleteGoal = (e, id) => {

    // console.log('id: ', id)

    // returns newForms array without select ID
    const newForms = this.state.formItems.filter(function(e) {
      return e !== id;
    });

    // gets old goals and filters out the one deleted by its id
    const oldGoals = this.state.goals;
    const newGoals = oldGoals.filter(function(el) {
      return el.id !== id;
    });

    // updates state for both goals and newForms
    // Once updated it will rerender goals
    this.setState(state => {
      return {
        formItems: newForms,
        goals: newGoals
      };
    }, function(){
      this.props.saveWeekOutline(this.state);
    });
  };

  // adds question from input box to state
  handleAdd = e => {
    e.preventDefault();


    success();
    // grabs goal and date elements
    // var goal = document.getElementsByName("week-goal");
    // var date = document.getElementsByClassName("week-date");

    // depending on how many goals have been added set var and goals array
    // const num = goal.length;
    // const goals = [];

    // loop through items and create object of id, goals, and dates for each goal and add each goalGroup to goals array
    // for (var i = 0; i < num; i++) {
    //   const goalGroup = {
    //     id: this.state.formItems[i],
    //     goal: goal[i].value,
    //     date: date[i].firstChild.firstChild.value
    //   };
    //   goals.push(goalGroup);
    // }

    // update state goals and save full state to weekOutline to redux store after state updates
    this.setState(
      state => {
        return {
          saved: true
        };
      }
    );
        this.props.saveWeekOutline(this.state);
    
  };

  // On input chage to forms update respect state
  handleInputChange = (e, type, key) => {
    switch (type) {
      case "cName":
        this.setState({ cName: e.target.value });
        break;

      case "tName":
        this.setState({ tName: e.target.value });
        break;




      case "goal":

      // console.log(this.state.goals)
      const id = this.state.formItems[key];
      date = this.state.tempDate;
      goal = this.state.tempGoal;



      if(e === null){
        return
      }

    
      

      if(e.target){
        goal = e.target.value;

        const goalGroup = {
          id: id,
          goal: goal,
          date: date
        };

        goals.splice(key, 1, goalGroup)
        
        this.setState( (prevState) => {
          return {
            goals: goals,
            tempGoal: goal
          }
          
        }, function(){
          // console.log('seegoals Goal:' , this.state)
        })



      
      }



      if(!e.target){
        date = e

       

        console.log(e)

        const goalGroup = {
              id: id,
              goal: goal,
              date: date
            };

        goals.splice(key, 1, goalGroup)

        this.setState( (prevState) => {
          return {
            goals: goals,
            tempDate: date
          }
          
        }, function(){
          // console.log('seegoals Date:' , this.state)
        })
        
      }


      

    //   const goalGroup = {
    //         id: this.state.formItems[key],
    //         goal: goal,
    //         date: date
    //       };
    //   // console.log(key)
    //   // goals.splice( key, 0, goalGroup );
    //   // goals.add(key, goalGroup);
    //   // console.log(goals)

    //   goals.push(goalGroup)
    //   console.log(goals)
      
    // // // grabs goal and date elements
    // // var goal = document.getElementsByName("week-goal");
    // // var date = document.getElementsByClassName("week-date");

    // // // depending on how many goals have been added set var and goals array
    // // const num = goal.length;
    // // const goals = [];

    // // // loop through items and create object of id, goals, and dates for each goal and add each goalGroup to goals array
    // // for (var i = 0; i < num; i++) {
    // //   const goalGroup = {
    // //     id: this.state.formItems[i],
    // //     goal: goal[i].value,
    // //     date: date[i].firstChild.firstChild.value
    // //   };
    // //   goals.push(goalGroup);
    // // }

    // // this.setState(
    // //   state => {
    // //     return {
    // //       goals: goals,
         
    // //     };
    // //   }
    // // );


    break;
    


    //   // this.setState({ goals: e.target.value});

      case "summary":
        this.setState({ summary: e.target.value });
        break;

      case "notes":
        this.setState({ notes: e.target.value });
        break;

      default:
        break;
    }
  };

  render() {

    // set formItems as a series of goal elements to be added dynamically
    // Render input datepicker and delete button, 
    // Maps through form items assigns itemid in array as delete id
    
    const formItems = this.state.formItems.map((item, key) => {

    // const { temp } = this.state;

    // console.log(goals.length)
    // console.log(this.state.goals.length > 0)
    // const goalValue = 
    //   this.state.goals.length > 0 && 
    //   this.state.goals[key].goal
    //   ? this.state.goals[key].goal  : '';

    
    // console.log('goals array: ', this.state.goals)

    // this.state.goals.includes(item)

  //   let arr = [
  //     { name:"string 1", value:"this", other: "that" },
  //     { name:"string 2", value:"this", other: "that" }
  // ];
  
  let obj = this.state.goals.find(o => o.id === item);
  // console.log('obj: ', obj)
  const myGoal = obj ? obj.goal : '';
  const myDate = obj ? obj.date : undefined;
  

    
    // const goal = goals.length === 0 ? '' : goal[key].goal ;
    
      return (
        <div key={item} className="outline-goal">
          <Input
            style={{ width: "65%" }}
            placeholder="Specific Goal"
            onChange={e => this.handleInputChange(e, "goal", key)}
            name="week-goal"
            className="week-goal outline-input"
            value={myGoal}
            // value={(this.state.goal) ? this.state.goal[key].goal : '' }
           
          />

          {/* how to add value properties to be traked by state for updating */}

          <DatePicker
            format={dateFormat}
            name="week-date"
            id="week-date"
            className="week-date outline-input"
            onChange={e => this.handleInputChange(e, "goal", key)}
            value={myDate}
            allowClear={false}
          />

          <Button className="hard-right" onClick={e => {
            this.deleteGoal(e, item);
          }}>

          <Icon
              className="dynamic-delete-button"
              type="delete"      
              
            />
            </Button>

        </div>
      );
    });

    const { cName, tName, goals, summary, notes } = this.state;

    const id = uuid();
    

    // standard jsx layout for title form items
    return (

      <div>

        <Card className="allhead week-Outline-container">
          <h3>
            Weekly Outline
            <Popover content="fill out goals for the week" placement="left">
              <Icon className="hard-right-icon" type="info-circle-o" />
            </Popover>
          </h3>
        </Card>

        <Card>

        <div className="week-outline-container">
          <Form layout="inline" onSubmit={e => this.handleAdd(e)}>
            {/* <FormItem  > */}

          
      
              <Input
                id="outline-input"
                placeholder="Teacher Name"
                value={tName}
                onChange={e => this.handleInputChange(e, "tName")}
                className="teacher-name outline-input"
              />


              <Input
              id="outline-input"
              placeholder="Select Class"
              value={cName}
              onChange={e => this.handleInputChange(e, "cName")}
              className="class-name outline-input"
              />
             
              {/* <Select
                value={cName}
                placeholder="Select Class"
                className="class-name outline-input"
                onChange={e => this.handleInputChange(e, "cName")}
              >
                <Option value="9th Grade Level 1">9th Grade Level 1</Option>
                <Option value="9th Grade Level 2">9th Grade Level 2</Option>
                <Option value="9th Grade Level 3">9th Grade Level 3</Option>
                <Option value="9th Grade Level 4">9th Grade Level 4</Option>
              </Select> */}

              {/* addForms */}

             

            

              {/* end add forms        */}


              {/* <label>Weekly Summary</label> */}
            
              <TextArea
                placeholder="Weekly Summary"
                autosize={{ minRows: 2, maxRows: 6 }}
                value={this.state.summary}
                className="week-summary outline-input"
                onChange={e => this.handleInputChange(e, "summary")}
              />

              {/* <label>Additional Notes</label> */}

              <TextArea
                placeholder="Additional Notes"
                autosize={{ minRows: 2, maxRows: 6 }}
                value={this.state.notes}
                className="week-notes outline-input"
                onChange={e => this.handleInputChange(e, "notes")}
              />


              {formItems}
          <Button
            onClick={e => {
              this.addGoal(e, id);
            }}
            className="outline-button add-goal-button"
          
          >
         Add Weekly Goal
          </Button>

          <Button
                className="save-outline-button"
                type="submit"
                htmlType="submit"
              >
              Save


               
              </Button>


            {/* </FormItem> */}
          </Form>
        </div>
      </Card>
        
      </div>
    );
  }
}

export default WeekOutline;
