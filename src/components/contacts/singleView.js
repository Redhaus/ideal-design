import React, { Component } from 'react';
import { ContactCardWrapper } from './contactCard.style';
import { Icon } from 'antd';


export default class extends Component {

  constructor(props){
    super(props)

    this.arrayLoop = this.arrayLoop.bind(this)
  }


  arrayLoop(arr){

   return arr ? arr.map( (item, key) => {
    return `  /  ${item}`
   }) 
   :
   ''
  }

  render() {
    
    const {lex } = this.props;  

    if(!lex){
      return <p> Make rollover new selection</p>
    }
    
    const { word, pos, etymology, variation, quote, author, book, appliation, questions } = lex;
      
    
    // const word = lex ? word : 'No Word';
    // const extraInfos = [];
    // otherAttributes.forEach(attribute => {
    //   // const value = contact[attribute.value];
    //   if (value) {
    //     extraInfos.push(
    //       <div className="isoContactCardInfos" key={attribute.value}>
    //         <p className="isoInfoLabel">{`${attribute.title}`}</p>
    //         <p className="isoInfoDetails">{value}</p>
    //       </div>
    //     );
    //   }
    // });
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
    
 
      
         
       
        
        
        
        
        </div>


      </ContactCardWrapper>
    );
  }
}
