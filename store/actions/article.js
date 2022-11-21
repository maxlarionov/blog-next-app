import { updateDoc } from 'firebase/firestore'
import {
   ADD_DISLIKE_FAILURE, ADD_DISLIKE_REQUEST, ADD_DISLIKE_SUCCESS,
   ADD_LIKE_FAILURE, ADD_LIKE_REQUEST, ADD_LIKE_SUCCESS,
   GET_REACTIONS_SUCCESS
} from '../types'


export const getReactions = (data) => {
   return (dispatch) => {
      dispatch(getReactionsSuccess(data))
   }
}

export const getReactionsSuccess = (payload) => ({
   type: GET_REACTIONS_SUCCESS,
   payload
})

export const addLike = (articleRef, likes) => {
   return (dispatch) => {
      dispatch(addLikeRequest())
      updateDoc(articleRef, likes)
         .then(() => dispatch(addLikeSuccess()))
         .catch(() => dispatch(addLikeFailure()))
   }
}

export const addLikeRequest = () => ({
   type: ADD_LIKE_REQUEST
})

export const addLikeSuccess = () => ({
   type: ADD_LIKE_SUCCESS
})

export const addLikeFailure = () => ({
   type: ADD_LIKE_FAILURE
})

export const addDislike = (articleRef, dislikes) => {
   return (dispatch) => {
      dispatch(addDislikeRequest())
      updateDoc(articleRef, dislikes)
         .then(() => dispatch(addDislikeSuccess()))
         .catch(() => dispatch(addDislikeFailure()))
   }
}

export const addDislikeRequest = () => ({
   type: ADD_DISLIKE_REQUEST
})

export const addDislikeSuccess = () => ({
   type: ADD_DISLIKE_SUCCESS
})

export const addDislikeFailure = () => ({
   type: ADD_DISLIKE_FAILURE
})



//! -------------------------------------------------------------------------

export const addTodo = (data) => {
   return (dispatch) => {
      dispatch(addTodoRequest())
      fetchAddTodo(data)
         .then(data => dispatch(addTodoSuccess(data)))
         .catch(err => dispatch(addTodoFailure(err)))
   }
}

export const addTodoRequest = () => ({
   type: ADD_TODO_REQUEST,
})

export const addTodoSuccess = (payload) => ({
   type: ADD_TODO_SUCCESS,
   payload
})

export const addTodoFailure = (payload) => ({
   type: ADD_TODO_FAILURE,
   payload
})

export const removeTodo = (id) => {
   return (dispatch) => {
      dispatch(removeTodoRequest())
      fetchRemoveTodo(id)
         .then(data => dispatch(removeTodoSuccess(data.id)))
         .catch(err => dispatch(removeTodoFailure(err)))
   }
}

export const removeTodoRequest = () => ({
   type: REMOVE_TODO_REQUEST,
})

export const removeTodoSuccess = (payload) => ({
   type: REMOVE_TODO_SUCCESS,
   payload
})

export const removeTodoFailure = (payload) => ({
   type: REMOVE_TODO_FAILURE,
   payload
})

export const updateTodo = (id, title) => {
   return (dispatch) => {
      dispatch(updateTodoRequest())
      fetchUpdateTodo(id, { title })
         .then(dispatch(updateTodoSuccess({ id, title })))
         .catch(err => dispatch(updateTodoFailure(err)))
   }
}

export const updateTodoRequest = () => ({
   type: EDIT_TODO_REQUEST,
})

export const updateTodoSuccess = (payload) => ({
   type: EDIT_TODO_SUCCESS,
   payload
})

export const updateTodoFailure = (payload) => ({
   type: EDIT_TODO_FAILURE,
   payload
})

export const toggleStatusHandle = (id, data) => {
   return (dispatch) => {
      fetchUpdateTodo(id, data)
         .then(dispatch(toggleTodoSuccess({ id, done: data.done })))
         .catch(err => dispatch(toggleTodoFailure(err)))
   }
}

export const toggleTodoSuccess = (payload) => ({
   type: TOGGLE_STATUS_TODO_SUCCESS,
   payload
})

export const toggleTodoFailure = (payload) => ({
   type: TOGGLE_STATUS_TODO_FAILURE,
   payload
})