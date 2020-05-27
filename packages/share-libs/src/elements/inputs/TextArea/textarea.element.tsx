import {Greys} from '@libs/constants/colors'
import styled from 'styled-components'

const TextArea = styled.textarea<any>`
  border:1px solid ${Greys.GREY03};
  resize: none;
  width: ${props => props.width ? `${props.width}px` : `100%`};
  height: ${props => props.height ? `${props.height}px` : `100%`};
  border-radius: 4px;
  padding:8px;
  box-sizing:border-box;
  font-size:16px;
  font-family:'Noto Sans Thai',sans-serif;
  
  &::placeholder{
  color: ${Greys.GREY03};
  }
  
  :focus{
    outline-width: 0;
  }
`

export default TextArea
