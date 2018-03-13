import React, { Component } from 'react';
import { Layout, notification } from 'antd';
import ContactList from '../../components/contacts/contactList';
import { connect } from 'react-redux';
import Scrollbar from '../../components/utility/customScrollBar.js';
import SingleContactView from '../../components/contacts/singleView';
import { ContactsWrapper } from './contacts.style';
// import contactAction from '../../redux/lexis/actions';
import { changeContact, saveSelection } from '../../redux/actions';
import { getVisibility } from './selectors';
import FilterGroup from './filterGroup';
import _ from 'lodash';


const { Content } = Layout;

class Lexis extends Component {

    constructor(props){
        super(props)

        this.renderDefinition = this.renderDefinition.bind(this)
        {notification.destroy()}
    }

    renderDefinition(id){
        
        // based on which one is selected your passing the definition to SingleView for Render layout
        const lex = _.find(this.props.lexis, function(item) { return item.id === id })
        return lex

    }


    render() {

       

        return (

            <div className="lexis-container">
            <FilterGroup filters={this.props.filters}/>

            <ContactsWrapper
                className="isomorphicContacts"
                style={{ background: 'none' }}>

         
                <div className="isoContactListBar">
                    <ContactList
                    lexis={this.props.lexis}
                    seectedId={this.props.seectedId}
                    changeContact={this.props.changeContact}
                    filters={this.props.filters}
                    saveSelection={this.props.saveSelection}
                    lexisFilter={this.props.lexisFilter}
                    lexisSelect={this.props.lexisSelect}

                    />
                    
                </div>  

                <Layout className="isoContactBoxWrapper">
       
            <Content className="isoContactBox">
              

            {/* this adds padding to top of definition */}
            <div className="isoContactControl"></div>

            <Scrollbar className="contactBoxScrollbar">
                <SingleContactView
                    lex={this.renderDefinition(this.props.seectedId)}
                />
                   
            </Scrollbar>
            </Content>
        
        </Layout>


            </ContactsWrapper>

            </div>
        );
    }
}



function mapStateToProps(state) {
    // console.log(state)

    console.log('map: ', state.lexisSelectedReducer)
   
    return {
      lexis: getVisibility(state.lexis, state.lexisFilterReducer, state.lexisSelectedReducer),
      seectedId: state.seectedId,
      filters: state.lexisSelectedReducer,
      lexisSelect: state.lexisSelect,
      lexisFilter: state.lexisFilterReducer
  
    };
  }
  export default connect(mapStateToProps, {
    changeContact,
    saveSelection

  })(Lexis);

