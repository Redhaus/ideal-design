import _ from 'lodash';

export const getVisibility = (list, filter, title) => {

 
   

//     /**
//  * @description determine if an array contains one or more items from another array.
//  * @param {array} haystack the array to search.
//  * @param {array} arr the array providing items to check for in the haystack.
//  * @return {boolean} true|false if haystack contains at least one item from arr.
//  */
// var findOne = function (haystack, arr) {
//     return arr.some(function (v) {
//         return haystack.indexOf(v) >= 0;
//     });
// };

    // const findOne = (haystack, arr) => {
    //     return arr.some(function (v) {
    //         return haystack.indexOf(v) >= 0;
    //     });
    
    // };




    const filterList = (list, title) => {

        const newState = [];

        // if(title.){
        //     console.log(list)
        // }

        if(title.includes('all')){
            // console.log('all found')
            return list;
        }
        
        list.map((item) => {

            // if(title === '')cl
            // console.log(title);
            // if(title === )
            // return  _.difference(title, item.icons).length === 0;
            // return  _.difference(item.icons, title).length === 0;
            
            // console.log(_.difference(title, item.icons).length === 0);
            // console.log('icons: ', item.icons);
            // console.log('selectedTitles: ', title);

            // if title array contains icons add it to multi array
                if (_.difference(title, item.icons).length === 0) {
                    return newState.push(item)
                }
            return [];

        })

        return newState;
        


}

// console.log(tester(list, title));
// tester(list, title);

   





    // const filterList = (list, title) => {

    //     const newState = [];

    //     list.map((item) => {
    //         // console.log(item.icons);

    //         // console.log('itemNames: ', item.valueNames, 'itemFilters', title)
    //         if (item.icons) {
    //             if (item.icons.includes(title)) {
    //             // if (findOne(item.valueNames, filter)) {
    //                 return newState.push(item)
    //             }
    //         }
    //         return [];
    //     })

    //     // console.log(newState.length);
    

    //     return newState;



    // }


    // if value names matches filter add items 

    // "device"
    // 1
    // :
    // "essential"
    // 2
    // :
    // "common"
    // 3
    // :
    // "concept"
    // 4
    // :
    // "event"

    // person

    // console.log(title);


    return filterList(list, title);

    //  if (filter.includes('SHOW_ALL')) {
    //     return list;
    //  }

    //  if (filter.includes('SHOW_PERSON')) {
    //     return filterList(list, 'person');
    //  }


    //  if (filter.includes('SHOW_COMMON')) {
    //     return filterList(list, 'common');
    //  }

    //  if (filter.includes('SHOW_DEVICE')) {
    //     return filterList(list, 'device');
    //  }

    //  if (filter.includes('SHOW_ESSENTIAL')) {
    //     return filterList(list, 'essential');
    //  }

    //  if (filter.includes('SHOW_CONCEPT')) {
    //     return filterList(list, 'concept');
    //  }

    //  if (filter.includes('SHOW_EVENT')) {
    //     return filterList(list, 'event');
    //  }
}


    
//     switch (filter) {
        
//         case 'SHOW_ALL':
//             return list

//         case 'SHOW_CITY':
            

            
//             list.map((item) => {
//                 if (item.valueNames) {
    

//                     // if (item.valueNames.includes('city')) {
//                     if (findOne(item.valueNames, filter)) {
                    
//                         return newState.push(item)
//                     }
//                 }
//                 return [];
//             })

//             return newState



//         case 'SHOW_NAME':

            
//             list.map((item) => {
//                 if (item.valueNames) {
//                 //    if(item.valueNames.some(r=> filter.includes(r))){
//                     if (findOne(item.valueNames, filter)) {
                        
//                     // if (item.valueNames.includes('name')) {
//                         return newState.push(item)
//                     }
//                 }
//                 return [];
//             })

//             return newState


//         case 'SHOW_PIE':
            
            
//             list.map((item) => {
//                 if (item.valueNames) {
//                 //    if(item.valueNames.some(r=> filter.includes(r))){
//                     if (findOne(item.valueNames, filter)) {
                        
//                     // if (item.valueNames.includes('pie')) {
//                         return newState.push(item)
//                     }
//                 }
//                 return [];
//             })

//             return newState


//         default:
//             break;
//     }


// }












// WORKING IF CONDITIONAL


    // this.props.setFilter(filter, title)

    // console.log('get visibility func called')
    // console.log(filter)
    // const newState = [] //beginning

    // if (filter === 'SHOW_CITY') {

    //     list.map((item) => {
    //         if (item.valueNames) {
    //             item.valueNames.includes(filter)
    //             // console.log('sortList')
    //             console.log('city: ', newState)

    //             return newState.push(item)
    //         }
    //         return []
    //     })
    //     console.log('cityRendered')

    //     return newState

    // }


    // // this works ////
    // if (filter === 'SHOW_NAME') {

    //     const newState = []

    //     list.map((item) => {
    //         if (item.valueNames) {
    //             if (item.valueNames.includes('name')) {
    //                 return newState.push(item)
    //             }
    //         }

    //         return [];

    //     })
    //     console.log(newState)
    //     return newState

    // } else {
    //     console.log('renderFullList')
    //     return list;
    // }

    //end





    // latest working


        // list.map((item) => {
        //     console.log(item.icons);

        //     // console.log('itemNames: ', item.valueNames, 'itemFilters', title)

        //     if (item.valueNames) {
        //         if (item.valueNames.includes('city')) {
                
        //         // if (findOne(item.valueNames, filter)) {
                
        //             return newState.push(item)
        //         }
        //     }
        //     return [];
        // })

        // return newState;


