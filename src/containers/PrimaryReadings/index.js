import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import { primaryReading_EN } from "../Data_EN/primaryReadingData";
import { primaryReading_CH } from "../Data_CH/primaryReadingData.ch";

import { primaryDescription_EN } from "../Data_EN/primaryReadingData";
import { primaryDescription_CH } from "../Data_CH/primaryReadingData.ch";

import { overviewData_EN } from "../Data_EN/overviewData";
import { overviewData_CH } from "../Data_CH/overviewData.ch";



import PrimaryReadings from "./primaryReadings";
import { savePrimary } from "../../redux/actions";
import { connect } from "react-redux";
import { ContactsWrapper } from "./contacts.style";

class PrimaryContainer extends Component {
  constructor(props) {
    super(props);
    console.log("lang: ", this.props.languageSelect);
  }

  componentDidMount() {
    notification.destroy();
  }

  render() {
    const readings =
      this.props.languageSelect === "EN"
        ? primaryReading_EN
        : primaryReading_CH;

    const description =
    this.props.languageSelect === "EN"
      ? primaryDescription_EN
      : primaryDescription_CH;

  const title =
    this.props.languageSelect === "EN"
      ? overviewData_EN
      : overviewData_CH;

    return (
      <ContactsWrapper>
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            {/* <Scrollbar className="contactBoxScrollbar"> */}
            <PrimaryReadings
              primarySelect={this.props.primarySelect}
              savePrimary={this.props.savePrimary}
              readings={readings.unitOne.primary}
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
    primarySelect: state.primarySelect,
    languageSelect: state.languageSelect
  };
};

export default connect(mapStateToProps, { savePrimary })(PrimaryContainer);
