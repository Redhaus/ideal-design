import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout } from "antd";

import Poem from "./theUnknownCitizen";
import { connect } from "react-redux";

import { ContactsWrapper } from "./contacts.style";

class Annotation extends Component {
  render() {
    return (
      <ContactsWrapper className="annotation">
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            <Poem className="annotation" />
          </Layout>
        </LayoutContentWrapper>
      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    extensionSelect: state.extensionSelect
  };
};

export default connect(mapStateToProps)(Annotation);
