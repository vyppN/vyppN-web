import {WHITE} from '@libs/constants/colors'
import CardShadow from '@libs/elements/styles/shadows/CardShadow/card-shadow.element'
import PropTypes from 'prop-types'
import {CSSProperties} from 'react'
import styled from 'styled-components'

interface CardContainerProps {
    height?: number,
    width?: number,
    borderRadius?: number | string
    display?: string
}

export const CardContainer = styled.div<CardContainerProps | any>`
  background-color: ${WHITE};
  display: ${props => props.display || 'flex'};
  height: ${(props: CSSProperties) => props.height || 113}px;
  min-width: 140px;
  ${props => props.width ? `width:${props.width}px;` : ''}
  
  border-radius: ${props => {
    if (!props.borderRadius) return '8px'
    if (typeof props.borderRadius === 'number')
        return `${props.borderRadius}px`

    return props.borderRadius.split(' ').join('px ') + 'px'
}};
  ${CardShadow};
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  
`

CardContainer.displayName = 'CardContainer'
CardContainer.propTypes = {
    height: PropTypes.number,
    children: PropTypes.node,
    borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
CardContainer.defaultProps = {
    height: 113,
    borderRadius: 8
}
