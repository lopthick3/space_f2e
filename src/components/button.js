import React from 'react'
import PropTypes from 'prop-types'

const BtnFunc = ({ text, className, onClick }) => (
  <div className={className} onClick={onClick}>
    {text}
  </div>
)

BtnFunc.propTypes = {
  text: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default BtnFunc
