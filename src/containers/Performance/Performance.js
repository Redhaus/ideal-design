import React from 'react'

import { Collapse } from 'antd';
import { Card, Col, Row, Icon, Button, Switch } from 'antd';

const gridStyle = {
  width: '33.3333%',
  height: '195px'
};


class Performance extends React.Component {

  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }
  


  handleSelect = (data) => {
    // console.log('change called')
    // console.log(data)
    // call save action sending in selection object
    this.props.savePerformance(data); 
  }

  handlePerformance = (data) => {

    return data.map((item, key) => {

      // checks if selection is in store to set active state of button
      const selectedClass =  this.props.performanceSelect.includes(item) ? 'selected' : '';


      // builds body of each book outline
      const template = (
       


        <Card.Grid className={`${selectedClass}`}  key={key} style={gridStyle} >
       
        <h4>{item.header}  <Switch className="hard-right" checked={selectedClass? true : false} size="small" onChange={ () =>  this.handleSelect(item)} /> </h4>
        <p>{item.description}</p>
        </Card.Grid>
      
      )

      return template;

    }) // end map()
  } // end handle()


  render(){
  return (

    // Card Grid

    <div>
      {/* <Button onClick={this.testFunction}>Click Me</Button>
 <Switch onChange={this.handleSelect("selected")} /> */}
    <Card className="performance-container"><h3>Performance Objectives</h3></Card>
    <div className="performance-container">
    {this.handlePerformance(this.props.data)}
    </div>

  </div>


  )
}
}




export default Performance

















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
