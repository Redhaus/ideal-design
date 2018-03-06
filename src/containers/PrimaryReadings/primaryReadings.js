import React from 'react'

import { Collapse } from 'antd';
import { Card, Col, Row, Icon, Button } from 'antd';


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
        <Row gutter={16} key={key}>
        <Col span={8}>
          <Card title={item.title} bordered={false} >

            <h5>{item.author} | {item.date}</h5>
            <Button className={` ${selectedClass} `} onClick={ (checked) => this.handleOnClick(item) }>Select Book</Button>
           
          </Card>
        </Col>

        <Col span={16}>
          <Card title="Synopsis" 
            bordered={false}
            extra={
              <a href={item.link} target="blank">
              <Icon type="book" className="icon-right"/> 
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
    <Collapse accordion defaultActiveKey={['1']}>
        <Panel header="Beginner" key="1" defaultActiveKey>
        {this.handlePrimaryReadings(this.props.readings.category.beginner)}
        </Panel>
        <Panel header="Intermediate" key="2">
        {this.handlePrimaryReadings(this.props.readings.category.intermediate)}
        </Panel>
        <Panel header="Advanced" key="3">
        {this.handlePrimaryReadings(this.props.readings.category.advanced)}
        </Panel>
    </Collapse>


  )
}
}


// const mapStateToProps = state => {
//   return ({
  
//     primarySelect: state.primarySelect

//   })
// }


export default PrimaryReadings

