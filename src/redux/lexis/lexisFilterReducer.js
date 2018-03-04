import _ from 'lodash';
  
  export default (state = ['SHOW_ALL'], action) => {

    const stateUpdate = (state, TITLE) => {

      //check if show all is visible then delete it
      if(state.includes('SHOW_ALL')){ 
        _.pull(state, 'SHOW_ALL')
      }

      //if toggled add last item add show all and remove item
      if(state.includes(TITLE) && state.length === 1){ 
        const resetState = _.concat(...state, 'SHOW_ALL');
        return _.without(resetState, TITLE ) 
      } 

      // remove item if toggled
      if(state.includes(TITLE)){ 
        return _.without(state, TITLE ) 
      } 

      return [...state, TITLE]

    }
    
    switch (action.type) {
      case 'VISIBILITY_FILTER':

        switch (action.filter) {


            case 'SHOW_ALL':
              return ['SHOW_ALL']

            case 'SHOW_PERSON':
              return stateUpdate(state, 'SHOW_PERSON');
                
            case 'SHOW_COMMON':
              return stateUpdate(state, 'SHOW_COMMON');
                
            case 'SHOW_DEVICE':
              return stateUpdate(state, 'SHOW_DEVICE');

            case 'SHOW_ESSENTIAL':
              return stateUpdate(state, 'SHOW_ESSENTIAL');
            
            case 'SHOW_CONCEPT':
              return stateUpdate(state, 'SHOW_CONCEPT');

            case 'SHOW_EVENT':
              return stateUpdate(state, 'SHOW_EVENT');

            case 'SHOW_RESET':
              return stateUpdate(state, 'SHOW_RESET');
              
            default:
              return ['SHOW_ALL']
        }
         
        

        
      default:
      return ['SHOW_ALL']
  }


}





// <FilterLink filter='SHOW_ALL' title='all' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_PERSON' title='person' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_COMMON' title='common' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_DEVICE' title='device' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_ESSENTIAL' title='essential' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_CONCEPT' title='concept' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_EVENT' title='event' onClick={this.handleGetVisibility} />