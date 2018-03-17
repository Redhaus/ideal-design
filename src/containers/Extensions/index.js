

import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import { Layout , notification} from 'antd';

import {extensionsData_EN} from '../Data_EN/extensionsData';
import {extensionsData_CH} from '../Data_CH/extensionsData.ch';

import Extensions from './Extensions';
import { saveExtensions } from '../../redux/actions';
import { connect } from 'react-redux';

import { ContactsWrapper } from './contacts.style';

class ExtensionsContainer extends Component {

  componentDidMount(){
    notification.destroy()
  }
  render() {

    const extensionsData = this.props.languageSelect === 'EN' ? extensionsData_EN : extensionsData_CH;

    

    return (

      <ContactsWrapper>
                  
      <LayoutContentWrapper style={{ width: '100%' }}>
      <Layout className="isoContactBoxWrapper">
     

     
        <Extensions
            extensionSelect={this.props.extensionSelect}
            saveExtensions={this.props.saveExtensions} 
            extensions={extensionsData}
            languageSelect={this.props.languageSelect}
            
            />
     

        </Layout>
      </LayoutContentWrapper>

      </ContactsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return ({
   
    extensionSelect: state.extensionSelect,
    languageSelect: state.languageSelect
    
  

  })
}

export default connect(mapStateToProps, {saveExtensions})(ExtensionsContainer)



