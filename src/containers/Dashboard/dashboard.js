import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Carousel, Row, Col, Card, Icon, Layout, notification, Popover } from "antd";
import { ContactsWrapper } from "./contacts.style";


import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


import { connect } from "react-redux";

import {
  overviewData_EN,
  segueData_EN,
  quoteData_EN,
  eventDescription_EN
} from "../Data_EN/overviewData";

import {
  overviewData_CH,
  segueData_CH,
  quoteData_CH,
  eventDescription_CH
} from "../Data_CH/overviewData.ch";

import img1 from "./images/barth.jpg";
import img2 from "./images/Adorno.jpg";
import img3 from "./images/Beauvoir.jpg";

class Dashboard extends Component {

  constructor(props){
    super(props)

    this.state={
      images: [img1,img2,img3]
    }
  }
  componentDidMount() {
    notification.destroy();
  }



  renderQuote(quotes){

    return quotes.map( (item, key) => {

     

      
      return (
      <Card key={key}>
        <img className="quote-photo" src={this.state.images[key]} alt="" />
        <div className="quote-container">"{item.quote}"</div>
        <div className="author-container">
          – {item.author} | {item.book}
        </div>
      </Card>
      )

    })
   
    
  }

  render() {
    // language switcher
    const overviewData =
      this.props.languageSelect === "EN" ? overviewData_EN : overviewData_CH;

    //destructure object for var
    const {
      knowledgeRollover,
      knowledge,
      title,
      unitDescription,
      firstDay
    } = overviewData;

    // language switcher
    const segueData =
      this.props.languageSelect === "EN" ? segueData_EN : segueData_CH;

    const quoteData =
      this.props.languageSelect === "EN" ? quoteData_EN : quoteData_CH;


    return (
      <ContactsWrapper className="dashboard-container">
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            <div>
              <Row gutter={16}>
                {/* Unit Description */}
                <Col span={12}>
                  <Card title={title} bordered={true} 
                  
                  extra={
                    <Popover content={overviewData_EN.eventDescription} placement="bottom"  >
                    <Icon className="hard-right-icon" type="question-circle-o"/>
                    </Popover>
                  }>
                    <p>{unitDescription}</p>
                  </Card>

                 

                  <Card
                    className="previous-knowledge"
                    title={
                      <h4>
                        {`Prerequisite: ${knowledge}`}
                      </h4>
                    }
                    bordered={true}
                   
                      
                      extra={
                        <Popover content={overviewData_EN.previousDescription} placement="bottom"  >
                        <Icon className="hard-right-icon" type="question-circle-o"/>
                        </Popover>
                      }>

                
                    <p>{ ReactHtmlParser(knowledgeRollover) }</p>
                  </Card>

                  <Card
                    className="previous-knowledge"
                    title={
                      <h4>
                        Segue to Next Event: Event Two
                      </h4>
                    }
                    bordered={true}
                    extra={
                      <Popover content={overviewData_EN.segueDescription} placement="bottom"  >
                      <Icon className="hard-right-icon" type="question-circle-o"/>
                      </Popover>
                    }>

                  
                    <p>{segueData.segue}</p>
                  </Card>
                </Col>

                {/* Unit Description */}
                <Col span={12}>
                  <Carousel autoplay autoplaySpeed="5000">

                  {this.renderQuote(quoteData)}
                   
                  </Carousel>

                  <Card
                    className="previous-knowledge"
                    title="First Week"
                    bordered={true}
                  >
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
  return {
    languageSelect: state.languageSelect
  };
};

export default connect(mapStateToProps)(Dashboard);
