export default function(state={},action){
    switch(action.type){
        case 'GET_WORLD':
            return {...state,football:action.payload}
        case 'GET_SCH_ARTICLE':
            return {...state,schArticle:action.payload}
        default : 
            return state
    }
}
