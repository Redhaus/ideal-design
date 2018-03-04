import React from 'react';
import Button from '../../components/uielements/button';
// import {Button, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';


// Component for filter buttons
class FilterLink extends React.Component { 

    state = {}
    
    handleOnClick = (e, data) => {
        this.props.onClick(this.props.filter, this.props.title)
   
        this.setState( () => {
            return { 
                active: !this.state.active 
            }
        })

    }
    
    render() {
  
        return (
      
        <Button size="small" onClick={ this.handleOnClick } className="sm" >
        <span className="nfo">{this.props.title}</span>
        </Button>



        )
    }
};





const mapStateToProps = (state, props) => {
    return {
        lexisSelectedReducer: state.lexisSelectedReducer
        
    }

}


export default connect(mapStateToProps)(FilterLink); 



// works
// <Button 
// title={this.props.title} 
// icon={this.props.icon}  
// toggle 
// active={this.props.on} 
// onClick={ this.handleOnClick }
// />
// 


// <ul class="ed">
// <li class="sm">
//     <a class="ico icon-like" href="#"><i>Like</i></a>
//     <i class="nfo">29 Likes</i>
// </li>
// <li class="sm">
//     <a class="ico icon-chat" href="#"><i>Comment</i></a>
//     <i class="nfo">2 Comments</i>
// </li>
// <li>
//     <b class="ico icon-tags"><i>Tags</i></b> 
//     <a href="#">design</a>, 
//     <a href="#">link</a>
// </li>
// </ul>