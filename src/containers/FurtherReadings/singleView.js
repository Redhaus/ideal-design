import React, { Component } from "react";
import { ContactCardWrapper } from "./singleViewCard.style";
import { Tabs, Icon, Card, Col, Row, Switch, Popover } from "antd";
import { InputSearch } from "../../components/uielements/input";

const gridStyle = {
  width: "33.3333%",
  height: "100px"
};


const TabPane = Tabs.TabPane;

// this filters via search accepts lexis array, search term, and filters
function filterContacts(readings, search) {
  search = search.toUpperCase();
  return search
    ? readings.filter(
        reading => reading.title.toUpperCase().includes(search) // ||
        // reading.author.toUpperCase().includes(search) ||
      )
    : readings;
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.arrayLoop = this.arrayLoop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handlePoemSave = this.handlePoemSave.bind(this);

    // set up state
    this.state = {
      search: ""
    };
  }

  // render variation
  arrayLoop(arr) {
    return arr
      ? arr.map((item, key) => {
          return `  /  ${item}`;
        })
      : "";
  }

  handlePoemSave(item) {
    // console.log(item)
    this.props.savePoems(item);
  }

  // render questions and applications
  displayPoems(readings) {
    return readings
      ? readings.map((item, key) => {
          const { director, author, date, link, title } = item;

          // checks if selection is in store to set active state of button
          const selectedClass = this.props.poemSelect.includes(item)
            ? "selected"
            : "";

          return (
            <Card.Grid
                className={`${selectedClass} further-reading`}
                key={key}
                style={gridStyle}
                
                onClick={() => this.props.savePoems(item)}
              >

                <h3>
                  {title}{" "}
                  <a href={link} className="hard-right">
                    <Icon type="arrows-alt" />
                  </a>{" "}
                </h3>

                {director ? (
                  <p className="reading-author">
                    {" "}
                    <strong>Director: </strong> {director}{" "}
                  </p>
                ) : (
                  ""
                )}


                {author ? (
                  <p className="reading-author">
                    {" "}
                    <strong>Author: </strong> {author}{" "}
                  </p>
                ) : (
                  ""
                )}


                {date ? (
                  <em>
                    {" "}
                    <strong>Dates: </strong>
                    {date}
                  </em>
                ) : (
                  ""
                )}


                <Switch
                  className="hard-right"
                  size="small"
                  checked={selectedClass ? true : false}
                />
                </Card.Grid>
          );
        })
      : "";
  } // display poems

  // render questions and applications
  displayEssays(readings) {
    return readings
      ? readings.map((item, key) => {
          const { director, author, date, link, title } = item;

          // checks if selection is in store to set active state of button
          const selectedClass = this.props.essaySelect.includes(item)
            ? "selected"
            : "";

          return (
    
           
              <Card.Grid
                className={`${selectedClass} further-reading`}
                onClick={() => this.props.saveEssays(item)}
                
                key={key}
                style={gridStyle}
              >
                <h3>
                  {title}{" "}
                  <a href={link} className="hard-right">
                    <Icon type="arrows-alt" />
                  </a>
                </h3>
                {director ? (
                  <p className="reading-author">
                    {" "}
                    <strong>Director: </strong> {director}{" "}
                  </p>
                ) : (
                  ""
                )}
                {author ? (
                  <p className="reading-author">
                    {" "}
                    <strong>Author: </strong> {author}{" "}
                  </p>
                ) : (
                  ""
                )}
                {date ? (
                  <em>
                    {" "}
                    <strong>Dates: </strong>
                    {date}
                  </em>
                ) : (
                  ""
                )}
                <Switch
                  className="hard-right"
                  size="small"
                  checked={selectedClass ? true : false}
                />
              </Card.Grid>
          );
        })
      : "";
  } // display essay

  // render questions and applications
  displayMovies(readings) {
    return readings
      ? readings.map((item, key) => {
          const { director, author, date, link, title } = item;

          // checks if selection is in store to set active state of button
          const selectedClass = this.props.movieSelect.includes(item)
            ? "selected"
            : "";

          return (
              <Card.Grid
                className={`${selectedClass} further-reading`}
                onClick={() => this.props.saveMovies(item)}
                
                key={key}
                style={gridStyle}
              >
                <h3>
                  {title}{" "}
                  <a href={link} className="hard-right">
                    <Icon type="arrows-alt" />
                  </a>{" "}
                </h3>
                {director ? (
                  <p className="reading-author">
                    {" "}
                    <strong>Director: </strong> {director}{" "}
                  </p>
                ) : (
                  ""
                )}
                {author ? (
                  <p className="reading-author">
                    {" "}
                    <strong>Author: </strong> {author}{" "}
                  </p>
                ) : (
                  ""
                )}
                {date ? (
                  <em>
                    {" "}
                    <strong>Dates: </strong>
                    {date}
                  </em>
                ) : (
                  ""
                )}

                <Switch
                  className="hard-right"
                  size="small"
                  checked={selectedClass ? true : false}
                />
              </Card.Grid>
          );
        })
      : "";
  } // display essay

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;
    const poems = filterContacts(this.props.poems, search);
    const essays = filterContacts(this.props.essays, search);
    const movies = filterContacts(this.props.movies, search);

    return (
      <div>
           {/* <Popover content="This is the description for the lexis" placement="left"  >
                  <Icon className="hard-right-icon" type="question-circle-o"/>
                  </Popover> */}


        <Card className="search-box">
          <div className="reading-search">
            <InputSearch
              // placeholder={this.context.intl.formatMessage({
              //   id: 'contactlist.searchContacts'
              // })}
              placeholder="Search..."
              value={search}
              onChange={this.onChange}
              className="isoSearchBar"
            />

         


          </div>

          

        </Card>

        <ContactCardWrapper className="isoContactCard further-reading">
          <div className="isoContactInfoWrapper">
            <Tabs defaultActiveKey="1" tabPosition="left">
              <TabPane tab="Poems" key="1">
                <Row gutter={16}>{this.displayPoems(poems)}</Row>
              </TabPane>

              <TabPane tab="Essays" key="2">
                <Row gutter={16}>{this.displayEssays(essays)}</Row>
              </TabPane>
              <TabPane tab="Videos" key="3">
                <Row gutter={16}>{this.displayMovies(movies)}</Row>
              </TabPane>
              <TabPane tab="Music" key="4">
              <Row gutter={16}>{this.displayMovies(movies)}</Row>
            </TabPane>
            <TabPane tab="Art" key="5">
            <Row gutter={16}>{this.displayMovies(movies)}</Row>
          </TabPane>
          <TabPane tab="Links" key="6">
          <Row gutter={16}>{this.displayMovies(movies)}</Row>
        </TabPane>

        <TabPane tab="Resources" key="7">
        <Row gutter={16}>{this.displayMovies(movies)}</Row>
      </TabPane>
            </Tabs>
          </div>
        </ContactCardWrapper>
      </div>
    );
  }
}
