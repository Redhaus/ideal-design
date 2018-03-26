import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import { keyQuestions_EN, keyDescription_EN } from "../Data_EN/keyQuestionsData";
import { keyQuestions_CH, keyDescription_CH } from "../Data_CH/keyQuestionsData.ch";
import { overviewData_EN } from "../Data_EN/overviewData";
import { overviewData_CH } from "../Data_CH/overviewData.ch";


import KeyQuestions from "./KeyQuestions";
import { saveQuestions, deleteQuestions } from "../../redux/actions";
import { connect } from "react-redux";

import { ContactsWrapper } from "./contacts.style";

class KeyQuestionsContainer extends Component {
  componentDidMount() {
    notification.destroy();
  }

  render() {
    const keyQuestions =
      this.props.languageSelect === "EN" ? keyQuestions_EN : keyQuestions_CH;
    
    const keyDescription =
      this.props.languageSelect === "EN" ? keyDescription_EN : keyDescription_CH;

    const title =
      this.props.languageSelect === "EN"
        ? overviewData_EN
        : overviewData_CH;


    return (
      <ContactsWrapper className="question-container">
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            <KeyQuestions
              questionSelect={this.props.questionSelect}
              saveQuestions={this.props.saveQuestions}
              deleteQuestions={this.props.deleteQuestions}
              questions={keyQuestions}
              keyDescription={keyDescription}
              title={title.title}
            />
          </Layout>
        </LayoutContentWrapper>
      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionSelect: state.questionSelect,
    languageSelect: state.languageSelect
  };
};

export default connect(mapStateToProps, { saveQuestions, deleteQuestions })(
  KeyQuestionsContainer
);
