import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import {Carousel, Row, Col, Card, Icon, Layout, notification} from 'antd';
import { segueData, quoteData } from './quoteSegue';
import { ContactsWrapper } from './contacts.style';
import primaryData from './primaryData';

import strauss1 from './images/strauss1.jpg';
import strauss2 from './images/strauss2.jpg';
import strauss3 from './images/strauss3.jpg';


const { knowledgeRollover, knowledge, title, unitDescription, firstDay } = primaryData;


export default class extends Component {
 


  componentDidMount() {
    notification.destroy()
  }
  

  render() {
    return (





      <ContactsWrapper>
      
                        
            <LayoutContentWrapper style={{ width: '100%' }}>
            <Layout className="isoContactBoxWrapper">
           
        
      
            {/* <Scrollbar className="contactBoxScrollbar"> */}
             
            


     {/* Begin */}
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








// <ContactsWrapper>

                  
//       <LayoutContentWrapper style={{ width: '100%' }}>
//       <Layout className="isoContactBoxWrapper">

//       <Scrollbar className="contactBoxScrollbar">


//       <div>

      
     

      





// {/* priori and segue  */}

// <div> 

//     <Col span={12}> 
    
//     <Card
//       cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
//       actions={[<Icon type="arrow-left" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
//     >

//         <Meta
//           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//           title="Previous Knowledge"
//           description={baseData.rollover}
//         />
        
//     </Card>

//     </Col>


//     <Col span={12}> 


//     <Card
//       cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
//       actions={[<Icon type="ellipsis" />, <Icon type="edit" />, <Icon type="arrow-left" />]}
//     >

//         <Meta
//           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//           title="Segue to Next Unit"
//           description={segueData.segue}
//         />
        
//     </Card>

   
//     </Col>

// </div>


    
      
      
//     </Row>  

 




//   </div>

//   </Scrollbar>
  
        
//           </Layout>
//         </LayoutContentWrapper>
  
//         </ContactsWrapper>