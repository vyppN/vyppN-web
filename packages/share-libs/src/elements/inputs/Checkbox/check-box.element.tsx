import {PRIMARY_GREEN, Greys} from '@libs/constants/colors'
import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<any>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${props => props.checked ? PRIMARY_GREEN : Greys.GREY04};
  border-radius: 2px;
  transition: all 150ms;
  margin-top: 2px;
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Checkbox = ({checked, ...props}) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 16 16">
                <polyline points="13 4 6 11 3 8"/>
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox
