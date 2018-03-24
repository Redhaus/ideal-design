




// Language Action
export const languageSelection = (select) => {
    console.log('action: ', select)
    return {
        type: select,
        payload: select
      
    }
}

// Lexis Action
export const saveSelection = (select) => {
    return {
        type: 'LEXIS',
        payload: select
    }
}

// Primary Reading Action
export const savePrimary = (select) => {

    // console.log('select: ',  select)
    return {
        type: 'PRIMARY',
        payload: select
    }     
}

// Further Reading Action
// export const saveFurther = (select) => {
//     return {
//         type: 'FURTHER',
//         payload: select
//     }
// }

// Further Reading Action
export const savePoems = (select) => {
    return {
        type: 'POEMS',
        payload: select
    }
}

// Further Reading Action
export const saveEssays = (select) => {
    return {
        type: 'ESSAYS',
        payload: select
    }
}

// Further Reading Action
export const saveMovies = (select) => {
    return {
        type: 'MOVIES',
        payload: select
    }
}

// Key Questions Action
export const saveQuestions = (select) => {
    return {
        type: 'QUESTIONS',
        payload: select
    }
}

// Key Questions Action
export const deleteQuestions = (item) => {
    return {
        type: 'DELETE_QUESTIONS',
        payload: item
    }
}


// Key Questions Action
export const saveWeekOutline = (data) => {
    return {
        type: 'WEEK_OUTLINE',
        payload: data
    }
}



// Performance Action
export const savePerformance = (select) => {
    return {
        type: 'PERFORMANCE',
        payload: select
    }
}

// Extensions Action
export const saveExtensions = (select) => {
    return {
        type: 'EXTENSIONS',
        payload: select
    }
}

// Continual Goals Action
export const saveGoals = (select) => {
    console.log('select: ', select)
    return {
        type: 'GOALS',
        payload: select
    }
}

// export const saveSkills = (select) => {
//     return {
//         type: 'SKILLS',
//         payload: select
//     }
// }

export const clearSelectedLexis = () => {
    return {
        type: 'RESET'
    
    }
}

// sets filters
export const setFilter = (addFilter, addTitle) => {
    return {
        type: 'VISIBILITY_FILTER',
        filter: addFilter,
        title: addTitle
        }
    }

// responsible for selectedID Reducer
export const changeContact = (id) => {
    console.log('changed called')
    console.log(id)
    return{
    type: 'CHANGE_LEXIS',
    id: id
    }
  }

// responsible for selectedID Reducer
export const changeReadings = (catData) => {
    return{
    type: 'CHANGE_READINGS',
    payload: catData
    }
  }
