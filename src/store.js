import {createStore, applyMiddleware, compose} from 'redux'
import {createLogicMiddleware} from 'redux-logic'
import {routerMiddleware} from 'react-router-redux'
import browserHistory from 'react-router/lib/browserHistory'
import Axios from 'axios'

import rootLogic from './rootLogic'
import rootReducer from './rootReducer'
import request from 'Services/ApiService'

const reduxRouterMiddleware = routerMiddleware(browserHistory)
const logicMiddleware = createLogicMiddleware(rootLogic, {
  httpClient: Axios,
  request
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      logicMiddleware,
      reduxRouterMiddleware
    )
  )
)
export default store
