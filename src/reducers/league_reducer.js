export default function(state={},action){
    switch(action.type){
        case 'GET_TABLE':
            return {...state,table:action.payload}
        case 'GET_CLUB':
            return {...state,club:action.payload}
        default : 
            return state
    }
}
