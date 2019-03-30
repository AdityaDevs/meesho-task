import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAIL
} from './constants'

export const fetchList = subreddit => ({
  type: FETCH_LIST,
  subreddit
})

export const fetchListSuccess = payload => ({
  type: FETCH_LIST_SUCCESS,
  payload
})

export const fetchListFail = payload => ({
  type: FETCH_LIST_FAIL,
  payload
})
