import React, {forwardRef, useImperativeHandle, useState} from 'react'
import styled from 'styled-components'
import {PRIMARY_GREEN, Greys} from '../../../constants/colors'

const SwitchWrapper = styled.div`
position: relative;
`

const CheckBoxLabel = styled.label`
position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 16px;
  border-radius: 15px;
  background: ${Greys.GREY02};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 1px;
    background: #ffffff;
    transition: 0.2s;
  }
`

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 32px;
  height: 16px;
  &:checked + ${CheckBoxLabel} {
    background: ${PRIMARY_GREEN};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 17px;
      transition: 0.2s;
    }
  }
`

interface SwitchElementProps {
    id: string,
    isChecked?: boolean
    onClick?: () => void
}

export interface CheckBoxInteract {
    checkThisBox: (checked: boolean) => void
    getChecked: () => boolean
}

const Switch = forwardRef(({id, isChecked, onClick}: SwitchElementProps, ref) => {
    const [checked, setChecked] = useState(isChecked)
    useImperativeHandle(ref, () => ({
        checkThisBox: (checked: boolean) => {
            setChecked(checked)
        },
        getChecked: (): boolean => {
            return checked
        }
    } as CheckBoxInteract))
    return (
        <SwitchWrapper>
            <CheckBox id={id} type={'checkbox'} checked={checked} onChange={() => {
            }}/>
            <CheckBoxLabel htmlFor={id} onClick={onClick}/>
        </SwitchWrapper>
    )
})

export default Switch
