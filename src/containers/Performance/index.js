

import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
// import LayoutContent from '../../components/utility/layoutContent';
import { Layout, notification } from 'antd';

import {performanceData} from './performanceData';
import Performance from './Performance';
import { savePerformance } from '../../redux/actions';
import { connect } from 'react-redux';
import Scrollbar from '../../components/utility/customScrollBar.js';
import { ContactsWrapper } from './contacts.style';

class PerformanceContainer extends Component {

  componentDidMount() {
    {notification.destroy()}
  }
  
  render() {
    return (

      <ContactsWrapper>
                  
      <LayoutContentWrapper style={{ width: '100%' }}>
      <Layout className="isoContactBoxWrapper">
     

      {/* <Scrollbar className="contactBoxScrollbar"> */}
        <Performance
            performanceSelect={this.props.performanceSelect}
            savePerformance={this.props.savePerformance} 
            data={performanceData}/>
      {/* </Scrollbar> */}

        </Layout>
      </LayoutContentWrapper>

      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({
   
    performanceSelect: state.performanceSelect
  

  })
}

export default connect(mapStateToProps, {savePerformance})(PerformanceContainer)





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