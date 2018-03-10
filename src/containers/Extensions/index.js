

import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
// import LayoutContent from '../../components/utility/layoutContent';
import { Layout } from 'antd';

import {keyQuestions} from './performanceData';
import KeyQuestions from './KeyQuestions';
import { saveQuestions, deleteQuestions } from '../../redux/actions';
import { connect } from 'react-redux';

import { ContactsWrapper } from './contacts.style';

class KeyQuestionsContainer extends Component {
  render() {
    return (

      <ContactsWrapper>
                  
      <LayoutContentWrapper style={{ width: '100%' }}>
      <Layout className="isoContactBoxWrapper">
     

     
        <KeyQuestions
            questionSelect={this.props.questionSelect}
            saveQuestions={this.props.saveQuestions} 
            deleteQuestions={this.props.deleteQuestions}
            questions={keyQuestions}/>
     

        </Layout>
      </LayoutContentWrapper>

      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({
   
    questionSelect: state.questionSelect
  

  })
}

export default connect(mapStateToProps, {saveQuestions, deleteQuestions})(KeyQuestionsContainer)





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