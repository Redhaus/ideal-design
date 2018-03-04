import _ from 'lodash';

export default (state = ['all'], action) => {

  const stateUpdate = (state, TITLE) => {

    //check if show all is visible then delete it
    if(state.includes('all')){ 
      _.pull(state, 'all')
    }

    //if toggled add last item add show all and remove item
    if(state.includes(TITLE) && state.length === 1){ 
      const resetState = _.concat(...state, 'all');
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

      switch (action.title) {


          case 'all':
            return ['all']

          case 'person':
            return stateUpdate(state, 'person');
              
          case 'common':
            return stateUpdate(state, 'common');
              
          case 'device':
            return stateUpdate(state, 'device');

          case 'essential':
            return stateUpdate(state, 'essential');
          
          case 'concept':
            return stateUpdate(state, 'concept');

          case 'event':
            return stateUpdate(state, 'event');

          case 'reset':
            return ['all'];

        // case 'reset':
        //     return stateUpdate(state, 'reset');
            
          default:
            return state
      }
       
      

      
    default:
    return state
}


}





// <FilterLink filter='all' title='all' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_PERSON' title='person' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_COMMON' title='common' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_DEVICE' title='device' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_ESSENTIAL' title='essential' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_CONCEPT' title='concept' onClick={this.handleGetVisibility} />
// <FilterLink filter='SHOW_EVENT' title='event' onClick={this.handleGetVisibility} />