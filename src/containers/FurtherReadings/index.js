import React, { Component } from "react";
import { Layout, notification } from "antd";
import { connect } from "react-redux";
import SingleContactView from "./singleView";
import { ContactsWrapper } from "./contacts.style";
import _ from "lodash";
import { furtherReading_EN } from "../Data_EN/furtherReadingData";
import { furtherReading_CH } from "../Data_CH/furtherReadingData.ch";

import {
  changeReadings,
  savePoems,
  saveEssays,
  saveMovies
} from "../../redux/actions";

const { Content } = Layout;

class FurtherReading extends Component {
  constructor(props) {
    super(props);

    this.renderDefinition = this.renderDefinition.bind(this);
    notification.destroy();
  }

  renderDefinition(id) {
    // based on which one is selected your passing the definition to SingleView for Render layout
    const lex = _.find(this.props.lexis, function(item) {
      return item.id === id;
    });
    return lex;
  }

  render() {
    const readings =
      this.props.languageSelect === "EN"
        ? furtherReading_EN
        : furtherReading_CH;

    const categories = {
      cats: ["Poems", "Essays", "Movies"],
      poems: readings.unitOne.further.category.poems,
      essays: readings.unitOne.further.category.essays,
      movies: readings.unitOne.further.category.movies
    };

    return (
      <div>
        <ContactsWrapper
          className="isomorphicContacts"
          style={{ background: "none" }}
        >
          <Layout className="further-container isoContactBoxWrapper">
            <Content className="isoContactBox">
              {/* this adds padding to top of definition */}

              {/* <Scrollbar className="contactBoxScrollbar"> */}
              <SingleContactView
                poems={categories.poems}
                essays={categories.essays}
                movies={categories.movies}
                savePoems={this.props.savePoems}
                saveEssays={this.props.saveEssays}
                saveMovies={this.props.saveMovies}
                poemSelect={this.props.poemSelect}
                essaySelect={this.props.essaySelect}
                movieSelect={this.props.movieSelect}
              />
              {/* </Scrollbar> */}
            </Content>
          </Layout>
        </ContactsWrapper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    poemSelect: state.poemSelect,
    essaySelect: state.essaySelect,
    movieSelect: state.movieSelect,
    languageSelect: state.languageSelect
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
