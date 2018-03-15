
import React, { Component } from 'react';
import IntlMessages from '../utility/intlMessages';
import { InputSearch } from '../uielements/input';
import { ContactListWrapper } from './contactList.style';
import Scrollbar from '../utility/customScrollBar';
import { Icon, Switch } from 'antd';



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
    this.icon = this.icon.bind(this);
    this.iconHighlight = this.iconHighlight.bind(this);
   
    
    // set up state
    this.state = {
      search: ''
    };
    
  }



// check if filters includes item if it does highlight the icon 
  iconHighlight = (item, icon, key) => {
    if(this.props.filters.includes(item)){
      return <Icon className='active-icon' key={key} type={icon}/> 
    }else{
      return <Icon className="icon-style" key={key} type={icon}/> 
    }

  }



  icon = (icons) => {

    // iterates through icon array for each item and returns icons associated with that array
    return icons.map( (item, key) => {
  
      switch (item) {

        case 'person':
          return this.iconHighlight(item, "user", key )
  
        case 'common':
          return this.iconHighlight(item, "global", key )

        case 'device':
          return this.iconHighlight(item, "hourglass", key )
         
        case 'essential':
          return this.iconHighlight(item, "compass", key )

        case 'concept':
          return this.iconHighlight(item, "bulb", key )

        case 'event':
          return this.iconHighlight(item, "calendar", key )
      
        default:
          break;
      }

      return false;
      
    })
  }

// This renders each word entry, click and hover states to each entry
  singleContact(lex, id) {
   
    // set up const vars deconstruct props
    const { changeContact, seectedId, saveSelection, lexisSelect} = this.props;
   
    //set active class if rolled over  
    const activeClass = (seectedId === lex.id) ? 'active' : '';

    // if lexis select contains the object add selected
    const selectedClass =  lexisSelect.includes(lex) ? 'selected' : '';
    
    //function from prop changes the info display content
    const onChange = () => {
      changeContact(lex.id)
    };

    // if word is clicked add to redux store 
    const lexisClick = (data) => {
      saveSelection(data)
      
    }

    
    return (
      
      
      // sets up div list for words and adds mouse and click event
      <div
        key={lex.id}
        className={`${activeClass} ${selectedClass} isoSingleContact`} 
        onMouseOver={onChange}
        onClick={ () =>  { lexisClick(lex) } }>

        {/* displays word with icons*/}
        <div className="iso-word-container"> 
          <h3 className="iso-word"> 
            <Switch  size="small" checked={selectedClass ? true : false} ></Switch>  
            {lex.word ? lex.word : 'No Word'}     
          </h3>
          <span className="icon-container"> {this.icon(lex.icons)} </span>
        </div>

      </div>
    );
  }


  onChange(event) {
    this.setState({ search: event.target.value });
    
  }
  render() {
    const { search } = this.state;
   
    // const contacts = filterContacts(this.props.contacts, search);
    const lexis = filterContacts(this.props.lexis, search);

 
    
    return (
      <ContactListWrapper className="isoContactListWrapper">
    
        <InputSearch
          // placeholder={this.context.intl.formatMessage({
          //   id: 'contactlist.searchContacts'
          // })}
          placeholder="Search..."
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
