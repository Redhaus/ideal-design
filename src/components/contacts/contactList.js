// TODO
// Make filter show selects
// Make checks stay lighted DONE
// possibly do it with state DONE


import React, { Component } from 'react';
import IntlMessages from '../utility/intlMessages';
import { InputSearch } from '../uielements/input';
import DeleteButton from './deleteButton';
import { PropTypes } from 'prop-types';
import { ContactListWrapper } from './contactList.style';
import Scrollbar from '../utility/customScrollBar';
import _ from 'lodash';


// this filters via search accepts lexis array, search term, and filters 
function filterContacts(lexis, search) {

  search = search.toUpperCase();
  return search
    ? lexis.filter(lexis => lexis.word.toUpperCase().includes(search))
    : lexis;
}


export default class ContactList extends Component {
  constructor(props) {
    super(props);

    // bind functions to this
    this.singleContact = this.singleContact.bind(this);
    this.onChange = this.onChange.bind(this);
    
    // set up state
    this.state = {
      search: ''
    };

    
  }

// This renders each word entry, click and hover states to each entry

  singleContact(lex, id) {
   

    // set up const vars deconstruct props
    const { changeContact, seectedId, saveSelection, lexisFilter, lexisSelect} = this.props;
   
    //set active class if rolled over  
    const activeClass = (seectedId === lex.id) ? 'active' : '';

    //set selected class if state shows item was clicked
    // const selectedClass = this.state[id] ? 'selected' : '';
    // const selectedClass = this.state.selected.includes(id) ? 'selected' : '';

    // if lexis select contains the object add selected
    const selectedClass =  lexisSelect.includes(lex) ? 'selected' : '';
    

    
     

    //function from prop changes the info display content
    const onChange = () => {
      changeContact(lex.id)
    };

    // if word is clicked add to redux store and save highlight to state
    const lexisClick = (data) => {
      saveSelection(data)
      // trackSelects(data) 
      // testSelects(data, lexisSelect) 
      // console.log(this.state)
      
    }


    // const testSelects = (data, lexisSelect) => {
    //   const selects = lexisSelect.map( (item) => { return item.id })
    //   this.setState(() => {
    //     return {
    //       selected: selects
    //     }
    //   })



    // }


    // track Selection and highlight them by saving them to state
    // const trackSelects = (data) => {

    //       const id = data.id
      
    //       // if id not in state add it to state
    //       if (!(id in this.state)) {
    //         this.setState({ [id]: true });
    //         return true
    //       }
          
    //       // if id exists toggle its value to the opposite
    //       if(this.state[id] || !(this.state[id]) ){
    //         this.setState( () => { 
    //           return { 
    //             [id]: !this.state[id]
    //           }
    //       })
            
    //         return this.state[id]

          
    //       }

    // }


    
    
    return (
      
      
      <div
        key={lex.id}
        className={`${activeClass} ${selectedClass} isoSingleContact`} //${activeClass}
        onMouseOver={onChange}
        onClick={ () =>  { lexisClick(lex) } }>

        {/* 
        <div className="isoAvatar">
          {contact.avatar ? <img alt="#" src={contact.avatar} /> : ''}
        </div>
        */}

        {/* displays word */}
        <div className={` isoContactName`}> 
          <h3>{lex.word ? lex.word : 'No Word'}</h3>
        </div>

      </div>
    );
  }



  onChange(event) {
    this.setState({ search: event.target.value });
    
  }
  render() {
    const { search } = this.state;
    const filters = this.props.filters;
    // const { filter } = this.state;
    
    // const contacts = filterContacts(this.props.contacts, search);
    const lexis = filterContacts(this.props.lexis, search);

    // console.log('prop lexis: ', this.props.lexis)
    // console.log('post filter lex: ', lexis)
    
    return (
      <ContactListWrapper className="isoContactListWrapper">
    
        <InputSearch
          // placeholder={this.context.intl.formatMessage({
          //   id: 'contactlist.searchContacts'
          // })}
          value={search}
          onChange={this.onChange}
          className="isoSearchBar"
        />
        {lexis && lexis.length > 0 ? (
          <div className="isoContactList">
          <Scrollbar className="contactListScrollbar">
            {lexis.map(item => this.singleContact(item, item.id))}
          </Scrollbar>
          </div>
        ) : (
          <span className="isoNoResultMsg">
            {<IntlMessages id="Component.contacts.noOption" />}
          </span>
        )}
      </ContactListWrapper>
    );
  }
}
