import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import ContactList from '../../components/contacts/contactList';
import { connect } from 'react-redux';
import Button from '../../components/uielements/button';
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

    }

    renderDefinition(id){

        const lex = _.find(this.props.lexis, function(item) { return item.id == id })
        const markup = (
            <div>
            {lex ? <p>{lex.word}</p> : <p>Rollover New Selection</p>}
            {lex ? <p>{lex.etymology}</p> : '' }
            
            </div>
            
        )
        // console.log(lex)
        return lex

    }


    render() {

        const { lexis, seectedId } = this.props;

        // const selectedItem = seectedId
        // ? lexis.filter(contact => lexis.id === seectedId)[0]
        // : null;



        return (

            <div>
            <FilterGroup/>

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
              <div className="isoContactControl">

                
              </div>

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
   
    return {
      lexis: getVisibility(state.lexis, state.lexisFilterReducer, state.lexisSelectedReducer),
    //   lexis: state.lexis,
      seectedId: state.seectedId,
      filters: state.lexisSelectedReducer,
      lexisSelect: state.lexisSelect,
      lexisFilter: state.lexisFilterReducer
  
    };
  }
  export default connect(mapStateToProps, {
    changeContact,
    saveSelection
    // addContact,
    // editContact,
    // deleteContact,
    // viewChange,
  })(Lexis);

