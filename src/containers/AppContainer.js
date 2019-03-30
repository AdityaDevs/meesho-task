import React from 'react'
import PropTypes from 'prop-types'
import 'Styles/main.scss'

class AppContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main">
        <header className="header">
          <div className="header__title">
            Meesho
          </div>
        </header>
        <section className="main__page-content">
          {this.props.children}
        </section>
      </div>
    )
  }

}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppContainer
