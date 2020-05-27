import React from 'react'
import {SmallButtonStyled} from './small-button.styles'

interface SmallButtonElementProps {
    children?: any
    /** Background color for button */
    backgroundColor?: string
    /** Callback when it is clicked */
    onClick?: () => void
    /** Padding for button */
    padding?: string | number
    /** Button's height */
    height?: number
    /** Has margin or not */
    nomargin?: boolean
    /** Button's width **/
    width?: number
}

const SmallButton = ({children, backgroundColor, width, padding, nomargin, onClick, height}: SmallButtonElementProps) => (
    <SmallButtonStyled backgroundColor={backgroundColor} onClick={onClick} width={width} height={height}
                       nomargin={nomargin}>
        {children}
    </SmallButtonStyled>
)

export default SmallButton
