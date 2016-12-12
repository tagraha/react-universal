import { combineReducers } from 'redux'
import * as initialState from './initialStates'

// const initialState = {
//   host: '',
//   protocol: ''
// }
// const postInitialState = {
//   lastFetched: null,
//   isLoading: false,
//   error: null,
//   title: '',
//   content: ''
// }
// const postListInitialState = {
//   data: [],
//   lastFetched: null,
//   isLoading: false,
//   error: null
// }

const sourceRequest = (state = initialState.sourceRequest, action) => state
const currentPost = (state = initialState.postInitialState, action) => state
const posts = (state = initialState.postListInitialState, action) => state

// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer (asyncReducers) {
  return combineReducers({
    sourceRequest,
    currentPost,
    posts,
    ...asyncReducers
  })
}
