import {store} from '../store';
import _ from 'lodash';
// import _ from 'lodash';
  
// this collects all lexis select results
  export default (state = [], action) => {
    switch (action.type) {
      case 'EXTENSIONS':

      // set up consts to data and if checked
      // const checked = action.payload.checked;
      const data = action.payload;
    

        //get appStore and current primary selects to check selection against 
        const appStore = store.getState();
        const currentPrimary = appStore.extensionSelect;
      

        // console.log(currentLabel)
        // Check if selection is in primary array returns true or false
        const isNew = currentPrimary.includes(data);
        console.log('isNew: ', isNew)

        // add to primary reading list if selected and not already on list
        // if box is checked and it isn't in the list
        if(!isNew ){
          return [...state, data];
        }

        // removed if unchecked
        // if not checked and it is in the list
        if(isNew ){
          return _.without(state, data);
        }

        break
        
      default:
      return state
  }
}
  



// track selections

// convert component to class
// import connect and others to make connected component 
// import actions 
// map dispatch and map props 
// create action 
// create reducer 
// combine reducer 
// render to result