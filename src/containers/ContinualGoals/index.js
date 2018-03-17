import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import { continualGoalsData_EN } from "../Data_EN/continualGoalsData"; //english
import { continualGoalsData_CH } from "../Data_CH/continualGoalsData.ch"; //chinese
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

    return (
      <ContactsWrapper>
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            <ContinualGoals
              goalSelect={this.props.goalSelect}
              saveGoals={this.props.saveGoals}
              goals={goals}
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
