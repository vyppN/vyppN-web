import {TRANSPARENT_BLUE} from '@libs/constants/colors'
import styled from 'styled-components'

interface SmallButtonElementProps {
    backgroundColor?: string
    height?: number
    nomargin?: boolean
    width?: number
}

export const SmallButtonStyled = styled.div<SmallButtonElementProps>`
display: flex;
flex-direction: row;
background-color: ${props => props.backgroundColor || TRANSPARENT_BLUE};
border-radius: 4px;
overflow: hidden;
height: ${props => props.height || 24}px;
margin: ${props => props.nomargin ? 0 : '0 5px'};
text-align: center;
justify-content: center;
align-items: center;
${props => props.width ? `width:${props.width}px` : ''}
`
