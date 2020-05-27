import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'


const Color = styled.span`
  color:${props => props.color};
`

Color.displayName = 'Color'

Color.propTypes = {
    /** Color */
    color: PropTypes.string
}

export default Color

