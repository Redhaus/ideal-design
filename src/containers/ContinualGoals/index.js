

import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
// import LayoutContent from '../../components/utility/layoutContent';
import { Layout, notification } from 'antd';

import {continualGoalsData_EN} from '../Data_EN/continualGoalsData'; //english
import {continualGoalsData_CH} from '../Data_CH/continualGoalsData.ch'; //chinese
import ContinualGoals from './ContinualGoals';
import { saveGoals } from '../../redux/actions';
import { connect } from 'react-redux';

import { ContactsWrapper } from './contacts.style';

class ContinualGoalsContainer extends Component {

  constructor(props){
    super(props)
    console.log('lang: ', this.props.languageSelect)
  }

  componentDidMount() {
    notification.destroy()
  }
  
  render() {

    const goals = this.props.languageSelect === 'EN' ? continualGoalsData_EN : continualGoalsData_CH;


    return (

      <ContactsWrapper>
                  
      <LayoutContentWrapper style={{ width: '100%' }}>
      <Layout className="isoContactBoxWrapper">
     

     
        <ContinualGoals
            goalSelect={this.props.goalSelect}
            saveGoals={this.props.saveGoals} 
            goals={goals}/>
     

        </Layout>
      </LayoutContentWrapper>

      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({
   
    goalSelect: state.goalSelect,
    languageSelect: state.languageSelect
  

  })
}

export default connect(mapStateToProps, {saveGoals})(ContinualGoalsContainer)





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