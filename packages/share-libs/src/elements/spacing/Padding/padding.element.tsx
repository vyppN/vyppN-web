import PropTypes from 'prop-types'
import styled from 'styled-components'

interface PaddingSize {
    padding: number | string
    flex?: number
    height?: number
}

export const Padding = styled.div<PaddingSize | any>`
box-sizing: border-box;
display: flex;
width:100%;
flex:${props => props.flex || 1};
padding:${props => {
    if (typeof props.padding === 'number')
        return `${props.padding}px`

    return props.padding.split(' ').join('px ') + 'px'
}};
border:${props => props.border};
border-left: ${props => props.borderLeft};
border-right: ${props => props.borderRight};
border-top: ${props => props.borderTop};
border-bottom: ${props => props.borderBottom};
${props => props.height ? `height:${props.height}px;` : ''}
`

Padding.displayName = 'Padding'

Padding.propTypes = {
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}
