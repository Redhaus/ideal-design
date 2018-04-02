import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import { continualGoalsData_EN, continualDescription_EN } from "../Data_EN/continualGoalsData"; //english
import { continualGoalsData_CH, continualDescription_CH } from "../Data_CH/continualGoalsData.ch"; //chinese
import { overviewData_EN } from "../Data_EN/overviewData";
import { overviewData_CH } from "../Data_CH/overviewData.ch";

import ContinualGoals from "./ContinualGoals";
import { saveGoals } from "../../redux/actions";
import { connect } from "react-redux";

import { ContactsWrapper } from "./contacts.style";

class ContinualGoalsContainer extends Component {
  constructor(props) {
    super(props);
    console.log("lang: ", this.props.languageSelect);
  }

  componentDidMount() {
    notification.destroy();
  }

  render() {
    const goals =
      this.props.languageSelect === "EN"
        ? continualGoalsData_EN
        : continualGoalsData_CH;

    const description =
      this.props.languageSelect === "EN"
        ? continualDescription_EN
        : continualDescription_CH;

    const title =
      this.props.languageSelect === "EN"
        ? overviewData_EN
        : overviewData_CH;

        

    return (
      <ContactsWrapper className="continual-goals-container">
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            <ContinualGoals
              goalSelect={this.props.goalSelect}
              saveGoals={this.props.saveGoals}
              goals={goals}
              description={description}
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
    goalSelect: state.goalSelect,
    languageSelect: state.languageSelect
  };
};

export default connect(mapStateToProps, { saveGoals })(ContinualGoalsContainer);
