import React from "react";

import { Card, Col, Row, Divider, Icon } from "antd";

let loadHeight = 0;

var divHeight = {};

class Results extends React.Component {





  constructor(props){
    super(props);

    this.handlePrint = this.handlePrint.bind(this)
  }


  handleSelect = (e, data) => {
    if (e.stopPropagation) e.stopPropagation();
    this.props.savePerformance(data);
  };


state = {
  heightStyle: {
    height: 300
  }
}
  
  // // width and height in pixels, including padding and border
  // // Corresponds to jQuery outerWidth(), outerHeight()
  // var width = box.offsetWidth;
  // var height = box.offsetHeight;
  
  // // width and height in pixels, including padding, but without border
  // // Corresponds to jQuery innerWidth(), innerHeight()
  // var width = box.clientWidth;
  // var height = box.clientHeight;

  componentDidMount(){
    
    let dynamicHeight = 0;
    
  const box = document.querySelectorAll('.rContainer').forEach( (item, key) => {
    dynamicHeight += item.offsetHeight;
  });

  loadHeight = dynamicHeight / 2 + 200;

  this.setState( () => {
    return {
      heightStyle: { height: loadHeight}
    }

  })
  // divHeight = {
  //   height: '300px'
  // }
  
  // console.log(box)

  // box.map



  console.log(dynamicHeight);
  


  }


  handlePrint = () => {
    window.print();

   
      // myDivToPrint.focus();
      // myDivToPrint.print();
     


  }


  renderPrimary = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div className="" key={key}>
          <span className="results-title">{item.title}</span >
          <p>
            {item.author} | {item.date}
          </p>
        </div>
      );
    }); // end map()
  }; // end renderPrimary()

  renderLexis = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div className=" results-lexis" key={key}>
          <p>
            {item.word} ({item.pos})
          </p>
        </div>
      );
    }); // end map()
  }; // end renderLexis()

  renderReadings = (poems, essays, movies) => {
    if (poems) {
      return poems.map((item, key) => {
        console.log(item);
        return (
          <div className="" key={key}>
            <span className="results-title">{item.title}</span>
            <p>{item.author}</p>
          </div>
        );
      }); // end map()
    }

    if (essays) {
      return essays.map((item, key) => {
        console.log(item);
        return (
          <div className="" key={key}>
            <span className="results-title">{item.title}</span>
            <p>{item.author}</p>
          </div>
        );
      }); // end map()
    }

    if (movies) {
      return movies.map((item, key) => {
        console.log(item);
        return (
          <div className="" key={key}>
            <span className="results-title">{item.title}</span>
            <p>{item.director}</p>
          </div>
        );
      }); // end map()
    }
  }; // end renderReadings()

  renderQuestions = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div className=" results-questions" key={key}>
          <p>{item}</p>
        </div>
      );
    }); // end map()
  }; // end renderQuestions()

  renderPerformance = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div className="" key={key}>
          <span className="results-title">{item.header}</span>
          <p>{item.description}</p>
        </div>
      );
    }); // end map()
  }; // end renderPerformance()

  renderExtensions = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div className=" results-extensions" key={key}>
          <p>{item.ext}</p>
        </div>
      );
    }); // end map()
  }; // end renderExtensions()

  renderGoals = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div className=" results-goals" key={key}>
          <p>{item}</p>
        </div>
      );
    }); // end map()
  }; // end renderGoals()

  renderOutline = (outlines) => {

    console.log('name: ' , outlines.tName)

    return (
    <div className=" results-outline">
    <label>Teacher:</label>
    <p>{outlines.tName}</p>

    <label>Class:</label>
    <p>{outlines.cName}</p>

    <label>Week Summary:</label>
    <p>{outlines.summary}</p>

    <label>Additional Notes:</label>
    <p>{outlines.notes}</p>
    
   
    <label>Specific Goals:</label>
    {outlines.goals 
    ? 
    outlines.goals.map( (goal, key) => {
      return (
            
            <div className="results-outline-goals" key={key}>
            <p>{goal.goal} | {goal.date.format('l')}</p>
            </div>
          )
      })
    : ''}
    </div>
   
    )
    }; // end renderOutline()



  render() {
    const {
      primarySelect,
      lexisSelect,
      poemSelect,
      essaySelect,
      movieSelect,
      extensionSelect,
      questionSelect,
      performanceSelect,
      goalSelect,
      weekOutlineSelect
    } = this.props;

    return (
      // Card Grid

      <div className="myDivToPrint">
        <Card className="results-header" >
          <h3>Weekly Review</h3>

          <Icon onClick={this.handlePrint} type="printer" className="hard-right" />
        </Card>
        <div className="results-container" style={this.state.heightStyle}>
          {/* <Card> */}
            {/* <Row gutter={16}>
              <Col span={12}> */}





                 {/* Outline goals */}
              
                 {weekOutlineSelect.tName ? 
                  <div className="rContainer results-card">
                  <div>
                  {console.log('log week: ' , weekOutlineSelect)}
                    <Divider orientation="right">Weekly Outline</Divider>
                    {this.renderOutline(weekOutlineSelect)}
                  </div>
                  </div>

                 : '' }



                {/* Primary Reading */}


              
                {primarySelect.length > 0 ? (
                  <div className="rContainer results-card">
                  <div>
                    <Divider orientation="right">Primary Readings</Divider>
                    {this.renderPrimary(primarySelect)}
                  </div>
                  </div>
                ) : (
                  ""
                )}
               

                {/* Lexis */}
               
                {lexisSelect.length > 0 ? (
                  <div className="rContainer results-card">
                  <div>
                    <Divider orientation="right">Lexis</Divider>
                    {this.renderLexis(lexisSelect)}
                  </div>
                  </div>
                ) : (
                  ""
                )}
               

                {/* Further Readings */}
                
                {poemSelect.length > 0 ||
                essaySelect.length > 0 ||
                movieSelect.length > 0 ? (

                  <div className="rContainer results-card">
                  <div>
                    <Divider orientation="right">Further Readings</Divider>

                    {/* conditionalPoems */}
                    {poemSelect.length > 0 ? (
                      <div className="further-list">
                        <h4>Poems</h4>
                        <hr/>
                        
                        {this.renderReadings(poemSelect, null, null)}
                      </div>
                    ) : (
                      " "
                    )}

                    {/* conditionalEssay */}
                    {essaySelect.length > 0 ? (
                      <div className="further-list">
                        <h4>Essay</h4>
                        <hr/>
                        {this.renderReadings(null, essaySelect, null)}
                      </div>
                    ) : (
                      " "
                    )}

                    {/* conditionalMovie */}
                    {movieSelect.length > 0 ? (
                      <div className="further-list">
                        <h4>Movies</h4>
                        <hr/>
                        
                        {this.renderReadings(null, null, movieSelect)}
                      </div>
                    ) : (
                      " "
                    )}
                  </div>
                  </div>
                ) : (
                  ""
                )}
               
              {/* </Col> */}

              {/* <Col span={12}> */}
                {/* Key Questions */}
                
                {questionSelect.length > 0 ? (
                  <div className="rContainer results-card">
                  <div>
                    <Divider orientation="right">Key Questions</Divider>
                    {this.renderQuestions(questionSelect)}
                  </div>
                  </div>
                ) : (
                  ""
                )}
               


                {/* Performance */}
                
                {performanceSelect.length > 0 ? (
                  <div className="rContainer results-card">
                  <div>
                    <Divider orientation="right">Performances</Divider>
                    {this.renderPerformance(performanceSelect)}
                  </div>
                  </div>
                ) : (
                  ""
                )}
                



                {/* Extensions */}
                
                {extensionSelect.length > 0 ? (
                  <div className="rContainer results-card">
                  <div>
                    <Divider orientation="right">Extensions</Divider>
                    {this.renderExtensions(extensionSelect)}
                  </div>
                  </div>
                ) : (
                  ""
                )}
               


                {/* Continual goals */}
                
                {goalSelect.length > 0 ? (
                  <div className="rContainer results-card">
                  <div>
                    <Divider orientation="right">Continual Goals</Divider>
                    {this.renderGoals(goalSelect)}
                  </div>
                  </div>
                ) : (
                  ""
                )}
               


                

                 {/* {console.log(weekOutlineSelect.tName)} */}
               

                 {/* Outline Weekly
                 {weekOutlineSelect ? (
                
                ) : (
                  ""
                )} */}


              {/* </Col>
            </Row> */}
          {/* </Card> */}
        </div>
      </div>
    );
  }
}

export default Results;
