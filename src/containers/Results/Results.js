import React from 'react'

import { Collapse } from 'antd';
import { Card, Col, Row, Icon, Button, Switch, Divider } from 'antd';


const gridStyle = {
  width: '33.3333%',
  height: '195px'
};


class Results extends React.Component {

  constructor(props){
    super(props)
    // this.renderResults = this.renderResults.bind(this)
    // this.handleTest = this.handleTest.bind(this)
    
  }



  


  handleSelect = (e, data) => {
    
    if (e.stopPropagation) e.stopPropagation();
    this.props.savePerformance(data); 
    
  }

  renderPrimary = (results) => {

    return results.map((item, key) => {
      console.log(item)
      return (
        <div key={key}>
        <h5>{item.title}</h5>
        <p>{item.author} | {item.date}</p>
        </div>
      )

    }) // end map()
  } // end handle()


  renderLexis = (results) => {
    
        return results.map((item, key) => {
          console.log(item)
          return (
            <div key={key}>
            <p>{item.word} ({item.pos})</p>
            
            </div>
          )
    
        }) // end map()
      } // end handle()

      renderReadings = (poems, essays, movies) => {
        
        if(poems){
            return poems.map((item, key) => {
              console.log(item)
              return (
                <div key={key}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                
                
                </div>
              )
        
            }) // end map()

          }

          if(essays){
            return essays.map((item, key) => {
              console.log(item)
              return (
                <div key={key}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                
                
                </div>
              )
        
            }) // end map()

          }

          if(movies){
            return movies.map((item, key) => {
              console.log(item)
              return (
                <div key={key}>
                <h3>{item.title}</h3>
                <p>{item.director}</p>
                
                
                </div>
              )
        
            }) // end map()

          }


          } // end handle()


  

  renderQuestions = (results) => {
    
        return results.map((item, key) => {
          console.log(item)
          return (
            <div key={key}>
            <p>{item}</p>
            
            </div>
          )
    
        }) // end map()
      } // end handle()

      renderPerformance = (results) => {
        
            return results.map((item, key) => {
              console.log(item)
              return (
                <div key={key}>
                <p>{item.header}</p>
                <p>{item.description}</p>
                
                
                </div>
              )
        
            }) // end map()
          } // end handle()

          renderExtensions = (results) => {
            
                return results.map((item, key) => {
                  console.log(item)
                  return (
                    <div key={key}>
                    <p>{item.ext}</p>
                    
                    </div>
                  )
            
                }) // end map()
              } // end handle()

              renderGoals = (results) => {
                
                    return results.map((item, key) => {
                      console.log(item)
                      return (
                        <div key={key}>
                        <p>{item}</p>
                        
                        </div>
                      )
                
                    }) // end map()
                  } // end handle()    


  render(){

    const {primarySelect, lexisSelect, poemSelect, essaySelect, movieSelect, extensionSelect, questionSelect, performanceSelect, goalSelect} = this.props

  return (

    // Card Grid

    <div>
    
    <Card className="results-container"><h3>Weekly Review</h3></Card>
    <div className="results-container">
    
    <Card>
    <Row gutter={16}>
    <Col span={12}>
   

    {/* Primary Reading */}
    {
      (primarySelect.length > 0) 
      ? (
        <div>
        <Divider orientation="right">Texts</Divider>
        {this.renderPrimary(primarySelect)}
        </div>
      ) :
      ''
    }


     {/* Lexis */}
     {
      (lexisSelect.length > 0) 
      ? (
        <div>
        <Divider orientation="right">Lexis</Divider>
        {this.renderLexis(lexisSelect)}
        </div>
      ) :
      ''
    }


    {/* Further Readings */}
    {
      (poemSelect.length > 0) ||
      (essaySelect.length > 0) ||
      (movieSelect.length > 0)
      
      ? (
        <div>
        <Divider orientation="right">Supporting Resources</Divider>
       
       
       {/* conditionalPoems */}
       {(poemSelect.length > 0) 
          ?
          (
            <div>
            <h3>Poems</h3>
            {this.renderReadings(poemSelect, null, null)}
            </div>
          ) : ' '}

        {/* conditionalEssay */}
       {(essaySelect.length > 0) 
          ?
          (
            <div>
            <h3>Essay</h3>
            {this.renderReadings(null, essaySelect, null)}
            </div>
          ) : ' '}


         {/* conditionalMovie */}
       {(movieSelect.length > 0) 
          ?
          (
            <div>
            <h3>Movies</h3>
            {this.renderReadings(null, null, movieSelect)}
            </div>
          ) : ' '}
       
        
        </div>
      ) :
      ''
    }
   
   
   
    
    


    </Col>




    <Col span={12}>
    
     
       {/* Key Questions */}
 {
      (questionSelect.length > 0) 
      ? (
        <div>
        <Divider orientation="right">Key Questions</Divider>
        {this.renderQuestions(questionSelect)}
        </div>
      ) :
      ''
    }


     {/* Performance */}
 {
      (performanceSelect.length > 0) 
      ? (
        <div>
        <Divider orientation="right">Performance</Divider>
        {this.renderPerformance(performanceSelect)}
        </div>
      ) :
      ''
    }



    {/* Extensions */}
 {
      (extensionSelect.length > 0) 
      ? (
        <div>
        <Divider orientation="right">Extensions</Divider>
        {this.renderExtensions(extensionSelect)}
        </div>
      ) :
      ''
    }




    {/* Continual goals */}
    {
      (goalSelect.length > 0) 
      ? (
        <div>
        <Divider orientation="right">ContinualGoals</Divider>
        {this.renderGoals(goalSelect)}
        </div>
      ) :
      ''
    }


    

 
 
     </Col>




    </Row>
    </Card>
    </div>

  </div>


  )
}
}




export default Results






// TODO
// Format results
// Add print PDF option for results
// Language Option for Chinese via global lang var 
// have each component check it and load other content if needed
// I have a few UI things to clean up here and there, 
// I need to get the format the rendered results under a result page. 
// I need to figure out chinese translation 
// I need to remove sections and get student version online. 
// Calendar integration.
// Longer term make it mobile friendly 
// Build create user system etc. 
// Kids rating lexis 
// Responsive 