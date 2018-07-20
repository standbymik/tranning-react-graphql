
import { combineReducers } from 'redux'
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1

    default:
      return state
  }
}

const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_POST':

      return [...state, { title: action.title, content: action.content }]

    case 'RECEIVE_POST':
      return [...state, ...action.posts]
    default:
      return state
  }
}

function authReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { token: action.token }

    case 'LOGOUT':
      return {}

    default:
      return state
  }
}

const reducer = combineReducers({
  counter: counterReducer,
  posts: postReducer,
  auth: authReducer
})


export default reducer