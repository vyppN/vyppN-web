import {PRIMARY_GREEN} from '@libs/constants/colors'
import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding-bottom:12px;
  box-sizing: border-box;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`
const RadioButtonStyle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 6px;
      height: 6px;
      margin: 5px;
      background: #eeeeee;\
    }
  }
  ${props =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: ${PRIMARY_GREEN};
      border: 1px solid ${PRIMARY_GREEN};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        margin: 5px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`

interface RadioButtonElementProps {
    name: string
    item: any
    value: any
    checked?: any
    onCheckChanged?: (value) => void
}

const RadioButton = ({name, item, value, checked, onCheckChanged, ...props}: RadioButtonElementProps | any) => {
    return (
        <Wrapper {...props}>
            <Item>
                <label style={{display: 'flex', alignItems: 'center'}}>
                    <RadioButtonStyle
                        type="radio"
                        name={name}
                        value={value}
                        checked={checked === value}
                        onChange={() => onCheckChanged(value)}
                    />
                    <RadioButtonLabel/>
                    <div style={{paddingTop: 4}}>{item}</div>
                </label>
            </Item>
        </Wrapper>
    )
}

export default RadioButton
