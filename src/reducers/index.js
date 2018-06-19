import { combineReducers } from 'redux'
import articles from './articles_reducer'
import gallery from './gallery_reducer'
import foreign from './foreign_reducer'
import league from './league_reducer'
import highlight from './highlight_reducer'
import messages from './message_reducer'
import world from './world_reducer'





const rootReducer = combineReducers({
    articles,
    foreign,
    gallery,
    league,
    highlight,
    messages,
    world
})

export default rootReducer; 