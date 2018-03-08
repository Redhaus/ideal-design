import React, { Component } from 'react';
import { ContactCardWrapper } from './singleViewCard.style';
import {Icon, Card, Col, Row, Button} from 'antd';
import { InputSearch } from '../../components/uielements/input';


// this filters via search accepts lexis array, search term, and filters 
function filterContacts(readings, search) {
  
    search = search.toUpperCase();
    return search
      ? readings.filter(reading => reading.title.toUpperCase().includes(search) || reading.author.toUpperCase().includes(search)  ) 
      : readings;
  }
  


export default class extends Component {

  constructor(props){
    super(props)

    this.arrayLoop = this.arrayLoop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.displayReadings = this.displayReadings.bind(this);
    this.handlePoemSave = this.handlePoemSave.bind(this);

    // set up state
    this.state = {
      search: ''
    };

    
  }


  // render variation
  arrayLoop(arr){

      return arr ? arr.map( (item, key) => {
        return `  /  ${item}`
      }) 
      :
      ''
  }

  handlePoemSave(item){
    // console.log(item)
    this.props.savePoems(item)
  }

  // render questions and applications
  displayReadings(readings){
    
       return readings ? readings.map( (item, key) => {
          const { author, date, link, title, type } = item;

          // checks if selection is in store to set active state of button
          const selectedClass =  this.props.poemSelect.includes(item) ? 'selected' : '';
    
        return (

        
          <Col   className="further-reading"  key={key} span={8}>
           
         

        

          <Card title={title}
          
            bordered={true} 
            extra={
              
            <a href={link}><Icon type="link" /></a> 
          }>
           
            <p className="reading-author">  <strong>Author: </strong> {author} </p>
            <em> <strong>Dates: </strong>{date}</em>
            
            
            <Button className={` ${selectedClass} further-reading-button `} onClick={ () => { this.handlePoemSave(item) } }>Select Reading</Button>
         
          
          </Card>
         

          </Col>

        )
       }) 
       :
       ''
      }

      onChange(event) {
        this.setState({ search: event.target.value });
        
      }

  render() {

    const { search } = this.state;
    const readings = filterContacts(this.props.readings, search);
    
    // const {readings } = this.props;  

    // if(!lex){
    //   // console.log(this.props.readings)
    //   return <h2 className="missing-content"> <Icon type="arrow-left"/> Make rollover new selection</h2>
    // }
    
    // const { word, pos, etymology, variation, quote, author, book, application, questions } = lex;
    
    // Add render for Application and questions
    
    return (
      <ContactCardWrapper className="isoContactCard">

     


        <div className="isoContactInfoWrapper">
        <InputSearch
        // placeholder={this.context.intl.formatMessage({
        //   id: 'contactlist.searchContacts'
        // })}
        value={search}
        onChange={this.onChange}
        className="isoSearchBar"
      />
          <Row gutter={16}>
            {this.displayReadings(readings)}    
          </Row>
        </div>
      </ContactCardWrapper>
    );
  }
}





        // <h3>{word}</h3>
        // <p>{pos}</p>

        // {variation ? <p><strong>Variation:</strong> {this.arrayLoop(variation)} </p> : ''}
        // <p><strong>Etymology:</strong> {etymology}</p>
        
        // <blockquote>
        // <p>{quote}</p>
        // <p className="author">{book} – {author}</p>
        // </blockquote>

        // {application ? <p><strong>Applications:</strong> {this.arrayList(application)} </p> : ''}
        // {questions ? <p><strong>Questions:</strong> {this.arrayList(questions)} </p> : ''}
        
    
 
      
         