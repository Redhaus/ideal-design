import React from 'react'

import { Collapse } from 'antd';
import { Card, Col, Row, Icon, Button , Switch} from 'antd';


const Panel = Collapse.Panel;



class PrimaryReadings extends React.Component {

  constructor(props){
    super(props)
  
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  


  handleOnClick = (data) => {
    // call save action sending in selection object
    this.props.savePrimary(data); 
  }

  handlePrimaryReadings = (readings) => {

    return readings.map((item, key) => {

      // checks if selection is in store to set active state of button
      const selectedClass =  this.props.primarySelect.includes(item) ? 'selected' : '';

      // builds body of each book outline
      const template = (
        <Row gutter={16} key={key} className={`${selectedClass}`}>
        <Col span={8}>
          <Card title={item.title} bordered={false} 
          extra={
            <Switch size="small" checked={selectedClass ? true : false} onChange={() => this.handleOnClick(item)}></Switch>
          }
          
          >
            <p><strong>Author: </strong> {item.author} </p>
            <p><strong>Dates: </strong> {item.date} </p>
            
           
            {/* <Button className={` ${selectedClass} `} onClick={ (checked) => this.handleOnClick(item) }>Select Book</Button> */}
           
          </Card>
        </Col>

        <Col span={16}>
          <Card title="Synopsis" 
            bordered={false}
            extra={
              <a href={item.link} target="blank">
              <Icon type="shopping-cart" className="icon-right"/> 
              </a>
            }>  
            {item.description}
          </Card>
        </Col>
       
      </Row>

      )

      return template;

    }) // end map()
  } // end handle()


  render(){
  return (

    // Accordion Structure
    <div >
    <Card className="primary-header"><h3>Primary Readings</h3></Card>
    <div className="primary-container">
    <Collapse accordion defaultActiveKey={['1']}>
        <Panel header={<h3>Beginner</h3>} key="1" defaultActiveKey>
        {this.handlePrimaryReadings(this.props.readings.category.beginner)}
        </Panel>
        <Panel header={<h3>intermediate</h3>} key="2">
        {this.handlePrimaryReadings(this.props.readings.category.intermediate)}
        </Panel>
        <Panel header={<h3>Advanced</h3>} key="3">
        {this.handlePrimaryReadings(this.props.readings.category.advanced)}
        </Panel>
    </Collapse>
    </div>
    
    </div>

  )
}
}


// const mapStateToProps = state => {
//   return ({
  
//     primarySelect: state.primarySelect

//   })
// }


export default PrimaryReadings

