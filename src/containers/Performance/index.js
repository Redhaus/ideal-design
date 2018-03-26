import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
// import LayoutContent from '../../components/utility/layoutContent';
import { Layout, notification } from "antd";

import { performanceData_EN, performanceDescription_EN } from "../Data_EN/performanceData";
import { performanceData_CH, performanceDescription_CH } from "../Data_CH/performanceData.ch";
import { overviewData_EN } from "../Data_EN/overviewData";
import { overviewData_CH } from "../Data_CH/overviewData.ch";

import Performance from "./Performance";
import { savePerformance } from "../../redux/actions";
import { connect } from "react-redux";
import { ContactsWrapper } from "./contacts.style";

class PerformanceContainer extends Component {
  componentDidMount() {
    notification.destroy();
  }

  render() {
    const performanceData =
      this.props.languageSelect === "EN"
        ? performanceData_EN
        : performanceData_CH;

    const description =
      this.props.languageSelect === "EN"
        ? performanceDescription_EN
        : performanceDescription_CH;

    const title =
      this.props.languageSelect === "EN"
        ? overviewData_EN
        : overviewData_CH;
  

    return (
      <ContactsWrapper>
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            {/* <Scrollbar className="contactBoxScrollbar"> */}
            <Performance
              performanceSelect={this.props.performanceSelect}
              savePerformance={this.props.savePerformance}
              data={performanceData}
              description={description}
              title={title.title}
            />
            {/* </Scrollbar> */}
          </Layout>
        </LayoutContentWrapper>
      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    performanceSelect: state.performanceSelect,
    languageSelect: state.languageSelect
  };
};

export default connect(mapStateToProps, { savePerformance })(
  PerformanceContainer
);
