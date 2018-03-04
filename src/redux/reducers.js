import Auth from './auth/reducer';
import App from './app/reducer';
// import Contacts from './contacts/reducer';

import lexis from './lexis/lexisReducer';
import lexisSelect from './lexis/lexisSelectResult';
import lexisFilterReducer from './lexis/lexisFilterReducer';
import lexisSelectedReducer from './lexis/lexisSelectedFilters';
import selectedIDReducer from './lexis/selectedIDReducer';



export default {
  Auth,
  App,
  // Contacts,
  lexis: lexis, // this is the lexis guide
  lexisSelect: lexisSelect, // these are selected items for results
  lexisFilterReducer: lexisFilterReducer, // SHOW ALL
  lexisSelectedReducer: lexisSelectedReducer, //all,
  seectedId: selectedIDReducer //selected lexis item
  
};
