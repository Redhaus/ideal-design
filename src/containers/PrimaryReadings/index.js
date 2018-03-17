import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import { primaryReading_EN } from "../Data_EN/primaryReadingData";
import { primaryReading_CH } from "../Data_CH/primaryReadingData.ch";

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

    return (
      <ContactsWrapper>
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            {/* <Scrollbar className="contactBoxScrollbar"> */}
            <PrimaryReadings
              primarySelect={this.props.primarySelect}
              savePrimary={this.props.savePrimary}
              readings={readings.unitOne.primary}
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
