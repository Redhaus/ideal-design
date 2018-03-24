import React, { Component } from "react";
import LayoutContentWrapper from "../../components/utility/layoutWrapper";
import { Layout, notification } from "antd";

import Results from "./Results";
import { connect } from "react-redux";
import { ContactsWrapper } from "./contacts.style";

class ResultsContainer extends Component {
  componentDidMount() {
    notification.destroy();
  }

  render() {
    return (
      <ContactsWrapper>
        <LayoutContentWrapper style={{ width: "100%" }}>
          <Layout className="isoContactBoxWrapper">
            {/* <Scrollbar className="contactBoxScrollbar"> */}
            <Results
              performanceSelect={this.props.performanceSelect}
              lexisSelect={this.props.lexisSelect}
              primarySelect={this.props.primarySelect}
              poemSelect={this.props.poemSelect}
              essaySelect={this.props.essaySelect}
              movieSelect={this.props.movieSelect}
              questionSelect={this.props.questionSelect}
              extensionSelect={this.props.extensionSelect}
              goalSelect={this.props.goalSelect}
              weekOutlineSelect={this.props.weekOutlineSelect}
              
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
    lexisSelect: state.lexisSelect,
    performanceSelect: state.performanceSelect,
    primarySelect: state.primarySelect,
    poemSelect: state.poemSelect,
    essaySelect: state.essaySelect,
    movieSelect: state.movieSelect,
    questionSelect: state.questionSelect,
    extensionSelect: state.extensionSelect,
    goalSelect: state.goalSelect,
    weekOutlineSelect: state.weekOutlineSelect
    
  };
};

export default connect(mapStateToProps)(ResultsContainer);

// // const mapDispatchToProps = (dispatch) => ({
// //   savePrimary: bindActionCreators(actions.savePrimary, dispatch),

// //   // saveSelection: bindActionCreators(actions.saveSelection, dispatch),
// //   // setFilter: bindActionCreators(actions.setFilter, dispatch)
// // })

// export default connect(mapStateToProps)(PrimaryReadings)

//   import { Collapse } from 'antd';
//   const Panel = Collapse.Panel;

//   const text = `
//     A dog is a type of domesticated animal.
//     Known for its loyalty and faithfulness,
//     it can be found as a welcome guest in many households across the world.
//   `;

//   ReactDOM.render(
//     <Collapse accordion>
//       <Panel header="This is panel header 1" key="1">
//         <p>{text}</p>
//       </Panel>
//       <Panel header="This is panel header 2" key="2">
//         <p>{text}</p>
//       </Panel>
//       <Panel header="This is panel header 3" key="3">
//         <p>{text}</p>
//       </Panel>
//     </Collapse>
//   , mountNode);
