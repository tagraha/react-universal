/* @flow */
import { LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../../constants'

type SuccessLoadPost = { type: LOAD_POSTS_SUCCESS, payload: object, meta: object }
type FailLoadPost = { type: LOAD_POSTS_FAILURE, payload: object, error: boolean }

type Action = SuccessLoadPost;

type GetState = () => State;
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;


export function loadPosts (): ThunkAction {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_POSTS_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/posts`)
      .then(res => {
        dispatch({
          type: LOAD_POSTS_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now()
          }
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_POSTS_SUCCESS}: `, error)
        dispatch({
          type: LOAD_POSTS_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}
