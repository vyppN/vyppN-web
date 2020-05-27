import PropTypes from 'prop-types'
import styled from 'styled-components'

const Row = styled.div<any>`
display: flex;

box-sizing: border-box;
width: 100%;
${props => props.height ? `height: ${props.height}px;` : ''}
justify-content: ${props => props.justifyContent || 'flex-start'};
align-items: ${props => props.alignItems || 'flex-start'};
margin:${props => {
    if (!props.margin) return 0
    if (typeof props.margin === 'number')
        return `${props.margin}px`

    return props.margin.split(' ').join('px ') + 'px'
}};

padding:${props => {
    if (!props.padding) return 0
    if (typeof props.padding === 'number')
        return `${props.padding}px`

    return props.padding.split(' ').join('px ') + 'px'
}};

overflow-x: auto;
`

Row.displayName = 'Row'
Row.propTypes = {
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func
}

export default Row