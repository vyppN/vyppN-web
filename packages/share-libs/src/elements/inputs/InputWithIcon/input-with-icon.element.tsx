import {IconDefinition} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import React from 'react'
import {Input, InputContainer, InputIcon} from './input-with-icon.style'

export interface InputProps {
    type?: string,
    placeholder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    value?: string,
    disabled?: boolean,
    right?: boolean,
    onClick?: () => void,
    height?: number,
    readonly?: boolean,
    hintColor?: string,
    noShadow?: boolean,
    style?: any
    onFocus?: () => void
    onKeyDown?: (event) => void
    defaultValue?: string
}

export interface InputWithIconElementProps extends InputProps {
    icon: IconDefinition,
    iconColor?: string,
    border?: string,
    borderRadius?: number | string
}

const InputWithIcon = (props: InputWithIconElementProps): JSX.Element => {
    const {icon, type, placeholder, onChange, value, iconColor, onFocus, onKeyDown, right, onClick, height, border, borderRadius, noShadow, defaultValue} = props

    return (
        <InputContainer height={height} onClick={onClick} border={border} borderRadius={borderRadius}
                        noShadow={noShadow}
                        readonly={props.readonly} {...props}>
            {right &&
            <Input right type={type || 'text'} placeholder={placeholder} value={value}
                   onChange={onChange} {...props} />
            }
            <InputIcon color={iconColor} icon={icon}/>
            {!right &&
            <Input type={type || 'text'} placeholder={placeholder} value={value}
                   onChange={onChange} {...props} />
            }
        </InputContainer>
    )
}


InputWithIcon.propTypes = {
    /** Type of input "text|number|password etc.."*/
    type: PropTypes.string.isRequired,
    /** Placeholder for input */
    placeholder: PropTypes.string,
    /** Handler when the text changed */
    onTextChange: PropTypes.func,
    /** Value of the input */
    value: PropTypes.string,
    /** Icon for input */
    icon: PropTypes.any,
    /** Icon color */
    iconColor: PropTypes.string,
    /** Set Icon to right side */
    right: PropTypes.bool,
    /** Disable the input */
    disabled: PropTypes.bool
}

InputWithIcon.defaultProps = {
    disabled: false,
    right: false,
    type: 'text'
}

export default InputWithIcon
