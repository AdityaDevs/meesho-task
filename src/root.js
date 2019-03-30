import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppContainer from 'Containers/AppContainer'
import Home from 'Scenes/Home'

const Root = ({store}) => (
  <Provider store={store}>
    <AppContainer>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </AppContainer>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
