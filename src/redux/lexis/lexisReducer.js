import lexisData from '../../containers/Lexis/lexisData';
// import name from 'module';

export default (state = lexisData, action) => {

  switch (action.type) {
    case 'LEXIS':
      return state

    default:
      return state
  }
}
