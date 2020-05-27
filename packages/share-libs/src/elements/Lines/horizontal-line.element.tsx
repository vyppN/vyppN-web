import styled from 'styled-components'
import {Greys} from '../../constants/colors'

export const HorizontalLine = styled.div`
height: 1px;
display: flex;
width: 100%;
background-color: ${props => props.color || Greys.GREY02};
`