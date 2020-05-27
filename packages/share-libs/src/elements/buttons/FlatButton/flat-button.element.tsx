import {SHADOW_COLOR} from '@libs/constants/colors'
import styled from 'styled-components'

interface FlatButtonProps {
    backgroundColor: string
    color: string
    onClick?: () => void
}

export const FlatButton = styled.div<FlatButtonProps>`
width: 100%;
height:43px;
background-color: ${props => props.backgroundColor};
color:${props => props.color};
box-shadow: 0 2px 6px ${SHADOW_COLOR};
border-radius: 4px;
justify-content: center;
align-items: center;
display:flex;
:active{
filter:brightness(110%);
}
`
