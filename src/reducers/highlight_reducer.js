export default function(state={},action){
    switch(action.type){
        case 'GET_VIDEOS':
            return {...state,video:action.payload}
        default : 
            return state
    }
}