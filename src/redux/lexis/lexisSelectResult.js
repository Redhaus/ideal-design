import {store} from '../store';
import _ from 'lodash';
// import _ from 'lodash';
  
// this collects all lexis select results
  export default (state = [], action) => {
    switch (action.type) {
      case 'LEXIS':
        
        //get appStore and current lexis
        const appStore = store.getState();
        const currentLexis = appStore.lexis;
        const idx = action.payload.id;
        // const newState = []
        
  
        // if id of selected matches list Item add full list item to results
        function match(element) {
            return  element.id === idx;
        }

        const newState = currentLexis.find(match)

        //if state already contains item and it is selected again remove from list
        if(state.includes(newState)){
          return _.without(state, newState);
        }
      

        return [...state, newState];

      case 'RESET':
        return []
        
      default:
      return state
  }
}
  