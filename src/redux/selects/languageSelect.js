
  
// this changes languages 
  export default (state = 'EN', action) => {

    // console.log('reducer: ', action)
    switch (action.type) {
      case 'EN':  
        return 'EN'
        

      case 'CH':  
        return 'CH'
     
      
        default:
        return state
    }
  }
    

