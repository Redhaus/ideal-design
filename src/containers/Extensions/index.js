

import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
// import LayoutContent from '../../components/utility/layoutContent';
import { Layout , notification} from 'antd';

import {extensions} from './extensionsData';
import Extensions from './Extensions';
import { saveExtensions, deleteQuestions } from '../../redux/actions';
import { connect } from 'react-redux';

import { ContactsWrapper } from './contacts.style';

class ExtensionsContainer extends Component {

  componentDidMount(){
    {notification.destroy()}
  }
  render() {
    return (

      <ContactsWrapper>
                  
      <LayoutContentWrapper style={{ width: '100%' }}>
      <Layout className="isoContactBoxWrapper">
     

     
        <Extensions
            extensionSelect={this.props.extensionSelect}
            saveExtensions={this.props.saveExtensions} 
            extensions={extensions}/>
     

        </Layout>
      </LayoutContentWrapper>

      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({
   
    extensionSelect: state.extensionSelect
  

  })
}

export default connect(mapStateToProps, {saveExtensions})(ExtensionsContainer)





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