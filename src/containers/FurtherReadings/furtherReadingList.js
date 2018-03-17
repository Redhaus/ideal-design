
import React, { Component } from 'react';
import { InputSearch } from '../../components/uielements/input';
import { ContactListWrapper } from './furtherReadingList.style';
import Scrollbar from '../../components/utility/customScrollBar';



// this filters via search accepts lexis array, search term, and filters 
// function filterContacts(lexis, search) {

//   search = search.toUpperCase();
//   return search
//     ? lexis.filter(lexis => lexis.word.toUpperCase().includes(search))
//     : lexis;
// }


export default class FurtherList extends Component {
  constructor(props) {
    super(props);
 

    // bind functions to this
    this.singleContact = this.singleContact.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.listCats = this.listCats.bind(this);
    
    // set up state
    this.state = {
      search: ''
    };
    
  }

  handleClick(item){
    console.log(item)
  }

  // listCats(item, key){
  //   // return cats.map( (item, key) => {

  //     <div
  //     key={key}
  //     // className={`${activeClass} ${selectedClass} isoSingleContact`} 
  //     onClick={ () =>  this.handleClick(item)}
  //     // onClick={ () =>  { lexisClick(lex) } }
  //     >

  //     {/* displays word with icons*/}
  //     <div className="iso-word-container"> 
  //       <h3 className="iso-word">{item ? item : 'No Category'}     </h3>
  //     </div>

  //   </div>


  //   // })
  // }



// This renders each word entry, click and hover states to each entry
  singleContact(item, key) {
   
    // set up const vars deconstruct props
    // const { changeContact, seectedId, saveSelection, lexisSelect} = this.props;
   
    //set active class if rolled over  
    // const activeClass = (seectedId === lex.id) ? 'active' : '';

    // if lexis select contains the object add selected
    // const selectedClass =  lexisSelect.includes(lex) ? 'selected' : '';
    
    //function from prop changes the info display content
    // const onChange = () => {
    //   changeContact(lex.id)
    // };

    // if word is clicked add to redux store 
    // const lexisClick = (data) => {
    //   saveSelection(data)
      
    

    
    return (

      <div
      key={key}
      className={` isoSingleContact`} //${activeClass} ${selectedClass}
      onClick={ () =>  this.handleClick(item)}
      // onClick={ () =>  { lexisClick(lex) } }
      >

      {/* displays word with icons*/}
      <div className="iso-word-container"> 
        <h3 className="iso-word">{item ? item : 'No Category'}     </h3>
      </div>

    </div>

    
    // <div key={key}>
    //   {/* {console.log(this.props.catList)}
    //   {this.listCats(this.props.catList)} */}
    //   </div>
    );
  }


  onChange(event) {
    this.setState({ search: event.target.value });
    
  }

  render() {
    const { search } = this.state;
   
    // const contacts = filterContacts(this.props.contacts, search);
    // const lexis = filterContacts(this.props.lexis, search);
    const cats = this.props.catList
 
    
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

        {/* {cats && cats.length > 0 ? ( */}
          <div className="isoContactList">
          <Scrollbar className="contactListScrollbar">
            {cats.map( (item, key) => this.singleContact(item, key))}
          </Scrollbar>
          </div>
        {/* ) : (
          <span className="isoNoResultMsg">
            {<IntlMessages id="Component.contacts.noOption" />}
          </span>
        )} */}
      </ContactListWrapper>
    );
  }
}
