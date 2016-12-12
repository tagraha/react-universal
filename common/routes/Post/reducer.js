/* eslint-disable */
import * as types from '../../constants'
import { postInitialState } from '../../initialStates'
// const initialState = {
//   lastFetched: null,
//   isLoading: false,
//   error: null,
//   title: '',
//   content: ''
// }

export default function currentPost (state = postInitialState, action) {
  switch (action.type) {
    case types.LOAD_POST_REQUEST:
      return { ...state,
        isLoading: true,
        error: null}
    case types.LOAD_POST_SUCCESS:
      return { ...state,
        title: action.payload.title,
        content: action.payload.content,
        lastFetched: action.meta.lastFetched,
        isLoading: false}
    case types.LOAD_POST_FAILURE:
      return { ...state,
        error: action.payload }
    default:
      return state
  }
}

// Example of a co-located selector
export const selectCurrentPost = state => state.currentPost
