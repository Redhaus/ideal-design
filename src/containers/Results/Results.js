import React from "react";

import { Card, Col, Row, Divider } from "antd";

class Results extends React.Component {
  handleSelect = (e, data) => {
    if (e.stopPropagation) e.stopPropagation();
    this.props.savePerformance(data);
  };

  renderPrimary = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div key={key}>
          <h5>{item.title}</h5>
          <p>
            {item.author} | {item.date}
          </p>
        </div>
      );
    }); // end map()
  }; // end handle()

  renderLexis = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div key={key}>
          <p>
            {item.word} ({item.pos})
          </p>
        </div>
      );
    }); // end map()
  }; // end handle()

  renderReadings = (poems, essays, movies) => {
    if (poems) {
      return poems.map((item, key) => {
        console.log(item);
        return (
          <div key={key}>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
          </div>
        );
      }); // end map()
    }

    if (essays) {
      return essays.map((item, key) => {
        console.log(item);
        return (
          <div key={key}>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
          </div>
        );
      }); // end map()
    }

    if (movies) {
      return movies.map((item, key) => {
        console.log(item);
        return (
          <div key={key}>
            <h3>{item.title}</h3>
            <p>{item.director}</p>
          </div>
        );
      }); // end map()
    }
  }; // end handle()

  renderQuestions = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div key={key}>
          <p>{item}</p>
        </div>
      );
    }); // end map()
  }; // end handle()

  renderPerformance = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div key={key}>
          <p>{item.header}</p>
          <p>{item.description}</p>
        </div>
      );
    }); // end map()
  }; // end handle()

  renderExtensions = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div key={key}>
          <p>{item.ext}</p>
        </div>
      );
    }); // end map()
  }; // end handle()

  renderGoals = results => {
    return results.map((item, key) => {
      console.log(item);
      return (
        <div key={key}>
          <p>{item}</p>
        </div>
      );
    }); // end map()
  }; // end handle()

  renderOutline = (outlines) => {

console.log('name: ' , outlines.tName)

    return (
    <div>
    <p>{outlines.cName}</p>
    <p>{outlines.tName}</p>
    <p>{outlines.summary}</p>
    <p>{outlines.notes}</p>
    
    {outlines.goals 
    ? 
    outlines.goals.map( (goal, key) => {
      return (
            <div key={key}>
            <p>{goal.goal}</p>
            <p>{goal.date.format('l')}</p>
            </div>
          )
      })
    
    : ''}
   
    
     
    
    
   
        </div>
   
  )
  }; // end handle()



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

      <div>
        <Card className="results-container">
          <h3>Weekly Review</h3>
        </Card>
        <div className="results-container">
          <Card>
            <Row gutter={16}>
              <Col span={12}>
                {/* Primary Reading */}
                {primarySelect.length > 0 ? (
                  <div>
                    <Divider orientation="right">Primary Readings</Divider>
                    {this.renderPrimary(primarySelect)}
                  </div>
                ) : (
                  ""
                )}

                {/* Lexis */}
                {lexisSelect.length > 0 ? (
                  <div>
                    <Divider orientation="right">Lexis</Divider>
                    {this.renderLexis(lexisSelect)}
                  </div>
                ) : (
                  ""
                )}

                {/* Further Readings */}
                {poemSelect.length > 0 ||
                essaySelect.length > 0 ||
                movieSelect.length > 0 ? (
                  <div>
                    <Divider orientation="right">Further Readings</Divider>

                    {/* conditionalPoems */}
                    {poemSelect.length > 0 ? (
                      <div>
                        <h3>Poems</h3>
                        {this.renderReadings(poemSelect, null, null)}
                      </div>
                    ) : (
                      " "
                    )}

                    {/* conditionalEssay */}
                    {essaySelect.length > 0 ? (
                      <div>
                        <h3>Essay</h3>
                        {this.renderReadings(null, essaySelect, null)}
                      </div>
                    ) : (
                      " "
                    )}

                    {/* conditionalMovie */}
                    {movieSelect.length > 0 ? (
                      <div>
                        <h3>Movies</h3>
                        {this.renderReadings(null, null, movieSelect)}
                      </div>
                    ) : (
                      " "
                    )}
                  </div>
                ) : (
                  ""
                )}
              </Col>

              <Col span={12}>
                {/* Key Questions */}
                {questionSelect.length > 0 ? (
                  <div>
                    <Divider orientation="right">Key Questions</Divider>
                    {this.renderQuestions(questionSelect)}
                  </div>
                ) : (
                  ""
                )}

                {/* Performance */}
                {performanceSelect.length > 0 ? (
                  <div>
                    <Divider orientation="right">Performances</Divider>
                    {this.renderPerformance(performanceSelect)}
                  </div>
                ) : (
                  ""
                )}

                {/* Extensions */}
                {extensionSelect.length > 0 ? (
                  <div>
                    <Divider orientation="right">Extensions</Divider>
                    {this.renderExtensions(extensionSelect)}
                  </div>
                ) : (
                  ""
                )}

                {/* Continual goals */}
                {goalSelect.length > 0 ? (
                  <div>
                    <Divider orientation="right">Continual Goals</Divider>
                    {this.renderGoals(goalSelect)}
                  </div>
                ) : (
                  ""
                )}

                <div>
                  {console.log('log week: ' , weekOutlineSelect)}
                    <Divider orientation="right">Weekly Outline</Divider>
                    {this.renderOutline(weekOutlineSelect)}
                  </div>

                 {/* Outline Weekly
                 {weekOutlineSelect ? (
                
                ) : (
                  ""
                )} */}


              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default Results;
