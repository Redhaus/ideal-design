import React, { Component } from 'react';
import { ContactCardWrapper } from './singleViewCard.style';
import {Tabs, Icon, Card, Col, Row, Button, Switch} from 'antd';
import { InputSearch } from '../../components/uielements/input';

const TabPane = Tabs.TabPane;

const gridStyle = {
  width: '33.333%'
  // textAlign: 'center',
};

// this filters via search accepts lexis array, search term, and filters 
function filterContacts(readings, search) {
  
    search = search.toUpperCase();
    return search
      ? readings.filter(reading => 
        reading.title.toUpperCase().includes(search)// || 
        // reading.author.toUpperCase().includes(search) || 
        // reading.director.toUpperCase().includes(search) 
      
      ) 
      : readings;
  }
  


export default class extends Component {

  constructor(props){
    super(props)

    this.arrayLoop = this.arrayLoop.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.displayReadings = this.displayReadings.bind(this);
    this.handlePoemSave = this.handlePoemSave.bind(this);

    // set up state
    this.state = {
      search: ''
    };

    
  }


  // render variation
  arrayLoop(arr){

      return arr ? arr.map( (item, key) => {
        return `  /  ${item}`
      }) 
      :
      ''
  }

  handlePoemSave(item){
    // console.log(item)
    this.props.savePoems(item)
  }

  // render questions and applications
  displayPoems(readings){

    
    
       return readings ? readings.map( (item, key) => {
          const { director, author, date, link, title, type } = item;

          // checks if selection is in store to set active state of button
          const selectedClass =  this.props.poemSelect.includes(item) ? 'selected' : '';
    
        return (
          <Col   className="further-reading"  key={key} span={8}>
           
          <Card
            className={`${selectedClass}`}
            bordered={true} 
            onClick={() => this.props.savePoems(item)}
          >
          <h3>{title} <a href={link} className="hard-right"><Icon type="arrows-alt" /></a> </h3>
            {director ? <p className="reading-author">  <strong>Director: </strong> {director} </p> : '' }
            {author ? <p className="reading-author">  <strong>Author: </strong> {author} </p> : '' }
            {date ?  <em> <strong>Dates: </strong>{date}</em> : '' }
            {/* <a href={link}><Icon type="link" /></a>  */}
            <Switch className="hard-right" size="small" checked={selectedClass ? true : false} ></Switch>
            
            {/* <Button className={` ${selectedClass} further-reading-button `} onClick={ () => { this.props.savePoems(item) } }>Select Reading</Button> */}
    
          </Card>
          
          </Col>

        )
       }) 
       :
       ''
      } // display poems


      // render questions and applications
  displayEssays(readings){
    
       return readings ? readings.map( (item, key) => {
          const { director, author, date, link, title, type } = item;

          // checks if selection is in store to set active state of button
          const selectedClass =  this.props.essaySelect.includes(item) ? 'selected' : '';
    
        return (
          <Col   className="further-reading"  key={key} span={8}>
           
          <Card 
          className={`${selectedClass}`}
          onClick={() => this.props.saveEssays(item)}
            bordered={true} 
          >
          <h3>{title}  <a href={link} className="hard-right"><Icon type="arrows-alt" /></a></h3>
            {director ? <p className="reading-author">  <strong>Director: </strong> {director} </p> : '' }
            {author ? <p className="reading-author">  <strong>Author: </strong> {author} </p> : '' }
            {date ?  <em> <strong>Dates: </strong>{date}</em> : '' }
            {/* <a href={link}><Icon type="link" /></a>  */}
            <Switch className="hard-right" size="small" checked={selectedClass ? true : false} ></Switch>
            
            
            {/* <Button className={` ${selectedClass} further-reading-button `} onClick={ () => { this.props.saveEssays(item) } }>Select Reading</Button> */}
    
          </Card>
          
          </Col>

        )
       }) 
       :
       ''
      } // display essay



          // render questions and applications
  displayMovies(readings){
    
       return readings ? readings.map( (item, key) => {
          const { director, author, date, link, title, type } = item;

          // checks if selection is in store to set active state of button
          const selectedClass =  this.props.movieSelect.includes(item) ? 'selected' : '';
    
        return (
          <Col   className="further-reading"  key={key} span={8}>
           
          <Card 
          className={`${selectedClass}`}
          onClick={() => this.props.saveMovies(item)}
            bordered={true} 
          >
            <h3>{title}  <a href={link} className="hard-right"><Icon type="arrows-alt" /></a>  </h3>
            {director ? <p className="reading-author">  <strong>Director: </strong> {director} </p> : '' }
            {author ? <p className="reading-author">  <strong>Author: </strong> {author} </p> : '' }
            {date ?  <em> <strong>Dates: </strong>{date}</em> : '' }
           

            <Switch className="hard-right" size="small" checked={selectedClass ? true : false} ></Switch>
            
            {/* <Button className={` ${selectedClass} further-reading-button `} onClick={ () => { this.props.saveMovies(item) } }>Select Reading</Button> */}
    
          </Card>
          
          </Col>

        )
       }) 
       :
       ''
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

      <div >
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


      <ContactCardWrapper className="isoContactCard">


   

        <div className="isoContactInfoWrapper">

        
       
      
     



      <Tabs
      defaultActiveKey="1"
      tabPosition="left"
      
    >
      <TabPane tab="Poems" key="1">
          <Row gutter={16}>
          {this.displayPoems(poems)}    
          </Row>
      </TabPane>


      <TabPane tab="Essays" key="2">
          <Row gutter={16}>
          {this.displayEssays(essays)}    
          </Row>
      
      </TabPane>
      <TabPane tab="Movies" key="3">
      
          <Row gutter={16}>
          {this.displayMovies(movies)}    
          </Row>
      </TabPane>
  
    </Tabs>







          
        </div>
      </ContactCardWrapper>
      </div>
    );
  }
}



