export default function(state={},action){
    switch(action.type){
        case 'GET_FOREIGN_LASTEST':
            return {...state,foreign_latest:action.payload}
        case 'GET_FOREIGN_OTHER':
            return  {...state,foreign_other:action.payload}

                 /// SLIDE NEWS ////
        case 'GET_FOREIGN_SLIDE':
            return {...state,foreign_slide:action.payload}
   
       case 'GET_FSELECTED_NEWS':
            return {...state,Fselected:action.payload}
        case 'CLEAR_FSELECTED_NEWS':
            return {...state,Fselected:action.payload}
        case 'HANDLE_LIKES_ARTICLE':
            return {...state,selected:[action.payload]}
     
        default : 
            return state
    }
}