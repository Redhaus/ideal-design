import lexisData from '../../containers/Lexis/lexisData';
// import name from 'module';
console.log('selectID called')

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
