import PropTypes from 'prop-types'
import styled from 'styled-components'

interface MarginSize {
    margin: number | string
}

export const Margin = styled.div<MarginSize | any>`
margin:${props => {
    if (typeof props.margin === 'number')
        return `${props.margin}px`

    return props.margin.split(' ').join('px ') + 'px'
}};
`

Margin.displayName = 'Margin'
Margin.propTypes = {
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}