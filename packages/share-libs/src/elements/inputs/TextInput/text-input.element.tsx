import styled from 'styled-components'
import {Greys} from '../../../constants/colors'

const TextInput = styled.input<any>`
display: flex;
box-sizing: border-box;
padding: 8px 16px;
background-color: ${Greys.GREY01};
border: none;
height: 40px;
width:100%;
border-radius:4px;
font-size: 16px;
line-height: 24px;
align-items: center;

:focus{
outline: none;
}

::placeholder{
color:${Greys.GREY04}
}

`

export default TextInput
