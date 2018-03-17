import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import {Carousel, Row, Col, Card, Icon, Layout, notification} from 'antd';
import { ContactsWrapper } from './contacts.style';

import { connect } from 'react-redux';

import { overviewData_EN, segueData_EN, quoteData_EN } from '../Data_EN/overviewData';
import { overviewData_CH, segueData_CH, quoteData_CH } from '../Data_CH/overviewData.ch';

import strauss1 from './images/strauss1.jpg';
import strauss2 from './images/strauss2.jpg';
import strauss3 from './images/strauss3.jpg';






class Dashboard extends Component {
 


  componentDidMount() {
    notification.destroy()
  }
  

  render() {

    const overviewData = this.props.languageSelect === 'EN' ? overviewData_EN : overviewData_CH;
    const { knowledgeRollover, knowledge, title, unitDescription, firstDay } = overviewData;

    const segueData = this.props.languageSelect === 'EN' ? segueData_EN : segueData_CH;
    const quoteData = this.props.languageSelect === 'EN' ? quoteData_EN : quoteData_CH;
    

    return (

      <ContactsWrapper>                        
            <LayoutContentWrapper style={{ width: '100%' }}>
            <Layout className="isoContactBoxWrapper">
        
            <div>
            
            
            <Row gutter={16}>

             {/* Unit Description */}
             <Col span={12}> 
                <Card title={title} bordered={true} extra={<h5>Unit 1</h5>} >
                  <p>{unitDescription}</p>
                </Card>

                <Card className="previous-knowledge" title={<h4><Icon type="arrow-left"/> Previous Knowledge</h4>} bordered={true} extra={<h5>{knowledge}</h5>} >
                  <p>{knowledgeRollover}</p>
                </Card>

                <Card className="previous-knowledge" title={<h4>Segue to Next Unit <Icon type="arrow-right"/> </h4>} bordered={true} extra={<h5>Preview Unit 2</h5>} >
                <p>{segueData.segue}</p>
                </Card>

            

             </Col>

          {/* Unit Description */}
              <Col span={12}> 
                <Carousel autoplay autoplaySpeed="5000" >
                  <Card>
                    <img className="quote-photo" src={strauss1} alt=""/>
                    <div className="quote-container">"{quoteData.quote}"</div>
                    <div className="author-container">– {quoteData.author}</div>
                  </Card>

                  <Card>
                    <img className="quote-photo" src={strauss2} alt=""/>
                    <div className="quote-container">"{quoteData.quote}"</div>
                    <div className="author-container">– {quoteData.author}</div>
                  </Card>

                  <Card>
                    <img className="quote-photo" src={strauss3} alt=""/>
                    <div className="quote-container">"{quoteData.quote}"</div>
                    <div className="author-container">– {quoteData.author}</div>
                  </Card>
                </Carousel>

                <Card className="previous-knowledge" title="First Day" bordered={true} >
                <p>{firstDay}</p>
                </Card>

              </Col>





</Row>


            
            
     {/* end */}
            </div>






            {/* </Scrollbar> */}
      
            
              </Layout>
            </LayoutContentWrapper>
      
            </ContactsWrapper>







    );
  }
}




const mapStateToProps = state => {
  return ({
   
    languageSelect: state.languageSelect
  

  })
}

export default connect(mapStateToProps)(Dashboard)




