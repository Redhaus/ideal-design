import Auth from './auth/reducer';
import App from './app/reducer';
// import Contacts from './contacts/reducer';

import lexis from './lexis/lexisReducer';
import lexisSelect from './lexis/lexisSelectResult';
import lexisFilterReducer from './lexis/lexisFilterReducer';
import lexisSelectedReducer from './lexis/lexisSelectedFilters';
import selectedIDReducer from './lexis/selectedIDReducer';
import primarySelect from './selects/primarySelectResult';
import poemSelect from './selects/poemSelectResult';
import essaySelect from './selects/essaySelectResult';
import movieSelect from './selects/movieSelectResult';
import performanceSelect from './selects/performanceSelectResult';
import questionSelect from './selects/questionSelectResult';
import extensionSelect from './selects/extensionSelectResult';
import goalSelect from './selects/goalSelectResult';
import languageSelect from './selects/languageSelect';
import weekOutlineSelect from './selects/weekOutlineSelect';












export default {
  Auth,
  App,
  // Contacts,
  lexis: lexis, // this is the lexis guide
  lexisSelect: lexisSelect, // these are selected items for results
  lexisFilterReducer: lexisFilterReducer, // SHOW ALL
  lexisSelectedReducer: lexisSelectedReducer, //all,
  seectedId: selectedIDReducer, //selected lexis item
  primarySelect: primarySelect, //selected primary reading
  poemSelect: poemSelect, //selected poem reading
  essaySelect: essaySelect, //selected essay reading
  movieSelect: movieSelect, //selected movie reading
  performanceSelect: performanceSelect, //selected performance
  questionSelect: questionSelect, //selected questions
  extensionSelect: extensionSelect, //selected questions
  goalSelect: goalSelect, //selected questions
  languageSelect: languageSelect, //selected questions
  weekOutlineSelect: weekOutlineSelect //selected questions
  
  
  
  
  
  
  
  
  
};
