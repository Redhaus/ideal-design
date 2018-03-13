import React from 'react';
import Button from '../../components/uielements/button';
// import {Button, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Icon } from 'antd';


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
        // console.log('filters: ', this.props.filters)
        // console.log('filter: ', this.props.filter)
        

        const selectedClass =  this.props.filters.includes(this.props.filter) ? 'selected' : '';
       
        return (
    
            <Button className={` ${selectedClass}  `}  size="small" onClick={ this.handleOnClick  } >    
                <span className="nfo">{this.props.title}</span>
                <Icon type={this.props.icon} />
            </Button>

// 

        )
    }
};



const mapStateToProps = (state, props) => {
    return {
        lexisSelectedReducer: state.lexisSelectedReducer     
    }
}


export default connect(mapStateToProps)(FilterLink); 

