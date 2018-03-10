import React from 'react'

import { Collapse } from 'antd';
import { Affix, Form, Card, Col, Row, Icon, Button, Switch, Input, notification } from 'antd';
import _ from 'lodash';
import Scrollbar from '../../components/utility/customScrollBar.js';
import Mark from 'mark.js';


const FormItem = Form.Item;

const gridStyle = {
  width: '100%',
  height: '40px'
};


class Extensions extends React.Component {

  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    // this.handleAdd = this.handleAdd.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
    
    

  }

  componentDidMount() {
    // this.handleExtensions(this.props.extensions)

 const extensions = this.props.extensions;

 extensions.map((item, key) => {
    if(item.callout){
      console.log('was called')
      
        const options = {
          "separateWordSearch": false,
          "filter" : function (textNode, foundTerm, totalCounter, counter) {
            if(totalCounter > 0){
              return false
            }
            return true    
          },
          className: key + 1, //assign key + 1 to start at 1 instead of zero as class incase it is needed
          
          //add a callback function after the highlight has been applied 
          //that adds a click function for the element and connections it to the item 
          each: function() {
  
            // getElement by className and add click to it
            const cc = (key + 1).toString();
            const elem = document.getElementsByClassName(cc); //returns html collection array 
            const el = elem[0] // get sole item in array
           
            
            // for each item add event listener that calls Annotation function and sidebar open
            el.addEventListener("click", (() => {
                  console.log(el.innerText, item.rollover)
                  notification.config({
                    placement: 'topRight',
                    top: 150,
                    duration: 4,
                  });
                  this.openNotification(item.callout, item.rollover)
                  // this.handleAnnotation(item.highlight, item.annotation, item.history)
                  // this.toggleVisibility()
  
                
              })
            )
         
          }.bind(this)  // bind is important to set scope of callback function to class
        }
  
        const context = document.querySelectorAll(".extensions"); // requires an element with class "context" to exist
        const instance = new Mark(context);    
        
        instance.mark(item.callout, options); // will mark the callout term
      }

    }) //end of map


    
  }

  // tracks all questions, inputs and temp questions to know where to put delete icons
  state={
    questions: this.props.questions,
    questionInput: '',
    tempQuestions: []
  }


  // adds question from input box to state
  // handleAdd = (e, item) => {

  //   e.preventDefault();
  
  //   this.setState( (state) => {
     
  //     return {
  //       questions: [item, ...state.questions],
  //       questionInput: '',
  //       tempQuestions: [item, ...state.tempQuestions]
  //     }
  //   })

  //   this.props.saveQuestions(item); 

  //   // this.handleQuestions(this.state.questions)

  //   // console.log(this.state)

  // }

  // delete item by returning all items in array that do not match item deleted
  // handleDelete = (item) => {

  //   const newQuestions = _.filter(this.state.questions, function(n) {
  //     return !(n === item)
  //   })

  //   this.setState( () => {
  //     return {
  //       questions: newQuestions
  //     }
  //   })

  //   this.props.deleteQuestions(item)

  // }
  


  handleSelect = (data) => {
    this.props.saveExtensions(data); 
  }


  handleInputChange = (event) => {
    this.setState({ questionInput: event.target.value });
  };

  openNotification = (callout, rollover ) => {
    notification.open({
      message: callout,
      description: rollover,
    });
  };

  handleExtensions = (data) => {

    return data.map((item, key) => {


      


      // checks if selection is in store to set active state of button
      const selectedClass =  this.props.extensionSelect.includes(item) ? 'selected' : '';

      // builds body of each book outline

      // className={`${selectedClass}`} 

      // if(this.state.tempQuestions.includes(item)){
      //   console.log(item)
      // }


      // (this.state.tempQuestions.includes(item)) ? 

      // if new item display it with delete option  checked={selectedClass ? true : false }
      // template = (
      //   <Card.Grid  key={item} style={gridStyle} > 
      //   <p className="key-question">
      //     <Switch className="question-switch"  size="small" onChange={ () => this.handleSelect(item)}/> 
      //       {item} 
      //     <Icon className="hard-right" type="delete" onClick={() => this.handleDelete(item)}/> 
      //   </p> 
      //   </Card.Grid>
      // )

      // : 


    // const linkTemplate = (
    //     <Card.Grid  key={key + 1} style={gridStyle} > 
    //     <p className="extensions">
    //       {item.ext}</p>
    //     </Card.Grid>
    //  )


      // if not new item display as list
    const  template = (
         <Card.Grid className={`${selectedClass}`}   key={key + 1} style={gridStyle} > 
         <p className="extensions"><Switch checked={selectedClass ? true : false } className="question-switch"  size="small" onChange={ () =>  this.handleSelect(item)}/>
           {item.ext}</p>
         </Card.Grid>
      )
      
      // ;

      // if (item.rollover) {
      //   return linkTemplate;
      // } else {
        return template;
      // }

    }) // end map()
  } // end handle()


  render(){
  return (

    // Card Grid

    <div>




  <Scrollbar className="contactBoxScrollbar">
     
    <Card 
    
    className="extensions-container"
    >
    {this.handleExtensions(this.props.extensions)}
    
  </Card>

  </Scrollbar>

  </div>


  )
}
}




export default Extensions

















// import React from 'react';
// import { Grid, Checkbox } from 'semantic-ui-react';
// // import { handleOnClick } from '../../utils/utils';


// const Performance = (props) => {

//     const handleOnClick = (e, data) => {
//         console.log(data)
//         props.savePerformance(data)
//     }

//     const renderContent = (content) => {

//         return content.map( (item, key) => {

//             const title = (
//                 <Grid.Column key={key}>
                
//                     <div className="performance">
//                     <h4><Checkbox data={item} label={item.header} onClick={handleOnClick} /></h4>
//                     <div>{item.description}</div>
//                     </div>
//                 </Grid.Column>   
//             )
                        

//             return title ;

//         })

//     }
    

    

//         return(
//             <div className="top-padding">
//                 <Grid>
//                 <Grid.Row columns={3}>
//                 {renderContent(props.content)}
//                 </Grid.Row>
//                 </Grid>

//             </div>
//         )

// };

// export default Performance;
