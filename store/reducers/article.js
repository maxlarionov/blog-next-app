import {
   ADD_LIKE, ADD_DISLIKE, GET_REACTIONS_SUCCESS, ADD_LIKE_REQUEST, ADD_LIKE_SUCCESS, ADD_LIKE_FAILURE, ADD_DISLIKE_REQUEST, ADD_DISLIKE_SUCCESS, ADD_DISLIKE_FAILURE
} from '../types'



const initialState = {
   likes: 0,
   dislikes: 0,
   loading: false
}

export const likesReduser = (state = initialState, action) => {
   switch (action.type) {
      case GET_REACTIONS_SUCCESS:
         return { likes: action.payload.likes, dislikes: action.payload.dislikes }
      case ADD_LIKE_REQUEST:
         return { ...state, loading: true }
      case ADD_LIKE_SUCCESS:
         return { ...state, likes: state.likes + 1, loading: false }
      case ADD_LIKE_FAILURE:
         return { ...state, loading: false }
      case ADD_DISLIKE_REQUEST:
         return { ...state, loading: true }
      case ADD_DISLIKE_SUCCESS:
         return { ...state, dislikes: state.dislikes + 1, loading: false }
      case ADD_DISLIKE_FAILURE:
         return { ...state, loading: false }
      default:
         return state
   }
}



// const initialState = {
//    fetching: false,
//    data: {},
//    error: null
// }

// export const todosReducer = (state = initialState, { type, payload }) => {
//    switch (type) {

//       //                            GET
//       case GET_TODOS_REQUEST:
//          return {
//             ...state,
//             fetching: "GET"
//          }
//       case GET_TODOS_SUCCESS:
//          return {
//             ...state,
//             fetching: false,
//             data: payload.reduce((prev, current) => ({
//                ...prev,
//                [current.id]: current
//             }), {})
//          }
//       case GET_TODOS_FAILURE:
//          return {
//             ...state,
//             error: payload
//          }

//       //                            ADD
//       case ADD_TODO_REQUEST:
//          return {
//             ...state,
//             fetching: "ADD"
//          }
//       case ADD_TODO_SUCCESS:
//          return {
//             ...state,
//             fetching: false,
//             data: {
//                ...state.data,
//                [payload.id]: payload
//             }
//          }
//       case ADD_TODO_FAILURE:
//          return {
//             ...state,
//             error: payload
//          }

//       //                            REMOVE
//       case REMOVE_TODO_REQUEST:
//          return {
//             ...state,
//             fetching: "REMOVE"
//          }
//       case REMOVE_TODO_SUCCESS:
//          const { [payload]: removedNote, ...newState } = state.data
//          return {
//             ...state,
//             fetching: false,
//             data: {
//                ...newState
//             }
//          }
//       case REMOVE_TODO_FAILURE:
//          return {
//             ...state,
//             error: payload
//          }

//       //                            EDIT
//       case EDIT_TODO_REQUEST:
//          return {
//             ...state,
//             fetching: true
//          }
//       case EDIT_TODO_SUCCESS:
//          const { id, title } = payload
//          return {
//             ...state,
//             fetching: false,
//             data: {
//                ...state.data,
//                [id]: {
//                   ...state.data[id],
//                   title
//                }
//             }
//          }
//       case EDIT_TODO_FAILURE:
//          return {
//             ...state,
//             error: payload
//          }

//       //                         TOGGLE
//       case TOGGLE_STATUS_TODO_SUCCESS:
//          return {
//             ...state,
//             data: {
//                ...state.data,
//                [payload.id]: {
//                   ...state.data[payload.id],
//                   done: payload.done
//                }
//             }
//          }
//       case TOGGLE_STATUS_TODO_FAILURE:
//          return {
//             ...state,
//             error: payload
//          }
//       default:
//          return state
//    }
// }



