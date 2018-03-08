import React, { Component } from 'react';
import { Layout } from 'antd';
import FurtherList from './furtherReadingList';
import { connect } from 'react-redux';
import Scrollbar from '../../components/utility/customScrollBar.js';
import SingleContactView from './singleView';
import { ContactsWrapper } from './contacts.style';
// import contactAction from '../../redux/lexis/actions';
import { changeContact, saveSelection } from '../../redux/actions';
import { getVisibility } from './selectors';
import _ from 'lodash';
import readings from '../PrimaryReadings/readingData';
import { changeReadings, savePoems, saveEssays, saveMovies } from '../../redux/actions';


// Use Primary reading lay out to layout 
// Poems Essay and movies list, 
// Once clicked on, the items will display in cards in the display area
// Load in cats make them display, when clicked we will use to pull in display sections


const { Content } = Layout;
const categories = {
    cats: ["Poems", "Essays", "Movies"],
    poems: readings.unitOne.further.category.poems,
    essays: readings.unitOne.further.category.essays,
    movies: readings.unitOne.further.category.movies
}

class FurtherReading extends Component {

    constructor(props){
        super(props)
        // {console.log(categories.poems)}
        // {console.log(categories.essays)}
        // {console.log(categories.movies)}
        this.renderDefinition = this.renderDefinition.bind(this)
    }

    renderDefinition(id){
        // based on which one is selected your passing the definition to SingleView for Render layout
        const lex = _.find(this.props.lexis, function(item) { return item.id === id })
        return lex
    }

    render() {
        return (
            <div>
            <ContactsWrapper
                className="isomorphicContacts"
                style={{ background: 'none' }}>

               

                <Layout className="isoContactBoxWrapper">
       
                    <Content className="isoContactBox">
                        {/* this adds padding to top of definition */}
                        <div className="isoContactControl"></div>

                        <Scrollbar className="contactBoxScrollbar">
                            <SingleContactView 
                                readings={categories.poems} 
                                savePoems={this.props.savePoems} 
                                poemSelect={this.props.poemSelect}
                            />     
                        </Scrollbar>
                    </Content>
                
                </Layout>

            </ContactsWrapper>
            </div>
        );
    }
}


function mapStateToProps(state) {
   
    return {
    //   lexis: getVisibility(state.lexis, state.lexisFilterReducer, state.lexisSelectedReducer),
    //   seectedId: state.seectedId,
    //   filters: state.lexisSelectedReducer,
    //   lexisSelect: state.lexisSelect,
    //   lexisFilter: state.lexisFilterReducer
      poemSelect: state.poemSelect
    };
  }

  export default connect(mapStateToProps, {
    changeReadings,
    savePoems, 
    saveEssays, 
    saveMovies

  })(FurtherReading);



// Working side nav for further
//   <div className="isoContactListBar">
//   <FurtherList
//   catList={categories.cats}
//   // seectedId={this.props.seectedId}
//   // changeContact={this.props.changeContact}
//   // filters={this.props.filters}
//   // saveSelection={this.props.saveSelection}
//   // lexisFilter={this.props.lexisFilter}
//   // lexisSelect={this.props.lexisSelect}
//   />
// </div>  