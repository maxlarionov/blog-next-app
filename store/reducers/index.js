import { combineReducers } from 'redux'
import { likesReduser, emReduser } from './article'


export const rootReduser = combineReducers({
	likes: likesReduser,
	ems: emReduser
})

// export const rootReducer = combineReducers({ todos: todosReducer })