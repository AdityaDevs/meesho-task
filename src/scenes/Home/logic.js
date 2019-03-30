import {createLogic} from 'redux-logic'

import {
  fetchListSuccess,
  fetchListFail
} from './actions'

import {FETCH_LIST} from './constants'

export const fetchPosts = createLogic({
  type: FETCH_LIST,
  processOptions: {
    dispatchReturn: true
  },
  async process({action, request}, dispatch, done) {
    const {subreddit} = action
    try {
      const response = await request({
        method: 'GET',
        url: `/${subreddit}.json`
      })
      dispatch(fetchListSuccess(response.data))
    } catch (err) {
      dispatch(fetchListFail(err))
    }
    done()
  }
})

export default [fetchPosts]
