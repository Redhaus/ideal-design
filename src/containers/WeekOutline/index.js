import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import { keyQuestions_EN, keyDescription_EN } from "../Data_EN/keyQuestionsData";
import { keyQuestions_CH, keyDescription_CH } from "../Data_CH/keyQuestionsData.ch";


import WeekOutline from "./WeekOutline";
import { saveWeekOutline } from "../../redux/actions";
import { connect } from "react-redux";

import { ContactsWrapper } from "./contacts.style";

class WeekOutineContainer extends Component {
  componentDidMount() {
    notification.destroy();
  }

  render() {
   

    return (
      <ContactsWrapper className="outline-container">
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            <WeekOutline
              saveWeekOutline={this.props.saveWeekOutline}
              weekOutlineSelect={this.props.weekOutlineSelect}
            />
          </Layout>
        </LayoutContentWrapper>
      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    // questionSelect: state.questionSelect,
    // languageSelect: state.languageSelect
    weekOutlineSelect: state.weekOutlineSelect
    
  };
};

export default connect(mapStateToProps, { saveWeekOutline })(
  WeekOutineContainer
);
