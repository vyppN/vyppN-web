import {LIGHT_GRAY, SHADOW_COLOR, WHITE, Greys} from '@libs/constants/colors'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import MaskInput from 'react-maskedinput'
import styled from 'styled-components'

type TextAlign = 'left' | 'right' | 'center'

interface InputContainerProps {
    right?: boolean,
    textAlign?: TextAlign
    hintColor?: string
    color?: string
    defaultValue?: string
}

export const InputContainer = styled.div<any>`
display: flex;
  width: ${props => `${props.width}px` || `100%`};
  height: ${props => props.height || 40}px;
  position: relative;
  border-radius: ${props => props.borderRadius || 8}px;
  background-color: ${WHITE};
  overflow: hidden;
  flex-direction:row;
  align-items: center;
  caret-color: ${props => props.readonly ? 'transparent' : 'inherit'};
  ${props => props.border ? `border:${props.border};` : ''}
  ${props => props.noShadow ? '' : `box-shadow: 0 3px 6px ${SHADOW_COLOR};`}
`

interface InputIconProps {
    color?: string
    nomargin?: boolean;
}

export const InputIcon = styled(FontAwesomeIcon)<InputIconProps | any>`
    width:16.42px;
    height:16.42px;
    ${props => props.nomargin ? '' : 'margin-left: 13.6px; margin-right:13.9px;'}
    
    color:${props => props.color || LIGHT_GRAY};
`

export const Input = styled.input<InputContainerProps>`
    font-family: 'Noto Sans Thai', sans-serif;
    font-size:14px;
    width: 100%;
    height: 100%;
    border: none;
    letter-spacing: 0.02em;
    padding-left: ${props => props.right ? 16 : 0}px;
    padding-right: ${props => props.right ? 0 : 16}px;
    text-align: ${props => props.textAlign || 'left'};
    color:${props => props.color || Greys.GREY09};

    &::placeholder{
      color:${props => props.hintColor || LIGHT_GRAY};
    }
    
    :focus{
      outline-width: 0;
    }
    
    
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin:0;
    }
    
    [type=number]{
      -moz-appearance: textfield;
    }
    

`

export const PlainInput = styled.input`
    font-family: 'Noto Sans Thai', sans-serif;
    font-size:16px;
    width: 100%;
    height: 100%;
    border: none;
    letter-spacing: 0.02em;
    padding: 2px 16px;
    
    :focus{
      outline-width: 0;
      line-height: 14px;
    }
    
     &::placeholder{
      color: ${Greys.GREY05};
      }
    
    :disabled{
      &::placeholder{
      color: ${Greys.GREY03};
      }
    }
`

export const PlainMaskedInput = styled(MaskInput)`
    font-family: 'Noto Sans Thai', sans-serif;
    font-size:16px;
    width: 100%;
    height: 100%;
    border: none;
    letter-spacing: 0.02em;
    padding: 2px 16px;
    
    :focus{
      outline-width: 0;
      line-height: 14px;
    }
    
     &::placeholder{
      color: ${Greys.GREY05};
      }
    
    :disabled{
      &::placeholder{
      color: ${Greys.GREY03};
      }
    }
`
