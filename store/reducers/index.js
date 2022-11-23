import { combineReducers } from 'redux'
import { likesReduser } from './article'
import { sidebarReduser } from './sidebar'


export const rootReduser = combineReducers({
	likes: likesReduser,
	sidebar: sidebarReduser
})

// export const rootReducer = combineReducers({ todos: todosReducer })