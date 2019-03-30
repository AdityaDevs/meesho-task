import React from 'react'
import PropTypes from 'prop-types'

const Chips = ({
  name,
  action,
  active
}) => (
  <li onClick={action} className={`chip ${active ? 'chip--active' : ''}`}>
    {name}
  </li>
)

Chips.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default Chips
