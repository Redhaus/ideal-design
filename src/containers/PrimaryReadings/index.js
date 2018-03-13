

import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
// import LayoutContent from '../../components/utility/layoutContent';
import { Layout, notification } from 'antd';

import readings from './readingData';
import PrimaryReadings from './primaryReadings';
import { savePrimary } from '../../redux/actions';
import { connect } from 'react-redux';
import Scrollbar from '../../components/utility/customScrollBar.js';
import { ContactsWrapper } from './contacts.style';

class PrimaryContainer extends Component {

  componentDidMount() {
    {notification.destroy()}
  }
  
  render() {
    return (

      <ContactsWrapper>

                  
      <LayoutContentWrapper style={{ width: '100%' }}>
      <Layout className="isoContactBoxWrapper">
     
  

      {/* <Scrollbar className="contactBoxScrollbar"> */}
        <PrimaryReadings 
            primarySelect={this.props.primarySelect}
            savePrimary={this.props.savePrimary} 
            readings={readings.unitOne.primary}/>
      {/* </Scrollbar> */}

      
        </Layout>
      </LayoutContentWrapper>

      </ContactsWrapper>
    );
  }
}



const mapStateToProps = state => {
  return ({
    primarySelect: state.primarySelect
    // lexis: getVisibility(state.lexis, state.lexisFilterReducer, state.lexisSelectedReducer),
    // lexisSelect: state.lexisSelect,
    // lexisFilter: state.lexisFilterReducer,
    // lexisSelectedReducer: state.lexisSelectedReducer

  })
}

export default connect(mapStateToProps, {savePrimary})(PrimaryContainer)





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