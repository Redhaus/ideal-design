

// Working chinese with issues

import {store} from '../store';
import lexisData_EN from '../../containers/Data_EN/lexisData';
import lexisData_CH from '../../containers/Data_CH/lexisData.ch';


let lexisData = [];




export default (state = lexisData, action) => {
// console.log('lexis: ', store)

  // once store is loaded get appStore and current language
  if(store){
    const appStore = store.getState(); //get store
    const languageSelect = appStore.languageSelect; //get language var
  
    // depending on language var load language lexis
    
   lexisData =
    languageSelect === "EN"
      ? lexisData_EN
      : lexisData_CH;


    // console.log('appstore: ', lexisData)
    
    }



  switch (action.type) {
    case 'LEXIS':
      return lexisData

    default:
      return lexisData
  }
}




// Original

// import lexisData from '../../containers/Lexis/lexisData';
// // import name from 'module';



// export default (state = lexisData, action) => {

//   switch (action.type) {
//     case 'LEXIS':
//       return state

//     default:
//       return state
//   }
// }

