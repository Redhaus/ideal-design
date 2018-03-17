import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import imgHeader from '../../images/survey1header.png';
import SubHeader from '../../components/header/subheader';
import { Grid , Image, Sidebar, Button, Menu, Icon, Segment, Header, Divider } from 'semantic-ui-react';
import Footer from '../../components/footer/footer';
import Mark from 'mark.js';
import StickySidebar from 'sticky-sidebar';
import {anno} from '../../fixtures/annotations';


// define follow vars needed sidebar content and container
// Assign after all content loads in content did mount
let theThing;
let container;
let thingContainer;
// let mainBody;




class Poem extends Component {

  constructor(props){
    super(props)

    this.state = { 
      visible: false,
      currentAnnotation: '', 
      currentSelection: '', 
      currentHistory: ''
    }

    this.toggleVisibilityClose = this.toggleVisibilityClose.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleAnnotation = this.handleAnnotation.bind(this);
    this.getClickPosition = this.getClickPosition.bind(this);
    this.lineNumbers = this.lineNumbers.bind(this);
    
    
    
  }

  // close sidebar
  toggleVisibilityClose(){
    if(this.state.visible){
      this.setState({ visible: !this.state.visible })
    }
  }

  // open sidebar if closed
  toggleVisibility(){
    if(!this.state.visible){
      this.setState({ visible: !this.state.visible })
    }
  }

  // sets annotation state
  handleAnnotation(select, anno, history){
    this.setState({currentAnnotation: anno})
    this.setState({currentSelection: select})
    this.setState({currentHistory: history})
    
  }

  // get mount click position and move sidebar content to that position
  getClickPosition(e){
    var xPosition = 0;
    var yPosition = e.layerY - 40; // - (theThing.offsetHeight / 2) this is an offset
    var translate3dValue = "translate3d(" + xPosition + "px," +  yPosition + "px, 0)";
    
    //set container scroll to 0 so transform works property
    thingContainer.scrollTop = 0;
  
    // theThing.scrollTop = 0;
    theThing.style.transform = translate3dValue;
  
  }

  lineNumbers(start, total){

    
    // console.log(mainBody)
//     let i = 0;
//     let jsx = ''

//  console.log(total)
//     for(i; i < total; i++){
   
     
//       console.log('each')
//       i++;
//       console.log(i)
//      jsx = (
//         <div>
//         <br/>
//         <p>{start}</p>
//         </div>
//      )
//      return jsx
     
    // }
    
    
    // return (

    // )
  }

  componentDidMount() {

    // assign selectors
    theThing = document.querySelector("#thing")
    container = document.querySelector(".full-body")
    thingContainer = document.querySelector("#thingContainer")
    // mainBody = document.querySelector("#poemBody");

    // add click event that calls getClickPosition function
    container.addEventListener("click", this.getClickPosition, false)
    
    // Map through annotations, add them to page, for each one add event listener that brings all content together
    anno.map( (item) => {

      //set up options for Mark.js
      const options = {
        separateWordSearch: false, // keeps highlight whole across words
        filter : function (textNode, foundTerm, totalCounter, counter) { // filter only returns one result of match
          if(totalCounter > 0){
            return false
          }
          return true    
        }, 
        className: item.id, //assign id as class incase it is needed
        
        //add a callback function after the highlight has been applied 
        //that adds a click function for the element and connections it to the item 
        each: function() {

          // getElement by className and add click to it
          const cc = item.id.toString();
          const elem = document.getElementsByClassName(cc); //returns html collection array
          const el = elem[0] // get sole item in array
        
          // for each item add event listener that calls Annotation function and sidebar open
          el.addEventListener("click", (() => {
                console.log(el.innerText, item.annotation)
                this.handleAnnotation(item.highlight, item.annotation, item.history)
                this.toggleVisibility()

              
            })
          )
       
        }.bind(this)  // bind is important to set scope of callback function to class
        
      } // end Options

      // setup Mark.js for each item
      const selection = item.highlight
      const context = document.querySelectorAll(".poem"); // requires an element with class "poem" to exist
      const instance = new Mark(context);    
      
      return instance.mark(selection, options); // will mark the callout term
   
  }) // end map function
      
  } // end component did mount
    


    render() {
      const { visible, currentAnnotation, currentSelection, currentHistory } = this.state

        return (
         
            <div>


                    <div className="full-body">
                      <div className="ui nav">
                        <div className="ui container">
                          <SubHeader />
                        </div>
                      </div>

                    <div className="ui container white">
                      <Image src={imgHeader} fluid />


              <Sidebar.Pushable >




     
                  <Sidebar 

                    as={Menu}
                    animation='push'
                    width='wide'
                    direction='right'
                    visible={visible}
                    icon='labeled'
                    vertical
                    id="thingContainer"
              
                  >
                   
                  
         
               
                  <div  id="thing">
                      <h3 className="select"> {currentSelection ? currentSelection : ''} </h3>
                      <label>Reference:</label>
                      <p className="anno">{currentAnnotation ? currentAnnotation : ''} </p>
                      <Divider></Divider>
                      <label>Historical Context:</label>
                      <p className="anno"> {currentHistory ? currentHistory : ''} </p>
                      <Divider></Divider>
                      <Button onClick={this.toggleVisibilityClose}>Close Annotation</Button>
                     
                  </div>
              
                 
                  </Sidebar>
               
                    

                  <Sidebar.Pusher>
                        
                   
            
                    <Grid>
                      <Grid.Row>
                          <Grid.Column width={6} className="numberFormat">
                         
                           <p className="numSpaceTop">Line 1</p>
                          
                          
                           <p className="numSpace">5</p>
                          
                           
                           <p className="numSpace">10</p>
                          
                           
                           <p className="numSpace">15</p>
                         
                          
                           <p className="numSpace">20</p>
                          
                          
                           <p className="numSpace">25</p>
                           

                          </Grid.Column>


                          <Grid.Column width={10}>


                         
                          
                          <div className="poem">
                          <h1>The Unknown Citizen</h1>
                          
                          <p>W. H. Auden, 1907 - 1973</p>
                          
                          <p>(To JS/07 M 378 This Marble Monument Is Erected by the State)</p>
                  
                          <p id="poemBody">He was found by the Bureau of Statistics to be<br/>
                          One against whom there was no official complaint,<br/>
                          And all the reports of his conduct agree<br/>
                          That, in the modern sense of the old-fashioned word, he was a saint,<br/>
                          For in everything he did he served the Greater Community.<br/>
                          Except for the war till the day he retired<br/>
                          He worked in a factory and never got fired,<br/>
                          But satisfied his employers, Fudge Motors Inc.<br/>
                          Yet he wasn’t a scab or odd in his views,<br/>
                          For his union reports that he paid his dues,<br/>
                          (Our report of his union shows it was sound)<br/>
                          And our Social Psychology workers found<br/>
                          That he was popular with his mates and liked a drink.<br/>
                          The Press are convinced that he bought a paper every day,<br/>
                          And that his reactions to advertisements were normal in every way.<br/>
                          Policies taken out in his name prove that he was fully insured,<br/>
                          And his Health-card shows that he was once in hospital but left it cured.<br/>
                          Both Producers Research and High–Grade Living declare<br/>
                          He was fully sensible to the advantages of the Installment Plan<br/>
                          And had everything necessary to the Modern Man,<br/>
                          A gramophone, a radio, a car and a frigidaire.<br/>
                          Our researchers into Public Opinion are content<br/>
                          That he held the proper opinions for the time of the year;<br/>
                          When there was peace he was for peace; when there was war he went.<br/>
                          He was married and added five children to the population,<br/>
                          which our Eugenist says was the right number for a parent of his generation,<br/>
                          And our teachers report he never interfered with their education.<br/>
                          Was he free? Was he happy? The question is absurd:<br/>
                          Had anything been wrong, we should certainly have heard.</p>
                          </div>
                          </Grid.Column>

                      </Grid.Row>
                    </Grid > 

                  


                   

                    </Sidebar.Pusher>
              </Sidebar.Pushable>

              <Footer/>
 
              </div>   {/*  container close */}
                    </div>  {/*  full close */}
          </div>

      )}  //  render close
} // component class close


export default Poem;

