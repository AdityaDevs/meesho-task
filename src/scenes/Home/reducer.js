import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAIL
} from './constants'

const initialState = {
  data: {},
  fetching: false
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        fetching: true
      }
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        fetching: false
      }
    case FETCH_LIST_FAIL:
      return initialState
    default:
      return state
  }
}

export default home
