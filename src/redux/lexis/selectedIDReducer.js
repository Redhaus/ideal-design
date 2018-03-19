// import lexisData from '../../containers/Lexis/lexisData';
import {store} from '../store';

import lexisData_EN from '../../containers/Data_EN/lexisData';
import lexisData_CH from '../../containers/Data_CH/lexisData.ch';

let lexisData = lexisData_EN

// for langage change load store and get languageSelect for test
if(store){
const appStore = store.getState(); //get store
const languageSelect = appStore.languageSelect; //get language var

// depending on language var load language lexis

lexisData =
languageSelect === "EN"
  ? lexisData_EN
  : lexisData_CH;

}



// import name from 'module';
// console.log('selectID called')

export default (state = lexisData[0].id, action) => {

    // console.log(action.id)
    

  switch (action.type) {
    case 'CHANGE_LEXIS':

      const selection = action.id
      return selection

    default:
      return state
  }
}






// import { Map } from "immutable";
// // import fakeData from "../../containers/Contacts/fakeData";
// import lexisData from '../../containers/Lexis/lexisData';
// // import contactActions from "../actions";
// import name from 'module';

// // const contacts = new fakeData(10).getAll();

// const initState = new Map({
//   lexisData,
//   seectedId: lexisData[0].id, // set default
//   editView: false
// });

// export default function contactReducer(state = initState, action) {
//     console.log('selectID called')
//     console.log(action.id)
//   switch (action.type) {
//     case contactActions.CHANGE_CONTACT:
//       return state.set("seectedId", action.id);
//     // case contactActions.ADD_CONTACT:
//     //   return state
//     //     .set("contacts", action.contacts)
//     //     .set("seectedId", action.selectedId)
//     //     .set("editView", true);
//     // case contactActions.EDIT_CONTACT:
//     //   return state.set("contacts", action.contacts);
//     // case contactActions.DELETE__CONTACT:
//     //   return state
//     //     .set("contacts", action.contacts)
//     //     .set("seectedId", action.seectedId);
//     case contactActions.EDIT_VIEW:
//       return state.set("editView", action.view);
//     default:
//       return state;
//   }
// }

// export { contacts };




// let lexisData = [];




// export default (state = lexisData, action) => {
// // console.log('lexis: ', store)

//   // once store is loaded get appStore and current language
//   if(store){
//     const appStore = store.getState(); //get store
//     const languageSelect = appStore.languageSelect; //get language var
  
//     // depending on language var load language lexis
    
//    lexisData =
//     languageSelect === "EN"
//       ? lexisData_EN
//       : lexisData_CH;


//     console.log('appstore: ', lexisData)
    
//     }



//   switch (action.type) {
//     case 'LEXIS':
//       return lexisData

//     default:
//       return lexisData
//   }
// }

