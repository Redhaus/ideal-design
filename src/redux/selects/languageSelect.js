
  
// this changes languages 
  export default (state = 'EN', action) => {

    console.log('reducer: ', action)
    switch (action.type) {
      case 'EN':  
        return 'EN'
          break

      case 'CH':  
        return 'CH'
          break
      
        default:
        return state
    }
  }
    

