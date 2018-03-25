import React, { Component } from 'react';
import { ContactCardWrapper } from './contactCard.style';
import {Icon} from 'antd';


export default class extends Component {

  constructor(props){
    super(props)

    this.arrayLoop = this.arrayLoop.bind(this)
  }


  // render variation
  arrayLoop(arr){

      return arr ? arr.map( (item, key) => {
        return `  /  ${item}`
      }) 
      :
      ''
  }

  // render questions and applications
  arrayList(arr){
    
       return arr ? arr.map( (item, key) => {
        return <li key={key}>{item}</li>
       }) 
       :
       ''
      }


  render() {
    
    const {lex } = this.props;  

    if(!lex){
      return <h2 className="missing-content"> <Icon type="arrow-left"/> Make rollover new selection</h2>
    }
    
    const { word, pos, etymology, variation, quote, author, book, application, questions } = lex;
    // Add render for Application and questions
    

    // const numSelected = this.props.lexisSelect
    
    return (
      <ContactCardWrapper className="isoContactCard">

    
        <div className="isoContactInfoWrapper">
    
   
        <h3>{word}</h3>
        <p>{pos}</p>

        {variation ? <p><strong>Variation:</strong> {this.arrayLoop(variation)} </p> : ''}
        <p><strong>Etymology:</strong> {etymology}</p>
        
        <blockquote>
        <p>{quote}</p>
        <p className="author">{book} – {author}</p>
        </blockquote>

        {application ? <p><strong>Applications:</strong> {this.arrayList(application)} </p> : ''}
        {questions ? <p><strong>Questions:</strong> {this.arrayList(questions)} </p> : ''}
        
    
 
      
         
       
        
        
        
        
        </div>


      </ContactCardWrapper>
    );
  }
}
