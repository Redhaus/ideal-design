import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import { keyQuestions_EN, keyDescription_EN } from "../Data_EN/keyQuestionsData";
import { keyQuestions_CH, keyDescription_CH } from "../Data_CH/keyQuestionsData.ch";


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
