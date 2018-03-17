import React, { Component } from "react";
import { getVisibility } from "./selectors";
import FilterLink from "./filterLink";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { bindActionCreators } from "redux";

import _ from "lodash";

class FilterGroup extends Component {
  state = {
    all: true,
    person: false,
    common: false,
    device: false,
    essential: false,
    concept: false,
    event: false,
    reset: false
  };

  componentDidUpdate(prevProps, prevState) {
    // if all states are false default to 'all'
    if (
      _.every(_.values(this.state), function(v) {
        return !v;
      })
    ) {
      this.checkAll();
    }
  }

  checkAll = () => {
    return this.setState(() => {
      return {
        all: true,
        person: false,
        common: false,
        device: false,
        essential: false,
        concept: false,
        event: false,
        reset: false
      };
    });
  };

  // update function for state used in getVisibility below
  updateState = title => {
    if (title === "all" || title === "reset") {
      return this.setState(() => {
        return {
          all: true,
          person: false,
          common: false,
          device: false,
          essential: false,
          concept: false,
          event: false,
          reset: false
        };
      });
    }

    this.setState(() => {
      return {
        all: false,
        [title]: !this.state[title]
      };
    });
  };

  // function to handle reset of all selected items and filters
  handleReset = (addFilter, addTitle) => {
    this.props.clearSelectedLexis(); // clears selected store
    this.props.setFilter(addFilter, addTitle); //clears filter store
    this.updateState(addTitle); // clears button toggle state
  };

  handleSetFilter = (addFilter, addTitle) => {
   
    this.props.setFilter(addFilter, addTitle); //sets store reducer for filter
    this.updateState(addTitle);
  };


  render() {
    console.log("group: ", this.props.filters);

    return (
      <div className="filter-container">
        <FilterLink
          on={this.state.all}
          filters={this.props.filters}
          icon="bars"
          filter="all"
          title="all"
          onClick={this.handleSetFilter}
        />
        <FilterLink
          on={this.state.person}
          filters={this.props.filters}
          icon="user"
          filter="person"
          title="person"
          onClick={this.handleSetFilter}
        />
        <FilterLink
          on={this.state.common}
          filters={this.props.filters}
          icon="global"
          filter="common"
          title="common"
          onClick={this.handleSetFilter}
        />
        <FilterLink
          on={this.state.device}
          filters={this.props.filters}
          icon="hourglass"
          filter="device"
          title="device"
          onClick={this.handleSetFilter}
        />
        <FilterLink
          on={this.state.essential}
          filters={this.props.filters}
          icon="compass"
          filter="essential"
          title="essential"
          onClick={this.handleSetFilter}
        />
        <FilterLink
          on={this.state.concept}
          filters={this.props.filters}
          icon="bulb"
          filter="concept"
          title="concept"
          onClick={this.handleSetFilter}
        />
        <FilterLink
          on={this.state.event}
          filters={this.props.filters}
          icon="calendar"
          filter="event"
          title="event"
          onClick={this.handleSetFilter}
        />
        <FilterLink
          classy="hard-reset"
          on={this.state.reset}
          filters={this.props.filters}
          icon="close"
          filter="reset"
        //   title="reset"// set title to reset to clear both
          title="clear selects"// set title to reset to clear both
        
          onClick={this.handleReset}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lexis: getVisibility(
      state.lexis,
      state.lexisFilterReducer,
      state.lexisSelectedReducer
    ),
    lexisSelect: state.lexisSelect,
    lexisFilter: state.lexisFilterReducer,
    lexisSelectedReducer: state.lexisSelectedReducer
  };
};

const mapDispatchToProps = dispatch => ({
  setFilter: bindActionCreators(actions.setFilter, dispatch),
  clearSelectedLexis: bindActionCreators(actions.clearSelectedLexis, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterGroup);
